import { Equal, Expect } from '../index'

// 用法：IsRequiredKey是用来判断是否为必填key的
type IsRequiredKey<T, K extends keyof T> = T extends Record<K, T[K]> ? true : false
type IsOptionalKey<T, K extends keyof T> = {} extends { [P in K]: T[P] } ? true : false

// type
type Obj = {
  a: number,
  b?: string,
  c?: string,
  d: number
}

type result1 = IsRequiredKey<Obj, 'a'>
type result2 = IsRequiredKey<Obj, 'b'>

type result3 = IsOptionalKey<Obj, 'a'>
type result4 = IsOptionalKey<Obj, 'b'>

// test
type cases = [
  Expect<Equal<IsRequiredKey<Obj,'a'>, true>>,
  Expect<Equal<IsRequiredKey<Obj,'b'>, false>>,
  Expect<Equal<IsRequiredKey<Obj,'b' | 'a'>, false>>,
  Expect<Equal<IsRequiredKey<Obj,'a' | 'd'>, true>>,

  Expect<Equal<IsOptionalKey<Obj,'a'>, false>>,
  Expect<Equal<IsOptionalKey<Obj,'b'>, true>>,
  Expect<Equal<IsOptionalKey<Obj,'b' | 'c'>, true>>,
]

