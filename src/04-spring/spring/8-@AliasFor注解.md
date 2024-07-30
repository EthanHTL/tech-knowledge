---
title: 8-@AliasFor注解
order: 1
category: []
tag: []
author: H·T·L
date: 2024-07-29
permalink: /04-spring/spring/t52lklje/
---
# @AliasFor 注解

在源码中经常出现这个注解，所以需要不懂这个注解会很难受

https://www.cnblogs.com/54chensongxia/p/14385621.html



### 源码：

```java
@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.METHOD)
@Documented
public @interface AliasFor {

	/**
	 * Alias for {@link #attribute}.
	 * <p>Intended to be used instead of {@link #attribute} when {@link #annotation}
	 * is not declared &mdash; for example: {@code @AliasFor("value")} instead of
	 * {@code @AliasFor(attribute = "value")}.
	 */
	@AliasFor("attribute")
	String value() default "";

	/**
	 * The name of the attribute that <em>this</em> attribute is an alias for.
	 * @see #value
	 */
	@AliasFor("value")
	String attribute() default "";

	/**
	 * The type of annotation in which the aliased {@link #attribute} is declared.
	 * <p>Defaults to {@link Annotation}, implying that the aliased attribute is
	 * declared in the same annotation as <em>this</em> attribute.
	 */
	Class<? extends Annotation> annotation() default Annotation.class;

}
```

使用限制：

- 互为别名的属性属性值类型，默认值，都是相同的；
- 互为别名的注解必须成对出现，比如 value 属性添加了[@AliasFor](https://github.com/AliasFor)(“path”)，那么 path 属性就必须添加[@AliasFor](https://github.com/AliasFor)(“value”)；
- 另外还有一点，互为别名的属性必须定义默认值。



## 几种使用方式

**1. 在同一个注解中显示使用，将注解中的多个属性互相设置别名**

```java
@Target({ElementType.TYPE, ElementType.METHOD})
@Retention(RetentionPolicy.RUNTIME)
@Documented
@Mapping
public @interface RequestMapping {
    
	@AliasFor("path")
	String[] value() default {};

	@AliasFor("value")
	String[] path() default {};
    
    //...
}
```

为什么要给 value 属性和 path 属相互相设置别名也是有原因的。我们知道在 Spring 中给 value 属性设置值是可以省略属性的，比如可以写成：

```java
RequestMapping("/foo")
```

这样写比较简洁，但是这样可读性不高，我们并不知道 value 属性代表什么意思。如果给这个属相设置一个 path 别名的话我们就知道这个是在设置路径。



**2. 给元注解中的属性设定别名**

```java
@Target(ElementType.TYPE)
@Retention(RetentionPolicy.RUNTIME)
@Documented
@Inherited
@SpringBootConfiguration
@EnableAutoConfiguration
@ComponentScan(excludeFilters = { @Filter(type = FilterType.CUSTOM, classes = TypeExcludeFilter.class),
		@Filter(type = FilterType.CUSTOM, classes = AutoConfigurationExcludeFilter.class) })
public @interface SpringBootApplication {

	@AliasFor(annotation = EnableAutoConfiguration.class)
	Class<?>[] exclude() default {};

	@AliasFor(annotation = EnableAutoConfiguration.class)
	String[] excludeName() default {};
    
	@AliasFor(annotation = ComponentScan.class, attribute = "basePackages")
	String[] scanBasePackages() default {};
    //...
}
```

我们来看 @SpringBootApplication 这个注解，这个注解是有其他几个注解“组合”而成的。下面的代码就是在给@ComponentScan 注解的basePackages属性设置别名scanBasePackages。如果不设置attribute属性的话就是在给元注解的同名属性设置别名。

```java
@AliasFor(annotation = ComponentScan.class, attribute = "basePackages")
String[] scanBasePackages() default {};
```







