// Exclude<UnionType, ExcludedMembers>
// Constructs a type by excluding from UnionType all union members that are assignable to ExcludedMembers

type HYExclude<T, U> = T extends U? never: T
type HYOmit<T, K> = Pick<T, HYExclude<keyof T, K>>

type PropertyTypes = "name" | "age" | "height"
type PropertyTypes2 = HYExclude<PropertyTypes, "height">


export {}

