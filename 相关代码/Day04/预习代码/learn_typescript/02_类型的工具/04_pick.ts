type HYPick<T, K extends keyof T> = {
  [P in K]: T[P]
}

interface IPerson {
  name: string
  age: number
  height: number
}

type IKun = Pick<IPerson, "name"| "age">

export {}
