import { Expect, Equal } from '../index'
// 用法：计算字符串的长度
type LengthOfString<
  S extends string,
  R extends any[] = []
> = S extends `${infer S0}${infer S1}${infer S2}${infer S3}${infer S4}${infer S5}${infer S6}${infer S7}${infer S8}${infer S9}${infer Rest}`
      ? LengthOfString<Rest, [...R, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]>
      : S extends `${infer S1}${infer S2}`
          ? LengthOfString<S2, [...R, S1]>
          : R['length']

// example
type result = LengthOfString<'123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890'>

// test
type testCases = [
  Expect<Equal<LengthOfString<"">, 0>>,
  Expect<Equal<LengthOfString<"1">, 1>>,
  Expect<Equal<LengthOfString<"1234567890">, 10>>,
  Expect<Equal<LengthOfString<"aaaaaaaaaaaaggggggggggggggggggggkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa">, 272>>,
];