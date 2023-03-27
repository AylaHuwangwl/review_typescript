import axios from "axios"
import lodash from "lodash"
import underscore from 'underscore'
import KobeImage from "./img/kobe01.jpg"
import App from "./vue/App.vue"
// import { sum } from "./util/math.js"

axios.get("http://codercba.com:8000/home/multidata").then((res) => {
  console.log(res)
})

// underscore.name
console.log(underscore.first(["abc", "cba"]))

// 使用代码:
console.log(whyName)
console.log(whyAge)
console.log(whyHeight)

foo("why", 18)

const p = new Person("why", 18)
console.log(p.name, p.age)

const imageEl = document.createElement("img")
imageEl.src = KobeImage
document.body.append(imageEl)

// 调用ajax
$.ajax({
  url: "http://codercba.com:8000/home/multidata",
  success: function(res: any) {
    console.log(res)
  }
})

// console.log(sum(20, 30))

console.log("123".startsWith("12"))

