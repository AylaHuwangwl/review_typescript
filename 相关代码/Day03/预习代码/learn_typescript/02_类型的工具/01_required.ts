type HYRequired<T> = {
  [K in keyof T]-?: T[K]
}

interface IPerson {
  name: string
  age?: number
  height?: number
}

type IPersonRequired = HYRequired<IPerson>

const info: IPersonRequired = {
  name: "why",
  age: 18,
  height: 1.88
}

export {}
