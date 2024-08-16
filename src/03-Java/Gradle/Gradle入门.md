---
title: Gradle入门
order: 1
category: []
tag: []
author: H·T·L
date: 2024-08-16
permalink: /03-Java/Gradle/mhk4sbl9/
---




## Java 项目



### 项目中的gradlew 脚本

```bash
# 方便直接执行 gradlew 脚本
vim ~/.bash_profile   
alias gradlew="./gradlew"

# 当前项目gradle 版本
gradlew -v 

# 查看所有可用任务
gradlew tasks 

# 查看app子项目的可用任务
gradlew :app:tasks

# 列出所有可用任务
gradlew tasks --all

# 执行任务
gradlew :app:copyTask
```



### 依赖

```bash
# 查看项目依赖项
gradlew :app:dependencies

# 在 build 中查看依赖项
gradlew build --scan
```

> BUILD SUCCESSFUL in 12s
> 22 actionable tasks: 8 executed, 14 up-to-date
>
> Publishing a build scan to scans.gradle.com requires accepting the Gradle Terms of Service defined at https://gradle.com/terms-of-service. Do you accept these terms? [yes, no] yes
>
> Gradle Terms of Service accepted.
>
> Publishing build scan...
> https://gradle.com/s/cm22zzw3shlqk

















