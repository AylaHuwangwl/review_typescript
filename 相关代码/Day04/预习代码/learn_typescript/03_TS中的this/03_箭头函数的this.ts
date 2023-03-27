// 箭头函数中不需要声明this
const foo = () => {
  console.log(this)
}

console.log(this)

export {}