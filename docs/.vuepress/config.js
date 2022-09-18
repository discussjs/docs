
/*
 * config.js
 * 它是怎么工作的？
 */

module.exports = {
  title: 'Discuss 开源免费评论系统',
  description: '一款简单，安全，免费的评论系统 | A simple, safe, free comment system',
  dest: './dist',
  port: '6872',
  head: [
    ['link', { rel: 'icon', href: '/img/favicon.ico' }],
    ['meta', { name: 'baidu-site-verification', content: 'code-oIKk7dKcrf' }],
    [
      'meta',
      {
        name: 'google-site-verification',
        content: 'uPApgr9zH7JO36gqOf48_UpfbFRRJ6zCf4cQd-s80eA'
      }
    ]
  ],
  markdown: {
    lineNumbers: true
  },
  plugins: {
    sitemap: {
      hostname: 'https://discuss.js.org'
    }
  },
  themeConfig: {
    nav: [
      {
        text: '快速上手',
        items: [
          { text: '快速开始', link: '/quick-start/Quick-Start' },
          { text: '配置', link: '/quick-start/Config' }
        ]
      },
      {
        text: '免费部署',
        items: [
          { text: 'Vercel', link: '/deploy/Vercel-ServerLess-Deploy' },
          { text: 'CloudBase', link: '/deploy/CloudBase-ServerLess-Deploy' }
        ]
      },
      {
        text: '迁移',
        items: [
          { text: '迁移须知', link: '/guide/import/migration' },
          { text: 'twikoo', link: '/guide/import/twikoo' },
          { text: 'waline', link: '/guide/import/waline' }
        ]
      },
      {
        text: '更多',
        items: [
          { text: 'API 文档', link: '/guide/API-Docs' },
          { text: '多数据库支持', link: '/guide/More-DataBase' },
          { text: '申请 MongoDB', link: '/guide/Get-MongoDB-DataBase' },
          { text: '如何更新', link: '/guide/Update-Discuss' }
        ]
      },
      {
        text: '支持',
        items: [
          { text: '在 Hexo 中使用', link: '/support/Hexo' },
          { text: '有哪些网站在使用', link: '/support/Site' }
        ]
      },
      { text: 'GitHub', link: 'https://github.com/discussjs/discuss' },
    ],
    sidebar: 'auto',
    lastUpdated: true,
    searchMaxSuggestoins: 10,
    // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
    repo: 'discussjs/docs',
    // 假如文档不是放在仓库的根目录下：
    docsDir: 'docs',
    // 假如文档放在一个特定的分支下：
    docsBranch: 'docs',
    // 默认是 false, 设置为 true 来启用
    editLinks: true,
    // 默认为 "Edit this page"
    editLinkText: '帮助我们改善此页面！',
    algolia: {
      // 如果 Algolia 没有为你提供 `appId` ，使用 `BH4D9OD16A` 或者移除该配置项
      appId: '0WRG6B7JL7',
      apiKey: '53b4a54024cc3e704b003b1c1435021b',
      indexName: 'discuss-js'
    }
  }
}
