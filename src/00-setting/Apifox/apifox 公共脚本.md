---
title: Apifox 公共脚本
date: 2024-07-09
permalink: /00-setting/Apifox/czdo8ccr/
category:
  - apifox
tag:
  - 脚本
star: true
author: H T L
order: 1
---

## 自动登录脚本

**实现功能**
1. token、accessToken的自动生成
2. token自动过期
3. 自动登录
4. 登录接口和入参动态配置
5. 根据开发环境动态切换配置
6. 便捷切换登录用户



::: code-tabs#js

@tab appToken生成
```js:line-numbers
// appToken.js
<!-- @include: ./appToken.js -->
```

@tab:active 登录脚本
```js:line-numbers
// login.js
<!-- @include: ./login.js -->
```

@tab Header设置
```js:line-numbers
// header.js
<!-- @include: ./header.js -->
```

@tab 后置处理脚本
```js:line-numbers
// process.js
<!-- @include: ./process.js -->
```

:::



### 效果预览

![自动登录效果](http://images.hicoding.top/i/2024/07/26/r10jey-2.webp)


### 解释说明

- loginURL: 登录请求地址
- acticeUser: 激活用户配置
- defaultUser: 默认登录信息
- TH8989： 自定义的登录用户信息
- APP_TOKEN： 生成的app_token
- APP_TOKEN_EXPIRES: app_token过期时间
- ACCESS_TOKEN：生成的accessToken
- ACCESS_TOKEN_EXPIRES: accessToken的过期时间



## IDEA Apifox插件自定义配置

::: info
IDEA 设置：Settings -> Apifox Helper -> 代码识别 -> 自定义规则

效果： 自定义注解校验

参考官网：https://apifox.com/help/applications-and-plugins/idea/start

:::


@[code groovy:line-numbers](./apifox.groovy)


![IDEA配置效果](http://images.hicoding.top/i/2024/07/26/qyij8e-2.webp)