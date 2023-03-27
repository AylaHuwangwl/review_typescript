function handleMessage(message: number|string) {
  switch (typeof message) {
    case "string":
      console.log("字符串的处理逻辑")
      break
    case "number":
      console.log("数字类型的处理逻辑")
      break
    default:
      const check: never = message
  }
}