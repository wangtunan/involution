import { Equal, Expect } from "../index"

// 用法：获取数组的长度
type Length<T extends any> = T extends { length: number } ? T['length'] : never  

// example
type lengthResult = Length<[3, 2, 1]>

// test
type testCases = [
  Expect<Equal<Length<[3, 2, 1]>, 3>>,
  Expect<Equal<Length<{ 5: 'age', length: 10 }>, 10>>
]