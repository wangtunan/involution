import { Equal, Expect } from '../index'

// 用法：MinusOne是用来实现数字减一的
type MinusOne<
  N extends number,
  T extends any[] = []
> = N extends T['length']
  ? T extends [infer F, ...infer Rest]
    ? Rest['length']
    : never
  : MinusOne<N, [0, ...T]>

// example
type result = MinusOne<100>

// test
type cases = [
  Expect<Equal<MinusOne<1>, 0>>,
  Expect<Equal<MinusOne<55>, 54>>,
  Expect<Equal<MinusOne<3>, 2>>,
  Expect<Equal<MinusOne<100>, 99>>
]