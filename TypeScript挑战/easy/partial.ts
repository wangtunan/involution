import { Expect, Equal } from '../index'
// 用法：让T中所有属性都变为可选
type MyPartial<T> = {
  [P in keyof T]?: T[P]
}

// interface
interface Todo {
  title: string;
  desc?: string;
  completed: boolean;
}
interface Expect1 {
  title?: string;
  desc?: string;
  completed?: boolean;
}

// example
type PartialResult = MyPartial<Todo>



// test
type testCases = [
  Expect<Equal<Expect1, MyPartial<Todo>>>
]