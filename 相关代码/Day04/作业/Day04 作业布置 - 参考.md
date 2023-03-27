# Day04 作业布置

## 一. 完成课堂所有的代码









## 二. TypeScript条件类型如何使用？解释一下什么是infer和**distributive**？（了解）

条件类型使用

- 条件类型的写法有点类似于 JavaScript 中的条件表达式（condition ? trueExpression : falseExpression ）
- 比如:  SomeType extends OtherType ? TrueType : FalseType;

```ts
type IDType = number | string

// 判断number是否是extends IDType
// const res = 2 > 3? true: false
type ResType = boolean extends IDType? true: false

function sum<T extends number | string>(num1: T, num2: T): T extends number? number:string
function sum(num1, num2) {
  return num1 + num2
}

const res = sum(20, 30)
const res2 = sum("abc", "cba")

export {}

```

inter关键字

- 它用来在条件类型中推断
- 可以从正在比较的类型中推断类型，然后在 true 分支里引用该推断结果

```ts
type CalcFnType = (num1: number, num2: string) => number

function foo() {
  return "abc"
}
// 总结类型体操题目: MyReturnType
type MyReturnType<T extends (...args: any[]) => any> = T extends (...args: any[]) => infer R? R: never
type MyParameterType<T extends (...args: any[]) => any> = T extends (...args: infer A) => any? A: never

// 获取一个函数的返回值类型: 内置工具
type CalcReturnType = MyReturnType<CalcFnType>
type FooReturnType = MyReturnType<typeof foo>

type CalcParameterType = MyParameterType<CalcFnType>

export {}
```

distributive关键字

- 用作分发条件类型
- 当在泛型中使用条件类型的时候，如果传入一个联合类型，就会变成分发的（distributive）

```ts
type toArray<T> = T extends any? T[]: never

type NumArray = toArray<number>

// number[]|string[] 而不是 (number|string)[]
type NumAndStrArray = toArray<number|string>
```



## 三. 列举一下常见的TypeScript内置类型工具？分别说出它们的作用以及实现。

内置类型工具

- Partial<Type>  :  用于构造一个Type下面的所有属性都设置为可选的类型
- Required<Type> :  用于构造一个Type下面的所有属性全都设置为必填的类型，这个工具类型跟 Partial 相反。
- Readonly<Type> : 用于构造一个Type下面的所有属性全都设置为只读的类型，意味着这个类型的所有的属性全都不可以重新赋值。
- Record<Keys,Type> : 用于构造一个对象类型，它所有的key(键)都是Keys类型，它所有的value(值)都是Type类型。
- Pick<Type,Keys>: 用于构造一个类型，它是从Type类型里面挑了一些属性Keys
- Omit<Type,Keys> : 用于构造一个类型，它是从Type类型里面过滤了一些属性Keys
- Exclude<UnionType,ExcludedMembers> : 用于构造一个类型，它是从UnionType联合类型里面排除了所有可以赋给ExcludedMembers的类型
- Extract<Type,Union> : 用于构造一个类型，它是从Type类型里面提取了所有可以赋给Union的类型。
- NonNullable<Type>: 用于构造一个类型，这个类型从Type中排除了所有的null、undefined的类型。
- InstanceType<Type> : 用于构造一个由所有Type的构造函数的实例类型组成的类型。



## 四. TypeScript模块化和JavaScript模块化有什么区别？什么是命名空间？

TypeScript模块化和JavaScript模块化的区别

- JavaScript有一个很长的处理模块化代码的历史, 比如:以前会将一个模块封装到一个立即执行函数中
- 随着时间流逝，社区和 JavaScript规范已经使用为名为 ESModule的格式, 这也就是我们所知的import/export语法
- JavaScript 规范声明任何没有 export 的 JavaScript文件都应该被认为是一个脚本，而非一个模块
- 在TypeScript中最主要使用的模块化方案就是ESModule, 在TS中如果想要让一个JS文件编程模块化可以添加一个export{} 语法

命名空间

- 命名空间在TypeScript早期时，称之为内部模块

- 目的是将一个模块内部再进行作用域的划分，防止一些命名冲突的问题；

- 虽然命名空间没有被废弃，但是由于 ES 模块已经拥有了命名空间的大部分特性，因此更推荐使用 ES 模块

  



## 五. 什么是TypeScript声明文件，声明文件如何分类？如何引入和起作用？

TypeScript声明文件

- 我们之前编写的typescript文件都是 .ts 文件，这些文件最终会输出 .js 文件，也是我们通常编写代码的地方；
- 还有另外一种文件 .d.ts 文件，它是用来做类型的声明(declare)，称之为类型声明（Type Declaration）或者类型定义（Type Definition）文件。 

声明文件如何分类

- 内置类型声明: 是typescript自带的、帮助我们内置了JavaScript运行时的一些标准化API的声明文件,不需导入

- 外部定义类型声明: 是我们使用一些库（比如第三方库）时，需要的一些类型声明, 需要额外安装

- 自己定义类型声明: 在自己的代码中声明一些类型，方便在其他地方直接进行使用；



## 六. 如何编写自己的声明文件？可以声明哪些类型？（掌握）

编写自己的声明文件

- 自己新建一个 .d.ts 文件,然后在该文件中根据声明模块的语法编写类型声明
- 比如:可以声明变量  函数   类  模块  文件 等等

```ts
declare module "lodash" {
  export function join(...args: any[]): any
}

// 为自己的 变量/函数/类 定义类型声明
declare const whyName: string
declare const whyAge: number
declare const whyHeight: number

declare function foo(bar: string): string

declare class Person {
  constructor(public name: string, public age: number)
}

// 作为一个第三方库为其他开发者提供类型声明文件 .d.ts => axios.d.ts


// 声明文件模块
declare module "*.png"
declare module "*.jpg"
declare module "*.jpeg"
declare module "*.svg"

declare module "*.vue"


// 声明成模块(不合适)
// 声明命名空间
declare namespace $ {
  export function ajax(settings: any): any
}
```





## 七. tsconfig.json文件的作用是什么？有哪些比较常见的配置？

tsconfig.json文件有两个作用：

- 作用一（主要的作用）：让TypeScript Compiler在编译的时候，知道如何去编译TypeScript代码和进行类型检测；

  - 比如是否允许不明确的this选项，是否允许隐式的any类型；

  - 将TypeScript代码编译成什么版本的JavaScript代码；

- 作用二：让编辑器（比如VSCode）可以按照正确的方式识别TypeScript代码；
  - 对于哪些语法进行提示、类型错误检测等等；

比较常见的配置:

```json
{
  "compilerOptions": {
    "target": "ES2016",                                  
    "module": "commonjs",                               
    
    "esModuleInterop": true,                 
    "forceConsistentCasingInFileNames": true,            
 
    "strict": true,                                   
    "noImplicitAny": true,                           
    "strictNullChecks": true,                        
    "strictFunctionTypes": true,                     
    "noImplicitThis": true,                           
    "skipLibCheck": true                                
  },
 "files": [],
 "include": ["./src/**/*.ts", "./types/*.d.ts"]
}
```







































































































