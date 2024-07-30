---
title: 10-mysql 优化
order: 1
category: []
tag: []
author: H·T·L
date: 2024-07-29
permalink: /03-Java/mysql/4iyh2lyb/
---


# 打印表结构

```sql
SELECT COLUMN_NAME                                            列名,
       COLUMN_COMMENT                                         字段描述,
       if(COLUMN_NAME = 'id', '是', null)                     主键,
       DATA_TYPE                                              类型,
       if(DATA_TYPE = 'bigint', 20, if(DATA_TYPE = 'int', 11, if(DATA_TYPE = 'tinyint', 2, CHARACTER_MAXIMUM_LENGTH))) 长度,
       if(IS_NULLABLE = 'yes', '是', '否')                    可空,
       COLUMN_DEFAULT                                         缺省值
FROM INFORMATION_SCHEMA.COLUMNS
where table_schema = 'ktna-im-plug'
AND table_name = 'im_apply_contact'
```



# 深度分页优化方案

### 使用子查询优化

> 使用子查询来限制需要扫描的行数。通过首先获取要分页的主键，然后再根据这些主键查询实际数据。

```mysql
SELECT * FROM your_table
WHERE id IN (
    SELECT id FROM your_table
    ORDER BY id
    LIMIT 10000, 10
)
ORDER BY id;
```



###  延迟关联（Deferred Join）

> 首先获取主键，然后在主键的基础上进行关联查询。这种方法减少了扫描和排序的行数。

```mysql
SELECT a.* FROM your_table a
JOIN (
    SELECT id FROM your_table
    ORDER BY id
    LIMIT 10000, 10
) b ON a.id = b.id
ORDER BY a.id;
```





### 查看数据库使用大小

```mysql
1.查看所有数据库容量大小

select table_schema                                 as '数据库',
       sum(table_rows)                              as '记录数',
       sum(truncate(data_length / 1024 / 1024, 2))  as '数据容量(MB)',
       sum(truncate(index_length / 1024 / 1024, 2)) as '索引容量(MB)'
from information_schema.tables
group by table_schema
order by sum(data_length) desc, sum(index_length) desc;


 2.查看所有数据库各表容量大小

select table_schema                            as '数据库',
       table_name                              as '表名',
       table_rows                              as '记录数',
       truncate(data_length / 1024 / 1024, 2)  as '数据容量(MB)',
       truncate(index_length / 1024 / 1024, 2) as '索引容量(MB)'
from information_schema.tables
order by data_length desc, index_length desc;

```









