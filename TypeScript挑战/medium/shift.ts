import { Equal, Expect } from '../index'
// 用法：实现Array.prototype.shift方法
type Shift<T extends any[]> = T extends [any, ...infer L] ? L : never

// exmaple
type result = Shift<[1, 2, 3]>

// test
type testCases = [
  Expect<Equal<Shift<[1, 2, 3]>, [2, 3]>>,
  Expect<Equal<Shift<[1]>, []>>,
  Expect<Equal<Shift<[]>, never>>
]