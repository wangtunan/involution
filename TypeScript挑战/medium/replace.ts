import { Equal, Expect } from '../index'
// 用法：实现replace，使用to替换第一个from的内容
type Replace<
  S extends string,
  from extends string,
  to extends string
> = S extends `${infer L}${from}${infer R}`
                ? from extends ''
                  ? S
                  : `${L}${to}${R}`
                : S


// example
type result = Replace<'foobar', 'bar', 'foo'>

// test
type testCases = [
  Expect<Equal<Replace<'foobar', 'bar', 'foo'>, 'foofoo'>>,
  Expect<Equal<Replace<'foobarbar', 'bar', 'foo'>, 'foofoobar'>>,
  Expect<Equal<Replace<'foobarbar', '', 'foo'>, 'foobarbar'>>,
  Expect<Equal<Replace<'', '', ''>, ''>>
]