import HYRequest from "./request";
import { BASE_URL1, TIME_OUT1 } from "./config"

const hyRequest = new HYRequest({ 
  baseURL: BASE_URL1,
  timeout: TIME_OUT1,
  interceptors: {
    requestInterceptor: config => {
      console.log("实例请求成功拦截")
      return config
    },
    requestInterceptorCatch: err => {
      console.log("实例请求失败拦截")
    },
    responseInterceptor: res => {
      console.log("实例响应成功拦截", res)
      return res
    },
    responseInterceptorCatch: err => {
      console.log("实例响应失败拦截")
      return err
    }
  }
})

export default hyRequest
