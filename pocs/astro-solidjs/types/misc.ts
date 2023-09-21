export type SomeObj = object;
export type SomeError = Error & SomeObj;

export type Nullable<T> = T | null;
export type NullableDeep<T> = { [K in keyof T]: T[K] | null }; // export type NullableDeep<T> = { [K in keyof T]: Nullable<T[K]> };
export type NonUndefined<T> = T extends undefined ? never : T;

// NonNullable - Constructs a type by excluding null and undefined from Type.
