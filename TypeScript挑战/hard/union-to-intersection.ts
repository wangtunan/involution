import { Equal, Expect } from '../index'
// 用法：联合类型转换成其交集
export type UnionToIntersection<U> = 
  (U extends any 
    ? (x: U) => any 
    : never
  ) extends (x: infer V) => any 
    ? V
    : never

// interface
type T1 = { a: number; b: string | number; }
type T2 = { b: number; c: boolean; }
type Func1 = (a: boolean) => string | number
type Func2 = (a: number) => string

// example
type result = UnionToIntersection<T1 | T2>


// test
type testCases = [
  Expect<Equal<UnionToIntersection<'foo' | 42 | true>, never>>,
  Expect<Equal<UnionToIntersection<T1 | T2>, T1 & T2>>,
  Expect<Equal<UnionToIntersection<Func1 | Func2>, Func1 & Func2>>
]
