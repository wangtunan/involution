import { Equal, Expect } from '../index'
// 用法：联合类型转换成其交集
type UnionToIntersection<U> = (U extends any ? (x: U) => any: never) extends (x: infer V) => any ? V : never

// example
type result = UnionToIntersection<'foo'|42|true>

// test
type testCases = [
  Equal<UnionToIntersection<'foo'|42|true>, 'foo'&42&true>,
  Equal<UnionToIntersection<(() => 'foo') | ((i: 42) => true)>, (() => 'foo') & ((i: 42) => true)>
]
