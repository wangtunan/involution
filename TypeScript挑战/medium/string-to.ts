import { Equal, Expect } from '../index'
// 用法：把一个字符串转换成数组
type StringToArray<
  S extends string,
  U extends any[] = []
> = S extends `${infer Char}${infer R}`
      ? StringToArray<R, [...U, Char]>
      : U
// 用法：把一个字符串转换成联合类型
// type StringToUnion<S extends string> = StringToArray<S>[number]
type StringToUnion<S extends string> = S extends `${infer Char}${infer R}`
                                         ? Char | StringToUnion<R>
                                         : never
 
// example
type result = StringToUnion<'123'>

// test
type testCaes = [
  Expect<Equal<StringToUnion<"">, never>>,
  Expect<Equal<StringToUnion<"t">, "t">>,
  Expect<Equal<StringToUnion<"hello">, "h" | "e" | "l" | "l" | "o">>,
  Expect<Equal<StringToUnion<"coronavirus">, "c" | "o" | "r" | "o" | "n" | "a" | "v" | "i" | "r" | "u" | "s">>,
]