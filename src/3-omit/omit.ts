type CustomOmit<T, K extends keyof T> = {
  [k in Exclude<keyof T, K>]: T[k];
};

/* Utility types: Exclude
Exclude a value from a union*/

export { CustomOmit };
