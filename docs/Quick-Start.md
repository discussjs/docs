---
title: 快速开始
sidebar: auto
---

## 太长不想看

::: warning
这是一个简短的 Discuss 构建指南 (适合有开发经验的用户)。<br>
选择部署方式 **服务器** OR **无服务器(Serverless)**。<br>
如果的话，可以直接跳转至下方的`vercel部署`或`cloudbase部署`。
:::

::: tip 说明
咕咕咕
:::

## 无服务端（ServerLess）

1. 新建`package.json`，填入如下内容

```json
{ "dependencies": { "discuss": "latest" } }
```

2. 新建`index.js`，填入如下内容

```js
const discuss = require('discuss')

// 选择以什么方式运行
discuss.server() // 服务器使用 (Server)

discuss.main() // 无服务器使用 (ServerLess)
```

4. 配置[环境变量](/guide/More-DataBase.html)，填写相关的配置信息
5. 使用`nodejs`执行执行`index.js`文件，即：`node index.js`
6. 访问启动的服务地址，初始化管理员账户即可

## 服务端 (Server)

::: tip 提示
如果你没有服务器(不想部署在服务器上)的话，你可以选择[免费部署](/deploy/Vercel-ServerLess-Deploy.html)
:::

初始化 npm 项目

```bash
mkdir Discuss                   # 创建目录
cd Discuss                      # 进入目录
npm init -y                     # 初始化npm
npm install discuss --save      # 安装Discuss
touch index.js .env             # 创建index.js 以及 .env(环境配置文件)
```

编辑`index.js`

```js
const discuss = require('discuss')

// 选择以什么方式运行
discuss.server() // 服务器使用 (Server)

discuss.main() // 无服务器使用 (ServerLess)
```

