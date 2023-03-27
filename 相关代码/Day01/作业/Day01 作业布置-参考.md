# Day01 作业布置

## 一. 完成课堂所有的代码







## 二. JavaScript有什么缺点？TypeScript弥补了JavaScript的什么缺点？

JS缺点

* 比如ES5以及之前的使用的var关键字关于作用域的问题
* 比如最初JavaScript设计的数组类型并不是连续的内存空间
* 比如直到今天JavaScript也没有加入类型检测这一机制

编程开发中我们有一个共识：错误出现的越早越好

如何在 代码编译期间 发现代码的错误

JavaScript可以做到吗？不可以

**TypeScript的出现弥补了JavaScript类型约束上的缺陷**

TypeScript是拥有类型的JavaScript超集，它可以编译成普通、干净、完整的JavaScript代码

我们可以将TypeScript理解成加强版的JavaScript

JavaScript所拥有的特性，TypeScript全部都是支持的，并且它紧随ECMAScript的标准，所以ES6、ES7、ES8等新语法标准，它都是支持的

并且TypeScript最终会被编译成JavaScript代码，所以你并不需要担心它的兼容性问题





## 三. TypeScript有什么特点？哪些框架或者项目在使用TypeScript？

始于JavaScript，归于JavaScript  TypeScript可以编译出纯净、 简洁的JavaScript代码

Angular源码

Vue3源码

VSCode也是使用TypeScript来完成的

ant-design的UI库，也大量使用TypeScript来编写

包括小程序开发，也是支持TypeScript的





## 四. TypeScript的运行环境如何搭建？如何运行TypeScript代码？

* 需要在电脑上安装TypeScript 

  ```js
  # 安装命令
  npm install typescript -g
  
  # 查看版本
  tsc --version
  ```

* 两种方式来运行TypeScript

  * 通过webpack，配置本地的TypeScript编译环境和开启一个本地服务，可以直接运行在浏览器上
  * 通过ts-node库，为TypeScript的运行提供执行环境

  ```js
  # 方式二：安装ts-node
  npm install ts-node -g
  # 另外ts-node需要依赖 tslib 和 @types/node 两个包
  npm install tslib @types/node -g
  # 可以直接通过 ts-node 来运行TypeScript的代码
  ts-node math.ts
  ```

  





## 五. 如何定义TypeScript的变量，定义变量支持哪些JavaScript类型？

```js
# 数字 布尔 字符串类型
let num: number = 123
let flag: boolean = true
const name = 'lgl'

#数组类型
let names: string[] = ["aaa", "bbb", "ccc"]
let nums: Array<number> = [111, 222, 333];

#对象类型
const info: object = {
  name: "xdh",
  age: 18,
};

# null undefined类型
const n1: null = null;
const n2: undefined = undefined;

# Symbol类型
const title1 = Symbol("title")
const title2 = Symbol('title')
const info = {
  [title1]: "程序员",
  [title2]: "老师"
}
```







## 六. 常见的TypeScript特有类型有哪些？这些类型有什么作用？

* any类型可以设置任意类型
* unknown
* void
* never
* tuple元组类型



























































































