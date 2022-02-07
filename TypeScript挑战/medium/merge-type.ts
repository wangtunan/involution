import { Equal, Expect } from '../index'
// 用法：合并两个类型，如果有重复的，则第二个类型覆盖第一个类型
type Merge<F, S> = {
  [P in keyof F | keyof S]: P extends keyof S ? S[P] : P extends keyof F ? F[P] : never
}

// interface
type Foo = {
  a: number;
  b: string;
}
type Bar = {
  b: number;
  c: boolean;
}

type Expect1 = {
  a: number;
	b: number;
	c: boolean;
}

// example
type result = Merge<Foo, Bar>


type cases = [
  Expect<Equal<Merge<Foo, Bar>, Expect1>>
]