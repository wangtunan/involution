import { Equal, Expect } from '../index'
// 用法：把一个字符串转换成数组
type StringToArray<
  S extends string,
  U extends any[] = []
> = S extends `${infer Char}${infer R}`
      ? StringToArray<R, [...U, Char]>
      : U

// example
type result = StringToArray<'hello'> // ['h','e','l','l','o']

// test
type testCases = [
  Expect<Equal<StringToArray<"">, []>>,
  Expect<Equal<StringToArray<'hello'>, ['h','e','l','l','o']>>
]