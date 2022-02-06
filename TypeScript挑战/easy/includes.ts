import { Equal, Expect } from '../index'
// 用法：实现Array.prototype.includes方法
type MyIncludes<T extends readonly any[], U> = 
  T extends [infer R, ...infer L]
    ? Equal<R, U> extends true
      ? true
      : MyIncludes<L, U>
    : false

// example
type includesResult = MyIncludes<[1, 2, 3], 1>

// test
type testCases = [
  Expect<Equal<MyIncludes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Kars'>, true>>,
  Expect<Equal<MyIncludes<['Kars', 'Esidisi','Wamuu', 'Santana'], 'Dio'>, false>>,
  Expect<Equal<MyIncludes<[1, 2, 3, 5, 6, 7], 7>, true>>,
  Expect<Equal<MyIncludes<[1, 2, 3, 5, 6, 7], 4>, false>>,
  Expect<Equal<MyIncludes<[1, 2, 3], 2>, true>>,
  Expect<Equal<MyIncludes<[1, 2, 3], 1>, true>>,
  Expect<Equal<MyIncludes<[{}], { a: 'A' }>, false>>,
  Expect<Equal<MyIncludes<[boolean, 2, 3, 5, 6, 7], false>, false>>,
  Expect<Equal<MyIncludes<[true, 2, 3, 5, 6, 7], boolean>, false>>,
  Expect<Equal<MyIncludes<[false, 2, 3, 5, 6, 7], false>, true>>,
  Expect<Equal<MyIncludes<[{ a: 'A' }], { readonly a: 'A' }>, false>>,
  Expect<Equal<MyIncludes<[{ readonly a: 'A' }], { a: 'A' }>, false>>,
]