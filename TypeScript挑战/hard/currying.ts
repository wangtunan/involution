import  { Equal, Expect } from '../index'

// 用法：实现柯理化
type Curry<P, R> =
  P extends []
    ? () => R
    : P extends [infer First, ...infer Rest]
      ? (a: First) => Rest['length'] extends 0 ? R : Curry<Rest, R>
      : R
declare function Currying<F>(fn: F): F extends (...args: infer P) => infer R ? Curry<P, R> : never

// example
const func = Currying((a: number, b: string, c: boolean) => true)

const curried1 = Currying(() => true)
const curried2 = Currying((a: string) => true)
const curried3 = Currying((a: string, b: number) => true)

type cases = [
  Expect<Equal<typeof curried1, () => true>>,
  Expect<Equal<typeof curried2, (a: string) => true>>,
  Expect<Equal<typeof curried3, (a: string) => (a: number) => true>>,
]