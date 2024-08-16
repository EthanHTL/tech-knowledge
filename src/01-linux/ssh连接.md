---
title: SSH 实现免密登录
date: 2024-07-22
permalink: /01-linux/yr0r3xly/
category: []
tag: []
author: H T L
order: 1
---



## ssh 命令

ssh [option] destination [command]

- option
  - `-c`: 指定加密算法. `ssh -c blowfish,3des server.example.com`
  - `-C`: 压缩数据传输. `ssh -C server.example.com`
  - `-d`: 设置打印的 debug 级别, 数值越高内容越详细. `ssh -d 1 foo.com`
  - `-D`: 指定本机的 Socks 监听端口, 该端口收到的请求, 都将转发到远程的 SSH 主机, 又称动态端口转发. `ssh -D 1080 server`
  - `-f`: 表示 ssh 连接在后台进行
  - `-F`: 指定配置文件. `ssh -F /usr/local/ssh/other_config`
  - `-l`: 指定远程登录的账户名. `ssh -l sally server.example.com` (等同于 `ssh sally@server.example.com`)
  - `-L`: 设置本地端口转发. `ssh -L 9999:targetServer:80 user@remoteserver` (所有发向本地 9999 端口的请求, 都会经过 remoteserver 发往 targetServer 的 80 端口, 这就相当于直接连上了 targetServer 的 80 端口.)
  - `-m`: 指定校验数据完整性的算法. `ssh -m hmac-sha1,hmac-md5 server.example.com`
  - `-o`: 用来指定一个配置命令. `ssh -o "User sally" -o "Port 220" server.example.com` (等效于 `ssh -o User=sally -o Port=220 server.example.com`)
  - `-p`: 指定端口
  - `-q`: 安静模式, 不输出任何警告信息
  - `-R`: 指定远程端口转发. `ssh -R 9999:targetServer:902 local` (需在跳板服务器执行, 指定本地计算机 local 监听自己的 9999 端口, 所有发向这个端口的请求, 都会转向 targetServer 的 902 端口.)
  - `-t`: 提供一个互动式 shell
  - `-v`: 显示详细参数, 次数越多越详细. `ssh -vvv server.example.com`
  - `-V`: 输出 ssh 客户端版本 `ssh -V`



## 实现ssh远程连接

```sh
# 客户端生成秘钥
ssh-keygen -t rsa 
ssh-keygen -t rsa -C "Email@qq.com"

# 客户端执行，将公钥复制到服务器
ssh-copy-id htl@10.211.55.3

# ssh连接实现免密登录
ssh user@server_ip
```



## 参考文章

- https://hanleylee.com/articles/connect-remote-server-by-using-ssh-key/

