type CalcFnType = (num1: number, num2: number) => number

type HYReturnType<T extends (...args: any[]) => any> = T extends (...args: any[]) => infer R? R: never
type CalcReturnType = HYReturnType<CalcFnType>

type HYParameters<T extends (...args: any[]) => any> = T extends (...args: infer P) => any? P: never
type CalcParameterType = HYParameters<CalcFnType>

export {}

