<template>
  <ParentLayout>
    <template #page-bottom>
      <div class="page-edit">
        <div id="Discuss-wrap"></div>
        <script
          src="https://lib.baomitu.com/discuss/1.1.8/dist/discuss.js"
          ref="DiscussJS"
        ></script>
      </div>
    </template>
  </ParentLayout>
</template>

<script>
import ParentLayout from '@parent-theme/layouts/Layout.vue'

export default {
  name: 'Layout',
  components: {
    ParentLayout
  },
  mounted() {
    this.initDiscuss()
    this.initJs()
  },
  methods: {
    initDiscuss() {
      try {
        discuss.init({
          el: '#Discuss-wrap',
          master: '管理员',
          stick: 'TOP',
          ph: '文档未开启邮件通知，如果你有任何问题，请加官方用户交流QQ群：343890210',
          serverURLs: 'https://discuss-doc.imlete.cn'
        })
        this.setEmot()
      } catch (error) {}
    },
    initJs() {
      const discuss = this.$refs.DiscussJS
      if (discuss) {
        discuss.onload = this.initDiscuss
        this.$router.afterEach(this.onRoute)
      }
    },
    onRoute(to, from) {
      if (to.path !== from.path) this.initDiscuss()
    },
    setEmot() {
      let SitichCount = 37

      const Sitich = this.heandlerEmot(SitichCount, '/img/emot/Sitich/', [])

      const emot = Sitich[Math.floor(Math.random() * Sitich.length)]
      const style = document.createElement('style')
      style.textContent = `#Discuss .D-input-content {
                            background-repeat: no-repeat;
                            background-position: right bottom 20px;
                            background-image: url(${emot});
                          }`
      document.head.appendChild(style)
    },
    heandlerEmot(count, path, result) {
      while (count) {
        result.push(path + count-- + '.gif')
      }
      return result
    }
  }
}
</script>
