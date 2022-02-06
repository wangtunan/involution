import { Equal, Expect } from '../index'
// 用法：接受一个数组，返回其最后一个元素
// way1: 索引思想
// type Last<T extends any[]> = [any, ...T][T['length']]
// way2: 后站位思想
type Last<T extends any[]> = T extends [...infer R, infer L] ? L : never

// exmaple
type result = Last<[1, 2, 3]>

// test
type testCases = [
  Expect<Equal<Last<[1, 2, 3]>, 3>>,
  Expect<Equal<Last<[1, 2, false]>, false>>,
  Expect<Equal<Last<[1]>, 1>>,
  Expect<Equal<Last<[undefined]>, undefined>>
]
