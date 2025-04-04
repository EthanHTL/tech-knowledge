---
title: Docker 常用镜像
isOriginal: true
date: 2024-07-09
permalink: /03-Java/docker/bpd1j2jm/
category:
  - docker
tag:
  - 脚本
  - docker
author: H T L
order: 1
toc: true
---


# Docker 常用镜像

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
    volumes:
      - /srv/docker/mysql/data:/var/lib/mysql
      - /srv/docker/mysql/conf/my.cnf:/etc/my.cnf
    ports:
      - 3306:3306

# -d 后台运行
sudo docker compose -f ./docker-compose-mysql-8.yaml up -d

docker exec -it mysql-8 /bin/sh

docker cp mysql-8:/var/lib/mysql /srv/docker/mysql/data
docker cp mysql-8:/etc/my.cnf /srv/docker/mysql/conf

# 查看my.cnf配置位置的读取顺序
mysql --help | grep my.cnf 

# 连接数据库测试
 mysql -uroot -p12345678     # 密码 12345678
  mysql -uhuang -p     # 密码 12345678
#修改密码
mysqladmin -u用户名 -p旧密码 password 新密码
mysqladmin -u root -h '%'  -p --ssl-mode=required  password 7ow9PBz2sqEqYi
```

### Nginx

```yaml
vim docker-compose-nginx.yaml

version: '3.6'
services:
  nginx:
    image: nginx
    container_name: nginx
    restart: always
    ports:
      - 80:80
      - 443:443
    volumes:
      - /usr/local/docker/nginx/html:/usr/share/nginx/html
      - /usr/local/docker/nginx/nginx.conf:/etc/nginx/nginx.conf
      - /usr/local/docker/nginx/conf.d:/etc/nginx/conf.d
    environment:
      - NGINX_PORT=80
      - TZ=Asia/Shanghai
    privileged: true


docker compose -f ./docker-compose-nginx.yaml up

docker exec -it nginx /bin/bash

docker cp nginx:/etc/nginx/nginx.conf /usr/local/docker/nginx/nginx.conf
docker cp nginx:/etc/nginx/conf.d /usr/local/docker/nginx/conf.d
docker cp nginx:/usr/share/nginx/html /usr/local/docker/nginx
```



### Redis

```bash
vim docker-compose-redis.yaml

version: '3.6'
services:
  redis:
    image: redis:latest
    container_name: redis
    restart: always
    ports:
      - 6379:6379
    volumes:
      - /usr/local/docker/redis/data:/data
      - /usr/local/docker/redis/redis.conf:/etc/redis.conf
    #配置文件启动
    command: redis-server /etc/redis.conf

# 创建 data目录 和 redis.conf
# redis.conf 配置从网上随便找一篇即可
# 参考： https://cloud.tencent.com/developer/article/2317630

 docker compose -f ./docker-compose-redis.yaml up

docker exec -it redis /bin/bash

$ docker run -p 6379:6379  \
  --name redis \
  -v /Users/aurora/Docker/mount/redis/redis-node01/data:/data \
  -v /Users/aurora/Docker/mount/redis/redis-node01/conf:/etc/redis/redis.conf \
  -d redis redis-server /etc/redis/redis.conf
  
  
```

### redis.conf

```conf
# Redis 服务器的端口号（默认：6379）
port 6379

# 绑定的 IP 地址，如果设置为 127.0.0.1，则只能本地访问；若设置为 0.0.0.0，则监听所有接口（默认：127.0.0.1）
bind 0.0.0.0

# 设置密码，客户端连接时需要提供密码才能进行操作，如果不设置密码，可以注释掉此行（默认：无）
# requirepass foobared
requirepass xj2023

# 设置在客户端闲置一段时间后关闭连接，单位为秒（默认：0，表示禁用）
# timeout 0

# 是否以守护进程（daemon）模式运行，默认为 "no"，设置为 "yes" 后 Redis 会在后台运行
daemonize no

# 设置日志级别（默认：notice）。可以是 debug、verbose、notice、warning
loglevel notice

