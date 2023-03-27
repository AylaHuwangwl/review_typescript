// extends 是约束的意思. 两种用法:
// 用法一: 三元运算符
// 用法二: 直接约束

// extends ? : 称之为条件类型(Conditional Type)
// 和js中的逻辑运算符是一样的, 用于判断一些动态的类型
type res = 1 extends 2 ? true: false

// 对类型参数的运算
type isTwo<T> = T extends 2 ? true: false
type res1 = isTwo<1>
type res2 = isTwo<2>
// 这种类型也叫做高级类型
// 高级类型的特点是传入类型参数, 经过一系列类型运算逻辑后, 返回新的类型


// 案例: 生成多个函数
// declare function add(num1: number, num2: number): number
// declare function add(num1: string, num2: string): string

declare function add<
  T extends number | string
>(num1: T, num2: T): T extends string ? string: number

const res1 = add(10, 20)
const res2 = add("aaa", "bbb")
const res3 = add("aaa", "aa")

export {}

