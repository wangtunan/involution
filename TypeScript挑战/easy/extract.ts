import { Equal, Expect } from '../index'
// 用法：从T和U中取其中的交际
type MyExtract<T, U> = T extends U ? T : never

// example
type extractResult = MyExtract<'a' | 'b' | 'c', 'b' | 'f'>

// test
type testCases = [
  Expect<Equal<MyExtract<'a' | 'b' | 'c', 'b'>, 'b'>>,
  Expect<Equal<MyExtract<'a' | 'b' | 'c', 'b' | 'f'>, 'b'>>,
  Expect<Equal<MyExtract<'a' | 'b' | 'c', ''>, never>>,
  Expect<Equal<MyExtract<'', 'a' | 'b' | 'c'>, never>>
]