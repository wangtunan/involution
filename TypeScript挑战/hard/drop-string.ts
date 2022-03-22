import { Equal, Expect } from '../index'

// 用法：DropString是用来移除全部字符的
type StrngToUnion<S extends string> = 
  S extends `${infer S1}${infer S2}`
    ? S1 | StrngToUnion<S2>
    : S

type DropString<
  S extends string,
  R extends string,
  U = StrngToUnion<R>
> = S extends `${infer S1}${infer S2}`
    ? S1 extends U
      ? DropString<S2, R>
      : `${S1}${DropString<S2, R>}`
    : S

// example
type result = DropString<'foobar!', 'fb'>

// test
type cases = [
  Expect<Equal<DropString<'butter fly!', ''>, 'butter fly!'>>,
  Expect<Equal<DropString<'butter fly!', ' '>, 'butterfly!'>>,
  Expect<Equal<DropString<'butter fly!', 'but'>, 'er fly!'>>,
  Expect<Equal<DropString<' b u t t e r f l y ! ', 'but'>, '     e r f l y ! '>>,
  Expect<Equal<DropString<'    butter fly!        ', ' '>, 'butterfly!'>>,
  Expect<Equal<DropString<' b u t t e r f l y ! ', ' '>, 'butterfly!'>>,
  Expect<Equal<DropString<' b u t t e r f l y ! ', 'but'>, '     e r f l y ! '>>,
  Expect<Equal<DropString<' b u t t e r f l y ! ', 'tub'>, '     e r f l y ! '>>,
  Expect<Equal<DropString<' b u t t e r f l y ! ', 'b'>, '  u t t e r f l y ! '>>,
  Expect<Equal<DropString<' b u t t e r f l y ! ', 't'>, ' b u   e r f l y ! '>>,
]