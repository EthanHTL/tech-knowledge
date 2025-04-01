---
title: Linux 第一章
order: 1
category: []
tag: []
author: H·T·L
date: 2025-01-08
permalink: /01-linux/g7ip60rg/
---



## 系统管理

### 进程 与 服务

- 计算机中，一个正在执行的程序或命令，被叫做**“进程”（process）**。
- 启动之后一只存在、常驻内存的进程，一般被称作**“服务”（service）**。



### service 服务管理

> 基础语法： service 服务名 start | stop | status | restart
>
> [+] 技巧： 查看服务的方法： /etc/init.d/服务名	

![/etc/init.d](https://images.hicoding.top/i/2024/12/23/qzpp0y-3.webp)

### systemctl 服务管理（重点）

> 基础语法： systemctl  start | stop | status | restart 服务名
>
> [+] 技巧： 查看服务的方法： /usr/lib/systemd/system	

![systemctl](https://images.hicoding.top/i/2024/12/23/r1mo6b-3.webp)

### 系统运行级别

![运行级别](https://images.hicoding.top/i/2024/12/23/r6uorm-3.webp)

**CentOS7 的运行级别简化为：**

- multi-user.target 等价于原运行级别3（多用户有网，无图形界面）
- gqraphical.target 等价于原运行级别5（多用户有网，有图形界面）

**查看当前运行级别：**

```bash
$ systemctl get-detault
graphical.target 
```



**修改当前运行级别**

```bash
$ systemctl set-default TARGET.target（这里 TARGET 取 multi-user 或者 graphical）
```





