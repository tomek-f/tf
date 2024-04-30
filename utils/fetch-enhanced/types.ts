export type SomeObject = Record<string, unknown>;

export type SomeError = Error & SomeObject;

export type Nullable<T> = T | null;
