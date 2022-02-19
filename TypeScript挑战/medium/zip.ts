import { Equal, Expect } from "../index";

// 用法：Zip是用来将两个元组按照相同索引位置组合成一个新数组的
type Zip<
  T extends readonly any[],
  U extends readonly any[]
> = T extends [infer First, ...infer Rest]
    ? U extends [infer Head, ...infer Tail]
      ? [[First, Head], ...Zip<Rest, Tail>]
      : []
    : []

// example
type result = Zip<[1, 2], [true, false]>

// test
type cases = [
  Expect<Equal<Zip<[], []>, []>>,
  Expect<Equal<Zip<[1, 2], [true, false]>, [[1, true], [2, false]]>>,
  Expect<Equal<Zip<[1, 2, 3], ['1', '2']>, [[1, '1'], [2, '2']]>>,
  Expect<Equal<Zip<[], [1, 2, 3]>, []>>,
  Expect<Equal<Zip<[[1, 2]], [3]>, [[[1, 2], 3]]>>,
]