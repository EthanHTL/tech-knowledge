---
title: 基础
date: 2024-07-02
icon: fa-brands fa-java
permalink: /java/core/lqefa56b/
---


## 1.基本数据类型

### 1.数据类型

1bit表示 1位；

1字节（B）=8位（b）

1B = 8b；

1KB =1024B；=8*1024b

1MB  =1024KB；=8*1024 *1024b

。。。

#### 1.byte

- byte 数据类型是8位（1字节）、有符号的，以二进制补码表示的整数；
- 最小值是 **-128（-2^7）**；
- 最大值是 **127（2^7-1）**；
- 默认值是 **0**；
- byte 类型用在大型数组中节约空间，主要代替整数，因为 byte 变量占用的空间只有 int 类型的四分之一；
- 例子：byte a = 100，byte b = -50。

```
public static void main(String[] args){
    System.out.println(Byte.SIZE);
    System.out.println("包装类：java.lang.Byte");
    System.out.println("最小值：Byte.MIN_value="+Byte.MIN_VALUE);
    System.out.println("最大值：Byte.MAX_value="+Byte.MAX_VALUE);
}
```



#### 2.short 

- short 数据类型是 16 位（2字节）、有符号的以二进制补码表示的整数
- 最小值是 **-32768（-2^15）**；
- 最大值是 **32767（2^15 - 1）**；
- Short 数据类型也可以像 byte 那样节省空间。一个short变量是int型变量所占空间的二分之一；
- 默认值是 **0**；
- 例子：short s = 1000，short r = -20000。

```java
public class Type {
    public static void main(String[] args){
        System.out.println(Short.SIZE);
        System.out.println("包装类：java.lang.Short");
        System.out.println("最小值：Byte.Short_value="+Short.MIN_VALUE);
        System.out.println("最大值：Byte.Short_value="+Short.MAX_VALUE);
    }
}
```



#### 3.int

- int 数据类型是32位（4字节）、有符号的以二进制补码表示的整数；
- 最小值是 **-2,147,483,648（-2^31）**；
- 最大值是 **2,147,483,647（2^31 - 1）**；
- 一般地整型变量默认为 int 类型；
- 默认值是 **0** ；
- 例子：int a = 100000, int b = -200000。

```
public class Type {
    public static void main(String[] args){
        System.out.println("基本类型：int 二进制数"+Integer.SIZE);
        System.out.println("包装类：java.lang.Integer");
        System.out.println("最小值：Byte.Integer_value="+Integer.MIN_VALUE);
        System.out.println("最大值：Byte.Integer_value="+Integer.MAX_VALUE);
    }
}
```

#### 4.long

- long 数据类型是 64 （8字节）位、有符号的以二进制补码表示的整数；

- 最小值是 **-9,223,372,036,854,775,808（-2^63）**；

- 最大值是 **9,223,372,036,854,775,807（2^63 -1）**；

- 这种类型主要使用在需要比较大整数的系统上；

- 默认值是 **0L**；

- 例子： long a = 100000L，Long b = -200000L。

  "L"理论上不分大小写，但是若写成"l"容易与数字"1"混淆，不容易分辩。所以最好大写。

```
public static void main(String[] args){
    System.out.println("基本类型：long 二进制数"+Long.SIZE);
    System.out.println("包装类：java.lang.Long");
    System.out.println("最小值：Byte.Long_value="+Long.MIN_VALUE);
    System.out.println("最大值：Byte.Long_value="+Long.MAX_VALUE);
}
```



#### 5.float

- float 数据类型是单精度、32位（4字节）、符合IEEE 754标准的浮点数；
- float 在储存大型浮点数组的时候可节省内存空间；
- 默认值是 **0.0f**；
- 浮点数不能用来表示精确的值，浮点数有限，数值接近但不等于，舍入误差，离散。如货币；
- 例子：float f1 = 234.5f。

```
public static void main(String[] args){
    System.out.println("基本类型：float 二进制数"+Float.SIZE);
    System.out.println("包装类：java.lang.Float");
    System.out.println("最小值：Byte.Float_value="+Float.MIN_VALUE);
    System.out.println("最大值：Byte.Float_value="+Float.MAX_VALUE);
}
```



#### 6.double

- double 数据类型是双精度、64 位(8字节)、符合IEEE 754标准的浮点数；
- 浮点数的默认类型为double类型；
- double类型同样不能表示精确的值，如货币；
- 默认值是 **0.0d**；
- 例子：double d1 = 123.4。

```
public class Type {
    public static void main(String[] args){
        System.out.println("基本类型：double 二进制数"+Double.SIZE);
        System.out.println("包装类：java.lang.Double");
        System.out.println("最小值：Byte.Double_value="+Double.MIN_VALUE);
        System.out.println("最大值：Byte.Double_value="+Double.MAX_VALUE);
    }
}
```



#### 7.boolean

- boolean数据类型表示一位的信息；
- 往外写时占一个字节 1B
- 只有两个取值：true 和 false；
- 这种类型只作为一种标志来记录 true/false 情况；
- 默认值是 **false**；
- 例子：boolean one = true。



#### 8.char

- char类型是一个单一的 16 位 Unicode 字符；
- 最小值是 **\u0000**（即为 0）；
- 最大值是 **\uffff**（即为65、535）；
- char 数据类型可以储存任何字符；
- 例子：char letter = 'A';

```
public class Type {
    public static void main(String[] args){
        System.out.println("基本类型：char 二进制位数：" + Character.SIZE);
        System.out.println("包装类：java.lang.Character");
        // 以数值形式而不是字符形式将Character.MIN_VALUE输出到控制台
        System.out.println("最小值：Character.MIN_VALUE="
                + (int) Character.MIN_VALUE);
        // 以数值形式而不是字符形式将Character.MAX_VALUE输出到控制台
        System.out.println("最大值：Character.MAX_VALUE="
                + (int) Character.MAX_VALUE);
    }
}
```



注意：Float和Double的最小值和最大值都是以科学记数法的形式输出的，结尾的"E+数字"表示E之前的数字要乘以10的多少次方。比如3.14E3就是3.14 × 10^3 =3140，3.14E-3 就是 3.14 x 10^-3 =0.00314。

实际上，JAVA中还存在另外一种基本类型 void，它也有对应的包装类 java.lang.Void，不过我们无法直接对它们进行操作。



### 2.类型默认值

除了基本类型，其余的默认值都是null。

| **数据类型**           | **默认值** |
| :--------------------- | :--------- |
| byte                   | 0          |
| short                  | 0          |
| int                    | 0          |
| long                   | 0L         |
| float                  | 0.0f       |
| double                 | 0.0d       |
| char                   | 'u0000'    |
| String (or any object) | null       |
| boolean                | false      |

