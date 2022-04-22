---
title: Vercel 部署
sidebar: auto
---

::: tip 说明
本文以`Vercel`+`MongoDB`部署`Discuss`评论系统服务为例
:::

## 注册

注册 [Vercel](https://vercel.com/signup)账号，推荐使用 GitHub 账户注册

## 部署

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Lete114/Discuss-Deploy/tree/Vercel)

点击上方 `Deploy` 按钮，将 `Discuss` 评论服务一键部署到 Vercel 平台
随后会提醒你创建一个 Git 仓库，方便后期管理以及部署，你需要输入一个仓库名，例如：`Discuss-Vercel`，点击 `Create`
![Start-Deploy](/img/deploy/Vercel-ServerLess-Deploy/Start-Deploy.png)
等待构建完成后点击`Go to Dashboard`(前往控制面板)
![Create](/img/deploy/Vercel-ServerLess-Deploy/Create.png)

## 创建环境变量

点击`Settings`进入设置选择`Environment Variables`，添加环境变量
![Settings](/img/deploy/Vercel-ServerLess-Deploy/Settings.png)
![Add-Env](/img/deploy/Vercel-ServerLess-Deploy/Add-Env.png)

| 属性名             | 必填 | 默认值    | 描述                                                                                                                  |
| ------------------ | ---- | --------- | --------------------------------------------------------------------------------------------------------------------- |
| DISCUSS_SECRET     |      | Discuss   | token 生成盐加密(默认为:Discuss)                                                                                      |
| DISCUSS_DB_TYPE    | ✅   |           | 使用什么数据库，可选数据库[cloudbase, deta, leancloud, mongodb, mysql, postgresql, sqlite]      |
| D_MONGO_URL        |      |           | 当设置了 URL 的数据库连接时，则下方的其它环境变量都将会被覆盖 **(仅适合 MongoDB 官方提供的`v2.2.12`版本的连接字符串)** |
| D_MONGO_HOST       |      | 127.0.0.1 | 主机地址(支持数组形式)                                                                                                |
| D_MONGO_PORT       |      | 27017     | 主机端口(支持数组形式)                                                                                                |
| D_MONGO_DB         |      | Discuss   | 数据库名称                                                                                                            |
| D_MONGO_USER       | ✅   |           | 用户名                                                                                                                |
| D_MONGO_PASSWORD   | ✅   |           | 密码                                                                                                                  |
| D_MONGO_REPLICASET |      |           | 集群                                                                                                                  |
| D_MONGO_AUTHSOURCE |      |           | 认证源                                                                                                                |
| D_MONGO_SSL        |      |           | 是否启用 SSL 连接方式                                                                                                 |

::: tip
根据文章[获取 MongoDB 数据库](/guide/Get-MongoDB-DataBase.html)获取到的数据库连接字符串拆分填填入环境变量，举例如下

其他数据库请前往[.env.example](https://github.com/Lete114/Discuss/blob/dev/.env.example)观看相应的配置信息说明

以下示例中的**用户名**和**密码**纯属虚构，并且本文编辑完成后，该数据库已被删除

```bash

# 使用什么数据库
## 目前可选的数据库 [cloudbase, deta, leancloud, mongodb, mysql, postgresql, sqlite]
DISCUSS_DB_TYPE=mongodb

# 下方是申请得到的数据库连接字符串
# mongodb://Discuss:<password>@cluster0-shard-00-00.zurnh.mongodb.net:27017,cluster0-shard-00-01.zurnh.mongodb.net:27017,cluster0-shard-00-02.zurnh.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-sw3viw-shard-0&authSource=admin&retryWrites=true&w=majority

# ------ MongoDB ------
## 如果你使用的是mongodb官方的免费数据库
## 你可以使用连接字符串必须选择‘v2.2.12’版本的连接字符串
## 将填入D_MONGO_URL环境变量即可，下面的其它配置就不用填写，仅需填写D_MONGO_URL即可
D_MONGO_URL=
D_MONGO_HOST=["cluster0-shard-00-00.zurnh.mongodb.net","cluster0-shard-00-01.zurnh.mongodb.net","cluster0-shard-00-02.zurnh.mongodb.net"]
D_MONGO_PORT=[27017,27017,27017]
D_MONGO_DB=Discuss-Test
D_MONGO_USER=Discuss
D_MONGO_PASSWORD=111111
D_MONGO_REPLICASET=atlas-sw3viw-shard-0
D_MONGO_AUTHSOURCE=admin
D_MONGO_SSL=true
```

:::

## 重新部署

由于您是先部署，后配置环境变量，所以环境变量没有生效，你需要点击顶部的`Deployments`，重新部署后环境变量才能生效，最后访问服务端地址，初始化管理员账户，填写完成后，点击提交成功后，页面会自动刷新，并返回`{"msg":"Not Found"}`表示成功
![Redeploy](/img/deploy/Vercel-ServerLess-Deploy/Redeploy.png)

## 初始化管理员

![Init](/img/deploy/Vercel-ServerLess-Deploy/Init.png)
