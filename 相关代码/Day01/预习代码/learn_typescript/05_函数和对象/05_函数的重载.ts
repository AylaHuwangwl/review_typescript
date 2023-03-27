// function getLength(arg: string|any[]) {
//   return arg.length
// }

function getLength(arg: { length: number }) {
  return arg.length
}

console.log(getLength(["abc", "cba", "nba"]))
console.log(getLength("hello world"))

export {}