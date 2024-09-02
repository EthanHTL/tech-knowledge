---
title: Mybatis 缓存
order: 1
category: []
tag: []
author: H·T·L
date: 2024-08-20
permalink: /03-Java/MyBatis/jvv5aabk/
---





## 1. 一级缓存

## 1.1 一级缓存简介

一级缓存是SqlSession级别的缓存，即同一个SqlSession对象中，对同一个Mapper接口的调用，第一次调用会查询数据库，并将结果缓存到SqlSession中，第二次调用会直接从缓存中获取数据，而不会再次查询数据库。
<!-- more -->

## 1.2 一级缓存的工作原理   
一级缓存的工作原理如下：

1. 当执行一个查询语句时，MyBatis会首先检查一级缓存中是否已经存在该查询的结果。如果存在，则直接从缓存中返回结果，否则继续执行查询操作。
2. 查询结果被存储到一级缓存中，以便后续的查询可以直接从缓存中获取结果。
3. 当执行一个更新操作（如插入、更新或删除）时，一级缓存会被清空，因为更新操作可能会改变数据库中的数据，导致缓存中的数据不再准确。
4. 当关闭SqlSession时，一级缓存会被清空。
## 1.3 一级缓存的配置

MyBatis默认开启一级缓存，无需额外配置。如果需要关闭一级缓存，可以在MyBatis的配置文件中添加以下配置：

```xml
<setting name="localCacheScope" value="STATEMENT"/>
```

其中，`localCacheScope`的值为`STATEMENT`表示关闭一级缓存。

## 1.4 一级缓存的注意事项