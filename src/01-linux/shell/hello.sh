#!/bin/bash

# 定义一个数组
array=("apple" "banana" "cherry" "orange")

# 使用for循环遍历数组
for i in "${array[@]}"
do
    if [[ $i == "banana" ]]; then
        echo "hello $i "
    fi
  echo "这是第 $i 个元素"
done