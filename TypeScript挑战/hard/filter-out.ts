import { Equal, Expect } from '../index'
// 用法：实现移除元组中指定的元素
type FilterOut<
  T extends any[],
  F,
  K extends any[] = []
> = T extends [infer R, ...infer args]
      ? [R] extends [F]
        ? FilterOut<args, F, [...K]>
        : FilterOut<args, F, [...K, R]>
      : K

// example
type result = FilterOut<[1, 'a', never], 'a'>

// test
type testCases = [
  Expect<Equal<FilterOut<[], never>, []>>,
  Expect<Equal<FilterOut<[never], never>, []>>,
  Expect<Equal<FilterOut<['a', never], never>, ['a']>>,
  Expect<Equal<FilterOut<[1, never, 'a'], never>, [1, 'a']>>,
  Expect<Equal<FilterOut<[never, 1, 'a', undefined, false, null], never | null | undefined>, [1, 'a', false]>>,
  Expect<Equal<FilterOut<[number | null | undefined, never], never | null | undefined>, [number | null | undefined]>>
]
