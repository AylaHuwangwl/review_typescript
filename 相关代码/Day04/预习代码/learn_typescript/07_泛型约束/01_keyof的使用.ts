function getProperty<Type, Key extends keyof Type>(obj: Type, key: Key) {
  return obj[key]
}

const info = {
  name: "why",
  age: 18
}

console.log(getProperty(info, "name"))

