import { Equal, Expect } from '../index'
// 用法：根据格式化字符串返回类型函数
type FormatMaps = {
  's': string;
  'd': number;
}
type Format<
  S extends string
> = S extends `${infer S1}%${infer P}${infer S2}`
      ? P extends keyof FormatMaps
        ? (x: FormatMaps[P]) => Format<S2>
        : string
      : string

// example
type result = Format<'a%sbc'> // (x: string) => string


type testCases = [
  Expect<Equal<Format<'abc'>, string>>,
  Expect<Equal<Format<'a%sbc'>, (s1: string) => string>>,
  Expect<Equal<Format<'a%dbc'>, (d1: number) => string>>,
  Expect<Equal<Format<'a%dbc%s'>, (d1: number) => (s1: string) => string>>
]