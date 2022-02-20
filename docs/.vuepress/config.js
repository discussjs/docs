module.exports = {
  title: null,
  description: "Discuss 评论系统文档",
  dest: "./dist",
  port: "6872",
  head: [["link", { rel: "icon", href: "/img/favicon.ico" }]],
  markdown: {
    lineNumbers: true,
  },
  themeConfig: {
    sidebar: [
      "/",
      "/Quick-Start",
      "/Get-MongoDB-DataBase",
      "/Vercel-ServerLess-Deploy",
      "/API-Docs",
      "/Hexo",
    ],
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
  },
};