import { Equal, Expect } from '../index'

// 用法：TupleToNestedObject是用来将元组转成嵌套对象的
type TupleToNestedObject<T extends any[], U> =
  T extends [infer F, ...infer R]
    ? F extends string
      ? { [P in F]: TupleToNestedObject<R, U> }
      : never
    : U

// example
type result = TupleToNestedObject<['a', 'b'], string>

// test
type cases = [
  Expect<Equal<TupleToNestedObject<['a'], string>, {a: string}>>,
  Expect<Equal<TupleToNestedObject<['a', 'b'], number>, {a: {b: number}}>>,
  Expect<Equal<TupleToNestedObject<['a', 'b', 'c'], boolean>, {a: {b: {c: boolean}}}>>,
  Expect<Equal<TupleToNestedObject<[], boolean>, boolean>>,
]