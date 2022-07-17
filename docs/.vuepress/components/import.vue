<template>
  <div class="import-wrap">
    <div class="import">
      <select class="switch select" v-model="select">
        <option disabled value="">请选择</option>
        <option value="twikoo">Twikoo</option>
        <option value="waline">Waline</option>
      </select>
      <select class="switch table" v-model="table">
        <option disabled value="">请选择</option>
        <option value="comment">Comment</option>
        <option value="counter">Counter</option>
      </select>
      <div class="import-item">
        <label>Server URLs:</label>
        <input type="text" v-model="server" />
      </div>
      <div class="import-item">
        <label>Username:</label>
        <input type="text" v-model="username" />
      </div>
      <div class="import-item">
        <label>Password:</label>
        <input type="password" v-model="password" />
      </div>
      <div class="import-item">
        <label>Comments:</label>
        <textarea
          v-model="data"
          class="import-textarea"
          placeholder="请将其它评论系统导出的信息粘贴至此~"
        ></textarea>
      </div>
      <div class="import-item">
        <button @click="onImport" :disabled="isSend || isImport">Import</button>
      </div>
      <div class="import-item">
        <button @click="onDownload" :disabled="isSend || isDownload">
          Download
        </button>
      </div>
      <div class="import-item" v-show="info">
        <label>Info:</label>
        <textarea
          v-model="info"
          class="import-textarea"
          placeholder="此处是信息输出控制台"
        ></textarea>
      </div>
    </div>
  </div>
</template>

<script>
import ajax from "xhr-ajax";
import md5 from "md5";

export default {
  components: {},
  computed: {
    isImport() {
      return !(
        this.table.length &&
        this.select.length &&
        this.data.length &&
        this.server.length &&
        this.username.length &&
        this.password.length
      );
    },
    isDownload() {
      return !(this.table.length && this.select.length && this.data.length);
    },
  },
  data() {
    return {
      isSend: false,
      table: "",
      select: "",
      data: [],
      server: "",
      username: "",
      password: "",
      info: "",
    };
  },
  methods: {
    async onImport() {
      try {
        this.info = "";
        const comments = this.table === "comment" ? this.parseComments() : [];
        const counters = this.table === "counter" ? this.parseCounter() : [];
        this.isSend = true;
        const result = await ajax({
          url: this.server,
          method: "post",
          data: {
            type: "IMPORT",
            comments,
            counters,
            username: this.username,
            password: this.password,
          },
        });

        const json = JSON.stringify(result, "", 2);
        const errorInfo = this.info ? "------错误日志------\n\n" : "";
        const successInfo = "------返回结果------\n";
        this.info = `${successInfo}${json}\n\n\n` + errorInfo + this.info;
      } catch (error) {
      } finally {
        this.isSend = false;
      }
    },
    onDownload() {
      const data =
        this.table === "comment" ? this.parseComments() : this.parseCounter();

      const options = { type: "application/json;charset=utf-8" };
      const blob = new Blob([JSON.stringify(data)], options);

      const a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.download = `discuss.${this.table}.json`;
      a.click();
    },
    data2json() {
      try {
        let data = this.data;
        if (this.select === "twikoo") {
          data = this.data.replace(/}\s*$/gm, "},").replace(/,\s*$/g, "");
          data = `[${data}]`;
        }

        return JSON.parse(data);
      } catch (error) {
        const info = "解析评论信息错误，请查看输入的评论信息是否有误！";
        console.error(info);
        console.error(error);

        this.info += info + `\n\n${error}\n\n`;
      }
    },
    parseDOM(content, comment) {
      try {
        let dom = new DOMParser().parseFromString(content, "text/html");

        const result = dom.body.children[0];

        if (!result) return content;

        result.querySelector("a")?.remove();

        result.innerHTML = result.innerHTML
          .trim()
          .replace(/^(,|，|:|：)/, "")
          .trim();

        const twikoo = result.querySelectorAll(".tk-owo-emotion");

        const waline = result.querySelectorAll(".vemoji");

        const imgs = [...twikoo, ...waline];

        for (let i of imgs) i.setAttribute("class", "D-comment-emot");

        return result.innerHTML;
      } catch (error) {
        const info = "处理评论内容时发生错误，现已将原评论内容返回";
        console.error(info, comment);
        console.error(error);

        this.info += info + `\n\n${error}\n\n${JSON.stringify(comment, "", 2)}`;
      }
      return content;
    },
    IndexHandler(params) {
      let path = params.replace(/(\/index\.html|\/)*$/gi, "");
      if (path.length === 0) path += "/";
      return path;
    },
    parseCounter() {
      if (!this.table || !this.select) return;
      const counters = [];
      const data = this.data2json();
      for (const i of data) {
        const counter = {};

        // 处理id
        const condition =
          Object.prototype.toString.call(i._id) === "[object Object]";
        if (condition) counter.id = i._id.$oid;
        else if (i._id) counter.id = i._id;
        else if (i.objectId) counter.id = i.objectId;
        else counter.id = i.id;
        counter.id = counter.id.substring(0, 24);

        counter.path = i.url || i.path;
        counter.path = this.IndexHandler(counter.path)
        counter.time = i.time;
        counter.created = this.select === "twikoo" ? i.created : i.createdAt;
        counter.updated = this.select === "twikoo" ? i.updated : i.updatedAt;

        counters.push(counter);
      }

      return counters.reduce((total, cur, index) => {
        let hasValue = total.findIndex((current) => {
          return current.path === cur.path;
        });
        hasValue === -1 && total.push(cur);
        hasValue !== -1 &&
          (total[hasValue].time = total[hasValue].time + cur.time);
        return total;
      }, []);
    },
    parseComments() {
      if (!this.table || !this.select) return;
      const comments = [];
      const data = this.data2json();
      for (const i of data) {
        const comment = {};

        // 处理id
        const condition =
          Object.prototype.toString.call(i._id) === "[object Object]";
        if (condition) comment.id = i._id.$oid;
        else if (i._id) comment.id = i._id;
        else if (i.objectId) comment.id = i.objectId;
        else comment.id = i.id;
        comment.id = comment.id.substring(0, 24);

        comment.nick = i.nick;
        comment.mail = i.mail;
        comment.site = i.link || "";
        comment.content = i.comment;

        comment.content = this.parseDOM(comment.content, i);

        comment.pid = i.pid || "";
        comment.rid = i.pid || "";
        comment.pid = comment.pid.substring(0, 24);
        comment.rid = comment.rid.substring(0, 24);

        comment.ip = i.ip || "";

        if (i.status) {
          switch (i.status) {
            case "waiting":
              comment.status = "audit";
              break;
            case "spam":
              comment.status = "spam";
              break;
            case "stick":
              comment.stick = true;
              break;
            default:
              comment.status = "accept";
              break;
          }
        } else {
          comment.status = i.isSpam ? "spam" : "accept";
        }
        comment.path = i.url || "/";
        comment.path = this.IndexHandler(comment.path)

        if (this.select === "twikoo") {
          comment.stick = i.top ? true : false;
          comment.created = !isNaN(i.created)
            ? i.created
            : new Date(i.created).getTime();
          comment.updated = !isNaN(i.updated)
            ? i.updated
            : new Date(i.updated).getTime();
        } else if (this.select === "waline" || this.select === "valine") {
          comment.stick = i.sticky ? true : false;
          comment.created = !isNaN(i.createdAt)
            ? i.createdAt
            : new Date(i.createdAt).getTime();
          comment.updated = !isNaN(i.updatedAt)
            ? i.updatedAt
            : new Date(i.updatedAt).getTime();
        }

        comment.avatar = i.avatar || i.mailMd5 || md5(i.mail);
        comment.ua = i.ua;

        comments.push(comment);
      }
      return comments;
    },
  },
};
</script>

