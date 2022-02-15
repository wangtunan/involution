import { Equal, Expect } from '../index'

// 用法：Reverse是用来实现数组的reverse()方法的
export type Reverse<T extends any[]> =
  T extends [...infer R, infer L]
    ? [L, ...Reverse<R>]
    : []

// example
type result = Reverse<['a', 'b']>

// test
type cases = [
  Expect<Equal<Reverse<['a', 'b']>, ['b', 'a']>>,
  Expect<Equal<Reverse<['a', 'b', 'c']>, ['c', 'b', 'a']>>
]