import { Equal, Expect } from '../index'

// 用法：DropChar是用来在字符串中移除指定字符的
type DropChar<
  S extends string,
  C extends string
> = C extends ''
  ? S
  : S extends `${infer L}${C}${infer R}`
    ? DropChar<`${L}${R}`, C>
    : S

// example
type result = DropChar<' b u t t e r f l y ! ', ' '>

// test
type cases = [
  Expect<Equal<DropChar<'butter fly!', ''>, 'butter fly!'>>,
  Expect<Equal<DropChar<'butter fly!', ' '>, 'butterfly!'>>,
  Expect<Equal<DropChar<'butter fly!', '!'>, 'butter fly'>>,
  Expect<Equal<DropChar<'    butter fly!        ', ' '>, 'butterfly!'>>,
  Expect<Equal<DropChar<' b u t t e r f l y ! ', ' '>, 'butterfly!'>>,
  Expect<Equal<DropChar<' b u t t e r f l y ! ', 'b'>, '  u t t e r f l y ! '>>,
  Expect<Equal<DropChar<' b u t t e r f l y ! ', 't'>, ' b u   e r f l y ! '>>,
]