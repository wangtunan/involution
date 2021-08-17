import { Equal, Expect } from '../index'
// 用法：找出两个类型的不同部分(diff)
type DiffKeys<T, U> = Exclude<keyof T | keyof U, keyof (T | U)>
type Diff<T, U> = {
  [k in DiffKeys<T, U>]: k extends keyof T ? T[k] : k extends keyof U ? U[k] : never
}

// interface
type Foo = {
  id: number;
  name: string;
  age: string;
}
type Bar = {
  name: string;
  age: string;
  gender: number;
}
type Expected = {
  id: number;
  gender: number;
}

// example
type result = Diff<Foo, Bar>

// test
type cases = [
  Expect<Equal<Diff<Foo, Bar>, Expected>>
]