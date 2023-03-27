interface ICalcFn {
  name: string
  (num1: number, num2: number): void
}

function calc(calcFn: ICalcFn) {
  console.log(calcFn.name)
  calcFn(10, 20)
}
