import { Equal, Expect } from "../index"

// 用法：把字符串首字母大写，其余保持原样
type Capatilize<S extends string> = S extends `${infer char}${infer L}` ? `${Uppercase<char>}${L}` : S
// 用法：把字符串首字母小写，其余保持原样
type Uncapatilize<S extends string> = S extends `${infer char}${infer L}` ? `${Lowercase<char>}${L}` : S

// example
type result1 = Capatilize<'hello'>
type result2 = Uncapatilize<'Hello'>

// test
type testCases = [
  Expect<Equal<Capatilize<'hello'>, 'Hello'>>,
  Expect<Equal<Capatilize<'HELLO'>, 'HELLO'>>,
  Expect<Equal<Capatilize<'foo bar'>, 'Foo bar'>>,
  Expect<Equal<Capatilize<''>, ''>>,

  Expect<Equal<Uncapatilize<'Hello'>, 'hello'>>,
  Expect<Equal<Uncapatilize<'HELLO'>, 'hELLO'>>,
  Expect<Equal<Uncapatilize<'Foo Bar'>, 'foo Bar'>>,
  Expect<Equal<Capatilize<''>, ''>>,
]