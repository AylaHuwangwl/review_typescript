# Day02 作业布置

## 一. 完成课堂所有的代码









## 二. 什么是联合类型和交叉类型，它们有什么区别？（面试题）



联合类型

- 联合类型是由两个或者多个其他类型组成的类型, 
- 交叉类型使用 | 符号, 比如:   number |string, 表示可以是这些类型中的任何一个值
- 联合类型中的每一个类型被称之为联合成员



交叉类型

- 交叉类似表示需要满足多个类型的条件

- 交叉类型使用 & 符号, 比如:   number & string, 表达的含义是number和string要同时满足

  

联合类型和交叉类型区别

- 联合类型表示可以是这些类型中的任何一个值
- 交叉类似表示需要满足多个类型的条件



## 三. 类型别名（Type）和接口类型（Interface）有什么关系和区别？（面试题）

类型别名（Type）

- 可以给类型起一个别名

- Type类型不能出现重复定义

- 接口类型定义的类型也可以使用Type定义

  

接口类型（Interface）

- 接口类型可以给对象 / 函数等定义类型

- 接口是可以实现多个接口

- 接口也可以被类实现

  

区别

- 类型别名和接口非常相似，在定义对象类型时，大部分时候，你可以任意选择使用
- 接口的几乎所有特性都可以在 type 中使用,  如果是定义非对象类型，通常推荐使用type
- Type类型不能出现重复定义,  而interface 可以重复的对某个接口来定义属性和方法；



## 四. 什么是TypeScript的类型缩小？有什么作用？

**什么是类型缩小呢？**

- 类型缩小的英文是 Type Narrowing（也有人翻译成类型收窄）；

- 我们可以通过类似于 typeof padding === "number" 的判断语句，来改变TypeScript的执行路径；

- 在给定的执行路径中，我们可以缩小比声明时更小的类型，这个过程称之为 缩小（ Narrowing ）;

- 而我们编写的 typeof padding === "number 可以称之为 类型保护（type guards）；

**常见的类型保护有如下几种：**

- typeof

- 平等缩小（比如===、!==）

- instanceof

- in

- 等等...



## 五. 函数有自己的类型吗？如何定义？什么是函数调用签名？什么是函数构造签名？

定义函数类型

- 可以编写函数类型的表达式（Function Type Expressions），来表示函数类型
- (num1: number, num2: number) => void，代表的就是一个函数类型, 这个函数是没有返回值的，所以是void；

函数调用签名

- 函数类型表达式并不能支持声明属性, 如果我们想描述一个带有属性的函数，我们可以在一个对象类型中写一个调用签名（call signature）

```ts
interface IBar {
  name: string
  age: number
  // 函数可以调用: 函数调用签名
  (num1: number): number
}

const bar: IBar = (num1: number): number => {
  return 123
}

```



函数构造签名

- 函数也可以使用 new 操作符调用，当被调用的时候，TypeScript 会认为这是一个构造函数(constructors)
- 写一个构造签名（Construct Signatures ），方法是在调用签名前面加一个 new 关键词

```ts
class Person {
}

interface ICTORPerson {
  new (): Person
}

function factory(fn: ICTORPerson) {
  const f = new fn()
  return f
}

factory(Person)

```



## 六. 什么是函数的重载，函数的重载有什么作用？

函数的重载和作用

- 函数的重载 就是函数名称相同,函数的参数个数和参数的类型不同

- 在TypeScript中，我们可以去编写不同的重载签名（*overload signatures*）来表示函数可以以不同的方式进行调用；

- 一般是编写两个或者以上的重载签名，再去编写一个通用的函数以及实现；
- 这样就可以根据我们传入的参数类型来决定执行函数体时，到底执行哪一个函数的重载签名

函数的重载这里有两种实现方案：

- 方案一：使用联合类型来实现；

- 方案二：实现函数重载来实现；



## 七. TypeScript中的函数如何绑定this？有哪些this相关的工具？

函数绑定this

- 函数的第一个参数我们可以根据该函数之后被调用的情况，用于声明this的类型（名词必须叫this）
- 在后续调用函数传入参数时，从第二个参数开始传递的，this参数会在编译后被抹除

```ts
function foo(this: { name: string }, info: {name: string}) {
  console.log(this, info)
}

foo.call({ name: "why" }, { name: "kobe" })
```



this相关的工具:

- ThisParameterType：
  - 用于提取一个函数类型Type的this (opens new window)参数类型；
  -  如果这个函数类型没有this参数返回unknown；

- OmitThisParameter：
  - 用于移除一个函数类型Type的this参数类型, 并且返回当前的函数类型

- ThisType

  - 这个类型不返回一个转换过的类型，它被用作标记一个上下文的this类型

    

## 八. TypeScript中类的定义有什么特点？什么是属性修饰符？

类的定义有什么特点:

- 类的定义我们通常会使用class关键字：

- 在面向对象的世界里，任何事物都可以使用类的结构来描述；

- 类中包含特有的属性和方法；
- 类可以有自己的构造函数constructor，当我们通过new关键字创建一个实例时，构造函数会被调用
- 类中可以有自己的函数，定义的函数称之为方法；

类的属性和方法支持三种修饰符： public、private、protected

- public 修饰的是在任何地方可见、公有的属性或方法，默认编写的属性就是public的；

- private 修饰的是仅在同一类中可见、私有的属性或方法；

- protected 修饰的是仅在类自身及子类中可见、受保护的属性或方法；





















































































