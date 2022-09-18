---
title: 腾讯云开发(CloudBase)部署
sidebar: auto
---

::: warning
![云开发计费模式升级](/img/deploy/CloudBase-ServerLess-Deploy/Cloudbase-updatedCost.png)<br>
因为从2022-08-08号开始，云开发计费模式升级，cloudbase不再免费，故不建议此种部署方式，推荐[vercel部署](/deploy/Vercel-ServerLess-Deploy)。
:::

## 新建云函数

1. 进入[云开发控制台](https://console.cloud.tencent.com/tcb/)
2. 进入[环境云函数](https://console.cloud.tencent.com/tcb/scf/index)并新建云函数，同时填写**函数代码**，最后点击确定即可

```js
const serverless = require("serverless-http");
const main = require("discuss").main;

exports.main = serverless(main);
```

![Create Function](/img/deploy/CloudBase-ServerLess-Deploy/Create-Function.png)

![Config Function](/img/deploy/CloudBase-ServerLess-Deploy/Config-Function.png)

## 创建 NPM 依赖文件

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

## 添加环境变量

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
