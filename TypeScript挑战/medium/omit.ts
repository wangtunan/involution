import { Equal, Expect } from '../index'

// 用法：从T中排除U属性
type MyOmit<T, U> = Pick<T, Exclude<keyof T, U>>

// example
interface Expect1 {
  name: string;
}
interface Expect2 {
  name: string;
  age: number;
}
const obj = {
  name: 'AAA',
  age: 23,
  sex: true
}
type omitResult = MyOmit<typeof obj, 'sex'>

// test
type testCases = [
  Expect<Equal<Expect2, MyOmit<typeof obj, 'sex'>>>,
  Expect<Equal<Expect1, MyOmit<typeof obj, 'age' | 'sex'>>>
]