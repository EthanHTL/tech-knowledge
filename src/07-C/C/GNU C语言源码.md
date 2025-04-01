---
title: GNU C语言源码
order: 1
category:
  - C
tag:
  - C
  - 源码
author: H·T·L
date: 2024-08-27
permalink: /07-C/C/03pufapq/
---

## 参考文章

[[1] 源码仓库: https://ftp.gnu.org/gnu/libc/](https://ftp.gnu.org/gnu/libc/)

[[2] 在线源码阅读: https://elixir.bootlin.com/glibc/glibc-2.31/source](https://elixir.bootlin.com/glibc/glibc-2.31/source) : 可在线阅读Linux内核源码

[[3] Ubuntu源码: https://packages.ubuntu.com/](https://packages.ubuntu.com/)

[[4] glibc源码调试](https://csstormq.github.io/blog/%E4%BB%A3%E7%A0%81%E8%B0%83%E8%AF%95%E7%AF%87%EF%BC%884%EF%BC%89%EF%BC%9A%E5%A6%82%E4%BD%95%E8%B0%83%E8%AF%95%20glibc%20%E6%BA%90%E7%A0%81%E2%80%94%E2%80%94%E5%87%86%E5%A4%87%E7%AF%87.html)

<!-- more -->



## stdio.h标准库在glibc中的实现

![image-20240827013216838](https://images.hicoding.top/i/2024/08/27/26oy6i-3.webp)

## printf函数源码

具体实现在`glibc`源码仓库中/stdio-common/printf.c文件



## 编译和调试【glibc源码】

```bash
wget http://ftp.gnu.org/gnu/make/make-3.79.tar.gz
tar –zxvf make-3.79.tar.gz
cd make-3.79
mkdir build
cd build
../configure –prefix=/usr/locat/make_3_79
make
make install
export PATH=/usr/locat/make_3_79/bin:$PATH
```

![运行效果图](https://images.hicoding.top/i/2025/01/24/p538lo-3.webp)

**vscode配置**

```json
launch.json

"environment": [
    {
        "name" : "LD_LIBRARY_PATH",
        "value": "${LD_LIBRARY_PATH}:/usr/local/glibc-2.39/lib"  // 自己编译的glibc的动态链接库地址
    }
],
"setupCommands": [
    {
        "description": "glibc source",
        "text": "directory /usr/local/src/glibc", // glibc 源码位置
        "ignoreFailures": true
    }
],
```

**参考文章**

[1] https://blog.csdn.net/xiaoshixiu/article/details/122738836

[2] https://blog.csdn.net/qq_34598635/article/details/108337209

[3] https://csstormq.github.io/blog/%E4%BB%A3%E7%A0%81%E8%B0%83%E8%AF%95%E7%AF%87%EF%BC%884%EF%BC%89%EF%BC%9A%E5%A6%82%E4%BD%95%E8%B0%83%E8%AF%95%20glibc%20%E6%BA%90%E7%A0%81%E2%80%94%E2%80%94%E5%87%86%E5%A4%87%E7%AF%87.html
