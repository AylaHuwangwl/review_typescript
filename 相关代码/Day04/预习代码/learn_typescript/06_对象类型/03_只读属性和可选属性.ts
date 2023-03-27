interface IPerson {
  name: string
  age?: number
  readonly height: number
}

const p: IPerson = {
  name: "why",
  height: 1.88
}

// p.height = 1.98

export {}