import { Equal, Expect } from '../index'

// 用法：将T中所有可选属性变为必选
type MyMutable<T> = {
  -readonly [P in keyof T]: T[P]
}

// interface
interface Todo {
  readonly title: string;
  readonly desc?: string;
  completed: boolean;
}
interface Expect1 {
  title: string;
  desc?: string;
  completed: boolean;
}

// example
type mutableResult = MyMutable<Todo>

// test
type testCases = [
  Expect<Equal<Expect1, MyMutable<Todo>>>
]
