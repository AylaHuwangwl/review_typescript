type HYReadonly<T> = {
  readonly [K in keyof T]: T[K]
}

interface IPerson {
  name: string
  age: number
}

const info: HYReadonly<IPerson> = {
  name: "why",
  age: 18
}

const obj: IPerson = {
  name: "kobe",
  age: 30
}

// Object.freeze(info)
// info.name = "aaa"

obj.name = "james"

export {}
