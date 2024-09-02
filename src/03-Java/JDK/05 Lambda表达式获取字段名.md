---
title: 05 Lambda表达式获取字段名
order: 1
category:
  - Java
tag:
  - Java
  - Lambda
author: H·T·L
date: 2024-09-02
permalink: /03-Java/JDK/3p6mmo4o/
---



# Lambda表达式获取字段名



## 背景

> 参考 Mybatis-Plus 实现通过Lambda的方式获取字段名、方法名、类名

```java
// mybati plus 查询实例
this.lambdaQuery()
        .eq(User::getName, dto.getName())
        .eq(User::getPhone, dto.getPhone())
        .list();
```



### 原理

如果生成的lambda类需要实现java.io.Serializable的话，那么在生成的lambda实现类中，就会有一个名为writeReplace的方法来作该lambda类的序列化支持（直观的，可见下面的示例）。writeReplace的返回值是SerializedLambda，我们通过反射调用拿到writeReplace返回的SerializedLambda对象后，就可以获得你所写的lambda表达式中所涉及到的类、方法等信息了（看一下SerializedLambda的构造，就知道可以拿到哪些东西了）：

![SerializedLambda类](https://images.hicoding.top/i/2024/09/02/n6x7g6-3.webp)



## SFunction 接口

```java
import java.io.Serializable;
import java.lang.invoke.SerializedLambda;
import java.util.function.Function;

/**
 * 集成了{@link Serializable}能力的{@link Function}
 * <pre>
 * 当然，获得{@link SerializedLambda}，不一定非要使用Function，使用其他的{@link FunctionalInterface}也行，
 * 只要保证以下两点即可：
 * 1. 会生成lambda实现类
 * 2. 生成的lambda实现类要实现Serializable
 * 注：如果只是获取SerializedLambda实例本身，那么除了上述FunctionalInterface的方式外，还可以通过其它方式获得（如：序列化/反序列化等）。
 * </pre>
 *
 * @author h.t.l
 * @since 2024/8/30 10:39
 */
public interface SFunction<T, R> extends Function<T, R>, Serializable {
}
```



## Person 类

```java
import lombok.Data;

import java.io.Serializable;

@Data
// @SuppressWarnings("all")
public class Person{

    private String name;

    private String nickName;
}
```



## SerializedLambdaUtil 工具类

::: code-tabs#java

@tab v1 自定义封装
```java:line-numbers
// SerializedLambdaUtil.class
<!-- @include: ./SerializedLambdaUtil_V1.java -->
```

@tab:active v2 MyBatis-Plus 封装
```java:line-numbers
// SerializedLambdaUtil.class
<!-- @include: ./SerializedLambdaUtil_V2.java -->
```

:::


## main 测试

```java
    public static void main(String[] args) {
        /* ------------------------- 测试 SerializedLambdaUtil工具类 ------------------------- */
        System.out.println();
        System.out.println("通过FunctionalInterface方式，获得字段名：" + SerializedLambdaUtil.getFieldName(Person::getName));
        System.out.println("通过FunctionalInterface方式，获得字段名：" + SerializedLambdaUtil.getFieldName(Person::getNickName));
    }

// 输出结果
通过FunctionalInterface方式，获得字段名：name
通过FunctionalInterface方式，获得字段名：nickName
```

### dump出 *Lambda* 运行时生成Class

1. JDK 8 （硬编码方式）

> static {
>     System.setProperty("jdk.internal.lambda.dumpProxyClasses", ".");
> }

2. JDK 11 （ jvm参数方式）*硬编码无效,原因是模块化导致的*

>  jvm参数: -Djdk.internal.lambda.dumpProxyClasses=/target/lambda-classes


## Lambda生成类 - 反编译后的源码

```java
//
// Source code recreated from a .class file by IntelliJ IDEA
// (powered by FernFlower decompiler)
//

package com.jdk.lombok.functionalInterface;

import java.lang.invoke.SerializedLambda;
import java.lang.invoke.LambdaForm.Hidden;

// $FF: synthetic class
final class MainTests$$Lambda$1 implements SFunction {
    private MainTests$$Lambda$1() {
    }

    @Hidden
    public Object apply(Object var1) {
        return ((Person)var1).getName();
    }

    private final Object writeReplace() {
        return new SerializedLambda(MainTests.class,
                                    "com/jdk/lombok/functionalInterface/SFunction",
                                    "apply", 
                                    "(Ljava/lang/Object;)Ljava/lang/Object;",
                                    5,
                                    "com/jdk/lombok/functionalInterface/Person",
                                    "getName",
                                    "()Ljava/lang/String;",
                                    "(Lcom/jdk/lombok/functionalInterface/Person;)Ljava/lang/Object;",
                                    new Object[0]);
    }
}
```

## 涉及源码核心类

- java.lang.invoke.LambdaMetafactory 
- java.lang.invoke.InnerClassLambdaMetafactory
- java.io.Serializable
- java.lang.invoke.SerializedLambda
- java.util.function.Function
- java.lang.FunctionalInterface

## 参考文章

[[1] 17775334](https://www.cnblogs.com/ludangxin/p/17775334.html)

[[2] 124059375](https://blog.csdn.net/justry_deng/article/details/124059375)





