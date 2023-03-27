// typeof的作用: 将一个js代码, 转成它应该有的ts类型
// 1.基本数据类型
// 注意: let的话是number类型, const的话是123类型
let num = 123
type numType = typeof num

let str = "abc"
type strType = typeof str


// 2.数组类型/函数类型
const names = ["abc", "cba", 123]
type NamesTypes = typeof names

function foo() {

}
type fooType = typeof foo


// 3.对象类型
const statusMap = {
  200: "操作成功",
  404: "内容找不到",
  500: "服务器错误",
  1001: "登录失败"
}

type MyStatus = typeof statusMap
type StatusType = keyof MyStatus

export {

}