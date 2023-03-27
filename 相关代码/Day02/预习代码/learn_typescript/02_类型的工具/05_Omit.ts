// 如果每次都pick可能类型太多了
type HYOmit<T, K> = {
  [P in keyof T as P extends K? never: P]: T[P]
}

interface IPerson {
  name: string
  age: number
  height: number
}

type IKun = Omit<IPerson, "height">

export {}
