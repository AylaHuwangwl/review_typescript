type toArray<Type> = Type extends any ? Type[]: never

// string[] | number[]
type newType = toArray<number | string>

