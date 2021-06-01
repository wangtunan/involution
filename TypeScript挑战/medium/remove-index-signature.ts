import { Equal, Expect } from '../index'
// 用法：移除类型签名
type NeverIndex<P> = string extends P ? never : number extends P ? never : P
type RemoveIndexSignature<T> = {
  [P in keyof T as NeverIndex<P>]: T[P]
}

// interface
type Foo = {
  [key: string]: any;
  foo(): void;
}
type Bar = {
  [key: number]: any;
  bar(): void;
}
type Baz = {
  bar(): void;
  baz: string;
}

// example
type result = RemoveIndexSignature<Foo>

// test
type testCases = [
  Expect<Equal<RemoveIndexSignature<Foo>, { foo(): void }>>,
  Expect<Equal<RemoveIndexSignature<Bar>, { bar(): void }>>,
  Expect<Equal<RemoveIndexSignature<Baz>, Baz>>
]