```java
public class Type {
    static boolean bool;
    static byte by;
    static char ch;
    static double d;
    static float f;
    static int i;
    static long l;
    static short sh;
    static String str;

    public static void main(String[] args) {
        System.out.println("Bool :" + bool);
        System.out.println("Byte :" + by);
        System.out.println("Character:" + ch);
        System.out.println("Double :" + d);
        System.out.println("Float :" + f);
        System.out.println("Integer :" + i);
        System.out.println("Long :" + l);
        System.out.println("Short :" + sh);
        System.out.println("String :" + str);
    }
}
```



### 3.引用类型

- 在Java中，引用类型的变量非常类似于C/C++的指针。引用类型指向一个对象，指向对象的变量是引用变量。这些变量在声明时被指定为一个特定的类型，比如 Employee、Puppy 等。变量一旦声明后，类型就不能被改变了。
- 类、数组和接口都是引用数据类型。
- 所有引用类型的默认值都是null。
- 一个引用变量可以用来引用任何与之兼容的类型。
- 例子：Site site = new Site("Runoob")。



### 4.常量

常量的值被设定后，在程序运行时不允许改变，常量名一般使用大写字符。

Java中使用final关键字来修饰常量，声明方式和变量类似，变量类型前面的都叫做修饰符，修饰符不分前后顺序。

```
final double PI = 3.1415927;
```

虽然常量可以用小写，为了识别，尽量使用大写来表示常量。

字面量可以赋值给任何内置类型的变量

```java
byte a = 68;
char a = 'A'
```

byte，short，int，long可以用10进制，16进制和8进制进行表示。

当使用字面量的时候，前缀0表示8进制，前缀0x表示16进制。

```
int decimal = 100;
int octal = 0144;
int hexa =  0x64;
```

java的字符串常量也是表示在两个引号之间的序列

```
"Hello World"
"two\nlines"
"\"This is in quotes\""
```

字符串常量和字符常量都可以包含unicode字符

```
char a = '\u0001';
String a = "\u0001";
```

java支持一些特殊的转义字符序列

| 符号   | 字符含义                 |
| :----- | :----------------------- |
| \n     | 换行 (0x0a)              |
| \r     | 回车 (0x0d)              |
| \f     | 换页符(0x0c)             |
| \b     | 退格 (0x08)              |
| \0     | 空字符 (0x0)             |
| \s     | 空格 (0x20)              |
| \t     | 制表符                   |
| \"     | 双引号                   |
| \'     | 单引号                   |
| \\     | 反斜杠                   |
| \ddd   | 八进制字符 (ddd)         |
| \uxxxx | 16进制Unicode字符 (xxxx) |



### 5.自动类型转换

**整型、实型（常量）、字符型数据可以混合运算。运算中，不同类型的数据先转化为同一类型，然后进行运算。**

转换从低级到高级

```java
低  ------------------------------------>  高

byte,short,char—> int —> long—> float —> double 
```

数据类型满足以下规则

- 1. 不能对boolean类型进行类型转换。

- 2. 不能把对象类型转换成不相关类的对象。

- 3. 在把容量大的类型转换为容量小的类型时必须使用强制类型转换。

- 4. 转换过程中可能导致溢出或损失精度，例如：

  ```java
  int i =128;   
  byte b = (byte)i;
  ```

- 5. 浮点数到整数的转换是通过舍弃小数得到，而不是四舍五入，例如：

```java
(int)23.7 == 23;        
(int)-45.89f == -45
```



#### 自动类型转换

必须满足转换前的数据类型的位数要低于转换后的数据类型，例如: short数据类型的位数为16位，就可以自动转换位数为32的int类型，同样float数据类型的位数为32，可以自动转换为64位的double类型。

```java
public class Type {
    public static void main(String[] args) {
        //定义一个char类型
       char c1 = 'a';
       //自动类型转换将char类型转换为int类型
       int c2 = c1;
       System.out.println(c2);
       char c3 = 'A';
       int c4 = c3+2;
        System.out.println(c4);

    }
}
```

这里a的ascall码是97，A的ascall码是65，小转大不需要强转。



#### 强制类型转换

- 1. 条件是转换的数据类型必须是兼容的。
- 2. 格式：(type)value type是要强制类型转换后的数据类型 实例：

```java
public class Type {
    public static void main(String[] args){
        int i1 = 123;
        //强制类型转换为byte
        byte b = (byte)i1;
        System.out.println("int强制类型转换为byte后的值等于"+b);
    }
}
```



#### 隐含强制类型转换

- 1. 整数的默认类型是 int。
- 2. 浮点型不存在这种情况，因为在定义 float 类型时必须在数字后面跟上 F 或者 f。



## 2.Java变量类型

Java是强类型语言，所有变量使用之前都应声明变量。

java变量是程序中最基本的存储单元，其要素包括变量名，变量类型和作用域。

每个变量都有类型，类型可以是基本类型和引用类型。

变量名必须是合法的标识符。

变量声明是一条完整的语句，因此每个声明必须以分号结束。

type identifier [ = value][, identifier [= value] ...] ;

格式说明：type为Java数据类型。identifier是变量名。可以使用逗号隔开来声明多个同类型变量。

int a, b, c;     // 声明三个int型整数：a、 b、c 

int d = 3, e = 4, f = 5; // 声明三个整数并赋予初值

 byte z = 22;     // 声明并初始化 z

 String s = "runoob"; // 声明并初始化字符串 s

 double pi = 3.14159; // 声明了双精度浮点型变量 pi

 char x = 'x';    // 声明变量 x 的值是字符 'x'。



### Java语言支持的变量类型有：

- 类变量：独立于方法之外的变量，用 static 修饰。
- 实例变量：独立于方法之外的变量，不过没有 static 修饰。
- 局部变量：类的方法中的变量，初始化的时候赋值。

```java
public class Variable {
    /**
     * 类变量加上一个static
     * static的意思就是静态
     */
    static int allClicks = 0;
    
    /**
     * 实例变量
     */
    String str = "hello";
    
    public void say(){
        /**
         * 局部变量
         */
        int a=111;
    }
}
```



#### java局部变量

- 局部变量声明在方法、构造方法或者语句块中；
- 局部变量在方法、构造方法、或者语句块被执行的时候创建，当它们执行完成后，变量将会被销毁；
- 访问修饰符不能用于局部变量；
- 局部变量只在声明它的方法、构造方法或者语句块中可见；
- 局部变量是在栈上分配的；
- 局部变量没有默认值，所以局部变量被声明后，必须经过初始化，才可以使用。

```java
public class Variable {
    public void age(){
        /**
         * 初始化局部变量，必须在方法或者语句块内部
         */
        int age =0;
        age+=7;
        System.out.println("年龄是："+age);
    }

    public static void main(String[] args) {
        Variable variable = new Variable();
        variable.age();
    }
}
```

