import { PRIMITIVES } from './constants';
import type { Primitive, AnyObject } from './types';

/**
 * Determine if a value is a primitive
 */
function isPrimitive(value: unknown): value is Primitive {
  return PRIMITIVES.includes(typeof value);
}

/**
 * Create a unique array
 */
function uniqueArray<T>(arr: T[]) {
  return [...new Set(arr)];
}

/**
 * Determine if a value occurs in an array more than once
 */
function isDuplicate<T>(arr: T[], value: T) {
  return arr.indexOf(value) !== arr.lastIndexOf(value);
}

/**
 * Capitalize a first letter of a string
 */
function capitalizeFirst<T extends string>(str: T): Capitalize<T> {
  return (str.charAt(0).toUpperCase() + str.slice(1)) as Capitalize<T>;
}
