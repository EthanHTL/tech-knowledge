---
title: Git回退代码操作
order: 4
category:
  - Git
tag:
  - Git
author: H·T·L
date: 2024-07-22
permalink: /01-linux/Git/eruzd381/
---


# Git中的Revert和Reset

## Revert
> 撤销某一次或某几次代码
> 原理：通过逆向生成实现，  eg.  新增代码 -> 删除代码
> 效果：会生成一条Revert的Git日志
> 撤销：如需撤销某次Revert，只需要对该次Revert再次Revert即可

## Reset
> 操作：Reset Current Branch To Here...
> Tips: 不管那种模式,因与远程分支版本落后，必须使用 Force Push进行提交

### 四个模式

Soft: 不改变工作目录和暂存区,将被回退的提交放入暂存区

mixed: 清空暂存区,将回退的变更和暂存区中的内容都放入工作目录

hard: 清空被回退的提交、暂存区和工作目录

keep: 保留本地的变更, 清除被回退的提交记录

