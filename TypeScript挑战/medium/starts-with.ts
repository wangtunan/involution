import { Equal, Expect } from '../index'

// 用法：实现JavaScript中字符串的startsWith功能
type StartsWith<
  S extends string,
  C extends string
> = S extends `${C}${string}` ? true : false

// example
type result = StartsWith<'abc', 'ab'>

// test
type cases = [
  Expect<Equal<StartsWith<'abc', ''>, true>>,
  Expect<Equal<StartsWith<'abc', 'ac'>, false>>,
  Expect<Equal<StartsWith<'abc', 'ab'>, true>>,
  Expect<Equal<StartsWith<'abc', 'abcd'>, false>>,
]