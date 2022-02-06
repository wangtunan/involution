import { Equal, Expect } from '../index'
// 用法：实现Array.prototype.push方法
type Push<T extends any [], K> = [...T, K]

// example
type result = Push<[1, 2], 3>

// test
type testCases = [
  Expect<Equal<Push<[1, 2], 3>, [1, 2, 3]>>,
  Expect<Equal<Push<[1, 2], [3, 4]>, [1, 2, [3, 4]]>>
]