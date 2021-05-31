import { Equal, Expect } from '../index'
// 用法：数组转集合 ['1', '2', '3'] => '1' | '2' | '3'
type TupleToUnion<T extends any[]> = T[number]

// example
type result = TupleToUnion<['1', '2', '3']>

// test
type testCases = [
  Expect<Equal<TupleToUnion<[1, 2, 3]>, 1 | 2 | 3>>,
  Expect<Equal<TupleToUnion<['1', '2', '3']>, '1' | '2' | '3'>>,
  Expect<Equal<TupleToUnion<['1', true, undefined]>, '1' | true | undefined>>
]
