// https://stackoverflow.com/questions/70364964/difference-in-typescript-between-types-instancetypetypeof-myclass-and-myc
/**
 * 在TypeScript中, 当你创建出来一个类型的事实上你做了两件事情, 比如Person
 *  1.创建一个类class Person
 *  2.创建了两个类型
 * 哪两个类型呢?
 *  1.Person
 *  2.typeof Person: 构造函数
 */
type HYInstanceType<T extends new (...args: any[]) => any> = T extends new (...args:any[]) => infer R? R: never

class Person {
  name: string
  age: number

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }
}

type T = typeof Person
type PersonType = InstanceType<typeof Person>

// 对于普通的定义来说似乎是没有区别的
const info: Person = { name: "why", age: 18 }
const into2: PersonType = { name: "kobe", age: 30 }

// 但是如果我们想要做一个工厂函数, 用于帮助我们创建某种类型的对象
// 这里的返回值不可以写T, 因为T的类型会是typeof Person
// 这里就可以使用InstanceType<T>, 它可以帮助我们返回构造函数的返回值类型(构造函数创建出来的对象类型)
function factory<T extends new (...args: any[]) => any>(ctor: T): HYInstanceType<T> {
  return new ctor()
}

const p1 = factory(Person)

