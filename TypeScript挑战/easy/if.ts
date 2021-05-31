import { Equal, Expect } from '../index'
// 用法：当C为true时，返回T；当C为false时，返回F
type If<C extends boolean, T, F> = C extends true ? T : F

// example
type ifResult = If<true, 'a', 'b'>

// test
type testCases = [
  Expect<Equal<If<true, 'a', 'b'>, 'a'>>,
  Expect<Equal<If<false, 'a', 'b'>, 'b'>>
]

