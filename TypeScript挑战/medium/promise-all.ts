import { Equal, Expect } from '../index'
// 用法：返回Promise.all的所有类型
type PromiseAllType<T> = Promise<{
  [P in keyof T]: T[P] extends Promise<infer R> ? R : T[P]
}>
declare function PromiseAll<T extends any[]>(values: readonly [...T]): PromiseAllType<T>

// example
const result = PromiseAll([1, 2, 3])

// test
const PromiseAllTest1 = PromiseAll([1, 2, 3] as const)
const PromiseAllTest2 = PromiseAll([1, 2, Promise.resolve(3)] as const)
const PromiseAllTest3 = PromiseAll([1, 2, Promise.resolve(3)])
type testCases = [
  Expect<Equal<typeof PromiseAllTest1, Promise<[1, 2, 3]>>>,
  Expect<Equal<typeof PromiseAllTest2, Promise<[1, 2, number]>>>,
  Expect<Equal<typeof PromiseAllTest3, Promise<[number, number, number]>>>
]