function foo(this: { name: string }) {
  console.log(this.name)
}

// 获取一个函数中this的类型
type ThisType = ThisParameterType<typeof foo>

function bar() {}
type ThisType2 = ThisParameterType<typeof bar>

// 用于移除一个函数类型Type的this参数类型, 并且返回当前的函数类型
type FnType = OmitThisParameter<typeof foo>

export {}