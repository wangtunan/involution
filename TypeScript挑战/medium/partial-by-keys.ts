import { Equal, Expect } from '../index'

// 用法：实现按需可选
type CopyKeys<T> = {
  [P in keyof T]: T[P]
}
type PartialByKeys<T, K extends keyof any = keyof T> = CopyKeys<Partial<Pick<T, Extract<keyof T, K>>> & Omit<T, K>>

// interface
interface User {
  name: string
  age: number
  address: string
}
interface UserPartialName {
  name?: string,
  age: number
  address: string 
}
interface UserPartialNameAndAge {
  name?: string
  age?: number
  address: string 
}

// example
type result = PartialByKeys<User, 'name'>

// test
type cases = [
  Expect<Equal<PartialByKeys<User, 'name'>, UserPartialName>>,
  Expect<Equal<PartialByKeys<User, 'name' | 'unknown'>, UserPartialName>>,
  Expect<Equal<PartialByKeys<User, 'name' | 'age'>, UserPartialNameAndAge>>,
  Expect<Equal<PartialByKeys<User>, Partial<User>>>,
]