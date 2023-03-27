interface IPerson {
  name: string
  age: number
}

type MapType<Type> = {
  [property in keyof Type]: boolean
}

type NewPerson = MapType<IPerson>


export {}
