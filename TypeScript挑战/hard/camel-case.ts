import { Equal, Expect } from '../index'
// 用法：将字符串转驼峰 
type CamelCase<
  S extends string
> = S extends `${infer S1}_${infer Char}${infer S2}`
    ? `${Lowercase<S1>}${Uppercase<Char>}${CamelCase<S2>}`
    : Lowercase<S>

// example
type result = CamelCase<'foo_bar_hello_world'>

// test
type cases = [
  Expect<Equal<CamelCase<'foobar'>, 'foobar'>>,
  Expect<Equal<CamelCase<'FOOBAR'>, 'foobar'>>,
  Expect<Equal<CamelCase<'foo_bar'>, 'fooBar'>>,
  Expect<Equal<CamelCase<'foo_bar_hello_world'>, 'fooBarHelloWorld'>>,
  Expect<Equal<CamelCase<'HELLO_WORLD_WITH_TYPES'>, 'helloWorldWithTypes'>>,
  Expect<Equal<CamelCase<''>, ''>>,
]