import { Equal, Expect } from '../index' 
// 用法：保留一个类型的所有必填字段
type RequiredKeys<T> = {
  [P in keyof T]-?: T extends Record<P,T[P]> ? P : never
}[keyof T]
type GetRequired<T> = {
  [P in RequiredKeys<T>]: T[P]
}

// interface
type Person = {
  name?: string;
  age: number;
  address?: string;
  sex: undefined;
}

// example
type result = GetRequired<Person>

// test
type testCases = [
  Expect<Equal<GetRequired<{ foo: number, bar?: string }>, { foo: number }>>,
  Expect<Equal<GetRequired<{ foo: undefined, bar?: undefined }>, { foo: undefined }>>,
]