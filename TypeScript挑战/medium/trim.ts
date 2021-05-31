import { Equal, Expect } from "../index"

// 用法：去除字符串左侧的空白符
type Space = ' ' | '\n' | '\t'
type TrimLeft<S extends string> = S extends `${Space}${infer R}` ? TrimLeft<R> : S
type Trim<S extends string> = S extends (`${Space}${infer R}` | `${infer R}${Space}`) ? Trim<R> : S
type TrimRight<S extends String> = S extends `${infer R}${Space}` ? TrimRight<R> : S

// example
type result = TrimLeft<' str'>

// test
type testCases = [
  Expect<Equal<TrimLeft<'str'>, 'str'>>,
  Expect<Equal<TrimLeft<' str'>, 'str'>>,
  Expect<Equal<TrimLeft<' \n\tstr '>, 'str '>>,

  Expect<Equal<Trim<' str'>, 'str'>>,
  Expect<Equal<Trim<'str '>, 'str'>>,
  Expect<Equal<Trim<' str '>, 'str'>>,
  Expect<Equal<Trim<' \n\tstr\n\t '>, 'str'>>,

  Expect<Equal<TrimRight<'str'>, 'str'>>,
  Expect<Equal<TrimRight<' str'>, ' str'>>,
  Expect<Equal<TrimRight<' \n\tstr '>, ' \n\tstr'>>,
]