import { Equal, Expect } from '../index'
// 用法：返回一个类型中所有必填字段
type RequiredKeys<T> = {
  [P in keyof T]-?: T extends Record<P,T[P]> ? P : never
}[keyof T]

// interface
type Person = {
  name: string;
  age: number;
  sex?: undefined;
  address?: string;
}

// example
type result = RequiredKeys<Person>

// test
type testCases = [
  Expect<Equal<RequiredKeys<Person>, 'name'|'age'>>
]