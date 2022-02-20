import { Equal, Expect } from '../index'

// 用法：实现Math.trunc()方法
type Trunc<T extends number | string> = `${T}` extends `${infer L}.${string}` ? L : `${T}`

// example
type result = Trunc<100.32>

// test
type cases = [
  Expect<Equal<Trunc<0.1>, '0'>>,
  Expect<Equal<Trunc<1.234>, '1'>>,
  Expect<Equal<Trunc<12.345>, '12'>>,
  Expect<Equal<Trunc<-5.1>, '-5'>>,
  Expect<Equal<Trunc<'1.234'>, '1'>>,
  Expect<Equal<Trunc<'-10.234'>, '-10'>>,
  Expect<Equal<Trunc<10>, '10'>>,
]