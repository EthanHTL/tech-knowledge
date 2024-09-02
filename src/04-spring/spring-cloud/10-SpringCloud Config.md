---
title: 10-SpringCloud Config
order: 1
category: []
tag: []
author: H·T·L
date: 2024-07-20
permalink: /04-spring/spring-cloud/a2xi2e6z/
---
![image-20210404163258673](img/image-20210404163258673.png)

![image-20210404163308937](img/image-20210404163308937.png)







测试：http://config3344.com:3344/main/config-dev.yml

![image-20210404165547946](img/image-20210404165547946.png)

![image-20210404170145645](img/image-20210404170145645.png)

![image-20210404165948357](img/image-20210404165948357.png)







![image-20210404171407521](img/image-20210404171407521.png)



客户端配置中心

http://localhost:3355/configInfo



客户端动态刷新问题

中心配置仓库修改之后，需要重新发起下面的刷新请求，客户端才能动态的访问

curl -X POST "http://localhost:3355/actuator/refresh"

![image-20210404180844711](img/image-20210404180844711.png)

缺点是服务太多时，需要每个服务进行定点刷新













