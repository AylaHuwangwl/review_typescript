import React from "react"
import axios from "axios"

// 测试内置声明类型
const message = "Hello World"
message.startsWith("aaa")

const promise = new Promise(() => {})
const foo = () => {
  
}

// 自己定义的文件类型
const p: IPerson = {
  name: 'why',
  age: 18
}

declare const name = "why"

