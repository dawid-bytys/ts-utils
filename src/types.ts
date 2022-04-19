/**
 * Union of primitives
 */
export type Primitive =
  | bigint
  | boolean
  | number
  | string
  | symbol
  | null
  | undefined;

/**
 * Any object
 */
export type AnyObject = Record<keyof any, unknown>;

/**
 * Empty object
 */
export type EmptyObject = Record<keyof any, never>;

/**
 * Remove 'readonly' from properties in an object
 */
type Writable<T extends AnyObject> = {
  -readonly [K in keyof T]: T[K];
};

/**
 * Remove 'readonly' from nested properties
 */
type DeepWritable<T extends AnyObject> = {
  -readonly [K in keyof T]: T[K] extends AnyObject ? DeepWritable<T[K]> : T[K];
};

/**
 * Remove a value from a union
 */
type RemoveFromUnion<T, U> = T extends U ? never : T;

/**
 * Change a type of a property in an object
 */
type OneChanged<
  T extends AnyObject,
  U extends keyof any,
  S extends unknown,
> = Omit<T, U> & { U: S };

/**
 * Not empty array
 */
type NotEmptyArray<T> = [T, ...T[]];

/**
 * Type of array elements
 */
type ArrayElement<T extends readonly unknown[]> = T extends readonly (infer S)[]
  ? S
  : never;
