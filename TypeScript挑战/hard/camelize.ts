import { Equal, Expect } from "../index"

// tools: 将以下划线连接的字符串转小驼峰
type CamelCase<S> = 
  S extends `${infer S1}_${infer S2}`
    ? `${Lowercase<S1>}${CamelCase<Capitalize<Lowercase<S2>>>}`
    : S
// 用法：将属性为下划线连接的key转小驼峰
type Camelize<T extends Record<string, any>> = {
  [K in keyof T as CamelCase<K>]: 
    T[K] extends [infer R]
      ? [Camelize<R>]
      : T[K] extends Object
        ? Camelize<T[K]>
        : T[K]
}

// interface
type Person = {
  some_PROP: string;
  prop: {
    another_prop: string;
  };
  array: [
    { snake_case: string; }
  ]
}
type Expected = {
  someProp: string;
  prop: { 
    anotherProp: string;
  };
  array: [
    { snakeCase: string; }
  ]
}

// exmaple
type res = CamelCase<'came_lize_OPQ'>
type result = Camelize<Person>

// test
type testCases = [
  Expect<Equal<Camelize<Person>, Expected>>
]