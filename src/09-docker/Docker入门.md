---
title: Docker 入门
date: 2024-07-08
permalink: /03-Java/docker/zb8nini8/
category:
  - 教程
  - VuePress
tag:
  - 配置
  - VuePress
author: H T L
order: 1
---



# Docker 入门



## 网站推荐

入门博客：https://yeasy.gitbook.io/docker_practice

## Docker 安装

**镜像（image）：**

docker镜像就好比是一个模板，可以通过这个模板来创建容器服务，Tomcat镜像==》run ==>tomcat01 容器（提供服务器）

**容器（container）：**

Docker利用容器技术，独立运行一个或者一个组应用，通过镜像来创建的。

启动，停止，删除，基本命令！

**仓库（repository）：**

仓库就是放存镜像的地方

仓库分为公有仓库和私有仓库

Docker Hub （国外的）

阿里云   都有容器服务器（配置镜像加速！)



### 系统环境

```sh
# 系统内核是  3.10 以上的
[root@iZ2zef92trfqu5audi018pZ /]# uname -r
4.18.0-240.15.1.el8_3.x86_64

# 系统版本
[root@iZ2zef92trfqu5audi018pZ /]# cat /etc/os-release 
NAME="CentOS Linux"
VERSION="8"
ID="centos"
ID_LIKE="rhel fedora"
VERSION_ID="8"
PLATFORM_ID="platform:el8"
PRETTY_NAME="CentOS Linux 8"
ANSI_COLOR="0;31"
CPE_NAME="cpe:/o:centos:centos:8"
HOME_URL="https://centos.org/"
BUG_REPORT_URL="https://bugs.centos.org/"
CENTOS_MANTISBT_PROJECT="CentOS-8"
CENTOS_MANTISBT_PROJECT_VERSION="8"
```

### Docker 安装

阿里云安装：https://help.aliyun.com/document_detail/51853.html

卸载旧版本

```sh
# 1、卸载旧的版本
yum remove docker \
        docker-client \
        docker-client-latest \
        docker-common \
        docker-latest \
        docker-latest-logrotate \
        docker-logrotate \
        docker-engine

# 2、需要的安装包
yum install -y yum-utils
# 3、设置镜像的仓库
yum-config-manager \
    --add-repo \
    https://download.docker.com/linux/centos/docker-ce.repo # 默认是国外的
yum-config-manager \
    --add-repo \
    https://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
    https://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo # 阿里云
    
# 4、更新yum索引
yum makecache
# 5、安装docker引擎 docker-ce 社区   ee 企业
yum install docker-ce docker-ce-cli containerd.io

# 6、启动docker
systemctl start docker
# 查看版本
docker version

# 7.测试
$ docker run hello-world

$ docker images
```





### Docker 镜像加速

>  阿里云加速





### Docker 常用命令

#### 帮助命令

```sh
docker version # docker 版本信息
docker info    # 显示docker的系统信息（包括镜像和容器的数量）
docker 命令  --help 
```

























