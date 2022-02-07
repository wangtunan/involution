import { Equal, Expect } from '../index'
// 用法：将联合类型中的每一个类型进行排列组合
type Permutation<T, U = T> = 
  [T] extends [never]
    ? []
    : T extends T
      ? [T, ...Permutation<Exclude<U, T>>]
      : never

// example
type result = Permutation<'A' | 'B'>

// test
type cases = [
  Expect<Equal<Permutation<'A'>, ['A']>>,
  Expect<Equal<Permutation<'A' | 'B' | 'C'>, ['A', 'B', 'C'] | ['A', 'C', 'B'] | ['B', 'A', 'C'] | ['B', 'C', 'A'] | ['C', 'A', 'B'] | ['C', 'B', 'A']>>,
  Expect<Equal<Permutation<'B' | 'A' | 'C'>, ['A', 'B', 'C'] | ['A', 'C', 'B'] | ['B', 'A', 'C'] | ['B', 'C', 'A'] | ['C', 'A', 'B'] | ['C', 'B', 'A']>>,
  Expect<Equal<Permutation<never>, []>>,
]