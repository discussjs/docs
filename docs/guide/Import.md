---
title: 评论数据导入
---

# 前言

这里不会记录你的**用户名**、**密码**、**服务端地址**，更不会记录你的**评论信息**

选择指定评论系统，随后填入相关信息并点击`Import`即可导入，转换过程中发生了任何错误，下方会自动生成日志信息提示

::: tip ✨ 温馨提示
如果你开启了**安全域名**配置，你需要添加`discuss.js.org`为安全域名，否则会被拦截，导入成功后可取消
:::

::: warning 注意
不推荐使用 **Vercel** 部署的 Discuss 评论系统，因为 Vercel 只有**十秒**的响应时间，导入的评论过多可能会失败，而还没等到后面的数据开始导入，Vercel 的**十秒**显示直接停止了，导致只导入了部分评论
:::

| 按钮     | 必选                                                                   | 描述                                               |
| -------- | ---------------------------------------------------------------------- | -------------------------------------------------- |
| Import   | [选择评论系统] [选择表] [Server URLs] [Username] [Password] [Comments] | 使用 Discuss API 导入                              |
| Download | [选择评论系统] [选择表] [Comments]                                     | 下载到已被转换好的评论信息 JSON 格式到存储平台导入 |

## 转换 or 导入

<import />

## MongoDB

手动导入评论数据到**MongoDB**数据库

::: warning 注意

本文转换的程序会将`_id`或是`id`全部统一转换为`id`，如果你使用的存储数据库是`['mysql', 'postgresql', 'sqlite']`其中一种则可以直接使用

如果你使用的存储数据库不含在`['mysql', 'postgresql', 'sqlite']`中，你需要打开**记事本**或者**任何编辑器**将`id`转换批量替换为`_id`才可以，操作流程如下

1. 用编辑器打开上方转换好后下载到本地的`Discuss.xxx.json`文件
2. 按`ctrl + h`(大部分编辑器都是这个快捷键)，**匹配值是`"id":`**、**替换值是`_id`**最后点击全部替换即可

![replace](/img/guide/Import/replace.png)

:::

::: tip

1. 将其它评论数据填入上方 **(具体请看上方表格的 Download 选项)** `Comments`内，并且选择评论系统，点击`Download`下载到本地
2. 下载 [MongoDB Tool](https://www.mongodb.com/try/download/database-tools) 根据自己系统选择下载即可，以`Windows x86_64`为例
3. 下载 ZIP 压缩包，并解压，打开解压后的`\mongodb-database-tools-windows-x86_64-100.5.2\bin`目录(里面有很多的.exe 文件)，并在该目录下打开命令行工具，同时将之前`Download`转换好的`Discuss.xxx.json`文件复制或剪切到该目录下
4. 在命令行输入如下代码如下命令导入即可

:::

```bash

## 导入
mongoimport --db=Discuss --collection=d_comment --type=json --file=Discuss.comment.json --jsonArray --uri="mongodb+srv://Discuss:<password>@cluster0.buend.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

## 导出
mongoexport --db=Discuss --collection=d_counter --out=out_d_counter.json --uri="mongodb+srv://Discuss:<password>@cluster0.buend.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

# 参数说明
## --db: 数据库
## --collection: 集合 (评论:d_comment 访问量统计:d_counter)
## --out: 输出文件
## --type: 类型
## --file: 文件
## --jsonArray: 以数组 json 格式导入 **[{"id":"xxxxx"},{"id":"xxxxx"}]**
## --uri: 数据库连接字符串，其中`Discuss`、`<password>`、`myFirstDatabase`需要修改为你设置的用户名和密码还有数据库昵称(如果不知道就改成`Discuss`)
```

::: tip
更多使用方法和技巧请看官方教程: [mongoimport](https://docs.mongodb.com/database-tools/mongoimport/) [mongoexport](https://docs.mongodb.com/database-tools/mongoexport/)
:::