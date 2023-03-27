interface IPerson {
  name: string;
  age: number;
}

interface IPerson {
  eating: () => void
}

const p: IPerson = {
  name: "why",
  age: 18,
  eating: function() {
    console.log("eating")
  }
}

export {}

