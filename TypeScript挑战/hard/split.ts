import { Equal, Expect } from '../index'

// 用法：实现字符串的split方法
type Split<
  S extends string,
  SEP extends string,
  R extends any[] = []
> = S extends `${infer _}`
      ? S extends `${infer S1}${SEP}${infer S2}`
        ? Split<S2, SEP, [...R, S1]>
        : S extends ''
          ? SEP extends ''
            ? R
            : [...R, S]
          : [...R, S]
      : string[]

// example
type result = Split<'Hi! How are you?', ' '>

// test
type cases = [
  Expect<Equal<Split<'Hi! How are you?', 'z'>, ['Hi! How are you?']>>,
  Expect<Equal<Split<'Hi! How are you?', ' '>, ['Hi!', 'How', 'are', 'you?']>>,
  Expect<Equal<Split<'Hi! How are you?', ''>, ['H', 'i', '!', ' ', 'H', 'o', 'w', ' ', 'a', 'r', 'e', ' ', 'y', 'o', 'u', '?']>>,
  Expect<Equal<Split<'', ''>, []>>,
  Expect<Equal<Split<'', 'z'>, ['']>>,
  Expect<Equal<Split<string, 'whatever'>, string[]>>,
]