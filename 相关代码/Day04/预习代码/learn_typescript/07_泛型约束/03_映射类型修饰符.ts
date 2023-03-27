type MapType<Type> = {
  [property in keyof Type]-?: Type[property]
}

interface IPerson {
  name: string
  age: number
  height: number
}

type NewPerson = MapType<IPerson>

type MapType2<Type> = {
  [property in keyof Type]-?: Type[property]
}

type NewPerson2 = MapType2<IPerson>


export {}