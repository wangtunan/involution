import { Equal, Expect } from '../index'
// 用法：数组元素任意值为真，返回true;为空或者全部为false，才返回false
type FalseType = 0 | '' | false | [] | { [key: string]: never }
type AnyOf<T extends readonly any[]> = T[number] extends FalseType ? false : true

// example
type result = AnyOf<[0, false, 0, { name: 'name' }]>

type cases = [
  Expect<Equal<AnyOf<[1, 'test', true, [1], {name: 'test'}, {1: 'test'}]>, true>>,
  Expect<Equal<AnyOf<[1, '', false, [], {}]>, true>>,
  Expect<Equal<AnyOf<[0, 'test', false, [], {}]>, true>>,
  Expect<Equal<AnyOf<[0, '', true, [], {}]>, true>>,
  Expect<Equal<AnyOf<[0, '', false, [1], {}]>, true>>,
  Expect<Equal<AnyOf<[0, '', false, [], {name: 'test'}]>, true>>,
  Expect<Equal<AnyOf<[0, '', false, [], {1: 'test'}]>, true>>,
  Expect<Equal<AnyOf<[0, '', false, [], {name: 'test'}, {1: 'test'}]>, true>>,
  Expect<Equal<AnyOf<[0, '', false, [], {}]>, false>>,
  Expect<Equal<AnyOf<[]>, false>>,
]