---
title: 简介
---

<h1 align="center"><a href="https://discuss.js.org" target="_blank"><img src="/svg/Logo.svg" alt="Logo"></a></h1>
<p align="center">一款简单，安全，免费的评论系统 | A simple, safe, free comment system</p>

<p align="center">
    <a href="https://discuss.js.org" target="_blank"><img src="https://img.shields.io/badge/-Docs-1081c1?logo=read-the-docs" alt="Docs"></a>
    <a href="https://github.com/lete114/Discuss/releases/"><img src="https://img.shields.io/npm/v/discuss?color=critical&logo=npm" alt="Version"></a>
    <a href="https://github.com/lete114/Discuss/tree/dev"><img src="https://img.shields.io/github/package-json/v/lete114/Discuss/dev?color=%231ab1ad&label=dev" alt="Dev Version"></a>
    <img src="https://img.shields.io/npm/dm/discuss" alt="Downloads">
    <a href="https://jq.qq.com/?_wv=1027&k=lh7oS7Xt"><img src="https://img.shields.io/badge/QQ-343890210-00a4ff?logo=tencent-qq" alt="QQ"></a>
    <a href="https://github.com/lete114/Discuss/blob/master/LICENSE"><img src="https://img.shields.io/github/license/lete114/Discuss?color=FF5531" alt="MIT License"></a>
</p>


## 个性

- 深色模式 (自动适配深色模式)
- 支持自定义`博主` `置顶`表示文字
- 支持自定义评论框`placeholder`(占位符)
- 支持限制评论字数 (避免大量文字信息写入数据库)
- 支持自定义邮件模板
- 支持自定义表情列表 (类型: Text \ image)
- 支持外链自定义表情 (类型: Text \ image)

## 特点

- 轻量 (~120kb gzip: ~40kb)
- 自托管 (Nodejs 后端跨平台)
- 免费部署 (Server、ServerLess 均可部署)
- 邮件通知
- 防 XSS 注入
- 嵌入式评论管理
- 批量处理 (通过 \ 审核 \ 垃圾 \ 删除 )
- 在线编辑 (评论信息 \ 配置信息)
- 评论搜索 (模糊搜索: 昵称、邮箱、IP、评论内容、文章地址)
- 自动保存 (评论草稿、用户名、邮箱、网址)
- 身份认证 (博主 Tag \ 自定义)
- 评论头像 (Gravatar \ QQ 头像)
- 反垃圾检测 ([Akismet-API](https://akismet.com/))
- 限制评论频率 (每个 IP 10 分钟内最多评论多少条 \ 10 分钟内所以 IP 只能评论多少条)

## 开发

加入我们一起开发

```bash
git clone https://github.com/Lete114/Discuss.git Discuss
cd Discuss
npm install               # 安装依赖
npm run start:client      # 启动客户端
npm run start:server      # 启动服务端
npm run lint              # 在提交代码之前，您因该对你写的代码进行检查
```

## 特别感谢

- [Pubudu Dodangoda](https://github.com/pupudu) 提供的 NPM 包名
