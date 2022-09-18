---
title: Vercel 部署
sidebar: auto
---

::: tip 说明
本文以`Vercel`+`MongoDB`部署`Discuss`评论系统服务为例
:::

## 注册

&nbsp;&nbsp;&nbsp;&nbsp;注册 [Vercel](https://vercel.com/signup)账号，推荐使用 GitHub 账户注册。

::: warning
**注意。** 不要使用`@qq.com`邮箱注册vercel，如果你的github账户是`@qq.com`的话，建议修改为别的邮箱，否则用`@qq.com`邮箱注册vercel的话，会发生一些不必要的麻烦。
:::

## 部署

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Lete114/Discuss-Deploy/tree/Vercel)

&nbsp;&nbsp;&nbsp;&nbsp;点击上方 `Deploy` 按钮，将 `Discuss` 评论服务一键部署到 Vercel 平台，

&nbsp;&nbsp;&nbsp;&nbsp;随后会提醒你创建一个 Git 仓库，方便后期管理以及部署，你需要输入一个仓库名，例如：`Discuss-Vercel`，点击 `Create`，等待构建完成，

![Start-Deploy](/img/deploy/Vercel-ServerLess-Deploy/Start-Deploy.png)

&nbsp;&nbsp;&nbsp;&nbsp;等待构建完成后点击`Go to Dashboard`(前往控制面板)，

::: tip 说明
因为这种一部部署的方式无法在创建的时候编辑环境变量，所以部署完成以后会出现如下，但是不用担心，
:::

![Create](/img/deploy/Vercel-ServerLess-Deploy/Create.png)

## 创建环境变量

&nbsp;&nbsp;&nbsp;&nbsp;点击`Settings`进入设置选择`Environment Variables`，添加环境变量

&nbsp;&nbsp;&nbsp;&nbsp;具体环境变量参数请见: [多数据库参数](/guide/More-DataBase.html)

![Settings](/img/deploy/Vercel-ServerLess-Deploy/Settings.png)
![Add-Env](/img/deploy/Vercel-ServerLess-Deploy/Add-Env.png)

## 重新部署

&nbsp;&nbsp;&nbsp;&nbsp;由于您是先部署，后配置环境变量，所以环境变量没有生效，你需要点击顶部的`Deployments`，重新部署后环境变量才能生效，最后访问服务端地址，初始化管理员账户
![Redeploy](/img/deploy/Vercel-ServerLess-Deploy/Redeploy.png)

## 初始化管理员

![Init](/img/deploy/Vercel-ServerLess-Deploy/Init.png)
