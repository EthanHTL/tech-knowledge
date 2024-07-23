---
title: SSH 实现免密登录
date: 2024-07-22
permalink: /01-linux/yr0r3xly/
category: []
tag: []
author: H T L
order: 1
---


## 实现ssh远程连接

```sh
# 客户端生成秘钥
ssh-keygen -t rsa 
ssh-keygen -t rsa -C "Email@qq.com"

# 客户端执行，将公钥复制到服务器
ssh-copy-id htl@10.211.55.3

# ssh连接实现免密登录
ssh user@server_ip
```