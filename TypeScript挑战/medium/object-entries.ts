import { Equal, Expect } from '../index'

// 用法：实现JavaScript中的Object.entries()方法
type ObjectEntries<T, U = Required<T>> = {
  [P in keyof U]: [P, U[P]]
}[keyof U]

// intervace
interface Model {
  name: string;
  age: number;
  locations?: string[] | null;
}

// example
type result = ObjectEntries<Model>

// test
type ModelEntries = ['name', string] | ['age', number] | ['locations', string[] | null];
type cases = [
  Expect<Equal<ObjectEntries<Model>,ModelEntries>>,
  Expect<Equal<ObjectEntries<Partial<Model>>,ModelEntries>>,
]
