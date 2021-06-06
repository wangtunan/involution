// 用法：将传递的多个字符以指定的分隔符连接起来
import { Equal, Expect } from '../index'
type Tail<T extends readonly string[]> = T extends [infer Head, ...infer Tail] ? Tail : []
type JoinType<
  D extends string,
  P extends readonly string[]
> = P extends []
    ? ''
    : P extends [infer Head]
      ? Head
      : `${P[0]}${D}${JoinType<D, Tail<P>>}`


declare function join<D extends string>(delimiter: D): <P extends readonly string[]>(...parts: P) => JoinType<D, P>



// example
type result = JoinType<'#', ['a', 'b', 'c']> // a#b#c


// test
const Expected1 = join('-')();
const Expected2 = join('-')('a');
const Expected3 = join('')('a', 'b', 'c');
const Expected4 = join('-')('a', 'b', 'c');
const Expected5 = join('#')('a', 'b', 'c');
const Expected6 = join('-')('a', 'b');
const Expected7 = join('-')('a', 'b', 'c', 'd', 'e', 'f', 'g', 'h');

type testCases = [
  Expect<Equal<typeof Expected1, ''>>,
  Expect<Equal<typeof Expected2, 'a'>>,
  Expect<Equal<typeof Expected3, 'abc'>>,
  Expect<Equal<typeof Expected4, 'a-b-c'>>,
  Expect<Equal<typeof Expected5, 'a#b#c'>>,
  Expect<Equal<typeof Expected6, 'a-b'>>,
  Expect<Equal<typeof Expected7, 'a-b-c-d-e-f-g-h'>>,
]