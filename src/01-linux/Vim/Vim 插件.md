---
title: Vim 插件
order: 2
category:
  - Vim
tag:
  - 插件
author: H·T·L
date: 2024-09-08
permalink: /01-linux/Vim/gmmfg4of/
prev: /01-linux/Vim/es3yzyke/
next: false
---



## IdeaVim 插件集合

官网：[https://github.com/JetBrains/ideavim/wiki/IdeaVim-Plugins](https://github.com/JetBrains/ideavim/wiki/IdeaVim-Plugins)

## vim-easymotion

> IDEA need Install [IdeaVim-EasyMotion](https://plugins.jetbrains.com/plugin/13360-ideavim-easymotion/) and [AceJump](https://plugins.jetbrains.com/plugin/7086-acejump/) plugins

https://github.com/easymotion/vim-easymotion

```bash
let mapleader=","
set easymotion
```



## NERDTree 

https://github.com/JetBrains/ideavim/wiki/NERDTree-support

| Key     | Description                                                  | Map Setting                    |
| ------- | :----------------------------------------------------------- | :----------------------------- |
| `o`     | Open files, directories and bookmarks                        | `g:NERDTreeMapActivateNode`    |
| `go`    | Open selected file, but leave cursor in the NERDTree         | `g:NERDTreeMapPreview`         |
| `t`     | Open selected node/bookmark in a new tab                     | `g:NERDTreeMapOpenInTab`       |
| `T`     | Same as 't' but keep the focus on the current tab            | `g:NERDTreeMapOpenInTabSilent` |
| `i`     | Open selected file in a split window                         | `g:NERDTreeMapOpenSplit`       |
| `gi`    | Same as i, but leave the cursor on the NERDTree              | `g:NERDTreeMapPreviewSplit`    |
| `s`     | Open selected file in a new vsplit                           | `g:NERDTreeMapOpenVSplit`      |
| `gs`    | Same as s, but leave the cursor on the NERDTree              | `g:NERDTreeMapPreviewVSplit`   |
| `O`     | Recursively open the selected directory                      | `g:NERDTreeMapOpenRecursively` |
| `x`     | Close the current nodes parent                               | `g:NERDTreeMapCloseDir`        |
| `X`     | Recursively close all children of the current node           | `g:NERDTreeMapCloseChildren`   |
| `P`     | Jump to the root node                                        | `g:NERDTreeMapJumpRoot`        |
| `p`     | Jump to current nodes parent                                 | `g:NERDTreeMapJumpParent`      |
| `K`     | Jump up inside directories at the current tree depth         | `g:NERDTreeMapJumpFirstChild`  |
| `J`     | Jump down inside directories at the current tree depth       | `g:NERDTreeMapJumpLastChild`   |
| `<C-J>` | Jump down to next sibling of the current directory<br />向下跳转到当前目录的下一个同级目录 | `g:NERDTreeMapJumpNextSibling` |
| `<C-K>` | Jump up to previous sibling of the current directory<br />跳转到当前目录的上一个同级目录 | `g:NERDTreeMapJumpPrevSibling` |
| `r`     | Recursively refresh the current directory                    | `g:NERDTreeMapRefresh`         |
| `R`     | Recursively refresh the current root                         | `g:NERDTreeMapRefreshRoot`     |
| `m`     | Display the NERDTree menu                                    | `g:NERDTreeMapMenu`            |
| `q`     | Close the NERDTree window  - 关闭文件树                      | `g:NERDTreeMapQuit`            |
| `A`     | Zoom (maximize/minimize) the NERDTree window - 放大/缩小     | `g:NERDTreeMapToggleZoom`      |
| `d`     | Delete file or directory                                     | `g:NERDTreeMapDelete`          |
| `n`     | Create File                                                  | `g:NERDTreeMapNewFile`         |
| `N`     | Create Directory                                             | `g:NERDTreeMapNewDir`          |



## vim-surround 

官网：[vim-surround](https://github.com/tpope/vim-surround)



| 快捷键                                  | From                                  | to                                                           |
| :-------------------------------------- | :------------------------------------ | :----------------------------------------------------------- |
| <kbd>cs\"\'</kbd>                       | "Hello world!"                        | 'Hello world!'                                               |
| <kbd>cs\'\<q\></kbd>                    | <q>Hello world!</q>                   | \<q>Hello world!\</q>                                        |
| <kbd>cst\"</kbd>                        | \<q>Hello world!\</q>                 | "Hello world!"                                               |
| <kbd>ds\"</kbd>                         | "Hello world!"                        | Hello world!                                                 |
| <kbd>ysiw]</kbd>                        | Hello world!  (the cursor on "Hello") | [Hello] world!                                               |
| <kbd>cs]{</kbd>                         | [Hello] world!                        | { Hello } world!                                             |
| <kbd>yssb</kbd>                         | { Hello } world!                      | ({ Hello } world!)                                           |
| <kbd>ds{ds)</kbd>                       | ({ Hello } world!)                    | Hello world!                                                 |
| <kbd>ysiw\<em\></kbd>                   | Hello world!                          | \<em>Hello\</em> world!                                      |
| <kbd>S\<p class="important">\</p></kbd> | \<em>Hello\</em> world!               | \<p class="important"><br/>  <em>Hello</em> world!<br/>\</p> |

## argTexttobj - 参数操作插件

| 快捷键         | 描述 | 意义 |
| :------------- | :--- | ---- |
| <kbd>via</kbd> |      |      |
| <kbd>cia</kbd> |      |      |

![image-20240911130501836](https://images.hicoding.top/i/2024/09/11/lkzbk4-3.webp)

## IdeaVimMulticursor

官网：[https://plugins.jetbrains.com/plugin/19162-ideavimmulticursor](https://plugins.jetbrains.com/plugin/19162-ideavimmulticursor)

**Usage**

​	Type mc (multicursor) and a vim command to create cursors

​	Type ms (multiselect) and a vim command to select multiple items

​	If you previously selected some text, then the commands work only in the selected text

​	Supported vim commands: /, f, t, w, W, b, B, e, E, ~, 0, $, ^, gu, gU, ge, gE

**Example:**
	type ms/print to select all prints in selected text

  - Type mcv (multicursor add virtual) to add (or remove) a virtual caret
  - Type mcr (multicursor insert real) to insert real carets instead of virtual
  - Type mcd (multicursor delete) to remove all virtual carets

**Text objects**

>  m{c|s}{i|a}{text-object-id}

Example:

type mci( to create two carets at surrounded brackets.

**Setup**

Install plugin from Intellij Idea Marketplace and add the following option on top of your ./ideavimrc:

set multicursor

also you can map commands, for example:

map q \<Plug\>(multicursor-ms/)
map z \<Plug\>(multicursor-mcv)
map Z \<Plug\>(multicursor-mcr)

After IdeaVim reboot you can use this plugin

**Getting started**

Install plugin from Intellij Idea Marketplace and add the following option on top of your ./ideavimrc: "set multicursor". After IdeaVim reboot you can use this plugin. Also you can map commands, for example: "map q (multicursor-ms/)"

