import { Equal, Expect } from '../index'
// 用法：实现Array.prototype.concat方法
type MyConcat<T extends any[], U extends any[]> = [...T, ...U]

// example
type concatResult = MyConcat<[1, 2], [3, 4]>

// test
type testCases = [
  Expect<Equal<MyConcat<[1, 2], [3, 4]>, [1, 2, 3, 4]>>,
  Expect<Equal<MyConcat<[true], [false]>, [true, false]>>,
  Expect<Equal<MyConcat<[], [false]>, [false]>>,
  Expect<Equal<MyConcat<[], []>, []>>,
]