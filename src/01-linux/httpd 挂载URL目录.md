---
title: httpd 挂载URL目录
order: 1
category: []
tag: []
author: H·T·L
date: 2024-09-04
permalink: /01-linux/yx7jcgjh/
---

# 使用Apache将目录挂载为可浏览的URL

## 安装Apache

通常CentOS系统已经自带Apache

```bash
sudo yum install httpd
```

## 编辑Apache配置文件

> 配置文件目录：/etc/httpd/conf/httpd.conf

```
Alias /logs/ "/var/logs/"

<Directory "/var/logs/">
    Options Indexes FollowSymLinks
    AllowOverride None
    Order allow,deny
    Allow from all
</Directory>
```

## 重启配置

```bash
/etc/init.d/httpd restart
或者
service httpd restart
```





## 修复图标无法正常显示问题

> 修改配置文件中配置：/etc/httpd/conf/httpd.conf

```conf
Alias /icons/ "/var/www/icons/"

<Directory "/var/www/icons/">
    Options Indexes MultiViews
    AllowOverride None
    Order allow,deny
    Allow from all
</Directory>
```



## 效果

![httpd](https://images.hicoding.top/i/2024/09/04/jwzn0s-3.webp)





