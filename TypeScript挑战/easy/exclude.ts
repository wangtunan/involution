import { Equal, Expect } from '../index'
// 用法：从T中排除指定的U(差集)
type MyExclude<T, U> = T extends U ? never : T


type excludeResult = MyExclude<'name' | 'age' | 'sex', 'sex'>

// test
type testCases = [
  Expect<Equal<MyExclude<'name' | 'age' | 'sex', 'sex'>, 'name' | 'age'>>,
  Expect<Equal<MyExclude<'name' | 'age' | 'sex', 'age' | 'sex'>, 'name'>>,
  Expect<Equal<MyExclude<'name' | 'age' | 'sex', 'name' | 'age' | 'sex'>, never>>
]
