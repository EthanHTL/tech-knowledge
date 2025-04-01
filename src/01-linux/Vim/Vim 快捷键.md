---
title: Vim 快捷键 - 高效入门
order: 1
category:
  - Vim
tag:
  - 快捷键
author: H·T·L
date: 2024-08-09
permalink: /01-linux/vim/es3yzyke/
star: true
prev: false
next: /01-linux/Vim/gmmfg4of/
---



# Vim 快捷键 - 高效入门

![Vim Cheat Sheet for Programmers](http://materials.ucsd.edu/doc/vim_cheat_sheet_for_programmers_screen.pdf)

<!-- more -->

## Vim设计理念

> Vim 的核心设计理念是  Operator + Motion 的模式  -  可以参考这种方式快速记忆命令
>
> 例：  `di{` 、`da{` 、`ci"` 、`ca"` 等都是

## 模式切换

- <kbd>Esc</kbd>  —  normal常规模式
- <kbd>i</kbd>  —  insert插入模式
- <kbd>v</kbd>  —  visual可视模式
- <kbd>Ctrl + v</kbd>  —  visual block可视块模式
- <kbd>:</kbd>  —  command命令模式
- <kbd>r</kbd>  —  replace替换模式

## Normal Mode - 普通模式

### 1.通用操作

| 快捷键              | 描述                                                      | 意义     |
| :------------------ | :-------------------------------------------------------- | -------- |
| <kbd>.</kbd>        | 重复前次操作 - 编辑操作                                   |          |
| <kbd>u</kbd>        | 撤销前次操作                                              | u - undo |
| <kbd>ctrl + r</kbd> | 恢复前次操作                                              |          |
| <kbd>;</kbd>        | 重复前次<u>搜索</u>操作 - 查找命令(f、F、t、T)            |          |
| <kbd>,</kbd>        | 重复前次<u>搜索</u>操作 - 反向查找 - 查找命令(f、F、t、T) | 逗号     |

### 2.光标移动

#### 2.1 基本移动

| 快捷键                                                       | 描述                                                         | 意义                                          |
| :----------------------------------------------------------- | :----------------------------------------------------------- | --------------------------------------------- |
| <kbd>h</kbd>  /  <kbd>j</kbd>  / <kbd>k</kbd>  /  <kbd>l</kbd> | 向 左 / 下 / 上 / 右 移动                                    |                                               |
| ==行移动==                                                   |                                                              |                                               |
| <kbd>0</kbd>                                                 | 跳转至 行头                                                  |                                               |
| <kbd>$</kbd>                                                 | 跳转至 行尾                                                  |                                               |
| <kbd>^</kbd>   / <kbd>\_</kbd>                               | 跳转至 行头，*<u>智能忽略空格</u>*                           |                                               |
| <kbd>g_</kbd>                                                | 跳转至 行尾，*<u>智能忽略空格</u>*                           |                                               |
| <kbd>%</kbd>                                                 | 就近原则 跳转到 匹配的括号                                   | （）[ ] \{ }                                  |
| ==word移动==                                                 | *<u>大写操作范围更大</u>*                                    |                                               |
| <kbd>w</kbd>                                                 | 下一个单词【首部】                                           |                                               |
| <kbd>e</kbd>                                                 | 下一个单词【尾部】                                           |                                               |
| <kbd>b</kbd>                                                 | 上一个单词【首部】                                           |                                               |
|                                                              |                                                              |                                               |
| <kbd>W</kbd>                                                 | 下一个单词【首部】*，忽略标点符号，空格除外*                 |                                               |
| <kbd>E</kbd>                                                 | 下一个单词【尾部】*，忽略标点符号，空格除外*                 |                                               |
| <kbd>B</kbd>                                                 | 上一个单词【首部】*，忽略标点符号，空格除外*                 |                                               |
|                                                              |                                                              |                                               |
| <kbd>ge</kbd>                                                | 上一个单词【尾部】                                           |                                               |
| <kbd>gE</kbd>                                                | 上一个单词【尾部】*，忽略标点符号，空格除外*                 |                                               |
|                                                              |                                                              |                                               |
| ==句子和段落移动==                                           |                                                              |                                               |
| <kbd>(</kbd>  /  <kbd>)</kbd>                                | 前移1句  / 后移1句                                           | sentences                                     |
| <kbd>{</kbd>  /  <kbd>}</kbd>                                | 前移1段  /  后移1段                                          | paragraphs                                    |
| ==文档移动==                                                 |                                                              |                                               |
| <kbd>gg</kbd>  /  <kbd>G </kbd>                              | 调整至【文档】第一行  /  到最后一行                          | g - game over                                 |
| ==查找移动==                                                 |                                                              |                                               |
| <kbd>f</kbd>`{char}`                                         | 光标跳到下一个{char}所在的位置                               |                                               |
| <kbd>F</kbd>`{char}`                                         | 光标反向跳到上一个{char}所在的位置                           |                                               |
| <kbd>t</kbd>`{char}`                                         | 光标跳到下个{char}的前一个字符的位置                         |                                               |
| <kbd>T</kbd>`{char}`                                         | 光标反向移动到上个{char}的后一个字符的位置                   |                                               |
| <kbd>;</kbd>                                                 | 重复上次的字符查找命令                                       |                                               |
| <kbd>,</kbd>                                                 | 反向查找上次的查找命令                                       |                                               |
| ==其它移动==                                                 |                                                              |                                               |
| <kbd>H</kbd>    /    <kbd>M</kbd>    /   <kbd>L</kbd>        | H — 跳转至当前页第一行<br />M — 跳转至当前页中间行<br />L— 跳转至当前页最后一行 | H  –  High <br />M  –  Middle<br />L  –  Last |
| <kbd>gk</kbd>                                                | 向上移动一行，适用于一行文本出现换行(wrap)时                 |                                               |
| <kbd>gj</kbd>                                                | 向下移动一行，适用于一行文本出现换行(wrap)时                 |                                               |

#### 2.2 翻屏

| 快捷键                                        | 描述                          | 意义                        |
| :-------------------------------------------- | :---------------------------- | --------------------------- |
| <kbd>Ctrl + f</kbd>   /   <kbd>Ctrl + b</kbd> | 下翻一屏  /  上翻一屏         | f  –  forword<br />b - back |
| <kbd>Ctrl + d</kbd>   /   <kbd>Ctrl + u</kbd> | 下翻半屏  /  上翻半屏         | d - down<br />u - up        |
| <kbd>Ctrl + e</kbd>   /   <kbd>Ctrl + y</kbd> | 向下滚动一行  /  向上滚动一行 |                             |
| n%                                            | 到文件n%的位置                |                             |
| <kbd>zz</kbd>                                 | 将当前行移动到屏幕中央        |                             |
| <kbd>zt</kbd>                                 | 将当前行移动到屏幕顶端        | t - top                     |
| <kbd>zb</kbd>                                 | 将当前行移动到屏幕底端        | b - back                    |
| <kbd>zs</kbd>                                 | 光标所在列移动到窗口最左侧    |                             |
| <kbd>ze</kbd>                                 | 光标所在列移动到窗口最右侧    |                             |

#### 2.3 精准定位 - 插件实现

- 参考[vim-easymotion](https://github.com/easymotion/vim-easymotion) 插件
- 参考[vim-sneak](https://github.com/justinmk/vim-sneak) 插件

| 快捷键               | 描述                                                         |
| :------------------- | :----------------------------------------------------------- |
| ==vim-easymotion==   |                                                              |
| <Leader\>\<Leader\>s | 开始定位，<br />通过 `map <Leader>s <Plug>(easymotion-prefix) ` 设置前缀 |
| ==vim-sneak==        |                                                              |
| `s{char}{char}`      | Use `s` plus two characters to<br /> search forward in document |
| `S{char}{char}`      | Use `S` plus two characters to <br />search backward in document |
|                      |                                                              |

#### 2.4 参考图谱

![Vim移动快捷键总览](https://images.hicoding.top/i/2024/09/08/u6ofw2-3.webp)

![word跳转](https://images.hicoding.top/i/2024/09/08/u21gfm-3.webp)

### 3.跳转

| 快捷键              | 描述                      | 意义 |
| :------------------ | :------------------------ | ---- |
| ‘’                  | Last jump position        |      |
| ‘.                  | Last edit position        |      |
| ‘^                  | Exit insert mode position |      |
| <kbd>ctrl + r</kbd> | 上一次跳转的位置          |      |
| <kbd>[m</kbd>       | 跳转至方法开头            |      |



### 4.查找&替换

| 快捷键          | 描述                                             | 意义                                |
| :-------------- | :----------------------------------------------- | ----------------------------------- |
| ==普通模式==    |                                                  |                                     |
| *               | 向下查找光标所在单词并进行==全字==匹配           |                                     |
| #               | 向上查找光标所在单词并进行==全字==匹配           |                                     |
| g*              | 向下查找光标所在单词并进行==普通==匹配           |                                     |
| g#              | 向上查找光标所在单词并进行==普通==匹配           |                                     |
| n  /  N         | 向  下  /  上 跳转匹配项                         |                                     |
| ==命令模式==    |                                                  |                                     |
| /  ?            | 向 下  /  上 查找匹配                            | 键盘位置在同一地方且 / 在下, ？在上 |
| :s/old/new      | 用new替换当前行第一个old                         |                                     |
| :s/old/new/g    | 替换当前行内出现的所有 old                       |                                     |
| :n,ms/old/new/g | 替换第 n 行和第 m 行之间出现的所有 old           |                                     |
| :%s/old/new/g   | 替换整个文件中出现的所有 old。                   |                                     |
| :%s/old/new/gc  | 替换整个文件中出现的所有 old，并在每次替换时提示 |                                     |



### 5.快速编辑

#### 5.1 快速编辑的思想

> 快速编辑的核心思想就是 operator + motion（range）

##### 范围 - range

![i和a的区别](https://images.hicoding.top/i/2024/09/09/qv5lfc-3.webp)



##### 操作 - operator

- d（delete） - 删除
- c（change） - 修改（删除并进入编辑模式）
- y（yank） - 复制
- v（visual） - 选中并进入VISUAL模式

##### 动作 - motion

| 动作                         | 助记 | 动作 | 助记 |
| :--------------------------: | ---- | ---- | ---- |
| `iw `/ `aw`                  | w - word | `i<` / `a<` |      |
| `i(` / `a(` / 或 `ib` / `ab` | b - bracket | `i[` / `a[` |      |
| `i{` / `a{` / 或 `iB` / `aB` |      | `it` / `at` | t - tag |
| `i"` / `a"`                  |      | `is` / `as` | s - sentences |
| `i'` / `a'`                  |      | `ip` / `ap` | p - paragraphs |
| i\`  /  a`               |      | {n}l / {n}h |      |



#### 5.2 插入&修改

| 快捷键                                      | 描述                                                  | 意义               |
| :------------------------------------------ | :---------------------------------------------------- | ------------------ |
| <kbd>i</kbd>                                | 在光标前插入                                          |                    |
| <kbd>I</kbd>  /  <kbd>shift + i</kbd>       | 在当前行第一个非空字符前插入                          |                    |
| <kbd>gI</kbd>                               | 在当前行第一列插入                                    |                    |
| <kbd>o</kbd>  /  <kbd>O</kbd>               | 在下面新增一行  /  在上面新增一行, 进入insert模式     |                    |
| <kbd>a</kbd>  /  <kbd>A</kbd>               | 在光标后插入  /  在当前行最后插入                     |                    |
| <kbd>c</kbd>                                | 修改                                                  | c - change         |
| <kbd>x</kbd>                                | 裁剪当前字符                                          |                    |
| <kbd>X</kbd>                                | 裁剪前一个字符                                        |                    |
| <kbd>s</kbd>                                | 替换, 并进入insert模式                                | s - substitutejjkk |
|                                             |                                                       |                    |
| :r filename                                 | 在当前位置插入另一个文件的内容                        |                    |
| :[n]r filename                              | 在第n行插入另一个文件的内容                           |                    |
| ==插入模式下移动光标==                      |                                                       |                    |
|                                             |                                                       |                    |
|                                             |                                                       |                    |
| ==进阶操作==                                |                                                       |                    |
| <kbd>df{char}</kbd>                         | 配合f{char}命令使用，快速删除到指定字符               |                    |
| <kbd>cf{char}</kbd>                         | 配合f{char}命令使用，快速删除到指定字符并进入编辑模式 |                    |
| <kbd>Ctrl + a</kbd>  /  <kbd>Ctrl + x</kbd> | 快速自增 / 自减 数字,  eg:  1->2  或者  10 ->11       |                    |

#### 5.3 删除

| 快捷键                                                       | 描述                                | 意义                                            |
| :----------------------------------------------------------- | :---------------------------------- | ----------------------------------------------- |
| <kbd>x</kbd>                                                 |                                     |                                                 |
| <kbd>X</kbd>                                                 |                                     |                                                 |
| <kbd>D</kbd>                                                 |                                     |                                                 |
| <kbd>d{n}l</kbd>                                             |                                     |                                                 |
| <kbd>d{n}h</kbd>                                             |                                     |                                                 |
| <kbd>dj</kbd>                                                |                                     |                                                 |
| <kbd>dh</kbd>                                                |                                     |                                                 |
| <kbd>dd</kbd>                                                | 删除当前行                          | d - delete                                      |
| <kbd>dw</kbd>                                                | 向后删除一个单词                    |                                                 |
| <kbd>cw</kbd>                                                | 向后删除一个单词，并进入编辑模式    |                                                 |
| ==配合motion操作==                                           |                                     |                                                 |
| <kbd>diw</kbd>  /  <kbd>daw</kbd>                            | 删除单词                            | dw - delete a world<br />daw - delete all world |
| <kbd>ciw</kbd>  /  <kbd>caw</kbd>                            | 删除单词，并进入编辑模式            |                                                 |
| <kbd>di”</kbd>  /  <kbd>di(</kbd>  /  <kbd>di{</kbd>         | 删除“”或 ()  或 {}内的内容          |                                                 |
| <kbd>cw</kbd>  /  <kbd>caw</kbd>                             | 修改【字符 / 单词】，并进入编辑模式 | cw - change a world                             |
| <kbd>cj{</kbd>                                               | 删除{}里的内容，向后寻找最近的括号  |                                                 |
| ==进阶操作==                                                 |                                     |                                                 |
| <kbd>di^</kbd> / <kbd>da^</kbd><br /> <kbd>di$</kbd> / <kbd>da$</kbd> | 配合 `^` 和 `$` 删除到行头或者行尾  |                                                 |
|                                                              |                                     |                                                 |

#### 5.4 剪切&复制



| 快捷键                            | 描述                                        | 意义              |
| :-------------------------------- | :------------------------------------------ | ----------------- |
| ==复制==                          |                                             |                   |
| <kbd>y</kbd>                      | 复制在可视模式下选中的文本                  | y - yank          |
| <kbd>yy</kbd>  /  <kbd>Y</kbd>    | 复制整行文本                                |                   |
| <kbd>y[n]w</kbd>                  | 制一(n)个词                                 | yw - yank a world |
| <kbd>y0</kbd>                     | 从光标位置复制到行首                        |                   |
| <kbd>y$</kbd>                     | 从光标位置复制到行尾                        |                   |
| <kbd>y1G</kbd>  /  <kbd>ygg</kbd> | 复制光标以上的所有行                        |                   |
| <kbd>yG</kbd>                     | 复制光标以下的所有行                        |                   |
| <kbd></kbd>                       |                                             |                   |
| <kbd>y[n]l</kbd>                  | 复制光标右边1(n)个字符                      |                   |
| <kbd>y[n]h</kbd>                  | 复制光标左边1(n)个字符                      |                   |
| :m,ny\<cr\>                       | 复制m行到n行的内容 - 命令模式下             |                   |
| ==剪切==                          |                                             |                   |
| <kbd>[n]x</kbd>                   | 剪切光标右边n个字符，相当于<kbd>d[n]l</kbd> |                   |
| <kbd>[n]X</kbd>                   | 剪切光标左边n个字符，相当于<kbd>d[n]h</kbd> |                   |
| <kbd>d</kbd>                      | 删除（剪切）在<u>可视模式</u>下选中的文本   |                   |
| <kbd>d$</kbd>                     | 删除（剪切）当前位置到行尾的内容            |                   |
| <kbd>d[n]w</kbd>                  | 删除（剪切）1(n)个单词                      |                   |
| <kbd>d[n]l</kbd>                  | 删除（剪切）光标右边1(n)个字符              |                   |
| <kbd>d[n]h</kbd>                  | 删除（剪切）光标左边1(n)个字符              |                   |
| <kbd>d0</kbd>                     | 删除（剪切）当前位置到行首的内容            |                   |

#### 5.5 粘贴

| 快捷键          | 描述           | 意义    |
| :-------------- | :------------- | ------- |
| <kbd>p</kbd>  / | 在光标之后粘贴 | p - put |
| <kbd>P</kbd>    | 在光标之前粘贴 |         |
| <kbd></kbd>     |                |         |



## Insert Mode - 编辑模式

| 快捷键                                        | 描述                                             | 意义                        |
| :-------------------------------------------- | ------------------------------------------------ | --------------------------- |
| <kbd>i</kbd>  /  <kbd>a</kbd>                 | 字符前输入  / 字母后输入                         | i - insert <br />a - append |
| <kbd>shift + I</kbd>  /  <kbd>shift + A</kbd> | 行首输入  /  行末尾输入                          |                             |
| <kbd>o</kbd>  /  <kbd>O</kbd>                 | 新增下一行  /  新增上一行                        |                             |
| <kbd>ctrl + o</kbd>                           | 区别于normal模式，作用是执行一次normal模式的命令 |                             |
|                                               |                                                  |                             |
|                                               |                                                  |                             |





## Visual Mode - 可视模式

| 快捷键                              |                                            |
| :---------------------------------- | ------------------------------------------ |
| <kbd>v</kbd>                        |                                            |
| <kbd>ctrl + v</kbd>                 | 【可视化块】- 进入可视模式                 |
| <kbd>V</kbd> = <kbd>shift + v</kbd> | 【可视化行】- 进入可视模式, 默认选中当前行 |
| <kbd>d</kbd>                        | 删除选中的字符                             |
| <kbd>c</kbd>                        | 删除选中的字符，进入编辑模式               |
| <kbd>o</kbd>                        | 调整选择范围                               |
| ==可视化块模式==                    |                                            |
| <kbd>shift + i</kbd>                | 实现批量插入，可视化块选中之后             |

### ∆快速选中内容∆

| 快捷键                              | 描述                             | 意义 |
| :---------------------------------- | :------------------------------- | ---- |
| <kbd>v</kbd> + <kbd>e</kbd>         | 快速选中单词,移动至单词开头      |      |
| <kbd>v%</kbd>                       | 快速选中 函数括号匹配方式        |      |
| <kbd>vib</kbd>  /  <kbd>vi(</kbd>   | 快速选中 方法的参数区            |      |
| <kbd>vab</kbd>                      | 快速选中 方法的参数区,包括()括号 |      |
| <kbd>viw</kbd>  / <kbd>viw</kbd>    | 快速选中 单词                    |      |
| <kbd>vip</kbd>  /  / <kbd>vap</kbd> | 快速选中 段落                    |      |
| <kbd>viB</kbd>  / <kbd>vi{</kbd>    | 快速选中 函数部分                |      |
| <kbd>vaB</kbd>  / / <kbd>va{</kbd>  | 快速选中 函数部分,包括{}括号     |      |
| <kbd>vis</kbd>                      |                                  |      |
| <kbd>vip</kbd>                      |                                  |      |
| <kbd>U</kbd>                        | 选中内容变大写                   |      |

## Command-Line / Ex Mode - 命令模式

> 普通模式下按冒号 <kbd>:</kbd> 键进入Command-Line模式, 支持输入各种命令
>
> 普通模式下按 <kbd>Q</kbd> 进入Ex模式, 其实就是多行的Command-Line模式

| 命令                                        | 描述                         |
| :------------------------------------------ | :--------------------------- |
| <kbd>:w</kbd>                               | Save file<br />w - write     |
| <kbd>:q</kbd>                               | q - quit                     |
| <kbd>:e</kbd>                               | e - edit reload              |
| <kbd>/</kbd>                                | 搜索                         |
| <kbd>:%s/旧/新/g</kbd>                      | 全局替换                     |
| <kbd>q:</kbd>  <kbd>q/</kbd>  <kbd>q?</kbd> | 打开历史 命令 或者  查询记录 |
| <kbd>:ju</kbd>  <kbd>:jumps</kbd>           | 查看跳转历史                 |
|                                             |                              |
| ==分屏==                                    |                              |
| :split` 或 `:sp                             | 垂直拆分                     |
| :vsplit` 或 `:vsp                           | 水平拆分                     |



## 寄存器

参考说明：[https://maniafish.github.io/tech_talk/linux/vim_paste.html](https://maniafish.github.io/tech_talk/linux/vim_paste.html)

vim提供了10类寄存器:

- 匿名寄存器 `""`
- 编号寄存器 `"0` 到 `"9`
- 小删除寄存器 `"-`
- 26个命名寄存器 `"a` 到 `"z`
- 3个只读寄存器 `":,` `".,` `"%`
- Buffer交替文件寄存器 `"#`
- 表达式寄存器 `"=`
- 选择和拖放寄存器 `"*`, `"+`, `"~`
- 黑洞寄存器 `"_`
- 搜索模式寄存器 `"/`

可在vim中通过`:help registers`查看帮助，通过`:reg`可以查看当前各寄存器中的值。

```
:reg 显示所有寄存器的内容
"" ——不加寄存器索引时，默认使用的寄存器，""yy把当前行的内容放入默认寄存器。
"+ ——系统剪贴板，"+yy把当前行的内容放入系统剪贴板，"+p从系统剪贴板复制到vim。
```



## vim 常见问题

### 清除高亮标记

```bash
# 清除高亮标记
:noh  或 :nohl
```

### map命令映射

默认map命令影响到普通模式和可视模式。*默认的map就是递归的。如果遇到[nore]这种前缀，比如:noremap，就表示这种map是非递归的。*

详细查看 `:help map-overview`

```bash
     COMMANDS                    MODES
:map   :noremap  :unmap     Normal, Visual, Select, Operator-pending
:nmap  :nnoremap :nunmap    Normal
:vmap  :vnoremap :vunmap    Visual and Select
:smap  :snoremap :sunmap    Select
:xmap  :xnoremap :xunmap    Visual
:omap  :onoremap :ounmap    Operator-pending
:map!  :noremap! :unmap!    Insert and Command-line
:imap  :inoremap :iunmap    Insert
:lmap  :lnoremap :lunmap    Insert, Command-line, Lang-Arg
:cmap  :cnoremap :cunmap    Command-line
:tmap  :tnoremap :tunmap    Terminal-Job
```

### 查找action配置

```bash
:actionlis 想找的action
```

### q: 和 q/ 和 q？

> 打开历史 命令 或者  查询记录

![q: 命令效果](https://images.hicoding.top/i/2024/09/25/2jckf4-3.webp)

![q/ 命令效果](https://images.hicoding.top/i/2024/09/25/2jsak1-3.webp)

![q? 命令效果](https://images.hicoding.top/i/2024/09/25/2k0866-3.webp)

## 参考文章

[1. vimawesome.com](https://vimawesome.com/plugin/fugitive-vim)

[2. vim命令速查表](https://github.com/chloneda/vim-cheatsheet?tab=readme-ov-file#%E7%BC%93%E5%86%B2%E5%8C%BA)

[3. vim速查 devhints.io](https://devhints.io/vim)

[4. Vim Cheat Sheet for Programmers](https://michael.peopleofhonoronly.com/vim/)



**快捷键指南**

[1. https://imageslr.com/2021/vim.html#vs-code](https://imageslr.com/2021/vim.html#vs-code)

[2. https://www.someget.cn/other/2021/12/05/vim_coustm01.html](https://www.someget.cn/other/2021/12/05/vim_coustm01.html)

[3. https://pengfeixc.com/blogs/developer-handbook/vim-shortcuts#vim%20%E4%BD%BF%E7%94%A8%E6%8A%80%E5%B7%A7](https://pengfeixc.com/blogs/developer-handbook/vim-shortcuts#vim%20%E4%BD%BF%E7%94%A8%E6%8A%80%E5%B7%A7)



**vim配置参考**

[1. https://github.com/MarsWang42/My-Vim-Conf](https://github.com/MarsWang42/My-Vim-Conf)

**vscode vim**

[1. VSCodeVim](https://github.com/VSCodeVim/Vim)

https://fanlumaster.github.io/2023/02/06/%E6%88%91%E7%9A%84-VSCode-%E5%9F%BA%E6%9C%AC%E8%AE%BE%E7%BD%AE/
