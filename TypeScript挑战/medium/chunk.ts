import { Equal, Expect } from '../index'

// 用法：实现loadsh的chunk方法
type Chunk<
  T extends any[],
  Size extends number,
  R extends any[] = []
> = R['length'] extends Size
    ? [R, ...Chunk<T, Size>]
    : T extends [infer First, ...infer Rest]
      ? [...Chunk<Rest, Size, [...R, First]>]
      : R extends []
        ? []
        : [R]

// example
type result = Chunk<[1, 2, 3, 4], 2>

// test
type cases = [
  Expect<Equal<Chunk<[], 1>, []>>,
  Expect<Equal<Chunk<[1, 2, 3], 1>, [[1], [2], [3]]>>,
  Expect<Equal<Chunk<[1, 2, 3], 2>, [[1, 2], [3]]>>,
  Expect<Equal<Chunk<[1, 2, 3, 4], 2>, [[1, 2], [3, 4]]>>,
  Expect<Equal<Chunk<[1, 2, 3, 4], 5>, [[1, 2, 3, 4]]>>,
  Expect<Equal<Chunk<[1, true, 2, false], 2>, [[1, true], [2, false]]>>,
]