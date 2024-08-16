---
title: Https证书
order: 2
category:
  - nginx
  - https
tag: []
author: H·T·L
date: 2024-08-16
permalink: /03-Java/Nginx/bv47bs4a/
---


## Https证书

### 免费SSL证书

#### ohttps 

[官网 https://ohttps.com](https://ohttps.com)

**步骤**

1. 控制台 => 【证书管理】 =>【创建证书】

<img src="http://images.hicoding.top/i/2024/08/16/ih3909-2.webp" alt="image-20240816111647312" style="zoom:33%;" />

2. 控制台 => 【DNS授权】 => 【添加授权】

》[配置阿里云DNS授权](https://ohttps.com/docs/dns/aliyun)

<img src="http://images.hicoding.top/i/2024/08/16/iiww1i-2.webp" alt="image-20240816112015230" style="zoom:33%;" />

3. 控制台 => 【部署节点】 => 【添加节点】

》[配置阿里云SSL](https://ohttps.com/docs/cloud/aliyun/ssl)

<img src="http://images.hicoding.top/i/2024/08/16/imovv0-2.webp" alt="部署节点" style="zoom:33%;" />

<img src="http://images.hicoding.top/i/2024/08/16/in1rkk-2.webp" alt="配置阿里云SSL" style="zoom:33%;" />

4. 阿里云配置SSL证书部署任务 - 云服务器部署

<img src="https://images.hicoding.top/i/2024/08/16/oyj0mo-3.webp" alt="阿里云-数字证书管理" style="zoom:33%;" />

<img src="https://images.hicoding.top/i/2024/08/16/ozazt2-3.webp" alt="云服务器部署" style="zoom:33%;" />

5. 配置nginx

```nginx
# 修改conf.d 目录下的 default.conf 文件
server {
    listen 443 ssl;

    #填写证书绑定的域名
    server_name  <yourdomain>;

     #填写证书文件绝对路径
     ssl_certificate cert/<cert-file-name>.pem;
     #填写证书私钥文件绝对路径
     ssl_certificate_key cert/<cert-file-name>.key;
 
	ssl_session_cache shared:SSL:1m;
	ssl_session_timeout 5m;

    #自定义设置使用的TLS协议的类型以及加密套件（以下为配置示例，请您自行评估是否需要配置）
    #TLS协议版本越高，HTTPS通信的安全性越高，但是相较于低版本TLS协议，高版本TLS协议对浏览器的兼容性较差。
    ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:!NULL:!aNULL:!MD5:!ADH:!RC4;
    ssl_protocols TLSv1.1 TLSv1.2 TLSv1.3;

    #表示优先使用服务端加密套件。默认开启
    ssl_prefer_server_ciphers on;

    location / {
        root   html;
        index  index.html index.htm;
    }

}

server {
    listen 80;
    listen  [::]:80;
    #填写证书绑定的域名
    server_name <yourdomain>;
    #将所有HTTP请求通过rewrite指令重定向到HTTPS。
    rewrite ^(.*)$ https://$host$1 permanent;
  
    location / {
        index index.html index.htm;
    }
}
```

#### cerbot