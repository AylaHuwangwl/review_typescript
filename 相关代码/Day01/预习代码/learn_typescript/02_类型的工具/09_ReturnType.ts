// Constructs a type consisting of the return type of function Type.
// 第一个extends是对传入的条件进行限制
// 第二个extends是为了进行条件获取类型
type HYReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R? R: never

type T1 = HYReturnType<() => string>
type T2 = HYReturnType<() => void>
type T3 = HYReturnType<(num1: number, num2: number) => string>

function sum(num1: number, num2: number) {
  return num1 + num2
}

function getInfo(info: {name: string, age: number}) {
  return info.name + info.age
}

type T4 = HYReturnType<typeof sum>
type T5 = HYReturnType<typeof getInfo>
type T6 = HYReturnType<() => void>
