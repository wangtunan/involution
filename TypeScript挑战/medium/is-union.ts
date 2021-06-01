import { Equal, Expect } from '../index'
// 用法：判断T是否是一个联合类型
type IsUnion<T, U = T> =
  T extends T
  ? [Exclude<U, T>] extends [never]
    ? false
    : true
  : never

// example
type result = IsUnion<string|number|boolean>

// test
type cases = [
  Expect<Equal<IsUnion<string>, false >>,
  Expect<Equal<IsUnion<string|number>, true >>,
  Expect<Equal<IsUnion<'a'|'b'|'c'|'d'>, true >>,
  Expect<Equal<IsUnion<undefined|null|void|''>, true >>,
  Expect<Equal<IsUnion<{a: string}|{a: number}>, true >>,
  Expect<Equal<IsUnion<{a: string|number}>, false >>,
  Expect<Equal<IsUnion<[string|number]>, false >>,
  // Cases where T resolves to a non-union type.
  Expect<Equal<IsUnion<string|never>, false >>,
  Expect<Equal<IsUnion<string|unknown>, false >>,
  Expect<Equal<IsUnion<string|any>, false >>,
  Expect<Equal<IsUnion<string|'a'>, false >>,
]