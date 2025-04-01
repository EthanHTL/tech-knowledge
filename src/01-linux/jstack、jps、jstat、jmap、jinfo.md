---
title: jstack、jps、jstat、jmap、jinfo
order: 1
category: []
tag: []
author: H·T·L
date: 2024-07-01
permalink: /01-linux/wulcrabq/
---


# jstack

```turtle
 Usage:
     jstack [-l] <pid>
         (to connect to running process)
     jstack -F [-m] [-l] <pid>
         (to connect to a hung process)
     jstack [-m] [-l] <executable> <core>
         (to connect to a core file)
     jstack [-m] [-l] [server_id@]<remote server IP or hostname>
         (to connect to a remote debug server)

 Options:
     -F  to force a thread dump. Use when jstack <pid> does not respond (process is hung)  当正常输出的请求不被响应时，强制输出线程堆栈
     -m  to print both java and native frames (mixed mode) 如果调用到本地方法的话，可以显示C/C++的堆栈
     -l  long listing. Prints additional information about locks 除堆栈外，显示关于锁的附加信息，在发生死锁时可以用jstack -l pid来观察锁持有情况
     -h or -help to print this help message

```
### 参数说明：

- -F 当 ‘jstack [-l] pid’ 没有响应的时候强制打印栈信息，如果直接jstack无响应时，用于强制jstack，一般情况下无需使用
- -l 长列表 打印关于锁定附加信息，例如属于：java.util.concurrent的ownable synchronizers列表会使jvm停顿的长久的多，
- -m 打印java和native c/c++ 框架的所有栈信息.可以打印JVM的堆栈,显示上Native的栈帧，一般应用排查不需要使用



案例1： jstack -gcutil $pid 100

# Jps



> 命令格式：jps [options ] [ hostid ] 
>
> 
>
> [options]选项 ：
>
> - `-q`：不显示主类名称、JAR文件名和传递给主方法的参数，只显示本地虚拟机唯一ID。
> - `-mlvV`：我们可以指定这些参数的任意组合。
> - - `-m`：显示Java虚拟机启动时传递给main()方法的参数。
> - - `-l`：显示主类的完整包名，如果进程执行的是JAR文件，也会显示JAR文件的完整路径。
> - - `-v`：显示Java虚拟机启动时传递的JVM参数。
> - - `-V`：不显示主类名称、JAR文件名和传递给主方法的参数，只显示本地虚拟机唯一ID。
> - `hostid`：指定的远程主机，可以是ip地址和域名, 也可以指定具体协议，端口。如果不指定，则显示本机的Java虚拟机的进程信息。
> - `-help`：显示jps命令的帮助信息。



> jps –l:输出主类或者jar的完全路径名
>
> jps –v :输出jvm参数
>
> jps –q ：仅仅显示java进程号



# jstat

动态观察gc情况：jstat -gc 进程号  刷新毫秒数



# jmap

> 进入容器
>
> docker exec -it ktna-youth-mental-health-webapi-9201 bash
>
> 
>
> 查看java线程
>
> top 
>
> 
>
> 查看堆内存中的对象分布情况 
>
> jmap -histo pid | head -n 10







