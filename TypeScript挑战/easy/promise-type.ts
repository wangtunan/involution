import { Equal, Expect } from '../index'

// 用法：取出Promise的包裹类型，例如Promise<number> => number
type PromiseType<T> = T extends Promise<infer R> ? R : never

// example
function getInfo (): Promise<number | string> {
  return Promise.resolve(1)
}
type funcReturnType = ReturnType<typeof getInfo>
type promiseResult = PromiseType<funcReturnType>

// test
type testCases = [
  Expect<Equal<number, PromiseType<Promise<number>>>>,
  Expect<Equal<number | string, PromiseType<Promise<number | string>>>>,
  Expect<Equal<() => number, PromiseType<Promise<() => number>>>>,
  Expect<Equal<number[], PromiseType<Promise<number[]>>>>
]