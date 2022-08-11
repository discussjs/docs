<template>
  <div class="import-wrap">
    <div class="import">
      <select class="switch table" v-model="table">
        <option disabled value="">请选择表类型</option>
        <option value="comment">Comment</option>
        <option value="counter">Counter</option>
      </select>
      <div class="import-item">
        <label>Comments:</label>
        <textarea
          v-model="data"
          class="import-textarea"
          placeholder="将twikoo评论系统导出的评论信息粘贴至此~"
        ></textarea>
      </div>
      <div class="import-item">
        <button @click="onDownload" :disabled="isDownload">Download</button>
      </div>
    </div>
  </div>
</template>

<script>
import md5 from 'md5'

export default {
  computed: {
    isDownload() {
      return !(this.table.length && this.data.length)
    }
  },
  data() {
    return {
      table: '',
      data: []
    }
  },
  methods: {
    onDownload() {
      const data =
        this.table === 'comment' ? this.parseComments() : this.parseCounter()

      const options = { type: 'application/json;charset=utf-8' }
      const blob = new Blob([JSON.stringify(data)], options)

      const a = document.createElement('a')
      a.href = URL.createObjectURL(blob)
      a.download = `discuss.${this.table}.json`
      a.click()
    },
    data2json() {
      try {
        let data = this.data
        data = this.data.replace(/}\s*$/gm, '},').replace(/,$/g, '')

        return JSON.parse(`[${data}]`)
      } catch (error) {
        console.error('解析评论信息错误，请查看输入的评论信息是否有误！')
        console.error(error)
      }
    },
    parseDOM(content) {
      try {
        let dom = new DOMParser().parseFromString(content, 'text/html')

        const result = dom.body.children[0]

        if (!result) return content

        const aTag = result.querySelector('a')
        aTag && aTag.remove()

        result.innerHTML = result.innerHTML
          .trim()
          .replace(/^(,|，|:|：)/, '')
          .trim()

        const twikoo = result.querySelectorAll('.tk-owo-emotion')

        const waline = result.querySelectorAll('.vemoji')

        const imgs = [...twikoo, ...waline]

        for (let i of imgs) i.setAttribute('class', 'D-comment-emot')

        return result.innerHTML
      } catch (error) {
        console.error('处理评论内容时发生错误，现已将原评论内容返回')
        console.error(error)
      }
      return content
    },
    indexHandler(params) {
      let path = params.replace(/(\/index\.html|\/)*$/gi, '')
      if (path.length === 0) path += '/'
      return path
    },
    parseCounter() {
      if (!this.table) return
      const counters = []
      const data = this.data2json()
      for (const i of data) {
        const counter = {}

        // 处理id
        const condition =
          Object.prototype.toString.call(i._id) === '[object Object]'
        if (condition) counter.id = i._id.$oid
        else if (i._id) counter.id = i._id
        else if (i.objectId) counter.id = i.objectId
        else counter.id = i.id

        counter.id = counter.id.substring(0, 24)
        counter.path = this.indexHandler(i.url)
        counter.time = i.time
        counter.created = i.created
        counter.updated = i.updated

        counters.push(counter)
      }

      return counters.reduce((total, cur, index) => {
        let hasValue = total.findIndex((current) => {
          return current.path === cur.path
        })
        hasValue === -1 && total.push(cur)
        hasValue !== -1 &&
          (total[hasValue].time = total[hasValue].time + cur.time)
        return total
      }, [])
    },
    parseComments() {
      if (!this.table) return
      const comments = []
      const data = this.data2json()
      for (const c of data) {
        const comment = {}

        // 处理id
        const condition =
          Object.prototype.toString.call(c._id) === '[object Object]'
        if (condition) comment.id = c._id.$oid
        else if (c._id) comment.id = c._id
        else if (c.objectId) comment.id = c.objectId
        else comment.id = c.id

        comment.id = comment.id.slice(0, 24)
        comment.nick = c.nick
        comment.mail = c.mail
        comment.site = c.link || ''
        comment.content = this.parseDOM(c.comment)

        comment.pid = (c.pid || '').slice(0, 24)
        comment.rid = (c.rid || '').slice(0, 24)

        comment.ua = c.ua
        comment.ip = c.ip
        comment.stick = c.top || false
        comment.status = c.isSpam ? 'spam' : 'accept'
        comment.path = this.indexHandler(c.url || '/')
        comment.avatar = c.mailMd5 || md5(c.mail)
        comment.created = c.created
        comment.updated = c.updated

        comments.push(comment)
      }
      for (const c1 of comments) {
        if(c1.pid) continue
        for (const c2 of comments) {
          if (c2.rid === c1.id) {
            const { pid } = c2
            c2.pid = c1.id
            c2.rid = pid
          }
        }
      }
      return comments
    }
  }
}
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