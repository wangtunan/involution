import { Equal, Expect, Alike } from '../index'
// 用法：如果传递了K，那么只有K中的属性为readonly；如果没有传递，则代表所有
// tips:
// 1、K = any兼容K不传递
// 2、T & U 表示T和U属性合并
type MyReadonly2<T, K = any> = T & {
  readonly [key in keyof T as key extends K ? key : never]: T[key]
}

// interface
interface Todo {
  title: string;
  desc?: string;
  completed: boolean;
}
interface Expected {
  title: string;
  readonly desc?: string;
  readonly completed: boolean;
}

// example
type result = MyReadonly2<Todo, 'desc' | 'completed'>
const obj: result = {
  title: 'AAA',
  desc: '23',
  completed: true
}
obj.title = 'aaa'
obj.desc = '32' // error
obj.completed = false // error

// test
type testCases = [
  Expect<Alike<MyReadonly2<Todo, 'desc' | 'completed'>, Expected>>
]