<style scoped>
.import-wrap {
  margin-top: 20px;
}
.import {
  padding: 50px;
  position: relative;
  border-radius: 10px;
  background: rgb(200 200 200 / 20%);
}

.switch {
  right: 50px;
  position: absolute;
  cursor: pointer;
  min-width: 4em;
  background: 0 0;
  border: 1px solid #33323e;
  border-radius: 5px;
}

.select {
  right: 150px;
}

.import-item {
  display: flex;
  flex-direction: column;
}

.import-item input {
  width: 100%;
  height: 42px;
  color: currentColor;
  font-size: 16px;
  z-index: 10;
  padding: 0 12px;
  margin: 8px 0 20px;
  background: 0 0;
  box-sizing: border-box;
  border-radius: 0.375rem;
  border: 1px solid rgba(128, 128, 128, 0.5);
}
.import-textarea {
  width: 100%;
  outline: 0;
  margin: 10px 0 0;
  resize: vertical;
  padding: 6px;
  min-height: 200px;
  box-sizing: border-box;
  font-family: inherit;
  border-radius: 0.375rem;
  background: 0 0;
  border: 1px solid rgba(128, 128, 128, 0.5);
}

.import-item button {
  margin: 20px 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.9;
  outline: 0;
  line-height: 1;
  width: auto;
  height: 40px;
  cursor: pointer;
  text-align: center;
  font-weight: 600;
  padding: 6px;
  border: 1px solid #f4645f;
  background: #fff;
  transition: 0.1s;
  border-radius: 4px;
  box-sizing: border-box;
  white-space: nowrap;
  user-select: none;
  color: #fff;
  border-color: #f4645f;
  background-color: #f4645f;
  font-size: 1em;
}

.import-item button:disabled {
  cursor: no-drop;
}

.import-item button:hover {
  opacity: 1;
}
</style>