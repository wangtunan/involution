import { Equal, NotEqual, Expect } from '../index'

// 用法：FlipObject是用来将对象的key/value交换的。
type BasicType = string | number | boolean
type FlipObject<T extends Record<string, BasicType>> = {
  [P in keyof T as `${T[P]}`]: P
}

// example
type result = FlipObject<{ a: 'pi' }>

// test
type cases = [
  Expect<Equal<{a: 'pi'}, FlipObject<{pi: 'a'}>>>,
  Expect<NotEqual<FlipObject<{pi: 'a'}>, {b: 'pi'}>>,
  Expect<Equal<FlipObject<{pi: 3.14, bool: true}>, {3.14: 'pi', true: 'bool'}>>,
  Expect<Equal<FlipObject<{prop: 'val', prop2: 'val2'}>, {val2: 'prop2', val: 'prop'}>>,
]