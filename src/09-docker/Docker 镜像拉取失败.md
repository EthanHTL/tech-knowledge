---
title: Docker 镜像拉取失败
order: 1
category: []
tag: []
author: H·T·L
date: 2024-07-23
permalink: /03-Java/docker/y1wv8npq/
---



## Docker 国内被墙，镜像拉取失败

> 参考博客（测试有效）：https://blog.xiaoz.org/archives/19759
>
> 参考博客：https://cloud.tencent.com/developer/article/2429585



```sh
# 创建目录
sudo mkdir -p /etc/docker
# 写入镜像配置
sudo tee /etc/docker/daemon.json <<-'EOF'
{
    "registry-mirrors": [
        "https://docker.m.daocloud.io",
        "https://dockerproxy.com",
        "https://docker.mirrors.ustc.edu.cn",
        "https://docker.nju.edu.cn"
    ]
}
EOF
# 重启docker服务
sudo systemctl daemon-reload
sudo systemctl restart docker
```

