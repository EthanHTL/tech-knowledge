---
title: ++i和i++
order: 1
category: []
tag: []
author: H·T·L
date: 2024-07-29
permalink: /03-Java/JVM/wc8rgjxi/
---
# ++i 和 i++ 区别

https://blog.csdn.net/c15158032319/article/details/78209740



```
public void iPlusPlus(){
    int i = 0;
    i = i++;
}
/**
 * 0 iconst_0 ：将int类型的0值压入操作数栈
 * 1 istore_1： 弹出操作数栈顶的值赋给局部变量表下标为1的变量
 * 2 iload_1： 将局部变量表下标为1的位置存储的值压入操作数栈
 * 3 iinc 1 by 1：取局部变量表下标为1的位置存储的值加上1
 * 6 istore_1：弹出操作数栈顶的值赋给局部变量表下标为1的变量
 * 7 return
 */
public void plusPlusI(){
    int i = 0;
    i = ++i;
}
/**
 * 0 iconst_0
 * 1 istore_1
 * 2 iinc 1 by 1  这里不同
 * 5 iload_1
 * 6 istore_1
 * 7 return
 */
```

