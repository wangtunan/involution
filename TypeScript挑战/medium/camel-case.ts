import { Equal, Expect } from '../index'
// 用法：连字符字符串转驼峰
type CamelCase<S extends string> = S extends `${infer S1}-${infer S2}`
                                     ? S2 extends Capitalize<S2>
                                       ? `${S1}-${CamelCase<S2>}` 
                                       : `${S1}${CamelCase<Capitalize<S2>>}`
                                     : S

// example
type result = CamelCase<'foo-bar-baz'>

// test
type testCases = [
  Expect<Equal<CamelCase<'foo-bar-baz'>, 'fooBarBaz'>>,
  Expect<Equal<CamelCase<'foo-Bar-Baz'>, 'foo-Bar-Baz'>>,
  Expect<Equal<CamelCase<'foo-bar'>, 'fooBar'>>,
  Expect<Equal<CamelCase<'foo_bar'>, 'foo_bar'>>,
  Expect<Equal<CamelCase<'foo--bar----baz'>, 'foo-Bar---Baz'>>,
  Expect<Equal<CamelCase<'a-b-c'>, 'aBC'>>,
  Expect<Equal<CamelCase<'a-b-c-'>, 'aBC-'>>,
  Expect<Equal<CamelCase<'ABC'>, 'ABC'>>,
  Expect<Equal<CamelCase<'-'>, '-'>>,
  Expect<Equal<CamelCase<''>, ''>>,
  Expect<Equal<CamelCase<'😎'>, '😎'>>,
]