import { Equal, Expect } from '../index'

// 用法：GreaterThan<T, N>是来用判断正整数T是否大于正整数N的。
type GreaterThan<
  T extends Number,
  N extends Number,
  R extends any[] = []
> = T extends R['length']
    ? false
    : N extends R['length']
      ? true
      : GreaterThan<T, N, [...R, 0]>

// example
type result = GreaterThan<2, 1>

// test
type cases = [
  Expect<Equal<GreaterThan<1, 0>, true>>,
  Expect<Equal<GreaterThan<5, 4>, true>>,
  Expect<Equal<GreaterThan<4, 5>, false>>,
  Expect<Equal<GreaterThan<0, 0>, false>>,
  Expect<Equal<GreaterThan<20, 20>, false>>
]