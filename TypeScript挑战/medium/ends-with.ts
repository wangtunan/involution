import { Equal, Expect } from '../index'

// 用法：实现JavaScript中字符串的endsWith功能
type EndsWith<
  S extends string,
  C extends string
> = S extends `${string}${C}` ? true : false

// example
type result = EndsWith<'abc', 'bc'>

// test
type cases = [
  Expect<Equal<EndsWith<'abc', ''>, true>>,
  Expect<Equal<EndsWith<'abc', 'ac'>, false>>,
  Expect<Equal<EndsWith<'abc', 'bc'>, true>>,
  Expect<Equal<EndsWith<'abc', 'abc'>, true>>,
]