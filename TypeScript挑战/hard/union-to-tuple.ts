import { Equal, Expect } from '../index'
import type { UnionToIntersection }  from './union-to-intersection'

// 用法：UnionToTuple是用来将联合类型转成元组的
type ExtractValuesOfTuple<T extends any[]> = T[keyof T & number]
type LastUnion<U> = UnionToIntersection<
  U extends any
    ? (x: U) => 0
    : never
> extends (x: infer R) => 0
  ? R
  : never

type UnionToTuple<
  T,
  Last = LastUnion<T>
> = [T] extends [never]
  ? []
  : [...UnionToTuple<Exclude<T, Last>>, Last] 

// example
type result = UnionToTuple<1 | 2>

// test
type cases = [
  Expect<Equal<UnionToTuple<'a' | 'b'>['length'], 2>>,
  Expect<Equal<ExtractValuesOfTuple<UnionToTuple<'a' | 'b'>>, 'a' | 'b'>>,
  Expect<Equal<ExtractValuesOfTuple<UnionToTuple<'a'>>, 'a'>>,
  Expect<Equal<ExtractValuesOfTuple<UnionToTuple<any>>, any>>,
  Expect<Equal<ExtractValuesOfTuple<UnionToTuple<undefined | void | 1>>, void | 1>>,
  Expect<Equal<ExtractValuesOfTuple<UnionToTuple<any | 1>>, any | 1>>,
  Expect<Equal<ExtractValuesOfTuple<UnionToTuple<any | 1>>, any>>,
  Expect<Equal<ExtractValuesOfTuple<UnionToTuple<'d' | 'f' | 1 | never>>, 'f' | 'd' | 1>>,
  Expect<Equal<ExtractValuesOfTuple<UnionToTuple<[{ a: 1 }] | 1>>, [{ a: 1 }] | 1>>,
  Expect<Equal<ExtractValuesOfTuple<UnionToTuple<never>>, never>>,
  Expect<Equal<ExtractValuesOfTuple<UnionToTuple<'a' | 'b' | 'c' | 1 | 2 | 'd' | 'e' | 'f' | 'g'>>, 'f' | 'e' | 1 | 2 | 'g' | 'c' | 'd' | 'a' | 'b'>>,
]