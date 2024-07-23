---
title: Fork项目
author: H·T·L
date: 2024-07-22
order: 2
category: []
tag: []
permalink: /01-linux/Git/va1f0ik8/
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