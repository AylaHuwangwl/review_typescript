// keyof的作用: 返回一个多类型的对象中的所有类型(类似于遍历出来所有的类型)
// 经常和extends一起来使用, 判断某一个类型是否是对象类型中的其中一个

interface Info {
  name: string,
  age: number,
  friends: string[]
}

type NameType = Pick<Info, "name">
type AgeType = Pick<Info, "age"|"friends">

type InfoTypes = keyof Info
type obj = {
  name: "why",
  age: 18,
  [height: number]: any
}
type testTypes = keyof obj
type ObjName = Pick<obj, "name">
type Height = keyof obj

type MyPick<T, K extends keyof T> = {
  [P in K]: T[P]
} 

type NameType2 = MyPick<Info, "age">

type MyReadonly<T> = {
  readonly [P in keyof T]: T[P]
}

type ReadOnlyInfo = Readonly<Info>
const info: ReadOnlyInfo = {
  name: "why",
  age: 18,
  friends: ["aaa"]
}
