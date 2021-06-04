import { Equal, Expect } from "../index"
// 用法：判断T是否是any类型
// tips: 交集判断思想  1&T返回结果有几种：never 1 any
type IsAny<T> = 0 extends (1&T) ? true : false
type NotAny<T> = true extends IsAny<T> ? false : true

// example
type result = IsAny<undefined>

// test
type testCases = [
  Expect<Equal<IsAny<undefined>, false>>,
  Expect<Equal<IsAny<unknown>, false>>,
  Expect<Equal<IsAny<never>, false>>,
  Expect<Equal<IsAny<string>, false>>,
  Expect<Equal<IsAny<any>, true>>,

  Expect<Equal<NotAny<undefined>, true>>,
  Expect<Equal<NotAny<unknown>, true>>,
  Expect<Equal<NotAny<never>, true>>,
  Expect<Equal<NotAny<string>, true>>,
  Expect<Equal<NotAny<any>, false>>
]
