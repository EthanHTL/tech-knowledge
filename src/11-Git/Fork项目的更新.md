---
title: Fork项目同步原始仓库代码
date: 2024-07-22
order: 2
category:
  - git
tags: null
author: H·T·L
permalink: /01-linux/Git/va1f0ik8/
tag: []
---

## 对Fork的项目进行更新

```sh
# 关联原仓库地址
git remote add upstream git@github.com:地址

# fetch 代码
git fetch upstream

# 合并到main分支
git merge upstream/master
```