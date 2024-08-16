---
title: ES6
order: 1
category: []
tag: []
author: H·T·L
date: 2024-08-08
permalink: /05-web/js/4sppbh9m/
---




# ECMAScript6



## 简介

### 1.1 ECMAScript 和 JavaScript 的关系

> 一个常见的问题是，ECMAScript 和 JavaScript 到底是什么关系？
>
> 要讲清楚这个问题，需要回顾历史。1996 年 11 月，JavaScript 的创造者 Netscape 公司，决定将 JavaScript 提交给标准化组织 ECMA，希望这种语言能够成为国际标准。次年，ECMA 发布 262 号标准文件（ECMA-262）的第一版，规定了浏览器脚本语言的标准，并将这种语言称为 ECMAScript，这个版本就是 1.0 版。
>
> 该标准从一开始就是针对 JavaScript 语言制定的，但是之所以不叫 JavaScript，有两个原因。一是商标，Java 是 Sun 公司的商标，根据授权协议，只有 Netscape 公司可以合法地使用 JavaScript 这个名字，且 JavaScript 本身也已经被 Netscape 公司注册为商标。二是想体现这门语言的制定者是 ECMA，不是 Netscape，这样有利于保证这门语言的开放性和中立性。
>
> 因此，**ECMAScript 和 JavaScript 的关系是，前者是后者的规格，后者是前者的一种实现**（另外的 ECMAScript 方言还有 JScript 和 ActionScript）。日常场合，这两个词是可以互换的。



目前，各大浏览器对 ES6 的支持可以查看https://compat-table.github.io/compat-table/es6/。

### 1.2 Node.js

Node.js 是 JavaScript 的服务器运行环境（runtime）。它对 ES6 的支持度更高。除了那些默认打开的功能，还有一些语法功能已经实现了，但是默认没有打开。使用下面的命令，可以查看 Node.js 默认没有打开的实验性语法。

```sh
// Linux & Mac
$ node --v8-options | grep harmony

// Windows
$ node --v8-options | findstr harmony
```

### 1.3 Babel 转码器

[Babel](https://babeljs.io/) 是一个广泛使用的 ES6 转码器，可以将 ES6 代码转为 ES5 代码，从而在老版本的浏览器执行。这意味着，你可以用 ES6 的方式编写程序，又不用担心现有环境是否支持。下面是一个例子。

```javascript
// 转码前
input.map(item => item + 1);

// 转码后
input.map(function (item) {
  return item + 1;
});
```

上面的原始代码用了箭头函数，Babel 将其转为普通函数，就能在不支持箭头函数的 JavaScript 环境执行了。

下面的命令在项目目录中，安装 Babel。

```bash
$ npm install --save-dev @babel/core
```



#### 转码应用

1. [配置文件.babelrc ](https://es6.ruanyifeng.com/#docs/intro#%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6-babelrc)

2. [命令行转码](https://es6.ruanyifeng.com/#docs/intro#%E5%91%BD%E4%BB%A4%E8%A1%8C%E8%BD%AC%E7%A0%81)

3. [babel-node](https://es6.ruanyifeng.com/#docs/intro#babel-node)

4. [@babel/register 模块](https://es6.ruanyifeng.com/#docs/intro#@babel-register-%E6%A8%A1%E5%9D%97)

5. [polyfill：转换新JS的API](https://es6.ruanyifeng.com/#docs/intro#polyfill)







