---
article: true
date: 2022-04-13
category:
  - devops
tag:
  - devops
  - ci/cd
head:
  -
    - meta
    -
      name: description
      content: Vercel 中跳过发布
title: skip-ci-for-vercel
author: H T L
---

# 取消 Vercel 发布

在 Github Actions 中，我们可以选择性地 取消 workflow 的执行，比如 在 git message 中 填写 [skip ci] 或者 [ci skip] 即可达到目的。
但是，在 vercel 中，这种方法不起作用。

搜索了一下资料，发现 vercel 中也可以自定义来实现。

- [How do I use the "Ignored Build Step" field on Vercel?](https://vercel.com/support/articles/how-do-i-use-the-ignored-build-step-field-on-vercel)
- [Skip deploys for commits that have [skip-ci] in the name](https://github.com/vercel/vercel/discussions/5765)

```bash
bash -c 'echo "$VERCEL_GIT_COMMIT_MESSAGE" | grep -iE "\[skip ci\]|\[ci skip\]"'
# 单独忽略 docs-ci
# bash -c 'echo "$VERCEL_GIT_COMMIT_MESSAGE" | grep -iE "\[skip (docs-)?ci\]|\[(docs-)?ci skip\]"'
```

<!-- more -->

也可以按照上面写的方式，写一个脚本来做。下面是为了留下记录，所以写了一个比较繁琐的脚本：

```bash
#!/bin/bash

# How do I use the "Ignored Build Step" field on Vercel?
# https://vercel.com/support/articles/how-do-i-use-the-ignored-build-step-field-on-vercel

# Skip deploys for commits that have [skip-ci] in the name
# https://github.com/vercel/vercel/discussions/5765
# 可以在"Ignored Build Step"中直接使用： bash -c 'echo "$VERCEL_GIT_COMMIT_MESSAGE" | grep -iE "\[skip ci\]|\[ci skip\]"'

echo "VERCEL_GIT_COMMIT_REF: $VERCEL_GIT_COMMIT_REF"
echo "VERCEL_GIT_COMMIT_MESSAGE: $VERCEL_GIT_COMMIT_MESSAGE"

# grep通过返回一个状态值来说明搜索的状态，
# 如果模板搜索成功，则返回0，如果搜索不成功，则返回1，
# 如果搜索的文件不存在，则返回2。
# # 过滤message的第一行是否包含[skip ci]或者[ci skip]
# echo "$VERCEL_GIT_COMMIT_MESSAGE" | head -n 1 | grep -iE "\[skip ci\]|\[ci skip\]"

echo "$VERCEL_GIT_COMMIT_MESSAGE" | grep -iE "\[skip ci\]|\[ci skip\]"
# echo "$VERCEL_GIT_COMMIT_MESSAGE" | grep -iE "\[skip (docs-)?ci\]|\[(docs-)?ci skip\]"

if [[ "$?" == "0" ]] ; then
  # Don't build
  echo "🛑 - Build cancelled"
  exit 0;

else
  # Proceed with the build
    echo "✅ - Build can proceed"
  exit 1;
fi

```
