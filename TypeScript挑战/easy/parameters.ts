import { Expect, Equal } from '../index'
// 获取一个函数的参数类型到一个元祖中
type MyParameters<T extends (...args: any[]) => any> = T extends (...args: infer R) => any ? R : never

// example
const add = (a: number, b: string): void => {}
type result = MyParameters<typeof add>

// test
const foo = (arg1: string, arg2: number): void => {}
const bar = (arg1: boolean, arg2: {a: 'A'}): void => {}
const baz = (): void => {}
type cases = [
  Expect<Equal<MyParameters<typeof foo>, [string, number]>>,
  Expect<Equal<MyParameters<typeof bar>, [boolean, {a: 'A'}]>>,
  Expect<Equal<MyParameters<typeof baz>, []>>,
]