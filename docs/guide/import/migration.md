---
title: 迁移须知
---

## MongoDB

手动导入评论数据到**MongoDB**数据库

::: warning 注意

本文转换的程序会将`_id`或是`id`全部统一转换为`id`，如果你使用的存储数据库是`['mysql', 'postgresql', 'sqlite']`其中一种则可以直接使用
如果你使用的存储数据库非`['mysql', 'postgresql', 'sqlite']`其中一种，你需要打开**记事本**或者**任何编辑器**将`id`转换批量替换为`_id`才可以，操作流程如下

1. 用编辑器打开上方转换好后下载到本地的`discuss.xxx.json`文件
2. 按`ctrl + h`(大部分编辑器都是这个快捷键)，**匹配值是`"id":`** 、 **替换值是`"_id"`** 最后点击全部替换即可

![replace](/img/guide/Import/replace.png)

:::

::: tip

1. 选择你曾经的评论系统进行转换，点击`Download`下载到本地
2. 下载 [MongoDB Tool](https://www.mongodb.com/try/download/database-tools) 根据自己系统选择下载即可，以`Windows x86_64`为例
3. 下载 ZIP 压缩包，并解压，打开解压后的`\mongodb-database-tools-windows-x86_64-100.5.2\bin`目录(里面有很多的.exe 文件)，并在该目录下打开命令行工具，同时将之前`Download`转换好的`discuss.xxx.json`文件复制或剪切到该目录下
4. 在命令行输入如下代码如下命令导入即可

:::

```bash

## 导入
mongoimport --db=discuss --collection=d_comment --type=json --file=discuss.comment.json --jsonArray --uri="mongodb+srv://Discuss:<password>@cluster0.buend.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

## 导出
mongoexport --db=discuss --collection=d_counter --out=out_d_counter.json --uri="mongodb+srv://Discuss:<password>@cluster0.buend.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

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
