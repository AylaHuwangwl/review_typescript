// 在没有明确声明的情况下, this是any的
// 但是配置了noImplicitThis会报错
function foo1(this: { name: string }) {
  console.log(this)
}

foo1.call({ name: "why" })

const obj = {
  name: "obj",
  foo: function() {
    console.log(this.name)
  }
}

obj.foo()

class Person {
  name: string
  age: number

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }

  eating() {
    console.log(this.name)
  }
}

export {}