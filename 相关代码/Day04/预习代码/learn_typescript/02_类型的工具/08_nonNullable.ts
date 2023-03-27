// Constructs a type by excluding null and undefined from Type.
type HYNonNullable<T> = T extends undefined | null? never: T

type unionType= string | number | undefined | null
type unionType2 = HYNonNullable<unionType>

export {}
