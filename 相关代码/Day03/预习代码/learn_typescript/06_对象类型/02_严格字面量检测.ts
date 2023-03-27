interface IPerson {
  name: string
  age: number
}

// 1.错误的做法
// const p1: IPerson = {
//   name: "why",
//   age: 18,
//   height: 1.88
// }

// 2.正确的做法
const temp = {
  name: "why",
  age: 18,
  height: 1.88
}

const p2: IPerson = temp

// 3.函数接收对象
function printInfo(info: IPerson) {
  console.log(info.name, info.age)
}

// printInfo({name: "why", age: 18, height: 1.88})

export {}
