---
title: 多数据库支持
sidebar: auto
---

## 通用环境变量

::: tip
Discuss 支持多数据库存储，让用户有更多选择存储的方式，一下是通用环境变量，具体请看[.env.example](https://github.com/discussjs/Discuss/blob/main/.env.example)
:::

| 环境变量名称       | 必填 | 默认值    | 描述                                                           |
| ------------------ | ---- | --------- | -------------------------------------------------------------- |
| DISCUSS_PORT       |      | 6870      | 启动的端口号(仅对服务器有用)                                   |
| DISCUSS_SECRET     |      | discuss   | Token 加密的密钥字符串([可选]自定义)                           |
| DISCUSS_AUDIT      |      | false     | 设置评论是否开启审核模式                                       |
| DISCUSS_DB_TYPE    | ✅   |           | 使用什么数据库 [mongodb, mysql, postgresql, sqlite, cloudbase] |
| DISCUSS_DB_ADMIN   |      | d_admin   | 数据库管理员信息表名(建议全小写)                               |
| DISCUSS_DB_COMMENT |      | d_comment | 数据库评论信息表名                                             |
| DISCUSS_DB_COUNTER |      | d_counter | 数据库访问量统计信息表名                                       |

## MongoDB

::: tip 提示
获取[MongoDB](https://mongodb.com/)数据库，官方免费提供 512M 存储空间

关于 MongoDB 在[Vercel](https://vercel.com/)平台设置[环境变量配置](/deploy/Vercel-ServerLess-Deploy.html#创建环境变量)
:::

| 环境变量名称 | 必填 | 描述             |
| ------------ | ---- | ---------------- |
| D_MONGO_URL  | ✅   | 数据库连接字符串 |

## MySQL

| 环境变量名称 | 必填 | 描述             |
| ------------ | ---- | ---------------- |
| D_MYSQL_URL  | ✅   | 数据库连接字符串 |

## PostgreSQL

| 环境变量名称 | 必填 | 描述             |
| ------------ | ---- | ---------------- |
| D_PG_URL     | ✅   | 数据库连接字符串 |

## SQLite

| 环境变量名称  | 必填 | 默认值         | 描述             |
| ------------- | ---- | -------------- | ---------------- |
| D_SQLITE_PATH | ✅   |                | 数据文件存放路径 |
| D_SQLITE_DB   |      | discuss.sqlite | 数据库名         |

## CloudBase 腾讯云

::: tip 提示
如果你部署在**CloudBase**的话则这些都不需要填写**discuss**会自动获取，唯一需要设置的就是`DISCUSS_DB_TYPE`
:::

| 环境变量名称 | 必填 | 默认值 | 描述                                                                      |
| ------------ | ---- | ------ | ------------------------------------------------------------------------- |
| D_TCB_ENV    | ✅   |        | CloudBase 环境 ID                                                         |
| D_TCB_ID     | ✅   |        | CloudBase API 密钥 ID [详细](https://console.cloud.tencent.com/cam/capi)  |
| D_TCB_KEY    | ✅   |        | CloudBase API 密钥 Key [详细](https://console.cloud.tencent.com/cam/capi) |
