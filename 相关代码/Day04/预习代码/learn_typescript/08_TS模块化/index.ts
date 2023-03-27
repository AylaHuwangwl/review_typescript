import { type IFoo, type IDType } from "./foo"
import { Time, Price } from "./bar"

const id: IDType = 100
const foo: IFoo = {
  name: "why",
  age: 18
}

console.log(Time.format("111"), Time.name)
console.log(Price.format("111"))

console.log(id, foo)

const doc: Document 
