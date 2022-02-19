import { Equal, Expect } from '../index'

// 用法：Fibonacci是用来实现计算斐波那契数列的
// 菲波那切数列：1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144
type Fibonacci<
  T extends number,
  Index extends any[] = [1],
  Prev extends any[] = [],
  Current extends any[] = [1]
> = Index['length'] extends T
  ? Current['length']
  : Fibonacci<T, [...Index, 1], Current, [...Prev, ...Current]>

// example
type result = Fibonacci<5>

// test
type cases = [
  Expect<Equal<Fibonacci<1>, 1>>,
  Expect<Equal<Fibonacci<3>, 2>>,
  Expect<Equal<Fibonacci<8>, 21>>,
]