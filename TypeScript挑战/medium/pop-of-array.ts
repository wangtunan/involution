import { Equal, Expect } from '../index'
// 用法：实现Array.prototype.pop方法
type Pop<T extends any[]> = T extends [...infer L, any] ? L : never

// example
type result = Pop<[1, 2, 3]>

// test
type testCases = [
  Expect<Equal<Pop<[1, 2, 3]>, [1, 2]>>,
  Expect<Equal<Pop<[1]>, []>>,
  Expect<Equal<Pop<[]>, never>>
]