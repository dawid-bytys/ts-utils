import { PRIMITIVES } from './constants';
import type { Primitive } from './types';

/**
 * Determine if the value is a primitive
 */
const isPrimitive = (value: unknown): value is Primitive => {
  return PRIMITIVES.some(primitive => typeof value === primitive);
};

/**
 * Creates a unique array
 */
const uniqueArray = <T>(array: T[]) => [...new Set(array)];

/**
 * Determines if the value occurs in the array more than once
 */
const isDuplicate = <T>(array: T[], value: T) => {
  return array.indexOf(value) !== array.lastIndexOf(value);
};
