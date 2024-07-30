---
title: top
order: 1
category: []
tag: []
author: H·T·L
date: 2024-07-29
permalink: /01-linux/z9dk5zfe/
---
# top命令



## 命令参数

> -b 批处理
>
> -c 显示完整的治命令
>
> -I 忽略失效过程
>
> -s 保密模式
>
> -S 累积模式
>
> -i<时间> 设置间隔时间
>
> -u<用户名> 指定用户名
>
> -p<进程号> 指定进程
>
> -n<次数> 循环显示的次数

#### 参考博客

https://linuxtools-rst.readthedocs.io/zh-cn/latest/tool/top.html

## 效果

<img src="https://cdn.jsdelivr.net/gh/EthanHTL/picture-repository/blog/top_commond.png" style="zoom: 33%;" />

## 说明

#### 第一行

> **任务队列信息，同 uptime 命令的执行结果** 
>
> 参数说明如下：
>
> 15:30:44 — 当前系统时间
>
> up 65 days, 5:10 — 系统已经运行了65天5小时10分钟（在这期间系统没有重启过的吆！）
>
> 1 users — 当前有1个用户登录系统
>
> load average: 1.94,2.04, 1.80 — load average后面的三个数分别是1分钟、5分钟、15分钟的负载情况。
>
> load average数据是每隔5秒钟检查一次活跃的进程数，然后按特定算法计算出的数值。如果这个数除以逻辑CPU的数量，结果高于5的时候就表明系统在超负荷运转了。



#### 第二行

> **Tasks — 任务（进程）** 具体信息说明如下：
>
> 系统现在共有187个进程，其中处于运行中的有1个，183个在休眠（sleep），stoped状态的有3个，zombie状态（僵尸）的有0个。



#### 第三行

> **cpu状态信息**
>
> 具体信息说明如下：
>
> 5.9%us — 用户空间占用CPU的百分比。
>
> 3.4% sy — 内核空间占用CPU的百分比。
>
> 0.0% ni — 改变过优先级的进程占用CPU的百分比
>
> 90.4% id — 空闲CPU百分比
>
> 0.0% wa — IO等待占用CPU的百分比
>
> 0.0% hi — 硬中断（Hardware IRQ）占用CPU的百分比
>
> 0.2% si — 软中断（Software Interrupts）占用CPU的百分比
>
> **备注：在这里CPU的使用比率和windows概念不同，需要理解linux系统用户空间和内核空间的相关知识！**



#### 第四行

> **内存状态**
>
> 具体信息说明如下：
>
> 32949016k total — 物理内存总量（32GB）
>
> 14411180k used — 使用中的内存总量（14GB）
>
> 18537836k free — 空闲内存总量（18GB）
>
> 169884k buffers — 缓存的内存量 （169M）

#### 第五行

> **swap交换分区信息**
>
> 具体信息说明如下：
>
> 32764556k total — 交换区总量（32GB）
>
> 0k used — 使用的交换区总量（0K）
>
> 32764556k free — 空闲交换区总量（32GB）
>
> 3612636k cached — 缓冲的交换区总量（3.6GB）

备注：

第四行中使用中的内存总量（used）指的是现在系统内核控制的内存数，空闲内存总量（free）是内核还未纳入其管控范围的数量。纳入内核管理的内存不见得都在使用中，还包括过去使用过的现在可以被重复利用的内存，内核并不把这些可被重新使用的内存交还到free中去，因此在linux上free内存会越来越少，但不用为此担心。

如果出于习惯去计算可用内存数，这里有个近似的计算公式：第四行的free + 第四行的buffers + 第五行的cached，按这个公式此台服务器的可用内存：18537836k +169884k +3612636k = 22GB左右。

对于内存监控，在top里我们要时刻监控第五行swap交换分区的used，如果这个数值在不断的变化，说明内核在不断进行内存和swap的数据交换，这是真正的内存不够用了。



#### **第六行**

> 空行



#### **第七行**

> **各进程（任务）的状态监控**
>
> 项目列信息说明如下：
>
> PID — 进程id
>
> USER — 进程所有者
>
> PR — 进程优先级
>
> NI — nice值。负值表示高优先级，正值表示低优先级
>
> VIRT — 进程使用的虚拟内存总量，单位kb。VIRT=SWAP+RES
>
> RES — 进程使用的、未被换出的物理内存大小，单位kb。RES=CODE+DATA
>
> SHR — 共享内存大小，单位kb
>
> S — 进程状态。D=不可中断的睡眠状态 R=运行 S=睡眠 T=跟踪/停止 Z=僵尸进程
>
> %CPU — 上次更新到现在的CPU时间占用百分比
>
> %MEM — 进程使用的物理内存百分比
>
> TIME+ — 进程使用的CPU时间总计，单位1/100秒
>
> COMMAND — 进程名称（命令名/命令行）



## 实例



#### 实例1

**命令：**  top



#### 实例2：显示完整命令

**命令：**  top -c

**输出：**

   ![img](https://images.cnblogs.com/cnblogs_com/peida/top6.png)



#### 实例3：以批处理模式显示程序信息

**命令：**  top -b



#### 实例4：以累积模式显示程序信息

**命令：**  top -S



#### 实例5：设置信息更新次数

**命令：**  top -n 2

**说明：**

​	表示更新两次后终止更新显示



#### 实例6：设置信息更新时间

**命令：**  top -d 3

**说明：**

表示更新周期为3秒



#### 实例7：显示指定的进程信息

**命令：**  top -p 574

**输出：**

![img](https://images.cnblogs.com/cnblogs_com/peida/top7.png)

#### 实例7：显示进程中的线程

**命令：**  top -Hp 574



## 其他使用技巧



####  1.多U多核CPU监控

 ​	在top基本视图中，按键盘数字“1”，可监控每个逻辑CPU的状况

 <img src="https://images.cnblogs.com/cnblogs_com/peida/top1.jpg"  />

 



####  2.高亮显示当前运行进程

 ​	敲击键盘“b”（打开/关闭加亮效果），top的视图变化如下：

<img src="https://images.cnblogs.com/cnblogs_com/peida/top2.png"  />

我们发现进程id为2570的“top”进程被加亮了，top进程就是视图第二行显示的唯一的运行态（runing）的那个进程，可以通过敲击“y”键关闭或打开运行态进程的加亮效果。



#### **3.**进程字段排序

敲击键盘“x”（打开/关闭排序列的加亮效果），top的视图变化如下：

​	<img src="https://images.cnblogs.com/cnblogs_com/peida/top4.png"  />可以看到，top默认的排序列是“%CPU”。



#### 4.通过”shift + >”或”shift + <”可以向右或左改变排序列

​	下图是按一次”shift + >”的效果图,视图现在已经按照%MEM来排序。

​    <img src="https://images.cnblogs.com/cnblogs_com/peida/top5.png"  />

## 交互操作指令



- q：退出top命令
- 空格：立即刷新
- s：设置刷新时间间隔
- c：显示命令完全模式
- t:：显示或隐藏进程和CPU状态信息
- m：显示或隐藏内存状态信息
- l：显示或隐藏uptime信息
- f：增加或减少进程显示标志
- S：累计模式，会把已完成或退出的子进程占用的CPU时间累计到父进程的MITE+
- P：按%CPU使用率排行
- T：按MITE+排行
- M：按%MEM排行
- u：指定显示用户进程
- r：修改进程renice值
- kkill：进程
- i：只显示正在运行的进程
- W：保存对top的设置到文件^/.toprc，下次启动将自动调用toprc文件的设置。
- h：帮助命令。
- q：退出


