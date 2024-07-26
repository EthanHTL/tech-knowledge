---
title: Merge和Rebase
author: H·T·L
date: 2024-07-22
order: 3
category: []
tag: []
permalink: /01-linux/Git/g4nwjm1i/
---

# Merge 和 Rebase 功能


## Merge

官网参考：https://git-scm.com/docs/git-merge

> 效果：会保留 merge 记录
```sh
	  A---B---C topic
	 /
    D---E---F---G master
          
          ||

	  A---B---C topic
	 /         \
    D---E---F---G---H master    
```

## Rebase 

官网参考：https://git-scm.com/docs/git-rebase

Bilibili：https://www.bilibili.com/video/BV1Ur4y1q7xB/?spm_id_from=333.788&vd_source=b228bd46ba1fa2f17fbfc85871bb7759

> 效果：会保持一条直线的提交记录，但是会隐藏merge记录
```sh
          A---B---C topic
         /
    D---E---F---G master

          ||

                  A'--B'--C' topic
                 /
    D---E---F---G master
```


## Cherry Pick 功能

> 可以理解为将任何分支的某次提交拿过来，生成一次相同的提交

