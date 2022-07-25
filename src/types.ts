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
 * Make all properties 'readonly' along with nested ones
 */
type DeepReadonly<T extends AnyObject> = {
  +readonly [K in keyof T]: T[K] extends AnyObject ? DeepReadonly<T[K]> : T[K];
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

/**
 * Type of resolved promise
 */
type UnpackPromise<T> = T extends Promise<infer R> ? R : never;

/**
 * Type for making one field in a provided object required
 */
type OneRequired<T, V extends keyof T> = T & { [P in V]-?: T[P] };

/**
 * Type for making sure the provided type is not undefined or null
 */
type NotUndefinedOrNull<T> = T extends undefined | null ? never : T;

/**
 * Type for making sure the provided type is not undefined
 */
type NotUndefined<T> = T extends undefined ? never : T;

/**
 * Type for making sure the provided type is not null
 */
type NotNull<T> = T extends null ? never : T;
