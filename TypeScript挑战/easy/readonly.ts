import { Equal, Expect } from "../index"

// 用法：让T中所有属性变成只读的
type MyReadonly<T> = {
  readonly [P in keyof T]: T[P]
}

// interface
interface Todo {
  title: string;
  desc?: string;
  completed: boolean;
}
interface Expect1 {
  readonly title: string;
  readonly desc?: string;
  readonly completed: boolean;
}

// example
type readonlyResult = MyReadonly<Todo>

// test
type testCases = [
  Expect<Equal<Expect1, MyReadonly<Todo>>>
]