import { Equal, Expect } from "../index"

// 用法：给定一个数组，返回其第一个元素的类型
type First<T extends any[]> = T extends [] ? never : T[0]

// example
type FirstResult = First<[3, 2, 1]>

// test
type testCases = [
   Expect<Equal<First<[3, 2, 1]>, 3>>,
   Expect<Equal<First<[]>, never>>,
   Expect<Equal<First<[undefined]>, undefined>>
]