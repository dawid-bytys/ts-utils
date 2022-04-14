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
type AnyObject = Record<keyof any, unknown>;

/**
 * Empty object
 */
type EmptyObject = Record<never, never>;

/**
 * Remove 'readonly' from properties in an object
 */
type Writable<T extends Readonly<AnyObject>> = {
  -readonly [P in keyof T]: T[P];
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
