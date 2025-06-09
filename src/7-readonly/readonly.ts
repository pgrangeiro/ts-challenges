type CustomReadonly<T> = {
  readonly [K in keyof T]: T[K];
};

/* Utility Types: Readonly
Force TS to check that the object is not modified. It just checks, does not throw an error.
*/

export { CustomReadonly };
