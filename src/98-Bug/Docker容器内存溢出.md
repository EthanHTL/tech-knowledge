---
title: Docker 容器内存溢出排查
date: 2024-07-22
permalink: /01-linux/Bug/xr178hku/
category: []
tag: []
author: H T L
order: 1
---



#### 工具安装

mac : https://visualvm.github.io/download.html



#### 进入容器

docker exec -it 容器id bash



#### 查看java线程

top 



#### 查看堆内存中的对象分布情况 

jmap -histo pid | head -n 10



#### 参考文章

https://www.cnblogs.com/liuboren/p/15859576.html

