// https://juejin.cn/post/6985463429502877726

class Foo {

}
class Bar {

}

const foo: Foo = new Foo()
// 这行代码并不报错, 这是源自于TypeScript使用的是鸭子类型
// If it looks like a duck, swims like a duck, and quacks like a duck, then it probably is a duck.
// 所以TypeScript只关心一个类型能够做什么，而不关心它叫什么以及它在类型层次结构中处于什么位置。
const foo2: Foo = new Bar()


// 下面的代码思考, 为什么不可以?
class A {
  name:string = "a"
  age:number = 18
}

class B {
  name: string = "b"
}

const b: B = new A()
// const a: A = new B()

// "1": A是一个比B具有更多属性的类型, 也就是A是更具体的类型
type res1 = A extends B ? "1": "2"
// "2": B不能继承自A, 因为B中没有age属性
type res2 = B extends A ? "1": "2"

// 所以从结构上来看，A extends B很像是A是B的超集。说的更明白点，就是类型A包含类型B的所有属性，并且可能还有更多。
// 所以也可以从另一个角度理解A extends B：那就是A是B的一个更具体的版本。这里的“具体”的含义可以理解为有更多的属性或者是更加的明确，也就是有更多的限制。

/**
 * 这就引出了顶层类型（Top）和底层类型（Bottom），也就是不那么具体的类型和最具体的类型。
  在类型理论中，顶层类型是所有其他的类型都可以分配的类型，如果我们对一个类型没有任何具体的信息，那么就可以把这个类型设置为
  
  顶层类型，顶层类型被视为所有可能类型的联合：type Top = string | number | {foo: Bar} | Baz[] | ... | ∞
  TypeScript包含两个顶层类型: any和unknow
    * 使用any就意味着：你无法确定值的类型，所以TypeScript会假定你使用的是正确的，并且不会有任何的告警
    * 使用unknown就意味着：同样是无法确定值的类型，但是TypeScript会要求你在运行时检查值的类型
  
  底层（bottom）类型是其他类型不可分配的类型，也没有值可以赋值给这个类型的变量。可以将其视为空联合类型：type Bottom = ∅
  TypeScript中有一个底层类型：never。这个类型很能见名知意，也就是啥也不是。
  在使用条件类型时，了解顶层类型和底层类型很有用。never在使用条件类型细化联合类型的时候尤其有用。
 */

class Lion { meow() {} }
class Zebra { }
class Tiger { meow() {} }
class Shark { }

// 过滤猫科动物
type Animal = Lion | Zebra | Tiger | Shark
type ExtractCat<A> = A extends { meow(): void }? A: never
type CatAnimal = ExtractCat<Animal>
/**
 * 起初，这种方式让我觉得有点迷糊又神奇。接下来我们深入了解一下TypeScript在处理ExtractCat<Animal>时做了什么：
 *  1.首先，它将ExtractCat递归的应用于Animal的所有成员：
 *    type Cat =
        | ExtractCat<Lion>
        | ExtractCat<Zebra>
        | ExtractCat<Tiger>
        | ExtractCat<Shark>
 *  2.然后它判断这些条件类型：
      type Cat = Lion | never | Tiger | never
    3.接下来一些有趣的事情发生了，还记得没有值可以是never类型么？所以在联合类型中包含never是没有任何意义的，所以TypeScript抛弃了它.
      type Cat = Lion | Tiger
  在TypeScript中，这种条件类型的用法被称为分发条件类型（distributive conditional type）。
    这种“分发”，也就是联合类型以递归方式展开，但是这是有限制的：只发生在extends关键字左侧是普通类型变量的时候。
 */

export {}
