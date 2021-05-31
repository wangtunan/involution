import { Equal, Expect } from '../index'

// 用法：从T中选取指定的属性K
type MyPick<T, K extends keyof T> = {
  [P in K]: T[P]
}

// interface
interface Todo {
  title: string;
  desc: string;
  completed: boolean;
}
interface Expect1 {
  title: string;
}
interface Expect2 {
  title: string;
  completed: boolean;
}

// example
type TodoPickResult = MyPick<Todo, 'title' | 'completed'>


// test
type testCases = [
  Expect<Equal<Expect1, MyPick<Todo, 'title'>>>,
  Expect<Equal<Expect2, MyPick<Todo, 'title' | 'completed'>>>
]