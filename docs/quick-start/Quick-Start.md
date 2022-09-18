---
title: 快速开始
sidebar: auto
---

## 太长不想看

::: warning
这是一个简短的 Discuss 构建指南 (适合有开发经验的用户)。<br>
选择部署方式 **服务器** OR **无服务器(Serverless)**
:::

### 无服务端（ServerLess）

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
