import { Equal, Expect } from '../index'
// 用法：实现replaceAll, 使用to替换所有from的内容
type ReplaceAll<
  S extends string,
  from extends string,
  to extends string
> = S extends `${infer L}${from}${infer R}`
              ? from extends ''
                ? S
                : `${ReplaceAll<L, from, to>}${to}${ReplaceAll<R, from, to>}`
              : S

// example
type result = ReplaceAll<'foobarbar', 'bar', 'foo'>


// test
type cases = [
  Expect<Equal<ReplaceAll<'foobar', 'bar', 'foo'>, 'foofoo'>>,
  Expect<Equal<ReplaceAll<'foobar', 'bag', 'foo'>, 'foobar'>>,
  Expect<Equal<ReplaceAll<'foobarbar', 'bar', 'foo'>, 'foofoofoo'>>,
  Expect<Equal<ReplaceAll<'t y p e s', ' ', ''>, 'types'>>,
  Expect<Equal<ReplaceAll<'foobarbar', '', 'foo'>, 'foobarbar'>>,
  Expect<Equal<ReplaceAll<'barfoo', 'bar', 'foo'>, 'foofoo'>>,
  Expect<Equal<ReplaceAll<'foobarfoobar', 'ob', 'b'>, 'fobarfobar'>>,
  Expect<Equal<ReplaceAll<'foboorfoboar', 'bo', 'b'>, 'foborfobar'>>,
  Expect<Equal<ReplaceAll<'', '', ''>, ''>>,
]