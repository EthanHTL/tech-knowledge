---
title: IDEA设置
order: 1
category: []
tag: []
author: H·T·L
date: 2024-07-29
permalink: /00-setting/IDE/p1yc2xqk/
---



> mac中idea配置（字体、插件、外观）目录：**/Users/aurora/Library/Application Support/JetBrains**
>
> window版本： C:\Users\Administrator\AppData\Roaming\JetBrains\IntelliJIdea2021.1\options

## 自定义代码片段

> Setting => Editor => Live Templates

### 方法注释

```groovy
*
 * Description: $desc$
 *
 $param$
 * @return $return$
 * @author h.t.l
 */
 
 
// param 参数
groovyScript("def result=''; def params=\"${_1}\".replaceAll('[\\\\[|\\\\]|\\\\s]', '').split(',').toList(); for(i = 0; i < params.size(); i++) {result+='* @param ' + params[i] + ((i < params.size() - 1) ? '\\n\\t ' : '')}; return result", methodParameters())

// return
methodReturnType()
```

### 类注释

```groovy
/**
 * $Description$
 * 
 * @author h.t.l
 * @since $date$ $time$
 */
```

### Log注释

```groovy
// loge
log.error($content$,$params$);
content 参数：
groovyScript("def params = _2.collect {'【'+it+' = {}】'}.join(', '); return '\"' + _1 + '() called with exception => ' + (params.empty  ? '' : params) + '\"'", methodName(), methodParameters())
params参数：
groovyScript("def params = _1.collect {it}.join(', '); return   (params.empty  ? '' : params) + ',e' ",  methodParameters())

// logm
log.info($content$,$params$);
content参数：
groovyScript("def params = _2.collect {'【'+it+' = {}】'}.join(', '); return '\"' + _1 + '() called with parameters => ' + (params.empty  ? '' : params) + '\"'", methodName(), methodParameters())
params参数：
groovyScript("def params = _1.collect {it}.join(', '); return   (params.empty  ? '' : params) ",  methodParameters())

```



## 自定义文件模板

> Setting => Editor => File and Code Templates



### 类注释

```java
// Java Header

/**
 * ${DESC}
 *
 * @author h.t.l
 * @since ${DATE} ${TIME}
 */
```



### mapper文件

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE mapper PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN" "http://mybatis.org/dtd/mybatis-3-mapper.dtd">
<mapper namespace="">

</mapper>
```



### Spring Bean XML 文件

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xmlns:context="http://www.springframework.org/schema/context"
       xsi:schemaLocation="http://www.springframework.org/schema/beans
    http://www.springframework.org/schema/beans/spring-beans.xsd http://www.springframework.org/schema/context https://www.springframework.org/schema/context/spring-context.xsd">


</beans>
```



## 代码提示忽略大小写

![image-20211119232453620](http://images.hicoding.top/i/2024/07/29/ioy615-2.webp)

## 注释不顶行

![注释不顶行](http://images.hicoding.top/i/2024/07/29/iq6gqq-2.webp)

## 生成 Serializable 序列化 UID 的快捷键

> Settings  =>  Editor => Inspections 
>
> Serializable class without 'serialVersionUID'



## 设置方法入参颜色不同

![方法入参颜色](http://images.hicoding.top/i/2024/07/29/isyd8b-2.webp)

## 设置Git提示信息显示

![image-20240729113856543](http://images.hicoding.top/i/2024/07/29/itvcd8-2.webp)

