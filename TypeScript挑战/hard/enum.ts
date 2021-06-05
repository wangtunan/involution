import { Equal, Expect } from '../index'
// 用法：
type TupleKeys<
  T extends readonly any[]
> = T extends readonly [infer R, ...infer args]
      ? TupleKeys<args> | args['length']
      : never

type Enum<
  T extends readonly string[],
  N extends boolean = false
> = {
  readonly [K in TupleKeys<T> as Capitalize<T[K]>]: N extends true ? K : T[K]
}

// interface
type Expected1 = {
  readonly MacOs: 'macOs';
  readonly Windows: 'Windows';
  readonly Linux: 'Linux'
}
type Expected2 = {
  readonly MacOs: 0;
  readonly Windows: 1;
  readonly Linux: 2
}

// exmaple
const OperatingSystem = ['macOs', 'Windows', 'Linux'] as const
type result1 = Enum<typeof OperatingSystem>
type result2 = Enum<typeof OperatingSystem, true>

// test
type testCases = [
  Expect<Equal<Enum<typeof OperatingSystem>, Expected1>>,
  Expect<Equal<Enum<typeof OperatingSystem, true>, Expected2>>
]