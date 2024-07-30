---
title: mvn start
order: 1
category: []
tag: []
author: H·T·L
date: 2024-07-29
permalink: /03-Java/Maven/wamzpo3a/
---
# Maven

官方（中文）：https://maven.org.cn/index.html

官网：https://maven.apache.org/index.html





## 常见命令

maven 命令除了常用的几个，大部分经常记不住，整理一下，方便查询。

maven 命令的格式为 mvn [plugin-name]:[goal-name]，可以接受的参数如下，
		-D 指定参数，如 -Dmaven.test.skip=true 跳过单元测试；
		-P 指定 Profile 配置，可以用于区分环境；
		-e 显示maven运行出错的信息；
		-o 离线执行命令,即不去远程仓库更新包；
		-X 显示maven允许的debug信息；
		-U 强制去远程更新snapshot的插件或依赖，默认每天只更新一次。

### web项目相关命令

- 启动tomcat：mvn tomcat:run
- 启动jetty：mvn jetty:run
- 运行打包部署：mvn tomcat:deploy
- 撤销部署：mvn tomcat:undeploy
- 启动web应用：mvn tomcat:start
- 停止web应用：mvn tomcat:stop
- 重新部署：mvn tomcat:redeploy
- 部署展开的war文件：mvn war:exploded tomcat:exploded