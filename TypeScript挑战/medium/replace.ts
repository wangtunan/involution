import { Equal, Expect } from '../index'
// 用法：实现replace，使用to替换第一个from的内容
// 用法：实现replaceAll, 使用to替换所有from的内容
type Replace<
  S extends string,
  from extends string,
  to extends string
> = S extends `${infer L}${from}${infer R}`
                ? from extends ''
                  ? S
                  : `${L}${to}${R}`
                : S
type ReplaceAll<
  S extends string,
  from extends string,
  to extends string
> = S extends `${infer L}${from}${infer R}`
              ? from extends ''
                ? S
                : ReplaceAll<`${L}${to}${R}`, from, to>
              : S

// example
type result = Replace<'foobar', 'bar', 'foo'>


// test
type testCases = [
  Expect<Equal<Replace<'foobar', 'bar', 'foo'>, 'foofoo'>>,
  Expect<Equal<Replace<'foobarbar', 'bar', 'foo'>, 'foofoobar'>>,
  Expect<Equal<Replace<'foobarbar', '', 'foo'>, 'foobarbar'>>,
  Expect<Equal<Replace<'', '', ''>, ''>>,

  Expect<Equal<ReplaceAll<'foobar', 'bar', 'foo'>, 'foofoo'>>,
  Expect<Equal<ReplaceAll<'foobarbar', 'bar', 'foo'>, 'foofoofoo'>>,
  Expect<Equal<ReplaceAll<'foobarbar', '', 'foo'>, 'foobarbar'>>,
  Expect<Equal<ReplaceAll<' t y p e s ', ' ', ''>, 'types'>>
]