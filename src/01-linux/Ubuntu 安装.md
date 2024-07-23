---
title: Ubuntu
date: 2024-07-07
permalink: /01-linux/9web2dks/
category: []
tag: []
author: H T L
order: 1
---



# Ubuntu

## ARM 版安装

1. 安装server版，再升级桌面版

server版：https://ubuntu.com/download/server/arm

[安装教程 blog01](https://zhuanlan.zhihu.com/p/360887952)



### 注册页面



【Your name | 您的姓名】： 计算机登录时，显示的名字，登录之后就没什么用了

【Your computer’s name | 计算机名】： hostname ，shell终端的命令提示符格式： **user@hostname:~$:** 

【Pick a username | 选择一个用户名】：user，当前登录的用户名

【Password】: user对应的登录密码

### 修改hostname

```sh
sudo gedit /etc/hostname
```



### 查看系统信息

https://blog.csdn.net/weixin_41010198/article/details/109166131



```sh
# 查看内核版本
cat /proc/version
uname -a
uname -r

#查看linux版本信息
lsb_release -a
cat /etc/issue

#查看linux是64为还是32位
getconf LONG_BIT
file /bin/ls

#直接查看系统的架构
dpkg --print-architecture
arch
file /lib/systemd/systemd
```



### vscode远程连接Ubuntu

使用 `Remote - SSH  `插件

#### 配置免密登录

https://blog.csdn.net/qq_44571245/article/details/123031276





## jdk多版本版本

> 安装： sudo apt install openjdk-11-jdk  
>
> ​	sudo apt install openjdk-8-jdk 
>
> 切换：sudo update-alternatives --config java
>



## 阿里云安装Docker

https://help.aliyun.com/zh/ecs/use-cases/install-and-use-docker-on-a-linux-ecs-instance#66d574ec8a717

```sh
sudo systemctl start docker     #运行Docker守护进程
sudo systemctl stop docker      #停止Docker守护进程
sudo systemctl restart docker   #重启Docker守护进程
sudo systemctl enable docker    #设置Docker开机自启动
sudo systemctl status docker    #查看Docker的运行状态
```