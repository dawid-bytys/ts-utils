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
 * Remove 'readonly' from the properties in the object
 */
type Writable<T extends Readonly<AnyObject>> = {
  -readonly [K in keyof T]: T[K];
};

/**
 * Remove the value from the union
 */
type RemoveFromUnion<T, U> = T extends U ? never : T;

/**
 * Change the type of the property in the object
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
