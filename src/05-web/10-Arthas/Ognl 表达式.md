---
title: Arthas 中 ognl 使用
order: 1
category: []
tag: []
author: H·T·L
date: 2024-09-04
permalink: /03-Java/live0qih/
---




## 参考文章

[[1] ognl表达式官网](https://commons.apache.org/dormant/commons-ognl/language-guide.html)

[[2] jueee.github.io](https://jueee.github.io/2020/08/2020-08-15-Ognl%E8%A1%A8%E8%BE%BE%E5%BC%8F%E7%9A%84%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8%E6%96%B9%E6%B3%95/) 

## 特殊用法

[[1] arthas特殊用法](https://github.com/alibaba/arthas/issues/71)


```bash
# 查看第一个参数
$ watch com.taobao.container.Test test "params[0].size()"
Press Ctrl+C to abort.
Affect(class-cnt:1 , method-cnt:1) cost in 22 ms.
@Integer[40]

# 按条件过滤
$ watch com.taobao.container.Test test "{params}" "params[0].{? #this.name == null }.size()>0" -x 2
Press Ctrl+C to abort.
Affect(class-cnt:1 , method-cnt:1) cost in 27 ms.
@ArrayList[
    @Pojo[
        name=null,
        age=@Integer[32],
        hobby=null,
    ],
]
@ArrayList[
    @Pojo[
        name=null,
        age=@Integer[31],
        hobby=null,
    ],
]

```

