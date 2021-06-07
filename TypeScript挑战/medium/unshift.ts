import { Equal, Expect } from '../index'
// 实现Array.prototype.unshift方法
type Unshift<T extends any[], K> = [K, ...T]

// example
type result = Unshift<[1, 2, 3], 0>

// test
type testCases = [
  Expect<Equal<Unshift<[1, 2, 3], 0>, [0, 1, 2, 3]>>,
  Expect<Equal<Unshift<[1, 2, 3], [-1, 0]>, [[-1, 0], 1, 2, 3]>>
]