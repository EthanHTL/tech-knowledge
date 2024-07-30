---
title: 11-SpringCloud Bus
order: 1
category: []
tag: []
author: H·T·L
date: 2024-07-29
permalink: /04-spring/spring-cloud/t8chlfxe/
---
## Bus  消息总线

![image-20210404181755761](img/image-20210404181755761.png)

![image-20210404181924167](img/image-20210404181924167.png)

![image-20210404182005171](img/image-20210404182005171.png)

![image-20210404193023123](img/image-20210404193023123.png)

使用curl命令进行刷新

curl -X POST "http://localhost:3344/actuator/bus-refresh"

刷新之后所有的服务对应的配置文件都可以同步更新了

定点通知：只通知指定的服务

![image-20210404195855908](img/image-20210404195855908.png)



![image-20210404200014655](img/image-20210404200014655.png)