# 设置日志文件的路径（默认：空字符串），如果不设置，日志会输出到标准输出
logfile ""

# 设置数据库数量（默认：16），Redis 使用数据库索引从 0 到 15
databases 16

# 是否启用 AOF 持久化，默认为 "no"。如果设置为 "yes"，将在每个写操作执行时将其追加到文件中
appendonly no

# 设置 AOF 持久化的文件路径（默认：appendonly.aof）
# appendfilename "appendonly.aof"

# AOF 持久化模式，默认为 "always"。可以是 always、everysec 或 no
# always：每个写操作都立即同步到磁盘
# everysec：每秒钟同步一次到磁盘
# no：完全依赖操作系统的行为，可能会丢失数据，但性能最高
# appendfsync always

# 设置是否在后台进行 AOF 文件重写，默认为 "no"
# auto-aof-rewrite-on-rewrite no

# 设置 AOF 文件重写触发时，原 AOF 文件大小与新 AOF 文件大小之间的比率（默认：100）
# auto-aof-rewrite-percentage 100

# 设置是否开启 RDB 持久化，默认为 "yes"。如果设置为 "no"，禁用 RDB 持久化功能
save 900 1
save 300 10
save 60 10000

# 设置 RDB 持久化文件的名称（默认：dump.rdb）
# dbfilename dump.rdb

# 设置 RDB 持久化文件的保存路径，默认保存在当前目录
# dir ./

# 设置是否开启对主从同步的支持，默认为 "no"
# slaveof <masterip> <masterport>

# 设置主从同步时是否进行数据完整性校验，默认为 "yes"
# repl-diskless-sync no

# 设置在复制时是否进行异步复制，默认为 "yes"，可以加快复制速度，但会增加数据丢失的风险
# repl-backlog-size 1mb

# 设置是否开启集群模式（cluster mode），默认为 "no"
# cluster-enabled no

# 设置集群中的节点超时时间（默认：15000毫秒）
# cluster-node-timeout 15000

# 设置集群中节点间通信使用的端口号（默认：0）
# cluster-announce-port 0

# 设置集群中节点间通信使用的 IP 地址
# cluster-announce-ip 127.0.0.1

# 设置是否开启慢查询日志，默认为 "no"
# slowlog-log-slower-than 10000

# 设置慢查询日志的最大长度，默认为 128
# slowlog-max-len 128

# 设置每秒最大处理的写入命令数量，用于保护 Redis 服务器不被超负荷写入（默认：0，表示不限制）
# maxclients 10000

# 设置最大连接客户端数量（默认：10000，0 表示不限制）
# maxmemory <bytes>

# 设置最大使用内存的策略（默认：noeviction）。可以是 volatile-lru、allkeys-lru、volatile-random、allkeys-random、volatile-ttl 或 noeviction
# maxmemory-policy noeviction

# 设置允许最大使用内存的比例（默认：0），设置为 0 表示禁用
# maxmemory-samples 5
```



### Nacos

```sh
vim standalone-mysql-8.yaml

version: "3.8"
services:
  nacos:
    image: nacos/nacos-server:v2.4.0
    container_name: nacos
    restart: always
    environment:
      - MODE=standalone
      - MYSQL_SERVICE_HOST=localhost
      - MYSQL_SERVICE_PORT=3306
      - MYSQL_SERVICE_USER=root
      - MYSQL_SERVICE_PASSWORD=12345678
      - MYSQL_SERVICE_DB_NAME=nacos_dev
      - MYSQL_SERVICE_DB_PARAM="autoReconnect=true&useUnicode=true&characterEncoding=utf8&zeroDateTimeBehavior=CONVERT_TO_NULL&useSSL=false&serverTimezone=Asia/Shanghai"
    volumes:
      - /usr/local/docker/nacos/conf/:/home/nacos/conf
      - /usr/local/docker/nacos/logs/:/home/nacos/logs
    ports:
      - "8848:8848"
      - "9848:9848"

# 启动容器
docker compose -f ./standalone-mysql-8.yaml up

