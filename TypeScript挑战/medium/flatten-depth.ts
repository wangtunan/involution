import { Equal, Expect } from '../index'

// 用法：FlattenDepth是用来按深度进行数组降维的
type FlattenDepth<
  T extends any[],
  D extends number = 1,
  U extends any[] = []
> = T extends [infer F, ...infer R]
  ? U['length'] extends D
    ? T
    : F extends any[]
      ? [...FlattenDepth<F, D, [0, ...U]>, ...FlattenDepth<R, D>]
      : [F, ...FlattenDepth<R, D, U>]
    : T

// example
type result = FlattenDepth<[1, 2, [3, 4], [[[5]]]], 2>

// test
type cases = [
  Expect<Equal<FlattenDepth<[]>, []>>,
  Expect<Equal<FlattenDepth<[1, 2, 3, 4]>, [1, 2, 3, 4]>>,
  Expect<Equal<FlattenDepth<[1, [2]]>, [1, 2]>>,
  Expect<Equal<FlattenDepth<[1, 2, [3, 4], [[[5]]]], 2>, [1, 2, 3, 4, [5]]>>,
  Expect<Equal<FlattenDepth<[1, 2, [3, 4], [[[5]]]]>, [1, 2, 3, 4, [[5]]]>>,
  Expect<Equal<FlattenDepth<[1, [2, [3, [4, [5]]]]], 3>, [1, 2, 3, 4, [5]]>>,
  Expect<Equal<FlattenDepth<[1, [2, [3, [4, [5]]]]], 19260817>, [1, 2, 3, 4, 5]>>,
]