结果：年龄是：7

如果将int age=0；不初始化（int age），就会报错。



#### 实例变量

- 实例变量声明在一个类中，但在方法、构造方法和语句块之外；
- 当一个对象被实例化之后，每个实例变量的值就跟着确定；
- 实例变量在对象创建的时候创建，在对象被销毁的时候销毁；
- 实例变量的值应该至少被一个方法、构造方法或者语句块引用，使得外部能够通过这些方式获取实例变量信息（相当于调用这个类的属性）；
- 实例变量可以声明在使用前或者使用后；
- 访问修饰符可以修饰实例变量；
- 实例变量对于类中的方法、构造方法或者语句块是可见的。一般情况下应该把实例变量设为私有。通过使用访问修饰符可以使实例变量对子类可见；
- 实例变量具有默认值。数值型变量的默认值是0，布尔型变量的默认值是false，引用类型变量的默认值是null。变量的值可以在声明时指定，也可以在构造方法中指定；
- 实例变量可以直接通过变量名访问。但在静态方法以及其他类中，就应该使用完全限定名：ObejectReference.VariableName。

```
public class Employee {
    // 这个实例变量对子类可见
    public String name;
    // 私有变量，仅在该类可见
    private double salary;
    //在构造器中对name赋值
    public Employee (String empName){
        name = empName;
    }
    //设定salary的值
    public void setSalary(double empSal){
        salary = empSal;
    }
    // 打印信息
    public void printEmp(){
        System.out.println("名字 : " + name );
        System.out.println("薪水 : " + salary);
    }

    public static void main(String[] args){
        Employee empOne = new Employee("zz");
        empOne.setSalary(1000.0);
        empOne.printEmp();
    }
}
```

结果  名字 : zz ；薪水 : 1000.0



### 类变量

- 类变量也称为静态变量，在类中以 static 关键字声明，但必须在方法之外。
- 无论一个类创建了多少个对象，类只拥有类变量的一份拷贝（在某些地方很重要）。
- 静态变量除了被声明为常量外很少使用，静态变量是指声明为 public/private，final 和 static 类型的变量。静态变量初始化后不可改变。
- 静态变量储存在静态存储区。经常被声明为常量，很少单独使用 static 声明变量。
- 静态变量在第一次被访问时创建，在程序结束时销毁。
- 与实例变量具有相似的可见性。但为了对类的使用者可见，大多数静态变量声明为 public 类型。
- 默认值和实例变量相似。数值型变量默认值是 0，布尔型默认值是 false，引用类型默认值是 null。变量的值可以在声明的时候指定，也可以在构造方法中指定。此外，静态变量还可以在静态语句块中初始化。
- 静态变量可以通过：*ClassName.VariableName*的方式访问。
- 类变量被声明为 public static final 类型时，类变量名称一般建议使用大写字母。如果静态变量不是 public 和 final 类型，其命名方式与实例变量以及局部变量的命名方式一致。

```java
public class Employee {
    //salary是静态的私有变量
    private static double salary;
    // DEPARTMENT是一个常量
    public static final String DEPARTMENT = "开发人员";
    public static void main(String[] args){
        salary = 10000;
        System.out.println(DEPARTMENT+"平均工资:"+salary);
    }
}
```

结果：开发人员平均工资:10000.0

注意：如果其他类想要访问该变量，可以这样访问：**Employee.DEPARTMENT**。



### 变量命名规范

所有变量、方法和类名：见名知意

变量命名：小驼峰（monthSalary）

类的命名：大驼峰命名（EmployeeDetail）

方法名：小驼峰（runAndGo）

构造方法名：大驼峰（EmployeeDetail）

常量命名：大写字母和下划线（MAX_SCORE）





## 3.运算符

### 位运算符

Java定义了位运算符，应用于整数类型(int)，长整型(long)，短整型(short)，字符型(char)，和字节型(byte)等类型。

位运算符作用在所有的位上，并且按位运算。假设a = 60，b = 13;它们的二进制格式表示将如下：

```java
A = 0011 1100
B = 0000 1101
-----------------
A&B = 0000 1100
A | B = 0011 1101
A ^ B = 0011 0001
~A= 1100 0011
```

下表列出了位运算符的基本运算，假设整数变量 A 的值为 60 和变量 B 的值为 13：

| ＆   | 如果相对应位都是1，则结果为1，否则为0                        | （A＆B），得到12，即0000 1100  |
| ---- | ------------------------------------------------------------ | ------------------------------ |
| \|   | 如果相对应位都是 0，则结果为 0，否则为1                      | （A \| B）得到61，即 0011 1101 |
| ^    | 如果相对应位值相同，则结果为0，否则为1                       | （A ^ B）得到49，即 0011 0001  |
| 〜   | 按位取反运算符翻转操作数的每一位，即0变成1，1变成0。         | （〜A）得到-61，即1100 0011    |
| <<   | 按位左移运算符。左操作数按位左移右操作数指定的位数。         | A << 2得到240，即 1111 0000    |
| >>   | 按位右移运算符。左操作数按位右移右操作数指定的位数。         | A >> 2得到15即 1111            |
| >>>  | 按位右移补零操作符。左操作数的值按右操作数指定的位数右移，移动得到的空位以零填充。 | A>>>2得到15即0000 1111         |

```java
public class Test {
    public static void main(String[] args) {
        int a = 60; /* 60 = 0011 1100 */
        int b = 13; /* 13 = 0000 1101 */
        int c = 0;
        c = a & b;       /* 12 = 0000 1100 */
        System.out.println("a & b = " + c );

        c = a | b;       /* 61 = 0011 1101 */
        System.out.println("a | b = " + c );

        c = a ^ b;       /* 49 = 0011 0001 */
        System.out.println("a ^ b = " + c );

        c = ~a;          /*-61 = 1100 0011 */
        System.out.println("~a = " + c );

        c = a << 2;     /* 240 = 1111 0000 */
        System.out.println("a << 2 = " + c );

        c = a >> 2;     /* 15 = 1111 */
        System.out.println("a >> 2  = " + c );

        c = a >>> 2;     /* 15 = 0000 1111 */
        System.out.println("a >>> 2 = " + c );
    }
}
```



### 短路逻辑运算符

当使用与逻辑运算符时，在两个操作数都为true时，结果才为true，但是当得到第一个操作为false时，其结果就必定是false，这时候就不会再判断第二个操作了。

```java
public static void main(String[] args){
    int a = 5;//定义一个变量；
    boolean b = (a<4)&&(a++<10);
    System.out.println("使用短路逻辑运算符的结果为"+b);
    System.out.println("a的结果为"+a);
}
```

