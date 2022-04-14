import { PRIMITIVES } from './constants';
import type { Primitive, AnyObject, EmptyObject } from './types';

/**
 * Determine if the value is a primitive
 */
const isPrimitive = (value: unknown): value is Primitive => {
  return PRIMITIVES.some(primitive => typeof value === primitive);
};

/**
 * Determine if the object is empty
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
 * Determine if the value occurs in the array more than once
 */
const isDuplicate = <T>(array: T[], value: T) => {
  return array.indexOf(value) !== array.lastIndexOf(value);
};
