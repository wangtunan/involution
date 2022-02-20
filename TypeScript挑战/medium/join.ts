import { Equal, Expect } from '../index'

// 用法：实现数组的join方法
type Join<
  T extends any[],
  U extends string | number,
  R extends string = ''
> = T extends [infer First, ...infer Rest]
    ? Rest['length'] extends 0
      ? `${R extends '' ? '' : `${R}${U}`}${First&string}`
      : Join<Rest, U, `${R extends '' ? '' : `${R}${U}`}${First&string}`>
    : R

// exmaple
type result = Join<['a', 'p', 'p', 'l', 'e'], '-'>

// test
type cases = [
  Expect<Equal<Join<["a", "p", "p", "l", "e"], "-">, "a-p-p-l-e">>,
  Expect<Equal<Join<["Hello", "World"], " ">, "Hello World">>,
  Expect<Equal<Join<["2", "2", "2"], 1>, "21212">>,
  Expect<Equal<Join<["o"], "u">, "o">>
]
