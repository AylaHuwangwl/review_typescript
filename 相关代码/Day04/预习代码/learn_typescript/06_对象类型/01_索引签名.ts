interface ICollection {
  [index: number]: number|string
  [index: string]: any
  length: number
}

function logCollection(collection: ICollection) {
  for (let i = 0; i < collection.length; i++) {
    const item = collection[i]
    console.log(collection[i])
  }
}

const tuple: [string, number, number] = ["why", 18, 1.88]
const array: string[] = ["aaa", "bbb", "ccc"]
const info = { name: "why", age: 18, height: 1.88, length: 3 }
logCollection(tuple)
logCollection(array)
logCollection(info)

export {}


