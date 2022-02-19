import { Equal, Expect } from '../index'

// 用法：IsTuple是用来判断是否为一个元组的
type IsTuple<T> =
  [T] extends [never]
    ? false
    : T extends readonly any[]
      ? number extends T['length']
        ? false
        : true
      : false

// example
type result = IsTuple<[number]>

// test
type cases = [
  Expect<Equal<IsTuple<never>, false>>,
  Expect<Equal<IsTuple<[]>, true>>,
  Expect<Equal<IsTuple<[number]>, true>>,
  Expect<Equal<IsTuple<readonly [1]>, true>>,
  Expect<Equal<IsTuple<{ length: 1}>, false>>,
  Expect<Equal<IsTuple<number[]>, false>>,
]
