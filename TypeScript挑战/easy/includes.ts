import { Equal, Expect } from '../index'
// 用法：实现Array.prototype.includes方法
type MyIncludes<T extends readonly any[], U> = U extends T[number] ? true : false 

// example
type includesResult = MyIncludes<[1, 2, 3], 1>

// test
type testCases = [
  Expect<Equal<MyIncludes<[1, 2, 3], 1>, true>>,
  Expect<Equal<MyIncludes<[1, 2, 3], '1'>, false>>,
  Expect<Equal<MyIncludes<['AAA', 'BBB', 'CCC'], 'AAA'>, true>>,
  Expect<Equal<MyIncludes<['AAA', 'BBB', 'CCC'], 'DDD'>, false>>
]