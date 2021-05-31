import { Equal, Expect } from '../index'
// 用法：为一个嵌套对象深层次添加readonly(仅考虑对象)
type DeepReadonly<T> = {
  readonly [P in keyof T]: T[P] extends { [key: string]: any }
                                ? DeepReadonly<T[P]>
                                : T[P]
}

// example
type X = {
  b: string
  c: {
    d: boolean
    e: undefined,
    f: null
  }
}
type result = DeepReadonly<X>

// test
type Expected = {
  readonly b: string
  readonly c: {
    readonly d: boolean
    readonly e: undefined
    readonly f: null
  }
}
type testCases = [
  Expect<Equal<DeepReadonly<X>, Expected>>
]