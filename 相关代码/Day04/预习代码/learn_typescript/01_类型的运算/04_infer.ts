// infer: 推断的意思, 占位, 给后续的代码去推断?
// 案例一: 获取一个函数参数的第一个参数
function descInfo(person: {
  name: string,
  age: number,
  hobbies: [string, string]
}) {
  console.log(`my name is ${person.name}, age is ${person.age}, hobbies is ${person.hobbies.join(" ")}`)
}

// 获取一个函数的第一个参数
type GetFirstArgType<T> = T extends (fisrt: infer K) => any ? K: never
type InfoType = GetFirstArgType<typeof descInfo>

const info: InfoType = {
  name: "why",
  age: 18,
  hobbies: ["篮球", "music"]
}

descInfo(info)

export {}
