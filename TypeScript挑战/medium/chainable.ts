import { Expect, Alike } from '../index'

// 用法：只在类型上面定义Chainable的options和get方法
type Chainable<T> = {
  options<K extends string, V>(key: K, value: V): Chainable<T & {[k in K]: V}>
  get(): { [K in keyof T]: T[K] }
}
type Expected = {
  foo: number
  bar: {
    value: string
  }
  name: string
}

// example
declare const obj: Chainable<Expected>
const result = obj
  .options('foo', 123)
  .options('bar', { value: 'Hello' })
  .options('name', 'TypeScript')
  .get()

// test
type testCases = [
  Expect<Alike<typeof result, Expected>>
]
