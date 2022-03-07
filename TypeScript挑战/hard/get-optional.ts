import { Equal, Expect } from '../index'
// 用法：获取一个类型中所有可选的字段类型
type OptionalKeys<T> = {
  [P in keyof T]: {} extends Pick<T, P> ? P : never
}[keyof T]
type GetOptional<T> = {
  [P in OptionalKeys<T>]?: T[P]
}

// interface
type Person = {
  name?: string;
  age: number;
  address?: string;
  sex: undefined;
}

// example
type result = GetOptional<Person>

// test
type testCases = [
  Expect<Equal<GetOptional<{ foo: number, bar?: string }>, { bar?: string }>>,
  Expect<Equal<GetOptional<{ foo: undefined, bar?: undefined }>, { bar?: undefined }>>,
]