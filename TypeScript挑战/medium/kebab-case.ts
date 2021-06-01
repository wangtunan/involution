import { Equal, Expect } from '../index'
// 用法：驼峰转连字符形式
type KebabCase<S extends string> = S extends `${infer S1}${infer S2}`
                                     ? S2 extends Uncapitalize<S2>
                                       ? `${Uncapitalize<S1>}${KebabCase<S2>}`
                                       : `${Uncapitalize<S1>}-${KebabCase<S2>}`
                                     : S
// example
type result = KebabCase<'FooBarBaz'>                                    

// test
type testCases = [
  Expect<Equal<KebabCase<'FooBarBaz'>, 'foo-bar-baz'>>,
  Expect<Equal<KebabCase<'fooBarBaz'>, 'foo-bar-baz'>>,
  Expect<Equal<KebabCase<'foo-bar'>, 'foo-bar'>>,
  Expect<Equal<KebabCase<'foo_bar'>, 'foo_bar'>>,
  Expect<Equal<KebabCase<'Foo-Bar'>, 'foo--bar'>>,
  Expect<Equal<KebabCase<'ABC'>, 'a-b-c'>>,
  Expect<Equal<KebabCase<'-'>, '-'>>,
  Expect<Equal<KebabCase<''>, ''>>,
  Expect<Equal<KebabCase<'😎'>, '😎'>>,
]
