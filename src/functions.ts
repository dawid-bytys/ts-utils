import { PRIMITIVES } from './constants';
import type { Primitive, AnyObject, EmptyObject } from './types';

/**
 * Determine if a value is a primitive
 */
const isPrimitive = (val: unknown): val is Primitive => {
  return PRIMITIVES.includes(typeof val);
};

/**
 * Determine if an object is empty
 */
const isObjectEmpty = <T extends AnyObject>(
  object: T,
): object is EmptyObject => {
  return Object.keys(object).length === 0;
};

/**
 * Create a unique array
 */
const uniqueArray = <T>(arr: T[]) => [...new Set(arr)];

/**
 * Determine if a value occurs in an array more than once
 */
const isDuplicate = <T>(arr: T[], val: T) => {
  return arr.indexOf(val) !== arr.lastIndexOf(val);
};

/**
 * Capitalize a first letter of a string
 */
const capitalizeFirst = <T extends string>(str: T): Capitalize<T> => {
  return (str.charAt(0).toUpperCase() + str.slice(1)) as Capitalize<T>;
};
