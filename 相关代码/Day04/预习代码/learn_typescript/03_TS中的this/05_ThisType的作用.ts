interface IState {
  name: string
  age: number
}

interface IData {
  state: IState
  running: () => void
  eating: () => void
}

const info: IData & ThisType<IState> = {
  state: { name: "why", age: 18 },
  running: function() {
    console.log(this.name)
  },
  eating: function() {
  }
}

info.running.call(info.state)

