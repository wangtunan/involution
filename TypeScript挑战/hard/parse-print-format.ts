import { Equal, Expect } from '../index'
// 用法：获取格式化参数
type ControlMap = {
  'c': 'char',
  's': 'string',
  'd': 'dec',
  'o': 'oct',
  'h': 'hex',
  'f': 'float',
  'p': 'pointer'
}

type ParsePrintFormat<
  S extends string,
  R extends string[] = []
> = S extends `${infer S1}%${infer Char}${infer S2}`
    ? Char extends keyof ControlMap
      ? ParsePrintFormat<S2, [...R, ControlMap[Char]]>
      : ParsePrintFormat<S2, R>
    : R

type result = ParsePrintFormat<'Hello %s: score is %d'>

type testCases = [
  Expect<Equal<ParsePrintFormat<''>, []>>,
  Expect<Equal<ParsePrintFormat<'Any string.'>, []>>,
  Expect<Equal<ParsePrintFormat<'The result is %d.'>, ['dec']>>,
  Expect<Equal<ParsePrintFormat<'The result is %%d.'>, []>>,
  Expect<Equal<ParsePrintFormat<'The result is %%%d.'>, ['dec']>>,
  Expect<Equal<ParsePrintFormat<'The result is %f.'>, ['float']>>,
  Expect<Equal<ParsePrintFormat<'The result is %h.'>, ['hex']>>,
  Expect<Equal<ParsePrintFormat<'The result is %q.'>, []>>,
  Expect<Equal<ParsePrintFormat<'Hello %s: score is %d.'>, ['string', 'dec']>>,
  Expect<Equal<ParsePrintFormat<'The result is %'>, []>>
]