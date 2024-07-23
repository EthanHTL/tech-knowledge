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
vim docker-compose-mysql-8.yaml

version: '3'
services:
  mysql:
    restart: always
    privileged: true
    image: mysql:8.0.39
    container_name: mysql-8
    command:
      --character-set-server=utf8mb4
      --collation-server=utf8mb4_general_ci
      --explicit_defaults_for_timestamp=true
    environment:
      MYSQL_ROOT_HOST: '%'
      MYSQL_ROOT_PASSWORD: "12345678"
      MYSQL_USER: "huang"
      MYSQL_PASSWORD: "12345678"
      MYSQL_INITDB_SKIP_TZINFO: "Asia/Shanghai"
    ports:
      - 3306:3306

sudo docker compose -f ./docker-compose-mysql-8.yaml up

docker exec -it mysql-8 /bin/sh

# 连接数据库测试
 mysql -uroot -p     # 密码 12345678
  mysql -uhuang -p     # 密码 12345678
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

```sh
vim standalone-mysql-8.yaml

version: "3.8"
services:
  nacos:
    image: nacos/nacos-server:latest
    container_name: nacos
    restart: always
    environment:
      - MODE=standalone
      - MYSQL_SERVICE_HOST=localhost
      - MYSQL_SERVICE_PORT=3306
      - MYSQL_SERVICE_USER=huang
      - MYSQL_SERVICE_PASSWORD=12345678
      - MYSQL_SERVICE_DB_NAME=nacos_dev
      - MYSQL_SERVICE_DB_PARAM="autoReconnect=true&useUnicode=true&characterEncoding=utf8&zeroDateTimeBehavior=CONVERT_TO_NULL&useSSL=false&serverTimezone=Asia/Shanghai"
    volumes:
      - /usr/local/docker-server/nacos/conf/:/home/nacos/conf
      - /usr/local/docker-server/nacos/logs/:/home/nacos/logs
    ports:
      - "8848:8848"
      - "9848:9848"

# 启动容器
docker-compose -f ./standalone-mysql-8.yaml up

# 进入容器
docker exec -it nacos /bin/sh

# volumes导致找不到目录异常
# 先取消volumes，启动容器，拷贝出来目录，再重新 docker-compose
docker cp nacos:/home/nacos/conf /usr/local/docker-server/nacos/
docker cp nacos:/home/nacos/logs /usr/local/docker-server/nacos/

# 

# 属性配置
https://nacos.io/zh-cn/docs/quick-start-docker.html
```



### Sentinel

```
docker run --name sentinel \
-p 8080:8080 \
-d hashicorp/sentinel
```
