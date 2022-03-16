---
title: 多数据库支持
sidebar: auto
---

## 通用环境变量

::: tip
Discuss 支持多数据库存储，让用户有更多选择存储的方式，一下是通用环境变量，具体请看[.env.example](https://github.com/Lete114/Discuss/blob/dev/.env.example)
:::

| 环境变量名称    | 必填 | 默认值  | 描述                                 |
| --------------- | ---- | ------- | ------------------------------------ |
| DISCUSS_PORT    |      | 6870    | 启动的端口号(仅对服务器有用)         |
| DISCUSS_SECRET  |      | Discuss | Token 加密的密钥字符串([可选]自定义) |
| DISCUSS_DB_TYPE | ✅   |         | 使用什么数据库                       |

## CloudBase 腾讯云

| 环境变量名称 | 必填 | 默认值 | 描述                                                                      |
| ------------ | ---- | ------ | ------------------------------------------------------------------------- |
| D_TCB_ENV    | ✅   |        | CloudBase 环境 ID                                                         |
| D_TCB_ID     | ✅   |        | CloudBase API 密钥 ID [详细](https://console.cloud.tencent.com/cam/capi)  |
| D_TCB_KEY    | ✅   |        | CloudBase API 密钥 Key [详细](https://console.cloud.tencent.com/cam/capi) |

## Deta

| 环境变量名称 | 必填 | 默认值 | 描述                                                                          |
| ------------ | ---- | ------ | ----------------------------------------------------------------------------- |
| D_DETA_KEY   | ✅   |        | Deta 项目密钥 Key [详细](https://docs.deta.sh/docs/base/about#how-do-i-start) |

## GitHub

::: tip 提示
将评论数据以 CSV 文件的格式存储在 GitHub 仓库中。

使用 GitHub 作为数据存储需要申请 [Personal access tokens](https://github.com/settings/tokens/new)

进去后选择 **Expiration(到期)** 时间为**永不到期**，**Select scopes(选择 Token 授权的范围)**，勾选**repo**即可
:::

| 环境变量名称 | 必填 | 默认值 | 描述                                                 |
| ------------ | ---- | ------ | ---------------------------------------------------- |
| D_GH_TOKEN   | ✅   |        | [New tokens](https://github.com/settings/tokens/new) |
| D_GH_REPO    | ✅   |        | 仓库名                                               |
| D_GH_PATH    |      | ./     | 仓库存储路径                                         |

## InspireCloud 轻服务

| 环境变量名称 | 必填 | 默认值 | 描述       |
| ------------ | ---- | ------ | ---------- |
| D_IC_ID      | ✅   |        | 轻服务 ID  |
| D_IC_KEY     |      |        | 轻服务 Key |

轻服务只在设置中提供了**Service ID**并未提供**Service KEY**，而且这个 key 是默认存储在环境变量中的，你可以通过编写一个云函数来获取

::: tip 提示
不建议你这么做，因为`Discuss`会自动获取**Service KEY**，你只需要填写**Service ID**即可
:::

```js
module.exports = async function (params, context) {
  console.log("id", process.env.INSPIRECLOUD_SERVICE_ID);
  console.log("secret", process.env.INSPIRECLOUD_SERVICE_SECRET);
  return {
    test: "Hello World!",
  };
};
```

![Get Secret](/img/More-Database/Get-Secret.png)

## LeanCloud

| 环境变量名称 | 必填 | 默认值 | 描述       |
| ------------ | ---- | ------ | ---------- |
| D_LC_ID      | ✅   |        | App ID     |
| D_LC_KEY     | ✅   |        | App Key    |
| D_LC_MKEY    | ✅   |        | Master Key |

## MongoDB

::: tip 提示
获取[MongoDB](https://mongodb.com/)数据库，官方免费提供 512M 存储空间

关于 MongoDB 在[Vercel](https://vercel.com/)平台设置[环境变量配置](/deploy/Vercel-ServerLess-Deploy.html#创建环境变量)
:::

| 环境变量名称       | 必填 | 默认值    | 描述                                                                                                                                                              |
| ------------------ | ---- | --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| D_MONGO_URL        |      |           | 数据库连接字符串，仅支持 MongoDB 官方提供的当设置了 URL 的数据库连接时，则下方的其它环境变量都将会被覆盖 **(仅适合 MongoDB 官方提供的 v2.2.12 版本的连接字符串)** |
| D_MONGO_HOST       |      | 127.0.0.1 | 主机地址                                                                                                                                                          |
| D_MONGO_PORT       |      | 27017     | 端口                                                                                                                                                              |
| D_MONGO_DB         |      | Discuss   | 数据库名                                                                                                                                                          |
| D_MONGO_USER       | ✅   |           | 用户名                                                                                                                                                            |
| D_MONGO_PASSWORD   | ✅   |           | 密码                                                                                                                                                              |
| D_MONGO_REPLICASET |      |           | 集群                                                                                                                                                              |
| D_MONGO_AUTHSOURCE |      |           | 认证源                                                                                                                                                            |
| D_MONGO_SSL        |      |           | 是否启用 SSL 连接方式                                                                                                                                             |

## MySQL

在使用之前请先导入 [MySQL.sql](https://github.com/Lete114/Discuss/blob/dev/src/server/database/sql/MySQL.sql) 以完成表和表结构的创建，之后在项目中配置如下环境变量

| 环境变量名称     | 必填 | 默认值    | 描述       |
| ---------------- | ---- | --------- | ---------- |
| D_MYSQL_HOST     |      | 127.0.0.1 | 主机地址   |
| D_MYSQL_PORT     |      | 3306      | 端口       |
| D_MYSQL_DB       |      | Discuss   | 数据库名   |
| D_MYSQL_USER     | ✅   |           | 用户名     |
| D_MYSQL_PASSWORD | ✅   |           | 密码       |
| D_MYSQL_CHARSET  |      | utf8mb4   | 字符集编码 |

## PostgreSQL

在使用之前请先导入 [PostgreSQL.sql](https://github.com/Lete114/Discuss/blob/dev/src/server/database/sql/PostgreSQL.sql) 以完成表和表结构的创建，之后在项目中配置如下环境变量

| 环境变量名称  | 必填 | 默认值    | 描述     |
| ------------- | ---- | --------- | -------- |
| D_PG_HOST     |      | 127.0.0.1 | 主机地址 |
| D_PG_PORT     |      | 5432      | 端口     |
| D_PG_DB       |      | Discuss   | 数据库名 |
| D_PG_USER     | ✅   |           | 用户名   |
| D_PG_PASSWORD | ✅   |           | 密码     |

## SQLite

SQLite 表结构我并未编写，如果你需要，你可以借鉴[MySQL.sql](https://github.com/Lete114/Discuss/blob/dev/src/server/database/sql/MySQL.sql)或[PostgreSQL.sql](https://github.com/Lete114/Discuss/blob/dev/src/server/database/sql/PostgreSQL.sql)编写一个，如果你愿意的话，欢迎你提交`PR`~😁

| 环境变量名称  | 必填 | 默认值  | 描述             |
| ------------- | ---- | ------- | ---------------- |
| D_SQLITE_PATH | ✅   |         | 数据文件存放路径 |
| D_SQLITE_DB   |      | Discuss | 数据库名         |