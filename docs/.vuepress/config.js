module.exports = {
  title: null,
  description: "Discuss 评论系统文档",
  dest: "./dist",
  port: "6872",
  head: [
    ["link", { rel: "icon", href: "/img/favicon.ico" }],
    [
      "meta",
      {
        name: "google-site-verification",
        content: "uPApgr9zH7JO36gqOf48_UpfbFRRJ6zCf4cQd-s80eA",
      },
    ],
  ],
  markdown: {
    lineNumbers: true,
  },
  plugins: {
    sitemap: {
      hostname: "https://discuss.js.org",
    },
  },
  themeConfig: {
    nav: [
      { text: "快速开始", link: "/Quick-Start" },
      {
        text: "免费部署",
        items: [
          { text: "Vercel", link: "/deploy/Vercel-ServerLess-Deploy" },
          { text: "InspireCloud", link: "/deploy/InspireCloud-ServerLess-Deploy" },
          { text: "CloudBase", link: "/deploy/CloudBase-ServerLess-Deploy" },
        ],
      },
      {
        text: "更多",
        items: [
          { text: "导入评论", link: "/guide/Import" },
          { text: "多数据库支持", link: "/guide/More-DataBase" },
          { text: "API 文档", link: "/guide/API-Docs" },
          { text: "获取MongoDB数据库", link: "/guide/Get-MongoDB-DataBase" },
        ],
      },
      {
        text: "支持",
        items: [
          { text: "有哪些网站在使用", link: "/support/Site" },
          { text: "在 Hexo 中使用", link: "/support/Hexo" },
        ],
      },
    ],
    sidebar: "auto",
    lastUpdated: true,
    searchMaxSuggestoins: 10,
    // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
    repo: "Lete114/Discuss",
    // 假如文档不是放在仓库的根目录下：
    docsDir: "docs",
    // 假如文档放在一个特定的分支下：
    docsBranch: "docs",
    // 默认是 false, 设置为 true 来启用
    editLinks: true,
    // 默认为 "Edit this page"
    editLinkText: "帮助我们改善此页面！",
    algolia: {
      // 如果 Algolia 没有为你提供 `appId` ，使用 `BH4D9OD16A` 或者移除该配置项
      appId: "0WRG6B7JL7",
      apiKey: "53b4a54024cc3e704b003b1c1435021b",
      indexName: "discuss-js",
    },
  },
};
