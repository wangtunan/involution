import { Equal, Expect } from '../index'
// 用法：根据字符串路径取值
type Get<T, K extends string> =
  K extends `${infer S1}.${infer S2}`
    ? S1 extends keyof T
      ? Get<T[S1], S2>
      : never
    : K extends keyof T
      ? T[K]
      : never

// interface
type Data = {
  foo: {
    bar: {
      value: 'foobar',
      count: 6,
    },
    included: true,
  },
  hello: 'world'
}

// example
type result = Get<Data, 'foo.bar.value'> // 'foobar'

type testCases = [
  Expect<Equal<Get<Data, 'hello'>, 'world'>>,
  Expect<Equal<Get<Data, 'foo.bar.count'>, 6>>,
  Expect<Equal<Get<Data, 'foo.bar'>, { value: 'foobar', count: 6 }>>,
  Expect<Equal<Get<Data, 'no.existed'>, never>>
]