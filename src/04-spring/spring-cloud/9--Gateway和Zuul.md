---
title: 9--Gateway和Zuul
order: 1
category: []
tag: []
author: H·T·L
date: 2024-07-29
permalink: /04-spring/spring-cloud/07npyksm/
---
## GateWay 和 Zuul

![image-20210403214038248](img/image-20210403214038248.png)

![image-20210403214113302](img/image-20210403214113302.png)

![image-20210403214229706](img/image-20210403214229706.png)

![image-20210403214559901](img/image-20210403214559901.png)

![image-20210403215009376](img/image-20210403215009376.png)



断言的不同类型：

```
- Path=/payment/get/** # 断言，路径相匹配的进行路由
  #- After=2017-01-20T17:42:47.789-07:00[America/Denver]
  #- Before=2017-01-20T17:42:47.789-07:00[America/Denver]
  #- Cookie=username,zzyy
  #- Header=X-Request-Id, \d+ #请求头要有X-Request-Id属性，并且值为正数
  #- Host=**.atguigu.com
  #- Method=GET
  #- Query=username, \d+ # 要有参数名username并且值还要是正整数才能路由
```



#### cookie：

curl 命令：

![image-20210404161105889](img/image-20210404161105889.png)

![image-20210404161042022](img/image-20210404161042022.png)





















