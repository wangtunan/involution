import { Equal, Expect } from '../index'
// 用法：获取一个类型中所有可选的字段
type OptionalKeys<T> = {
  [P in keyof T]: {} extends Pick<T, P> ? P : never
}[keyof T]

// interface
type Person = {
  name?: string;
  age: number;
  address?: string;
  sex: undefined;
}

// example
type result = OptionalKeys<Person>

// test
type testCases = [
  Expect<Equal<OptionalKeys<{ a: number, b?: string }>, "b">>,
  Expect<Equal<OptionalKeys<{ a: undefined, b?: undefined }>, "b">>,
  Expect<Equal<OptionalKeys<{ a: undefined, b?: undefined, c?: string, d?: null }>, "b" | "c" | "d">>,
  Expect<Equal<OptionalKeys<{}>, never>>
]