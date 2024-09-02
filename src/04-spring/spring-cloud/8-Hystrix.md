---
title: 8-Hystrix
order: 1
category: []
tag: []
author: H·T·L
date: 2024-07-18
permalink: /04-spring/spring-cloud/vbr6vzjn/
---
## Hystrix 断路器

### 概述

官网：https://github.com/Netflix/Hystrix/wiki

![image-20210403132453867](img/image-20210403132453867.png)

![image-20210403132505763](img/image-20210403132505763.png)

### 重要概念

#### 服务降级

**概念：**服务器忙，请稍后再试，不让客户端等待并立刻返回一个友好提示，fallback

![image-20210403133542506](img/image-20210403133542506.png)





#### 服务熔断

**概念：**类比保险丝达到最大服务访问后，直接拒绝访问，拉闸限电，然后调用服务降级的方法并返回友好提示

服务的降级->进而熔断->恢复调用链路

#### 服务限流

**概念；**秒杀高并发等操作，严禁一窝蜂的过来拥挤，大家排队，一秒钟N个，有序进行





### 案例



问题

![image-20210403150238810](img/image-20210403150238810.png)



解决思路

![image-20210403152527520](img/image-20210403152527520.png)

优化

![image-20210403192829774](img/image-20210403192829774.png)

服务降级之后，服务恢复无法重新连接

![image-20210403194343173](img/image-20210403194343173.png)



![image-20210403200016208](img/image-20210403200016208.png)

![image-20210403203055164](img/image-20210403203055164.png)

![image-20210403203230732](img/image-20210403203230732.png)

![img](https://raw.githubusercontent.com/wiki/Netflix/Hystrix/images/hystrix-command-flow-chart.png)

#### 服务监控

![image-20210403204235018](img/image-20210403204235018.png)

```xml
<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-netflix-hystrix-dashboard</artifactId>
</dependency>http://localhost:9001/hystrix
```

![image-20210403212316702](img/image-20210403212316702.png)

![image-20210403212504600](img/image-20210403212504600.png)