编辑`.env`，以`MongoDB`数据库为例
:::tip
具体如何配置其他数据库请前往[.env.example](https://github.com/discussjs/Discuss/blob/main/.env.example)观看相应的配置信息说明
:::

```bash
# Discuss environment Config

# 启动的端口号(仅对服务器有用)
DISCUSS_PORT=6870

# Token 加密的密钥字符串([可选]自定义)
DISCUSS_SECRET=discuss

# 数据库连接

# 使用什么数据库
## 目前可选的数据库 [cloudbase, deta, leancloud, mongodb, mysql, postgresql, sqlite]
DISCUSS_DB_TYPE=mongodb

# ------ MongoDB ------
## 如果你使用的是mongodb官方的免费数据库
## 你可以使用连接字符串必须选择‘v2.2.12’版本的连接字符串
## 将填入D_MONGO_URL环境变量即可，下面的其它配置就不用填写，仅需填写D_MONGO_URL即可
D_MONGO_URL=
## 主机地址 默认: 127.0.0.1
D_MONGO_HOST=
## 端口 默认: 27017
D_MONGO_PORT=
## 数据库名 默认: discuss
D_MONGO_DB=
## 用户名
D_MONGO_USER=admin
## 密码
D_MONGO_PASSWORD=111111
## [可选项] 集群
D_MONGO_REPLICASET=
## [可选项] 认证源
D_MONGO_AUTHSOURCE=
## [可选项] 是否启用 SSL 连接方式
D_MONGO_SSL=
```

最后使用`nodejs`执行执行`index.js`文件，即：`node index.js`

::: tip 说明
本文以`Vercel`+`MongoDB`部署`Discuss`评论系统服务为例
:::

## vercel部署

::: tip 说明
123
:::

### vercel注册

&nbsp;&nbsp;&nbsp;&nbsp;注册 [Vercel](https://vercel.com/signup)账号，推荐使用 GitHub 账户注册。

::: warning
**注意。** 不要使用`@qq.com`邮箱注册vercel，如果你的github账户是`@qq.com`的话，建议修改为别的邮箱，否则用`@qq.com`邮箱注册vercel的话，会发生一些不必要的麻烦。
:::

### 部署

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Lete114/Discuss-Deploy/tree/Vercel)

&nbsp;&nbsp;&nbsp;&nbsp;点击上方 `Deploy` 按钮，将 `Discuss` 评论服务一键部署到 Vercel 平台，

&nbsp;&nbsp;&nbsp;&nbsp;随后会提醒你创建一个 Git 仓库，方便后期管理以及部署，你需要输入一个仓库名，例如：`Discuss-Vercel`，点击 `Create`，等待构建完成，

![Start-Deploy](/img/deploy/Vercel-ServerLess-Deploy/Start-Deploy.png)

&nbsp;&nbsp;&nbsp;&nbsp;等待构建完成后点击`Go to Dashboard`(前往控制面板)，

::: tip 说明
因为这种一部部署的方式无法在创建的时候编辑环境变量，所以部署完成以后会出现如下，但是不用担心，
:::

![Create](/img/deploy/Vercel-ServerLess-Deploy/Create.png)

### 创建环境变量

&nbsp;&nbsp;&nbsp;&nbsp;点击`Settings`进入设置选择`Environment Variables`，添加环境变量

&nbsp;&nbsp;&nbsp;&nbsp;具体环境变量参数请见: [多数据库参数](/guide/More-DataBase.html)

![Settings](/img/deploy/Vercel-ServerLess-Deploy/Settings.png)
![Add-Env](/img/deploy/Vercel-ServerLess-Deploy/Add-Env.png)

### 重新部署

&nbsp;&nbsp;&nbsp;&nbsp;由于您是先部署，后配置环境变量，所以环境变量没有生效，你需要点击顶部的`Deployments`，重新部署后环境变量才能生效，最后访问服务端地址，初始化管理员账户
![Redeploy](/img/deploy/Vercel-ServerLess-Deploy/Redeploy.png)

### 初始化管理员

![Init](/img/deploy/Vercel-ServerLess-Deploy/Init.png)

## 腾讯云CloudBase部署

<!-- ::: warning
![云开发计费模式升级](/img/deploy/CloudBase-ServerLess-Deploy/Cloudbase-updatedCost.png)<br>
因为从2022-08-08号开始，云开发计费模式升级，cloudbase不再免费，故不建议此种部署方式，推荐[vercel部署](/deploy/Vercel-ServerLess-Deploy)。
::: -->

### 新建云函数

1. 进入[云开发控制台](https://console.cloud.tencent.com/tcb/)
2. 进入[环境云函数](https://console.cloud.tencent.com/tcb/scf/index)并新建云函数，同时填写**函数代码**，最后点击确定即可

```js
const serverless = require("serverless-http");
const main = require("discuss").main;

exports.main = serverless(main);
```

![Create Function](/img/deploy/CloudBase-ServerLess-Deploy/Create-Function.png)

![Config Function](/img/deploy/CloudBase-ServerLess-Deploy/Config-Function.png)

### 创建 NPM 依赖文件

进入创建好的云函数，并且点击上边的函数代码，进入到在线编辑，并新建`package.json`文件，填入如下信息，最后点击下方的**保存并安装依赖**

```json
{
  "dependencies": {
    "discuss": "latest",
    "serverless-http": "2.7.0"
  }
}
```

![Create Package](/img/deploy/CloudBase-ServerLess-Deploy/Create-Package.png)

### 添加环境变量

点击上方**函数配置**，并且点击右上角的**编辑**
::: tip
进入云开发[API 密钥管理](https://console.cloud.tencent.com/cam/capi)，并创建密钥，关于环境变量的详细信息[多数据库支持](/guide/More-DataBase.html#cloudbase-腾讯云)
:::

::: warning 提醒
配置好环境变量后，你可以看到下方有个**HTTP 访问服务路径**，暂时先不要点击前往配置，你得先点击保存，保存成功后再次点击右上角编辑现网配置**HTTP 访问服务路径**
:::
![Edit Info](/img/deploy/CloudBase-ServerLess-Deploy/Edit-Info.png)
![Env](/img/deploy/CloudBase-ServerLess-Deploy/Env.png)
![HTTP](/img/deploy/CloudBase-ServerLess-Deploy/HTTP.png)

## 配置管理

关于服务端的配置管理，本文仅提取部分配置项进行详细说明，其余配置仅看配置管理内的描述即可轻松理解含义

### 安全域名

- 默认: `null` 允许所有域名的 POST 请求

顾名思义，仅在白名单上的域名发送的请求，服务才会做出响应，反之任何请求都将返回`403`状态码，GET 请求除外

如需设置多个，请使用**英文逗号进行分割**，如`example.com,www.example.com,discuss.example.com`

::: warning 注意
不支持通配符`*`之类的语法

一旦设置了安全域名，本地的`localhost`和`127.0.0.1`也将被服务端拦截，如果您需要在本地计算机使用，你需要添加上`localhost`或`127.0.0.1`(包括端口号)
:::

### 请求头优先级

- 默认: [Get-User-IP](https://github.com/Lete114/Get-User-IP#%E5%AE%83%E6%98%AF%E5%A6%82%E4%BD%95%E5%B7%A5%E4%BD%9C%E7%9A%84)

用于获取用户 IP 地址，如果你使用了类似于[Cloud Flare](https://www.cloudflare.com/)的 CDN 加速，那么你可能需要注意 CDN 服务商是否将 IP 地址指定到了一个新的`headers.xxxx`中

以 Cloud Flare 举例，如果使用了 Cloud Flare CDN 那么这时的 IP 会被放到`headers.cf-connecting-ip`，你需要将他填入**请求优先级的输入框中**，多个使用**英文逗号分割**

::: danger 注意
如果你未设置，那么服务端保存的可能全都是 Cloud Flare(CDN)的 IP，这可能会被服务端的**10 分钟**评论所限制
:::

### 头像 CDN

- 默认: `https://cravatar.cn/avatar/`

[Cravatar](https://cravatar.cn/) 是 [Gravatar](https://gravatar.com/) 在中国的完美替代方案，当访客请求自己的头像时，我们会按此顺序分三级匹配头像：Cravatar->Gravatar->QQ 头像，对于博客站，这平均可以为 70% 的访客提供准确的头像

如果你需要设置头像参数，可以使用`${avatar}`来指定头像的`hash`，如：`https://cravatar.cn/avatar/${avatar}?s=400`

### 邮件模板(管理员)

- 默认: [master.html](https://github.com/discussjs/Discuss/blob/main/public/master.html)

模板允许的变量: `${subject}`、`${nick}`、`${avatar}`、`${content}`、`${ip}`、`${mail}`、`${url}`

### 邮件模板(评论者)

- 默认: [reply.html](https://github.com/discussjs/Discuss/blob/main/public/reply.html)

模板允许的变量: `${subject}`、`${Ravatar}`、`${Rcontent}`、`${nick}`、`${avatar}`、`${content}`、`${url}`

## 客户端 (Client)

按照如下代码对您的网站进行调整，保存并部署
此时评论服务就会在你的网站上成功运行 [欢呼]🎉🎉🎉

```html
<head>
  ...
  <!-- <script src="https://cdn.jsdelivr.net/npm/discuss@latest/dist/discuss.js"></script> -->
  <!-- 建议你使用指定版本的js，而不是上方的最新版本，因为后续如果js有更新的话，可能会出现问题 -->
  <script src="https://cdn.jsdelivr.net/npm/discuss@1.1.6/dist/discuss.js"></script>
  ...
</head>
<body>
  ...
  <div id="Discuss-Comments"></div>
  <script>
    // 初始化
    discuss.init({
      el: '#Discuss-Comments',
      serverURLs: ''
    })
  </script>
</body>
```

你也可以自定义初始化后台评论管理

::: tip
例如: 你可以在你的网站上新建一个`admin/index.html`文件，然后填入如下信息，这时你可以在你的网站上访问`https://www.xxx.com/admin`即可对你的评论进行管理

例如: 当前文档的`/admin`路径就可以直接管理评论 [https://discuss.js.org/admin](https://discuss.js.org/admin)
:::

```html
<head>
  ...
  <!-- <script src="https://cdn.jsdelivr.net/npm/discuss@latest/dist/discuss.admin.js"></script> -->
  <!-- 建议你使用指定版本的js，而不是上方的最新版本，因为后续如果js有更新的话，可能会出现问题 -->
  <script src="https://cdn.jsdelivr.net/npm/discuss@1.1.6/dist/discuss.admin.js"></script>
  ...
</head>
<body>
  ...
  <div id="Discuss-Comments-Admin"></div>
  <script>
    // 初始化评论管理
    discussAdmin.init({
      el: '#Discuss-Comments-Admin',
      serverURLs: ''
    })
  </script>
</body>
```

以下未标有`必填`项，则为可选项

### el [必填]

- 类型: `String`
- 默认: `null|undefined`

将评论挂载到某个 DOM 上
用于绑定`DOM`元素，渲染评论区

### serverURLs [必填]

- 类型: `String`
- 默认: `null|undefined`

用于发送请求，获取评论信息的服务端地址

### color

- 类型: `String`
- 默认: `#f4645f`

设置评论的主要颜色

### path

- 类型: `String`
- 默认: `location.pathname`

当前网页唯一标识符，用于区分不同网页，以保证能正确读取不同网页下的评论列表

::: tip 提示
如需要两个网页显示同一个评论列表，则可以通过传入相同的`path`网页唯一标识符来实现
:::

### lang

- 类型: `String`
- 默认: `cn`
- 可选参数: ['cn', 'en']

指定显示的语言

### ph

- 类型: `String`
- 默认: `评论你的想法~`

原名`placeholder`，评论框占位符，可自定义，默认值与`lang`有关系

### master

- 类型: `String`
- 默认: `博主`

与如上`placeholder`选项相似

### stick

- 类型: `String`
- 默认: `置顶`

与如上`placeholder`选项相似

### visitStat

- 类型: `Boolean`
- 默认: `true`

访问量统计，默认为`true`，并且自动寻找 id 为`Discuss-Visitors`的元素，如未找到，则取消获取访问量统计

如果需要自定义获取`DOM`元素，你需要调用[API VisitStat](/guide/API-Docs.html#visit-stat)

### imgLoading

- 类型: `String`
- 默认: `1像素白色base64图`

评论图片懒加载，加载动画

### emotCDN

- 类型: `String`
- 默认: `https://unpkg.com`

自定义默认表情的 CDN 地址

举例如下(任选其一)

```js
discuss.init({
  // baomitu (默认内置)
  emotCDN: 'https://lib.baomitu.com/discuss/1.1.6'
  // unpkg
  emotCDN: 'https://unpkg.com/discuss@1.1.6'
  // jsdelivr
  emotCDN: 'https://cdn.jsdelivr.net/npm/discuss@1.1.6'
})
```

::: warning
只能自定义评论自带的表情地址，如果你自定义表情，该属性无效
:::

### emotMaps

- 类型: `Object|String`
- 默认: `内置表情`

> 支持一个 json 类型的 url 地址(内部自动判断是否是 url 后发送请求)

如未指定值，则使用内置表情

如指定 url 则会发送请求获取表情 json 数据

如指定为`Object`对象，则直接使用该对象

格式如下:

::: tip 提示
type 属性仅支持`text`和`image`

其中表情`type`为`image`可以将 key 设置为`html`的`img`标签
:::

```json
{
  "OwO": {
    "type": "text",
    "items": {
      "喵星人": "( =•ω•= )m",
      "hi": "Hi~ o(*￣▽￣*)ブ"
    }
  },
  "<img src='https://cdn.jsdelivr.net/gh/zhheo/Sticker-Heo@main/Sticker-100/鼓掌.png'>": {
    "type": "image",
    "items": {
      "heo-再见": "https://cdn.jsdelivr.net/gh/zhheo/Sticker-Heo@main/Sticker-100/再见.png",
      "heo-呲牙笑": "https://cdn.jsdelivr.net/gh/zhheo/Sticker-Heo@main/Sticker-100/呲牙笑.png"
    }
  }
}
```
