import { Equal, Expect } from '../index'

// 用法：实现数组的Fill方法(不考虑索引，全部替换)
type Fill<
  T extends any[],
  U
> = T extends [any, ...infer Rest]
    ? [U, ...Fill<Rest, U>]
    : []

// example
type result = Fill<[1, 2, 3], true>

// test
type cases = [
  Expect<Equal<Fill<[], 0>, []>>,
  Expect<Equal<Fill<[1, 2, 3], 0>, [0, 0, 0]>>,
  Expect<Equal<Fill<[1, 2, 3], true>, [true, true, true]>>
]