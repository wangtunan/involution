import { Equal, Expect } from '../index'

// 用法：Unique是实现数组的去重的
type Unique<
  T extends any[],
  R extends any[] = []
> = T extends [infer First, ...infer Rest]
    ? First extends R[number]
      ? Unique<Rest, [...R]>
      : Unique<Rest, [...R, First]>
    : R

// example
type result = Unique<[1, 1, 2, 2, 3, 3]>

// test
type cases = [
  Expect<Equal<Unique<[1, 1, 2, 2, 3, 3]>, [1, 2, 3]>>,
  Expect<Equal<Unique<[1, 2, 3, 4, 4, 5, 6, 7]>, [1, 2, 3, 4, 5, 6, 7]>>,
  Expect<Equal<Unique<[1, "a", 2, "b", 2, "a"]>, [1, "a", 2, "b"]>>
]
