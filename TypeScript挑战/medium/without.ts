import { Equal, Expect } from '../index'

// 用法：Without是用来从数组中移除指定元素的
type ToUnion<T> = T extends any[] ? T[number] : T
type Without<
  T extends any[],
  F,
  U = ToUnion<F>,
  R extends any[] = []
> = T extends [infer First, ...infer Rest]
    ? First extends U
      ? Without<Rest, F, U, [...R]>
      : Without<Rest, F, U, [...R, First]>
    : R

// example
type result = Without<[1, 2, 1, 2, 3], [1, 2]>

// test
type cases = [
  Expect<Equal<Without<[1, 2], 1>, [2]>>,
  Expect<Equal<Without<[1, 2, 4, 1, 5], [1, 2]>, [4, 5]>>,
  Expect<Equal<Without<[2, 3, 2, 3, 2, 3, 2, 3], [2, 3]>, []>>
]