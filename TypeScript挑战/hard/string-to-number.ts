import { Equal, Expect } from '../index'

// 用法：将字符串数字转换为真正的数字
type Digital = '0'|'1'|'2'|'3'|'4'|'5'|'6'|'7'|'8'|'9'
type MakeArray<N extends string, T extends any[] = []> = N extends `${T['length']}` ? T : MakeArray<N, [...T, 0]>
type Multiply10<T extends any[]> = [...T,...T,...T,...T,...T,...T,...T,...T,...T,...T]

type StringToNumber<
  S extends string,
  T extends any[] = []
> = S extends `${infer S1}${infer S2}`
      ? S1 extends Digital
        ? StringToNumber<S2, [...Multiply10<T>, ...MakeArray<S1>]>
        : never
      : T['length']

// example
type result = StringToNumber<'999'>


// test
type cases = [
  Expect<Equal<StringToNumber<'0'>, 0>>,
  Expect<Equal<StringToNumber<'5'>, 5>>,
  Expect<Equal<StringToNumber<'12'>, 12>>,
  Expect<Equal<StringToNumber<'27'>, 27>>,
]