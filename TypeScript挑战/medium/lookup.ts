import { Equal, Expect } from '../index'
// 用法：在交集中去查找类型
type LookUp<U extends { type: string; }, T extends string> = U extends { type: T } ? U : never
// interface
interface Cat {
  type: 'cat'
  color: 'black' | 'orange' | 'gray'
}
interface Dog {
  type: 'dog'
  color: 'white'
  name: 'wang'
}
type Animal = Cat | Dog

// example
type result = LookUp<Animal, 'dog'>

// test
type testCases = [
  Expect<Equal<LookUp<Animal, 'dog'>, Dog>>,
  Expect<Equal<LookUp<Animal, 'cat'>, Cat>>
]