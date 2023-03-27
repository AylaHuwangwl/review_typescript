
function sum<T extends number | string>(arg1: T, arg2: T): T extends string ? string: number
function sum(arg1: any, arg2: any) {
  return arg1 + arg2
}

const res1 = sum(10, 20)
const res2 = sum("aaa", "bbb")


export {}
