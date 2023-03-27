// Extract<Type, Union>
// Constructs a type by extracting from Type all union members that are assignable to Union.

type HYExtract<T, U> = T extends U? T: never

type PropertyTypes = "name" | "age" | "height"
type PropertyTypes2 = HYExtract<PropertyTypes, "name"|"age">

export {}
