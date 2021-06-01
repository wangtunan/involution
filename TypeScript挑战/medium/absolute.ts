import { Equal, Expect } from '../index'
// 用法：返回一个数的绝对值
type NumberLike = number | string | bigint
type ToString<T extends NumberLike> = `${T}`
type Absolute<T extends NumberLike> =  ToString<T> extends `-${infer N}` ? N : ToString<T>

// example
type result = Absolute<0>

// test
type TestCases = [
  Expect<Equal<Absolute<0>, '0'>>,
  Expect<Equal<Absolute<-0>, '0'>>,
  Expect<Equal<Absolute<10>, '10'>>,
  Expect<Equal<Absolute<-5>, '5'>>,
  Expect<Equal<Absolute<'0'>, '0'>>,
  Expect<Equal<Absolute<'-0'>, '0'>>,
  Expect<Equal<Absolute<'10'>, '10'>>,
  Expect<Equal<Absolute<'-5'>, '5'>>
]