结果 ：使用短路逻辑运算符的结果为false；a的结果为5

**解析：** 该程序使用到了短路逻辑运算符(&&)，首先判断 a<4 的结果为 false，则 b 的结果必定是 false，所以不再执行第二个操作 a++<10 的判断，所以 a 的值为 5。

### 赋值运算符

| 操作符  | 描述                                                         | 例子                                     |
| :------ | :----------------------------------------------------------- | :--------------------------------------- |
| =       | 简单的赋值运算符，将右操作数的值赋给左侧操作数               | C = A + B将把A + B得到的值赋给C          |
| + =     | 加和赋值操作符，它把左操作数和右操作数相加赋值给左操作数     | C + = A等价于C = C + A                   |
| - =     | 减和赋值操作符，它把左操作数和右操作数相减赋值给左操作数     | C - = A等价于C = C - A                   |
| * =     | 乘和赋值操作符，它把左操作数和右操作数相乘赋值给左操作数     | C * = A等价于C = C * A                   |
| / =     | 除和赋值操作符，它把左操作数和右操作数相除赋值给左操作数     | C / = A，C 与 A 同类型时等价于 C = C / A |
| （％）= | 取模和赋值操作符，它把左操作数和右操作数取模后赋值给左操作数 | C％= A等价于C = C％A                     |
| << =    | 左移位赋值运算符                                             | C << = 2等价于C = C << 2                 |
| >> =    | 右移位赋值运算符                                             | C >> = 2等价于C = C >> 2                 |
| ＆=     | 按位与赋值运算符                                             | C＆= 2等价于C = C＆2                     |
| ^ =     | 按位异或赋值操作符                                           | C ^ = 2等价于C = C ^ 2                   |
| \| =    | 按位或赋值操作符                                             | C \| = 2等价于C = C \| 2                 |

实例

```java
public static void main(String[] args) {
    int a = 10;
    int b = 20;
    int c = 0;
    c = a + b;
    System.out.println("c = a + b = " + c );
    c += a ;
    System.out.println("c += a  = " + c );
    c -= a ;
    System.out.println("c -= a = " + c );
    c *= a ;
    System.out.println("c *= a = " + c );
    a = 10 ;
    c = 15 ;
    c /= a ;
    System.out.println("c /= a = " + c );
    a = 10 ;
    c = 15 ;
    c %= a ;
    System.out.println("c %= a  = " + c );
    c <<= 2 ;
    System.out.println("c <<= 2 = " + c );
    c >>= 2 ;
    System.out.println("c >>= 2 = " + c );
    c >>= 2 ;
    System.out.println("c >>= 2 = " + c );
    c &= a ;
    System.out.println("c &= a  = " + c );
    c ^= a ;
    System.out.println("c ^= a   = " + c );
    c |= a ;
    System.out.println("c |= a   = " + c );
}
```



### 条件运算符（?:）

条件运算符也被称为三元运算符。该运算符有3个操作数，并且需要判断布尔表达式的值。该运算符的主要是决定哪个值应该赋值给变量。

```java
variable x = (expression) ? value if true : value if false
```

variable：变量类型；x：变量名；（expression）：判断值 ；？：判断符号；value if  true：值正确；value if false：值错误

实例

```java
public class Test {
    public static void main(String[] args){
        int a , b;
        a = 10;
        // 如果 a 等于 1 成立，则设置 b 为 20，否则为 30
        b = (a == 1) ? 20 : 30;
        System.out.println( "Value of b is : " +  b );

        // 如果 a 等于 10 成立，则设置 b 为 20，否则为 30
        b = (a == 10) ? 20 : 30;
        System.out.println( "Value of b is : " + b );
    }
}
```

结果 ：Value of b is : 30；Value of b is : 20



### instanceof 运算符

该运算符用于操作对象实例，检查该对象是否是一个特定类型（类类型或接口类型）。

```java
( Object reference variable ) instanceof  (class/interface type)
```

( Object reference variable ) ：变量名 ；instanceof：运算符；class/interface：类或者接口 ；type：类型

```java
String name = "James";
boolean result = name instanceof String; // 由于 name 是 String 类型，所以返回true
```

如果被比较的对象兼容于右侧类型,该运算符仍然返回true。

```java
class Vehicle {}

public class Car extends Vehicle {
    public static void main(String[] args){
        Vehicle a = new Car();
        boolean result =  a instanceof Car;
        System.out.println( result);
    }
}
```

结果：true

### Java运算符优先级

在一个多运算符的表达式中，运算符优先级不同会导致最后得出的结果差别甚大，下表中具有最高优先级的运算符在的表的最上面，最低优先级的在表的底部。

| 类别     | 操作符                                     | 关联性   |
| :------- | :----------------------------------------- | :------- |
| 后缀     | () [] . (点操作符)                         | 左到右   |
| 一元     | expr++ expr--                              | 从左到右 |
| 一元     | ++expr --expr + - ～ ！                    | 从右到左 |
| 乘性     | * /％                                      | 左到右   |
| 加性     | + -                                        | 左到右   |
| 移位     | >> >>>  <<                                 | 左到右   |
| 关系     | > >= < <=                                  | 左到右   |
| 相等     | == !=                                      | 左到右   |
| 按位与   | ＆                                         | 左到右   |
| 按位异或 | ^                                          | 左到右   |
| 按位或   | \|                                         | 左到右   |
| 逻辑与   | &&                                         | 左到右   |
| 逻辑或   | \| \|                                      | 左到右   |
| 条件     | ？：                                       | 从右到左 |
| 赋值     | = + = - = * = / =％= >> = << =＆= ^ = \| = | 从右到左 |
| 逗号     | ，                                         | 左到右   |



## 4.Java switch case 语句

switch case 语句判断一个变量与一系列值中某个值是否相等，每个值称为一个分支。

**语法**

switch case 语句语法格式如下：

```java
switch(expression){
    case value :
        //语句
        break; //可选
    case value :
        //语句
        break; //可选
    //你可以有任意数量的case语句
    default : //可选
        //语句
}
```

switch case 语句有如下规则：

- switch 语句中的变量类型可以是： byte、short、int 或者 char。从 Java SE 7 开始，switch 支持字符串 String 类型了，同时 case 标签必须为字符串常量或字面量。
- switch 语句可以拥有多个 case 语句。每个 case 后面跟一个要比较的值和冒号。
- case 语句中的值的数据类型必须与变量的数据类型相同，而且只能是常量或者字面常量。
- 当变量的值与 case 语句的值相等时，那么 case 语句之后的语句开始执行，直到 break 语句出现才会跳出 switch 语句。
- 当遇到 break 语句时，switch 语句终止。程序跳转到 switch 语句后面的语句执行。case 语句不必须要包含 break 语句。如果没有 break 语句出现，程序会继续执行下一条 case 语句，直到出现 break 语句。
- switch 语句可以包含一个 default 分支，该分支一般是 switch 语句的最后一个分支（可以在任何位置，但建议在最后一个）。default 在没有 case 语句的值和变量值相等的时候执行。default 分支不需要 break 语句。

