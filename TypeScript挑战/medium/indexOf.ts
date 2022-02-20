import { Equal, Expect } from '../index'

// 用法：实现数组indexOf()方法
type IndexOf<
  T extends any[],
  U,
  Index extends any[] = []
> = T extends [infer First, ...infer Rest]
    ? First extends U
      ? Index['length']
      : IndexOf<Rest, U, [...Index, 0]>
    : -1

// example
type result = IndexOf<[1, 2, 3, 4], 3>

// test
type cases = [
  Expect<Equal<IndexOf<[1, 2, 3], 2>, 1>>,
  Expect<Equal<IndexOf<[2, 6, 3, 8, 4, 1, 7, 3, 9], 3>, 2>>,
  Expect<Equal<IndexOf<[0, 0, 0], 2>, -1>>
]