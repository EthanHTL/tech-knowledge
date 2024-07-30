---
title: C和C++环境
order: 1
category: []
tag: []
author: H·T·L
date: 2024-07-29
permalink: /00-setting/vscode/slazsjse/
---


## 依赖

```bash
sudo apt install build-essential
sudo apt install gdb
sudo apt install cmake


gdb --version
cmake --version
make --version
g++ --version
gcc --version
```



## 插件

### Code Runner

### C/C++ Extension Pack



## Code Runner设置

```bash
#        "c": "cd $dir && gcc $fileName -o $fileNameWithoutExt && $dir$fileNameWithoutExt && rm $dir$fileNameWithoutExt",
 #       "cpp": "cd $dir && g++ $fileName -o $fileNameWithoutExt && $dir$fileNameWithoutExt && rm $dir$fileNameWithoutExt",
```



### 参考

[${relativeFileDirname} 所有变量](https://code.visualstudio.com/docs/editor/variables-reference)

## tasks.json

```json
{
    "tasks": [
        {
            "type": "cppbuild",
            "label": "build active file",
            "command": "/usr/bin/gcc",  // /usr/bin/g++  c或c++ 程序看情况切换
            "args": [
                "-fdiagnostics-color=always",
                "-g",
                "${file}",
                "-o",
                "${workspaceRoot}/out/${relativeFileDirname}/${fileBasenameNoExtension}"
            ],
            "options": {
                "cwd": "${fileDirname}"
            },
            "problemMatcher": [
                "$gcc"
            ],
            "group": {
                "kind": "build",
                "isDefault": true
            },
            "detail": "调试器生成的任务。"
        }
    ],
    "version": "2.0.0"
}
```

## launch.json

```json
{
    // 使用 IntelliSense 了解相关属性。 
    // 悬停以查看现有属性的描述。
    // 欲了解更多信息，请访问: https://go.microsoft.com/fwlink/?linkid=830387
    "version": "0.2.0",
    "configurations": [
        {
            "name": "C/C++ 调试",
            "type": "cppdbg",
            "request": "launch",
            "program": "${workspaceRoot}/out/${relativeFileDirname}/${fileBasenameNoExtension}",
            "args": [],
            "stopAtEntry": false,
            "cwd": "${fileDirname}",
            "environment": [],
            "externalConsole": false,
            "MIMode": "gdb",
            "miDebuggerArgs": "-q -ex quit; wait() { fg >/dev/null; }; /bin/gdb -q --interpreter=mi",
            "setupCommands": [
                {
                    "description": "为 gdb 启用整齐打印",
                    "text": "-enable-pretty-printing",
                    "ignoreFailures": true
                },
                {
                    "description": "将反汇编风格设置为 Intel",
                    "text": "-gdb-set disassembly-flavor intel",
                    "ignoreFailures": true
                }
            ],
            "preLaunchTask": "build active file",
        },
    ]
}
```

## hello.cpp

```c++
#include <iostream>
#include <vector>
#include <string>

using namespace std;

int main()
{
    vector<string> msg {"Hello", "C++", "World", "from", "VS Code", "and the C++ extension!"};
    for (const string& word : msg)
    {
        cout << word << " ";
    }
    cout << endl;
}
```

## Hello.c

```c
#include <stdio.h>
int main(void)
{
    int dogs = 10;
    
    printf("How many dogs do you have?\n");
    // scanf("%d", &dogs);
    printf("So you have %d dog(s)! 模拟好多家\n", dogs);
    
    return 0;
}
```

## ssh连接Ubuntu

https://blog.csdn.net/qq_44571245/article/details/123031276