**switch case 执行时，一定会先进行匹配，匹配成功返回当前 case 的值，再根据是否有 break，判断是否继续输出，或是跳出判断。**

```java
public class Test {
    public static void main(String args[]) {
        char grade = 'c';

        switch (grade){
            case 'a':
                System.out.println("优秀");
                break;
            case 'b':
            case 'c':
                System.out.println("良好");
                break;
            case 'd':
                System.out.println("及格");
                break;
            case 'e':
                System.out.println("不及格");
                break;
            default:
                System.out.println("未知等级");

        }
        System.out.println("等级是："+grade);
    }
}
```



如果case语句块中没有break语句的时候，JVM并不会输出case对应的返回值，而是继续匹配，匹配不成功则返回默认的case。

```java
public class Test {
    public static void main(String args[]){
        int i = 5;
        switch(i){
            case 0:
                System.out.println("0");
            case 1:
                System.out.println("1");
            case 2:
                System.out.println("2");
            default:
                System.out.println("default");
        }
    }
}
```

结果：false



如果 case 语句块中没有 break 语句时，匹配成功后，从当前 case 开始，后续所有 case 的值都会输出。

```
public class Test {
    public static void main(String[] args){
        int i = 1;
        switch(i){
            case 0:
                System.out.println("0");
            case 1:
                System.out.println("1");
            case 2:
                System.out.println("2");
            default:
                System.out.println("default");
        }
    }
}
```

结果：

1
2
default



如果当前匹配成功的 case 语句块没有 break 语句，则从当前 case 开始，后续所有 case 的值都会输出，如果后续的 case 语句块有 break 语句则会跳出判断。

```java
public class Test {
    public static void main(String[] args){
        int i = 1;
        switch(i){
            case 0:
                System.out.println("0");
            case 1:
                System.out.println("1");
            case 2:
                System.out.println("2");
            case 3:
                System.out.println("3"); break;
            default:
                System.out.println("default");
        }
    }
}
```

结果：1,2,3

**扩展**

jdk7的新特征，表达式可以使字符串，字符的本质还是数字

```
public static void main(String[] args) {
    //jdk7的新特征，可以使用字符串作为switch的参数
    //字符的本质还是数字
    //反编译 java -- class（字节码文件） ----反编译(idea)
    String name = "张三";
    switch (name){
        case "张三":
            System.out.println("我是张三");
            break;
        case "李四":
            System.out.println("我是李四");
            break;
        case "王五":
            System.out.println("我是王五");
            break;
        default:
            break;
    }
}
我是张三
```

**反编译**

```
public class SwitchDemo01 {
    public SwitchDemo01() {
    }

    public static void main(String[] args) {
        String name = "张三";
        byte var3 = -1;
        switch(name.hashCode()) {
        case 774889:
            if (name.equals("张三")) {
                var3 = 0;
            }
            break;
        case 842061:
            if (name.equals("李四")) {
                var3 = 1;
            }
            break;
        case 937065:
            if (name.equals("王五")) {
                var3 = 2;
            }
        }

        switch(var3) {
        case 0:
            System.out.println("我是张三");
            break;
        case 1:
            System.out.println("我是李四");
            break;
        case 2:
            System.out.println("我是王五");
        }

    }
}
```

可以看出字符串判断也是通过数字（name.hashCode()）来进行判断



## 5.Java Number & Math 类

一般地，当需要使用数字的时候，我们通常使用内置数据类型，如：**byte、int、long、double** 等。

实际开发过程中，我们经常会遇到需要使用对象，而不是内置数据类型的情形。Java 语言为每一个内置数据类型提供了对应的包装类。

所有的包装类**（Integer、Long、Byte、Double、Float、Short）**都是抽象类 Number 的子类

| 包装类    | 基本数据类型 |
| :-------- | :----------- |
| Boolean   | boolean      |
| Byte      | byte         |
| Short     | short        |
| Integer   | int          |
| Long      | long         |
| Character | char         |
| Float     | float        |
| Double    | double       |

这种由编译器特别支持的包装称为装箱，所以当内置数据类型被当作对象使用的时候，编译器会把内置类型装箱为包装类。相似的，编译器也可以把一个对象拆箱为内置类型。Number 类属于 java.lang 包。

```
public class Test {
    public static void main(String[] args){
        Integer x = 5;
        x =  x + 10;
        System.out.println(x);
    }
}
```

结果：15

解析：当 x 被赋为整型值时，由于x是一个对象，所以编译器要对x进行装箱。然后，为了使x能进行加运算，所以要对x进行拆箱。



### Java Math 类

Java 的 Math 包含了用于执行基本数学运算的属性和方法，如初等指数、对数、平方根和三角函数。

Math 的方法都被定义为 static 形式，通过 Math 类可以在主函数中直接调用。

```java
public class Test {
    public static void main (String[] args)
    {
        System.out.println("90 度的正弦值：" + Math.sin(Math.PI/2));
        System.out.println("0度的余弦值：" + Math.cos(0));
        System.out.println("60度的正切值：" + Math.tan(Math.PI/3));
        System.out.println("1的反正切值： " + Math.atan(1));
        System.out.println("π/2的角度值：" + Math.toDegrees(Math.PI/2));
        System.out.println(Math.PI);
    }
    
}
```

结果：

90 度的正弦值：1.0
0度的余弦值：1.0
60度的正切值：1.7320508075688767
1的反正切值： 0.7853981633974483
π/2的角度值：90.0
3.141592653589793

### Number & Math 类方法

下面的表中列出的是 Number & Math 类常用的一些方法：（这里有些不懂得可以去网上查阅资料）

