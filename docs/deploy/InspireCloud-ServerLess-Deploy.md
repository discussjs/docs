---
title: 轻服务(InspireCloud)部署
sidebar: auto
---

## 注册

访问[轻服务(InspireCloud)](https://qingfuwu.cn/)并注册账号，需要实名认证等相关流程

## 部署

点击 [Deploy InspireCloud Example](https://github.com/Lete114/Discuss-Deploy/tree/InspireCloud) 进入示例存储仓库，然后点击右上角的**Fork**按钮将仓库复制成你的仓库

随后返回 **轻服务(InspireCloud)** 创建服务，选择云工程后点击 **基于 Git 部署**

填写前面你**Fork**的仓库地址，并选择 **InspireCloud** 分支
![Create Server](/img/deploy/InspireCloud-ServerLess-Deploy/Create-Server.png)
![Git Deploy](/img/deploy/InspireCloud-ServerLess-Deploy/Git-Deploy.png)

## 添加环境变量

添加环境变量后，会重新触发部署(为了保证环境变量生效)

最后等待部署完成后访问 **请求地址**，初始化管理员用户就可以了
::: tip
关于环境变量的一些详细信息，你可以查看[多数据库支持](/guide/More-DataBase.html)
:::
![Service ID](/img/deploy/InspireCloud-ServerLess-Deploy/Service-ID.png)
