function foo(this: any, num1: number, num2: number) {
  console.log(num1 + num2)
  console.log(this.name)
}

foo(111, 222)
