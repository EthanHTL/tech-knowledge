---
title: Nodejs
order: 1
category: []
tag: []
author: H·T·L
date: 2024-08-16
permalink: /05-web/e56g0fcc/
---




## Nodejs



### 多版本管理 nvm

```sh
# 查看当前版本
nvm current

# 查看当前已安装版本
nvm ls

# 切换版本
nvm use v18.20.3

# 查看可安装版本
nvm ls-remote

# 只看LTS版本
nvm ls-remote --lts
nvm ls-remote --lts=argon
```

**参考文章**

- https://titangene.github.io/article/nvm.html

### brew 下载 nvm 之后，nvm command not found

#### 临时性生效

```bash
source $(brew --prefix nvm)/nvm.sh
```

#### 永久生效

1. 确定 nvm 下载文件位置

```bash
brew --prefix nvm
```

==/opt/homebrew/opt/nvm==

2. 编辑`.zshrc`配置文件

```bash
export NVM_DIR="$HOME/.nvm"
[ -s "/opt/homebrew/opt/nvm/nvm.sh" ] && \. "/opt/homebrew/opt/nvm/nvm.sh"
[ -s "/opt/homebrew/opt/nvm/etc/bash_completion.d" ] && \. "/opt/homebrew/opt/nvm/etc/bash_completion.d"
```

> 如果前一步得到的地址不对的话，需要在上面的命令进行替换

3. 刷新配置文件

```bash
source  ~/.zshrc
```

