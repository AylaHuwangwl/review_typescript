type HYRecord<K extends keyof any, T> = {
  [P in K]: T
}

interface IPerson {
  name: string
  age: number
}

const p1: IPerson = { name: "why", age: 18 }
const p2: IPerson = { name: "kobe", age: 30 }

type CityType = "上海" | "洛杉矶"

const data: HYRecord<CityType, IPerson> = {
  "上海": p1,
  "洛杉矶": p2
}

export {}