# 进入容器
docker exec -it nacos /bin/sh

# volumes导致找不到目录异常
# 先取消volumes，启动容器，拷贝出来目录，再重新 docker-compose
docker cp nacos:/home/nacos/conf /usr/local/docker/nacos/
docker cp nacos:/home/nacos/logs /usr/local/docker/nacos/


# 属性配置
https://nacos.io/zh-cn/docs/quick-start-docker.html
```





### easyiamge

> bilibili：https://www.bilibili.com/video/BV1vv4y1P7fd/?spm_id_from=333.788&vd_source=b228bd46ba1fa2f17fbfc85871bb7759
>
> Docker：https://hub.docker.com/r/ddsderek/easyimage
>
> 博客：https://blog.laoda.de/archives/docker-compose-install-easyimage#5-%E6%90%AD%E5%BB%BA%E6%96%B9%E5%BC%8F



```bash
vim docker-compose-easyiamge.yaml

version: '3.3'
services:
  easyimage:
    image: ddsderek/easyimage:latest
    container_name: easyimage
    ports:
      - '8080:80'
    environment:
      - TZ=Asia/Shanghai
      - PUID=1000
      - PGID=1000
      - DEBUG=false
    volumes:
      - '/root/data/docker_data/easyimage/config:/app/web/config'
      - '/root/data/docker_data/easyimage/i:/app/web/i'
    restart: unless-stopped
    
# 给内存设置swap
wget -O box.sh https://raw.githubusercontent.com/BlueSkyXN/SKY-BOX/main/box.sh && chmod +x box.sh && clear && ./box.sh

 docker compose -f ./docker-compose-easyimage.yaml up
```



### xxl-job

1. git clone 源码
2. idea 配置并运行   **xxl-job-admin**  目录下的 Dockerfile

```dockerfile
# Dockerfile
FROM openjdk:8-jre-slim
MAINTAINER h.t.l

ENV PARAMS=""

ENV JAVA_OPTS="-Dspring.config.location=/xxl-job/application.properties"

# 复制配置文件到容器中
COPY ./src/main/resources/application.properties /xxl-job/application.properties
COPY ./src/main/resources/logback.xml /xxl-job/logback.xml

ENV TZ=PRC
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

ADD target/xxl-job-admin-*.jar /app.jar

ENTRYPOINT ["sh","-c","java -jar $JAVA_OPTS /app.jar $PARAMS"]
```

3. 编辑并运行 docker-compose.yml 文件

```bash
# docker-compose.yml
version: '3.6'
services:
  xxl-job:
    image: xxl-job:2.4.1
    container_name: xxl-job
    restart: always
    ports:
      - 9001:8080
    volumes:
      - /srv/docker/xxl-job/logs:/data/applogs/xxl-job
      - /srv/docker/xxl-job=/xxl-job
      
 docker compose -f ./docker-compose.yaml up
 docker exec -it xxl-job /bin/sh
 docker cp xxl-job:/xxl-job /srv/docker
```



访问路径：http://ip:9001/xxl-job-admin/  账户密码 admin/123456

![img](https://images.hicoding.top/i/2024/09/06/112izmx-3.webp)

#### 解决无法正常连接mysql文件

在宿主机中运行 `ifconfg`命令 找到docker的虚拟网卡 ==docker0== 对应的虚拟网卡. [参考文章](https://blog.csdn.net/zcf980/article/details/127273181)

![img](https://images.hicoding.top/i/2024/09/06/112ar0z-3.webp)

### Sentinel

```
docker run --name sentinel \
-p 8080:8080 \
-d hashicorp/sentinel
```





### RabbitMq

```bash
$ docker pull rabbitmq:3.10.5-management

5672 - RabbitMQ server
15672 - GUI

$ docker run  \
      -p 15672:15672   \ 
      -p 5672:5672  \
      -v ~/Docker/mount/rabbitmq/data/:/var/lib/rabbitmq/  \
      -v ~/Docker/mount/rabbitmq/log/:/var/log/rabbitmq/

```



