import { PRIMITIVES } from './constants';
import type { Primitive, AnyObject, EmptyObject } from './types';

/**
 * Determine if a value is a primitive
 */
const isPrimitive = (value: unknown): value is Primitive => {
  return PRIMITIVES.includes(typeof value);
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
const uniqueArray = <T>(array: T[]) => [...new Set(array)];

/**
 * Determine if a value occurs in an array more than once
 */
const isDuplicate = <T>(array: T[], value: T) => {
  return array.indexOf(value) !== array.lastIndexOf(value);
};
