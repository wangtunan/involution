import { Equal, Expect } from '../index'
// 用法：返回一个数的绝对值
type NumberLike = number | string | bigint
type Absolute<T extends NumberLike> =  `${T}` extends `-${infer N}` ? N : `${T}`

// example
type result = Absolute<-531>

// test
type TestCases = [
  Expect<Equal<Absolute<0>, '0'>>,
  Expect<Equal<Absolute<-0>, '0'>>,
  Expect<Equal<Absolute<10>, '10'>>,
  Expect<Equal<Absolute<-531>, '531'>>,
  Expect<Equal<Absolute<'0'>, '0'>>,
  Expect<Equal<Absolute<'-0'>, '0'>>,
  Expect<Equal<Absolute<'10'>, '10'>>,
  Expect<Equal<Absolute<'-5'>, '5'>>
]