---
title: Ubuntu
date: 2024-07-07
category: []
tags: null
author: H T L
order: 1
permalink: /01-linux/9web2dks/
tag: []
---



# Ubuntu

## ARM 版安装

1. 安装server版，再升级桌面版

server版：https://ubuntu.com/download/server/arm

[安装教程 blog01](https://zhuanlan.zhihu.com/p/360887952)

[[单元测试]]

[[top命令.md]]

[[单元测试]]

[top命令](top命令.md#^说明)

### 注册页面

【Your name | 您的姓名】： 计算机登录时，显示的名字，登录之后就没什么用了

【Your computer’s name | 计算机名】： hostname ，shell终端的命令提示符格式： **user@hostname:~$:** 

【Pick a username | 选择一个用户名】：user，当前登录的用户名

【Password】: user对应的登录密码

![image-20240729115705150](http://images.hicoding.top/i/2024/07/29/j4w623-2.webp)

### 修改hostname

```sh
// 方法一 修改文件
$ sudo gedit /etc/hostname

// 方法二 命令方式
$ hostnamectl set-hostname 新的hostname

$ hostnamectl 
 Static hostname: srv
 Icon name: computer-vm
 Chassis: vm
 Machine ID: 99cd64b1517b4b638a72cb7cb8c529c4
 Boot ID: fa60210b05ca4371a1a0d54907ccdb88
 Virtualization: parallels
 Operating System: Ubuntu 22.04.5 LTS
 Kernel: Linux 5.15.0-125-generic
 Architecture: arm64
 Hardware Vendor: Parallels International GmbH.
 Hardware Model: Parallels ARM Virtual Machine
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



### 安装所需的桌面环境。

例如，要安装Gnome桌面环境，请运行：

sudo apt-get install ubuntu-desktop

如果您希望安装一个轻量级的桌面环境，如XFCE，可以运行：

sudo apt-get install xubuntu-desktop

对于KDE桌面环境，则运行：

sudo apt-get install kubuntu-desktop

4安装完成后，您可以通过执行以下命令进入图形界面：

startx

也可以重新启动系统以使更改生效：

   sudo reboot


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

