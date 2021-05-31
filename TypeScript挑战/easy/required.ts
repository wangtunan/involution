import { Equal, Expect } from "../index"

// 用法：让T中所有属性变为必选
type MyRequired<T> = {
  [P in keyof T]-?: T[P]
}

// interface
interface Todo {
  title: string;
  desc?: string;
  completed: boolean;
}
interface Expect1 {
  title: string;
  desc: string;
  completed: boolean;
}

// example
type RequiredResult = MyRequired<Todo>

// test
type testCases = [
  Expect<Equal<Expect1, MyRequired<Todo>>>
]