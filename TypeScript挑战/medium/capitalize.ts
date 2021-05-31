import { Equal, Expect } from "../index"

// 用法：把字符串首字母大写，其余保持原样
type Capatilize<S extends string> = S extends `${infer char}${infer L}` ? `${Uppercase<char>}${L}` : S

// example
type result = Capatilize<'hello'>

// test
type testCases = [
  Expect<Equal<Capatilize<'hello'>, 'Hello'>>,
  Expect<Equal<Capatilize<'HELLO'>, 'HELLO'>>,
  Expect<Equal<Capatilize<'foo bar'>, 'Foo bar'>>,
  Expect<Equal<Capatilize<''>, ''>>
]