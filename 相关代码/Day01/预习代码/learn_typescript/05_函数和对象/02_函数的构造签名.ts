interface IPerson {
  new (name: string): Person
}

function factory(ctor: IPerson) {
  return new ctor("why")
}

class Person {
  name: string
  constructor(name: string) {
    this.name = name
  }
}

factory(Person)

export {}
