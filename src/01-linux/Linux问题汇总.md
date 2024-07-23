---
title: Linux问题汇总
order: 1
category: []
tag: []
author: H·T·L
date: 2024-07-23
permalink: /01-linux/2kpx6e3p/
---
# Linux 问题汇总

## 修改root账户密码

```bash
sudo passwd
```



## 主机名字太长

```shell
sudo hostnamectl set-hostname <新主机名>
```



## 查看端口占用进程

```bash
# 方式一：lsof命令
lsof -i:{端口号}

# 方式二：netstat命令
netstat -tunlp|grep {port}

# 补充1：根据程序名查看对应的PID
ps -ef | grep {programName}
# 查看详细内存占用
ps aux -u root | grep {programName}

# 补充2：根据PID查看对应的进程
ps -aux |grep -v grep|grep {$PID}
```



## 测试端口的连通性

- [1.telnet](https://www.cnblogs.com/lijinshan950823/p/9376085.html#方法一telnet)

  > telnet ip port


- [2.ssh](https://www.cnblogs.com/lijinshan950823/p/9376085.html#方法二ssh)

  > ssh -v -p port username@ip


- [3.crul](https://www.cnblogs.com/lijinshan950823/p/9376085.html#方法三curl)

  > curl ip:port

- [4.wget](https://www.cnblogs.com/lijinshan950823/p/9376085.html#方法四wget)

  > wget ip:port


- 5.nmap

  > nmap -sU x.x.x.x -p 9002  -Pn
  > 



## 后台运行 java 程序

nohup java -jar xx.jar >/dev/null &
nohup java -jar halo.jar >nohup.out 2>&1 &

 这里的 /dev/null 就是一个黑洞  进去的东西全部会小时



## ssh 远程连接提示“Permission denied, please try again”

#### 问题原因

- ECS实例内禁用root用户登录：SSH服务对应配置文件`/etc/ssh/sshd_config`中的参数`PermitRootLogin`或`PasswordAuthentication`被设置为`no`。您可以参考[禁止root用户登录引起问题的解决方法](https://help.aliyun.com/zh/ecs/support/what-do-i-do-if-the-permission-denied-please-try-again-error-message-appears-when-i-log-on-to-a-linux-instance-as-the-root-user-by-using-ssh#144ae4409775t)解决。
  - `PermitRootLogin`设置为`no`，表示禁用使用root用户登录。
  - `PasswordAuthentication`设置为`no`，表示禁用使用密码方式登录，但是可以使用密钥方式登录。

#### 解决方法

1. 修改/设置 root 账户密码

```shell
sudo passwd root
```



2. 修改ssh配置文件

```bash
vi /etc/ssh/sshd_config
```

修改`PermitRootLogin`和`PasswordAuthentication`参数值配置。

- 如果需要root用户登录，请将`PermitRootLogin`参数值设置为`yes`。
- 如果需要密码方式登录，请将`PasswordAuthentication`参数值设置为`yes`。

3. 重启SSH服务。

```shell
systemctl restart sshd.service
```



## 修去区域时间

最好的方法是使用timedatectl命令

```bash
# timedatectl list-timezones |grep Shanghai    #查找中国时区的完整名称
Asia/Shanghai
# timedatectl set-timezone Asia/Shanghai    #其他时区以此类推
```

或者直接手动创建软链接

```bash
# ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime
```



