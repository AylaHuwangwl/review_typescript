class Person {
  constructor(public name: string, private _age: number) {
  }
  set age(newAge) {
    this._age = newAge
  }
  get age() {
    return this._age
  }
}

const p = new Person("why", 18)
console.log(p.name, p.age)

class Student extends Person {
  constructor(name: string, age: number, public sno: number) {
    super(name, age)
  }
}

const stu = new Student("why", 123, 111)
console.log(stu.name, stu.age, stu.sno)

const imgEl = document.querySelector(".img") as HTMLImageElement


export {}
