type FnType = () => void

const foo: FnType = () => {
  return 123
}

console.log(foo())

const names = ["abc", "cba", "nba"]
names.forEach(item => item.length)

export {}