| 序号 | 方法与描述                                                   |
| :--- | :----------------------------------------------------------- |
| 1    | xxxValue()将 Number 对象转换为xxx数据类型的值并返回。        |
| 2    | compareTo() 将number对象与参数比较。                         |
| 3    | equals() 判断number对象是否与参数相等。                      |
| 4    | valueOf()返回一个 Number 对象指定的内置数据类型。            |
| 5    | toString() 以字符串形式返回值。                              |
| 6    | parseInt() 将字符串解析为int类型。                           |
| 7    | abs()返回参数的绝对值。                                      |
| 8    | ceil() 返回大于等于( >= )给定参数的的最小整数，类型为双精度浮点型。 |
| 9    | floor() 返回小于等于（<=）给定参数的最大整数 。              |
| 10   | rint()返回与参数最接近的整数。返回类型为double。             |
| 11   | round() 它表示**四舍五入**，算法为 **Math.floor(x+0.5)**，即将原来的数字加上 0.5 后再向下取整，所以，Math.round(11.5) 的结果为12，Math.round(-11.5) 的结果为-11。 |
| 12   | min() 返回两个参数中的最小值。                               |
| 13   | max() 返回两个参数中的最大值。                               |
| 14   | exp()返回自然数底数e的参数次方。                             |
| 15   | log() 返回参数的自然数底数的对数值。                         |
| 16   | pow() 返回第一个参数的第二个参数次方。                       |
| 17   | sqrt()求参数的算术平方根。                                   |
| 18   | sin() 求指定double类型参数的正弦值。                         |
| 19   | cos() 求指定double类型参数的余弦值。                         |
| 20   | tan() 求指定double类型参数的正切值。                         |
| 21   | asin() 求指定double类型参数的反正弦值。                      |
| 22   | acos()求指定double类型参数的反余弦值。                       |
| 23   | atan() 求指定double类型参数的反正切值。                      |
| 24   | atan2() 将笛卡尔坐标转换为极坐标，并返回极坐标的角度值。     |
| 25   | toDegrees() 将参数转化为角度。                               |
| 26   | toRadians()将角度转换为弧度。                                |
| 27   | random() 返回一个随机数。                                    |

### Math 的 floor,round 和 ceil 方法实例比较

| 参数 | Math.floor | Math.round | Math.ceil |
| :--- | :--------- | :--------- | :-------- |
| 1.4  | 1          | 1          | 2         |
| 1.5  | 1          | 2          | 2         |
| 1.6  | 1          | 2          | 2         |
| -1.4 | -2         | -1         | -1        |
| -1.5 | -2         | -1         | -1        |
| -1.6 | -2         | -2         | -1        |

```
public class Test{
    public static void main(String[] args){
        double[] nums = { 1.4, 1.5, 1.6, -1.4, -1.5, -1.6 };
        for (double num : nums) {
            test(num);
        }
    }
    private static void test(double num) {
        System.out.println("Math.floor(" + num + ")=" + Math.floor(num));
        System.out.println("Math.round(" + num + ")=" + Math.round(num));
        System.out.println("Math.ceil(" + num + ")=" + Math.ceil(num));
    }
}
```

结果：

Math.floor(1.4)=1.0
Math.round(1.4)=1
Math.ceil(1.4)=2.0
Math.floor(1.5)=1.0
Math.round(1.5)=2
Math.ceil(1.5)=2.0
Math.floor(1.6)=1.0
Math.round(1.6)=2
Math.ceil(1.6)=2.0
Math.floor(-1.4)=-2.0
Math.round(-1.4)=-1
Math.ceil(-1.4)=-1.0
Math.floor(-1.5)=-2.0
Math.round(-1.5)=-1
Math.ceil(-1.5)=-1.0
Math.floor(-1.6)=-2.0
Math.round(-1.6)=-2
Math.ceil(-1.6)=-1.0





## 6.Scanner对象

java.util.Scanner是java5的新特性，我们可以通过Scanner类来获取用户输入

**基本语法**

Scanner  sc = new Scanner(System.in);

通过Scanner类的next()与nextLine()方法获取输入的字符串，在读取之前，我们需要使用hasNext()与hasNextLine()判断是否还有输入的数据。 

next:

```java
public static void main(String[] args) {
    //创建一个扫描器对象，用于接收键盘数据
    Scanner sc = new Scanner(System.in);
    System.out.println("使用next方式接收：");
    if(sc.hasNext()){
        String next = sc.next();
        System.out.println("输出的内容为："+next);
    }
    //凡是属于IO流，使用完之后就必须关闭，不然会一直占用资源，养成良好习惯。
    sc.close();
}

使用next方式接收：
hello world!
输出的内容为：hello
```

> 读取到有效字符即结束

> 对输入有效字符之前遇到的空白，next（）方法会将其自动去掉

> 只有输入有效字符后，才能将其后面输入的分割符作为空白符或者结束符

> next（）不能得到带有空格的字符。

nextLine:

~~~java
public static void main(String[] args) {
        //从键盘接收数据
        Scanner sc = new Scanner(System.in);
        System.out.println("使用nextLine()接收：");
        //判断时候还有下一个值
        if(sc.hasNextLine()){
            String nextLine = sc.nextLine();
            System.out.println("输出的内容："+nextLine);
        }
        //不要忘记关闭IO流，减少资源浪费。
        sc.close();
    }

使用nextLine()接收：
hello world!
输出的内容：hello world!
~~~

> 以enter作为结束符，也就是说nextLine（）方法返回的是输入回车之前的所有字符。

> 可以获得空白。



进阶知识

~~~java
public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        //从键盘输入数据
        int i1 = 0;
        float i2 = 0.0f;

        System.out.println("请输入整数：");
        if(scanner.hasNextInt()){
            i1 = scanner.nextInt();
            System.out.println("输出的整数为："+i1);
        }else{
            System.out.println("输出的不是整数！");
        }

        System.out.println("请输入小数：");
        if(scanner.hasNextFloat()){
            i2 = scanner.nextFloat();
            System.out.println("输出的小数为："+i1);
        }else{
            System.out.println("输出的不是小数！");
        }
        scanner.close();
    }
正确输入
请输入整数：
10
输出的整数为：10
请输入小数：
1.5
输出的小数为：1.5

错误输入
请输入整数：
10.1
输出的不是整数！
请输入小数：
输出的小数为：10.1
~~~

**测试**

使用scanner求和与求平均数，每输入一个数据用回车确认，通过输入非数字来结束输入并且输出结果。

```
public static void main(String[] args) {
   
    Scanner scanner = new Scanner(System.in);

    //和
    double sum = 0.0;
    //输入个数
    Integer s = 0;
    System.out.println("请输入数据：");
    while (scanner.hasNextDouble()) {
        double v = scanner.nextDouble();
        s++;
        sum += v;
    }
    System.out.println(s + "当前个数的总数:" + sum);
    System.out.println(s + "当前个数的平均数" + (sum / s));
    scanner.close();
}

请输入数据：
10
20
30
40
CAD
4当前个数的总数:100.0
4当前个数的平均数25.0
```

**注意**：不要忘记关闭scanner流，减少资源浪费。



## 7.方法

> java方法是语句的集合，他们在一起执行一个功能。
>
> 方法是解决一类问题步骤的有序集合
>
> 方法包含于类和对象中
>
> 方法在程序中被创建，在其他地方被引用
>
> java的方法类似于其他语言的函数，用来完成特定功能的代码片段

**方法的定义**

一个方法包括方法头和方法体：

