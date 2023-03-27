type MapType<Type> = {
  [property in keyof Type]-?: Type[property]
}

interface IPerson {
  name: string
  age: number
  height: number
}

type NewPerson = MapType<IPerson>


export {}