import { Equal, Expect } from '../index'
// 用法：找出两个类型的不同部分(diff)
type MyKeys = Exclude<keyof Foo | keyof Bar, keyof (Foo | Bar)>
type Diff<O, O1> = {
  [k in MyKeys]: k extends keyof O ? O[k] : k extends keyof O1 ? O1[k] : never
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