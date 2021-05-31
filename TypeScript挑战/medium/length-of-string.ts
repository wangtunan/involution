import { Equal, Expect } from "../index"

// 用法：计算字符串的长度
// tips: 用一个数组来辅助处理
type LengthOfString<
  S extends string,
  T extends string[] = []
> = S extends `${infer Char}${infer R}`
      ? LengthOfString<R, [...T, Char]>
      : T['length']

// example
type result = LengthOfString<'abcd'>

// test
type testCases = [
  Expect<Equal<LengthOfString<''>, 0>>,
  Expect<Equal<LengthOfString<'kumiko'>, 6>>,
  Expect<Equal<LengthOfString<'reina'>, 5>>,
  Expect<Equal<LengthOfString<'Sound! Euphonium'>, 16>>,
]