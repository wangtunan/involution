import { Equal, Expect } from '../index'
// 用法：将一个多维数组拍平成一个一维数组
type Flatten<
  T extends any[]
> = T extends [infer F, ...infer R]
      ? F extends any[]
        ? [...Flatten<F>, ...Flatten<R>]
        : [F, ...Flatten<R>]
      : []


// example
type result = Flatten<[1, 2, [3]]>

// test
type testCases = [
  Expect<Equal<Flatten<[]>, []>>,
  Expect<Equal<Flatten<[1, 2, 3, 4]>, [1, 2, 3, 4]>>,
  Expect<Equal<Flatten<[1, [2]]>, [1, 2]>>,
  Expect<Equal<Flatten<[1, 2, [3, 4], [[[5]]]]>, [1, 2, 3, 4, 5]>>,
  Expect<Equal<Flatten<[{foo: 'bar'; 2: 10}, 'foobar']>, [{foo: 'bar'; 2: 10}, 'foobar']>>,
]
