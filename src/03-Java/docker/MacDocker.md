---
title: Docker 镜像命令
isOriginal: true
date: 2024-07-09
permalink: /java/docker/bpd1j2jm/
category:
  - 教程
  - VuePress
tag:
  - 配置
  - VuePress
author: H T L
order: 1
---

# Docker 镜像命令

### MYSQL

```shell
$ docker run \
-p 3306:3306 \
--name mysql \
-v /Users/aurora/Docker/mount/db/node01/conf:/etc/mysql/conf.d \
-v /Users/aurora/Docker/mount/db/node01/logs:/logs \
-v /Users/aurora/Docker/mount/db/node01/data:/var/lib/mysql \
-e MYSQL_ROOT_PASSWORD=123456 \
-d mysql/mysql-server
```



### Redis

```bash
$ docker run -p 6379:6379  \
  --name redis \
  -v /Users/aurora/Docker/mount/redis/redis-node01/data:/data \
  -v /Users/aurora/Docker/mount/redis/redis-node01/conf:/etc/redis/redis.conf \
  -d redis redis-server /etc/redis/redis.conf
```

### Nginx

```bash
$ docker run -d -p 80:80 -p 443:443  \
 --name nginx \
 --restart=always \
 --privileged=true \
 -v /Users/aurora/Docker/nginx/html:/usr/share/nginx/html \
 -v /Users/aurora/Docker/nginx/nginx.conf:/etc/nginx/nginx.conf \
 -v /Users/aurora/Docker/nginx/conf.d:/etc/nginx/conf.d \
 -v /Users/aurora/Docker/nginx/logs:/var/log/nginx \
 nginx 
```



### RabbitMq

```bash
$ docker pull rabbitmq:3.10.5-management

$ docker run  \
      -p 15672:15672   \ 
      -p 5672:5672  \
      -v ~/Docker/mount/rabbitmq/data/:/var/lib/rabbitmq/  \
      -v ~/Docker/mount/rabbitmq/log/:/var/log/rabbitmq/
```





### Nacos

```bash
docker pull nacos/nacos-server

docker run -d \
-e MODE=standalone \
-e PREFER_HOST_MODE=hostname \
-e SPRING_DATASOURCE_PLATFORM=mysql \
-e MYSQL_SERVICE_HOST=数据库host \
-e MYSQL_SERVICE_PORT=数据库端口 \
-e MYSQL_SERVICE_USER=数据库用户名 \
-e MYSQL_SERVICE_PASSWORD=数据库密码 \
-e MYSQL_SERVICE_DB_NAME=数据库 \
-e MYSQL_SERVICE_DB_PARAM="autoReconnect=true&useUnicode=true&characterEncoding=utf8&zeroDateTimeBehavior=CONVERT_TO_NULL&useSSL=false&serverTimezone=Asia/Shanghai" \
-p 8848:8848 \
--restart=always \
--name nacos \
-v ~/Docker/mount/nacos/standalone-logs/:/home/nacos/logs \
-v ~/Docker/mount/nacos/init.d/:/home/nacos/init.d \
-v ~/Docker/mount/nacos/conf/:/home/nacos/conf \
nacos/nacos-server


```



```
docker run -d \
-e MODE=standalone \
-e PREFER_HOST_MODE=hostname \
-e SPRING_DATASOURCE_PLATFORM=mysql \
-e MYSQL_SERVICE_HOST=127.0.0.1 \
-e MYSQL_SERVICE_PORT=3306 \
-e MYSQL_SERVICE_USER=root \
-e MYSQL_SERVICE_PASSWORD=12345678 \
-e MYSQL_SERVICE_DB_NAME=nacosDB \
-e MYSQL_SERVICE_DB_PARAM="autoReconnect=true&useUnicode=true&characterEncoding=utf8&zeroDateTimeBehavior=CONVERT_TO_NULL&useSSL=false&serverTimezone=Asia/Shanghai" \
-p 8848:8848 \
--name nacos \
nacos/nacos-server
```



### Sentinel

```
docker run --name sentinel \
-p 8080:8080 \
-d hashicorp/sentinel
```