**修饰符**：是可选的（public、private等），告诉编译器如何调用方法。定义该方法的访问类型；

**返回值类型**：方法可能会返回值。returnValueType是方法返回值类型。有些方法执行所需的操作，但是没有返回值，比如void。

**方法名**：是方法的实际名称，方法名和参数表共同构成参数签名。

**参数类型**：参数就像是一个占位符。当方法被调用时，传递值给参数。这个值被称为变量或者实参。参数列表是指方法的参数类型、顺序和参数个数。参数是可选的，方法可以不包括任何参数。

1. 形式参数：在方法被调用时用于接收外界输入的数据（定义方法的参数）
2. 实参：调用方法时实际传给方法的数据（接收的参数）

**方法体**：方法体包含具体的语句，定义该方法的功能。



修饰符 + 返回值类型 + 方法名（参数类型 参数名，参数类型 参数名）{

​	方法体

}

**设计方法的原则**

方法的本意是功能块，就是实现某个功能的语句块的集合。我们设计方法的时候尽量保持方法的原子性，就是一个方法只能完成一个功能，这样利于我们后期扩展。

**实例**

System.out.printIn()；

System表示一个类。out表示对象，printIn()表示方法





```java
//main方法
    public static void main(String[] args) {
        //1,2实际参数
        int add = add(1, 2);
        System.out.println(add);
    }
    //加法，a,b表示形式参数，定义的作用
    public static int add(int a,int b){
        return a+b;//除了返回0之外，还有一个功能就是终止方法
    }
结果
3
```

**解释**

public static 表示 修饰符 ；int 表示返回的类型（整型）；add：方法名；（int a， int b）：参数a和参数b，类型都是int。return a+b:表示方法体。



**方法调用**

> 语法：对象.方法名(实参列表)；

> java支持两种调用方法的方式，根据方法是否返回值来选择；

> 当方法返回一个值的时候。方法调用通常被当做一个值，例如。

~~~java
int add = add(1, 2);
~~~

> 如果方法的返回值是void，那么就是一条语句

~~~java
System.out.println("hello world!");
~~~

**拓展** ：值传递（java）和引用传递



## 8.方法的重载

重载就是在一个类中，有相同的函数名称（方法名称），但是参数不同

**方法重载的规则**：

- 方法名称必须相同
- 方法参数列表必须不同（个数不同、类型不同、参数排列顺序不同）
- 方法的返回类型可以相同也可以不同
- 仅仅返回类型的不同不能称为方法的重载

**实现理论**

> 方法名称相同时，编译器会去根据调用方法的参数个数、参数类型等逐个匹配，已选择对应的方法，如果匹配失败，则编译器报错。





**实例**

~~~java
//main方法
    public static void main(String[] args) {
        //1,2实际参数
        int add = add(10, 20);
        double add1 = add(10.0, 20.0);
        System.out.println(add);
        System.out.println(add1);

    }
    //加法，a,b表示形式参数
    public static int add(int a,int b){
        return a+b;//除了返回0之外，还有一个功能就是终止方法
    }

    public static double add(double a,double b){
        return a+b;
    }
结果
30
30.0
~~~

**解释**：方法名称一致，参数类型不一致，编译器根据传递的参数识别属于哪个方法，如果未识别到，就会报错。



## 9.可变参数



- jdk1.5开始，java支持传递同类型的可变参数给一个方法
- 在方法声明中，在指定参数类型后加一个省略号（...）
- 一个方法中只能指定一个参数，必须是方法的最后一个参数，任何普通的参数必须在它之前声明。

```java
public static void main(String[] args) {
    Demo02 demo02 = new Demo02();
    demo02.test(1,2,4,3,5);
}
public void test(int x,int ...i){
    System.out.println(x);
    System.out.println(i[0]);
    System.out.println(i[1]);
    System.out.println(i[2]);
    System.out.println(i[3]);
}
```

解释：可变参数是放在方法的参数列表最后面，可变参数的数据类型必须一致。



## 10.递归

- A方法调用A方法，自己调用自己
- 利用递归可以用简单的程序解决复杂的问题，通常将一个大的问题解析成许多个较小的问题来求解。递归策略只需少量的程序就可以描述出解题过程中需要的多次重复的计算，极大地减少代码量。递归的能力在于用有限的语句来定义无限对象的集合。



**递归包含两个部分：**

> 递归头：什么时候不调用自身方法。如果没有头，程序进入死循环。
>
> 递归体：什么时候需要调用自身方法。

**实例**

~~~java
public static void main(String[] args) {
        System.out.println(f(5));
    }

    //1! = 1
    //2! = 2*1
    //3! = 3*2*1
    //i! = i*f(i-1)

    public static int f(int i){
        if(i==1){
            return 1;
        }else {
            return i*f(i-1);
        }
    }
结果
120
~~~

**解释**：递归的方法头（边界条件）必须定义，这里是i=1的时候，前阶段：返回阶段n*（n-1）。

总结：递归因为是在栈操作，电脑支持的栈数值不大，所以递归只适用小数值进行操作，大数值会影响电脑运行（卡机）。

## 11.数组

数组是相同类型数据的有序集合

数组描述的是相同类型的若干个数据，按照一定的先后次序排列组合而成。

其中，每一个数据称作一个数组元素，每一个数组元素可以通过下标来访问他们。

数组的元素是通过索引进行访问，下标从0开始。

获取数组长度:arrayList.length

**数组的声明和创建**

**语法**

数组类型	数组名称 = new 数组类型[数组长度]；

**实例**

~~~java
public static void main(String[] args) {
        //声明一个数组
       int[] nums;
        //创建一个数组
       nums = new int[10];

       //数组元素赋值
        nums[0] = 1;
        nums[1] = 2;
        nums[2] = 3;
        nums[3] = 4;
        nums[4] = 5;
        nums[5] = 6;
        nums[6] = 7;
        nums[7] = 8;
        nums[8] = 9;
        nums[9] = 10;

        //计算所有元素的和
        int sum =0;

        for(int i=0;i<nums.length;i++){
            sum+=nums[i];
        }

        System.out.println(sum);
    }

结果
55
~~~

解释：声明数组  int[] nums:这里只是和声明了数组，但是没有设置数组长度；创建数组 nums=new int[10]： 创建数组；num[0]:根据数组下标进行赋值；

如果某个下标没有值，就会根据数组的值类型输出默认值，比如int类型默认值就是0；nums.length：数组长度

**三种数组初始化**

- 静态初始化

~~~java
 int[] a ={1,2,3};
 Demo02[] demo02s = {new Demo02(1,2),new Demo02(2,3)};
~~~

**解释**：new Demo02（1，2）表示调用Demo2类的构造方法，将1,2这两个参数实例变量进行赋值放在数组里面，同理new Demo02（2,3）也是一样的。

