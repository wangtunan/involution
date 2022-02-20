import { Equal, Expect } from '../index'

// 用法:实现数组lastIndexOf方法
type Pop<T extends any[]> = T extends [...infer Rest, any] ? Rest : never
type LastIndexOf<
  T extends any[],
  U,
  Index extends any[] = Pop<T>
> = T extends [...infer Rest, infer Last]
    ? Last extends U
      ? Index['length']
      : LastIndexOf<Rest, U, Pop<Index>>
    : -1

// example
type result = LastIndexOf<[1, 2, 3, 4, 5], 4>

// test
type cases = [
  Expect<Equal<LastIndexOf<[1, 2, 3, 2, 1], 2>, 3>>,
  Expect<Equal<LastIndexOf<[2, 6, 3, 8, 4, 1, 7, 3, 9], 3>, 7>>,
  Expect<Equal<LastIndexOf<[0, 0, 0], 2>, -1>>,
]