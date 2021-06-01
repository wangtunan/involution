import { Equal, Expect } from '../index'
// 用法：判断T是否为never，是则返回true，否则返回false
type IsNever<T> = T[] extends never[] ? true : false

// example
type result = IsNever<null>

type cases = [
  Expect<Equal<IsNever<never>, true>>,
  Expect<Equal<IsNever<never | string>, false>>,
  Expect<Equal<IsNever<"">, false>>,
  Expect<Equal<IsNever<undefined>, false>>,
  Expect<Equal<IsNever<null>, false>>,
  Expect<Equal<IsNever<[]>, false>>,
  Expect<Equal<IsNever<{}>, false>>,
]