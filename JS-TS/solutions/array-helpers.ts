/* eslint-disable @typescript-eslint/no-unused-vars */
// Task 02: Mini functional–utility library
// All helpers are declared but not implemented.

export function mapArray<T, R>(source: readonly T[], mapper: (item: T, index: number) => R): R[] {
  if (source == null) {
    throw new Error('mapArray: not implemented');
  }

  const result: R[] = [];
  let n = source.length;
  for ( let i = 0; i < n; i++) {
    result.push(mapper(source[i], i));
  }

  return result;
}

export function filterArray<T>(source: readonly T[], predicate: (item: T, index: number) => boolean): T[] {
  if (source == null) {
    throw new Error('filterArray: not implemented');
  }

  const result: T[] = [];
  let n = source.length;
  for (let i = 0; i < n; i++) {
    let item = source[i];
    if (predicate(item,i)) {
      result.push(item);
    }
  }

  return result;
}

export function reduceArray<T, R>(source: readonly T[], reducer: (acc: R, item: T, index: number) => R, initial: R): R {
  if (source == null) {
    throw new Error('reduceArray: not implemented');
  }

  let res = initial;
  let n = source.length;
  for (let i = 0; i < n; i++) {
    res = reducer(res, source[i], i);
  }
  
  return res;
}

export function partition<T>(source: readonly T[], predicate: (item: T) => boolean): [T[], T[]] {
  if (source == null) {
    throw new Error('partition: not implemented');
  }

  const one: T[] = [];
  const two: T[] = [];
  let n = source.length;
  for (let i = 0; i < n; i++) {
    let element = source[i];
    if (predicate(element)) {
      one.push(element);
    }
    else {
      two.push(element);
    }
  }

  return [one, two];
}

export function groupBy<T, K extends PropertyKey>(source: readonly T[], keySelector: (item: T) => K): Record<K, T[]> {
  if (source == null) {
    throw new Error('groupBy: not implemented');
  }

  const result = {} as Record<K, T[]>;
  let n = source.length;
  for (let i = 0; i < n; i++) {
    let element = source[i];
    let key = keySelector(element);
    if (!result.hasOwnProperty(key)) {
      result[key] = [];
    }
    result[key].push(element);
  }

  return result;
}
