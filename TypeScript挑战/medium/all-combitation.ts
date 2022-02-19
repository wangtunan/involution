import { Equal, Expect } from '../index'

// 用法：ALlCombitation是用来列举全部排列组合可能性的。
type StringToUnion<S extends string> =
  S extends `${infer F}${infer R}`
    ? F | StringToUnion<R>
    : never
type Combination<
  S extends string,
  U extends string = '',
  K = S
> = [S] extends [never]
  ? U
  : K extends S
    ? Combination<Exclude<S, K>, U | `${U}${K}`>
    : U
type AllCombination<S extends string> = Combination<StringToUnion<S>>

// example
type result = AllCombination<'AB'>

// test
type cases = [
  Expect<Equal<AllCombination<''>, ''>>,
  Expect<Equal<AllCombination<'A'>, '' | 'A'>>,
  Expect<Equal<AllCombination<'AB'>, '' | 'A' | 'B' | 'AB' | 'BA'>>,
  Expect<Equal<AllCombination<'ABC'>, '' | 'A' | 'B' | 'C' | 'AB' | 'AC' | 'BA' | 'BC' | 'CA' | 'CB' | 'ABC' | 'ACB' | 'BAC' | 'BCA' | 'CAB' | 'CBA'>>,
]