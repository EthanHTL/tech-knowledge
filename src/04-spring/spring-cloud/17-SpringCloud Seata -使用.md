---
title: 17-SpringCloud Seata -使用
order: 1
category: []
tag: []
author: H·T·L
date: 2024-07-29
permalink: /04-spring/spring-cloud/y7w1f7f7/
---
# Seata 配置使用

@GlobalTransacational

## Seata Server (TC) 环境搭建

https://seata.io/zh-cn/docs/ops/deploy-guide-beginner.html

![image-20211125154548996](img/image-20211125154548996.png)



资源目录

[点击查看](https://github.com/seata/seata/tree/1.4.0/script)

- client

> 存放client端sql脚本 (包含 undo_log表) ，参数配置

- config-center

> 各个配置中心参数导入脚本，config.txt(包含server和client，原名nacos-config.txt)为通用参数文件

- server

> server端数据库脚本 (包含 lock_table、branch_table 与 global_table) 及各个容器配置



![image-20211125160027096](img/image-20211125160027096.png)

![image-20211125160253198](img/image-20211125160253198.png)

![image-20211125160427527](img/image-20211125160427527.png)

![image-20211125160516554](img/image-20211125160516554.png)





## Seata Client 快速开始



![image-20211125160746984](img/image-20211125160746984.png)

![image-20211125162152865](img/image-20211125162152865.png)

![image-20211125162208852](img/image-20211125162208852.png)

对seata client进行配置，在springboot2.1之前需要在register.conf中进行配置，但是之后只需要在application.yum中配置即可