- 动态初始化（包含默认初始化）

~~~java
//动态初始化
        int[] a = new int[2];
        a[0] = 1;
        a[1] = 2;
~~~

**数组的默认初始化：**

```java
//默认初始化
int[] a = new int[2];
System.out.println(a[0]);
结果
0
```

数组是引用类型，它的元素相当于类的实例变量，因此数组一旦分配空间，其中的元素也被按照实例变量同样的方式隐藏初始化（意思就是你初始化的时候没有设置值，他会默认给你设置一个默认值，比如你定义的是int类型的数组，默认值为0）。



**数组的四个特点**

1. 数组长度是确定的，数组长度一旦被确定就不能够改变。

2. 其元素必须是相同类型，不能出现混合类型。

3. 数组元素是任何数据类型，包括基本类型和引用类型。

4. 数组变量是引用类型，数组也可以看成是对象，数组中的每一个元素相当于该对象的成员变量。数组本身就是对象，java中的对象是在堆中，因此数组无论保存原始类型还是其他对象类型，**数组对象本身是在堆中**。

   

**数组边界**

**下标的合法区域**：[0,length-1],如果越界就会报错。

~~~java
 public static void main(String[] args) {
       int[] arr = new int[2];
        System.out.println(arr[2]);

    }
结果
Exception in thread "main" java.lang.ArrayIndexOutOfBoundsException: 2
	at test.base.method.Demo02.main(Demo02.java:6)    
~~~

解释：数组超出索引，也可以是数组下标越界。



## 12.内存分析

**简单内存分析**


## 13.冒泡排序

冒泡排序是最出名的排序算法，总共有八大排序

冒泡排序的代码比较简单，两层循环，外层冒泡轮数，里层依次比较，时间复杂度为（n2）； 



~~~java
    //比较相邻两个数大小，如果第一个数大于第二个数就互换位置
    //每次比较都会产生最大和最小数
    //下一轮会少一次排序
    //循环至结束

    public static void main(String[] args) {
        int[] arr = {12,11,445,141,1,2,4,78,99};
        int temp ;
        for (int i = 0; i <arr.length-1 ; i++) {
            for (int j = 0; j <arr.length-1-i ; j++) {
                if(arr[j]>arr[j+1]){
                    temp = arr[j];
                    arr[j]=arr[j+1];
                    arr[j+1] = temp;
                }
            }
        }
        System.out.println(Arrays.toString(arr));
    }
结果
[1, 2, 4, 11, 12, 78, 99, 141, 445]
~~~

**解释**：外层循环表示循环数组中的每一个数，内存循环的j<arr.length-1-i：表示循环一个之后，数组就减少一个进行循环，里面的判断表示只要前面一个数据大于后面就转换位置。



## 14.稀疏数组

当数组中大部分元素是0，或者同一值的时候，就可以使用稀疏数组来存储数据

稀疏数组的处理方式是：

- 记录数组几行几列，几个不同的值
- 把具有不同值的元素和行列及值记录在一个小的规模当中，从而缩小程序的规模



```java
public static void main(String[] args) {
    //定义一个二维数组
    int[][] arrs = new int[11][11];
    //赋值
    arrs[1][1] = 1;
    arrs[2][2] = 2;

    System.out.println("输出原始数组");
    for (int[] arr : arrs) {
        for (int i : arr) {
            System.out.print(i+"\t");
        }
        System.out.println();
    }
    System.out.println("============================");
    //转换为稀疏数组保存
    //获取有效值的个数
    int sum=0;
    for (int i = 0; i <11; i++) {
        for (int j = 0; j < 11; j++) {
            if(arrs[i][j]!=0){
                sum++;
            }
        }
    }
    System.out.println("有效值的个数："+sum);

    //创建一个稀疏数组的数组
    int[][] arrs1 = new int[sum+1][3];
    arrs1[0][0] = 11;
    arrs1[0][1] = 11;
    arrs1[0][2] = sum;

    //遍历二维数组，将非0的值，放在稀疏数组中
    int count=0;
    for (int i = 0; i < arrs.length; i++) {
        for (int j = 0; j < arrs[i].length; j++) {
            if(arrs[i][j]!=0){
                count++;
                arrs1[count][0] =i;
                arrs1[count][1] =j;
                arrs1[count][2] =arrs[i][j];
            }
        }
    }
    System.out.println("稀疏数组");
    for (int i = 0; i < arrs1.length; i++) {
        System.out.println(arrs1[i][0]+"\t"
                +arrs1[i][1]+"\t"
                +arrs1[i][2]+"\t"
        );
    }
    System.out.println("====================");
    System.out.println("还原");
    //1.读取稀疏数组
    int[][] arrs2 = new int[arrs1[0][0]][arrs1[0][1]];
    //给其中一个元素还原他的值
    for (int i = 1; i < arrs1.length; i++) {
        arrs2[arrs1[i][0]][arrs1[i][1]] = arrs1[i][2];
    }

    System.out.println("还原好的数组");
    for (int[] ints : arrs2) {
        for (int anInt : ints) {
            System.out.print(anInt+"\t");
        }
        System.out.println();
    }

}
结果：
输出原始数组
0	0	0	0	0	0	0	0	0	0	0	
0	1	0	0	0	0	0	0	0	0	0	
0	0	2	0	0	0	0	0	0	0	0	
0	0	0	0	0	0	0	0	0	0	0	
0	0	0	0	0	0	0	0	0	0	0	
0	0	0	0	0	0	0	0	0	0	0	
0	0	0	0	0	0	0	0	0	0	0	
0	0	0	0	0	0	0	0	0	0	0	
0	0	0	0	0	0	0	0	0	0	0	
0	0	0	0	0	0	0	0	0	0	0	
0	0	0	0	0	0	0	0	0	0	0	
============================
有效值的个数：2
稀疏数组
11	11	2	
1	1	1	
2	2	2	
====================
还原
还原好的数组
0	0	0	0	0	0	0	0	0	0	0	
0	1	0	0	0	0	0	0	0	0	0	
0	0	2	0	0	0	0	0	0	0	0	
0	0	0	0	0	0	0	0	0	0	0	
0	0	0	0	0	0	0	0	0	0	0	
0	0	0	0	0	0	0	0	0	0	0	
0	0	0	0	0	0	0	0	0	0	0	
0	0	0	0	0	0	0	0	0	0	0	
0	0	0	0	0	0	0	0	0	0	0	
0	0	0	0	0	0	0	0	0	0	0	
0	0	0	0	0	0	0	0	0	0	0	

```

**解释**：



## 15.内部类

1、成员内部类

2、局部内部类

3、匿名内部类

4、静态内部类
