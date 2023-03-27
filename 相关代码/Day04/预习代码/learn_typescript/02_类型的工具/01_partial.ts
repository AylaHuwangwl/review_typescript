// 自定义自己的Partial类型
type MyPartial<T> = {
  [K in keyof T]?: T[K]
}

interface IPerson {
  name: string
  age: number
  height: number
}

const info: IPerson = {
  name: 'why',
  age: 18,
  height: 1.88
}

function updatePerson(person: IPerson, partPerson: MyPartial<IPerson>) {
  return { ...person, ...partPerson }
}

updatePerson(info, { name: "kobe" })

export {}
