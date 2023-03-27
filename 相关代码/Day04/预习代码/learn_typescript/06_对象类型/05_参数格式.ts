type CalcType = (num1: number, num2: number) => number

function calc(calcFn: CalcType) {
  calcFn(111, 222)
}

function foo(num1) {
  return 123
}

type res = typeof foo extends CalcType? "111": "222"

calc(foo)

