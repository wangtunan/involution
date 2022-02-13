import { Equal, Expect } from '../index'

// 用法：实现按需必填
type CopyKeys<T> = {
  [P in keyof T]: T[P]
}
type RequiredByKeys<T, K extends keyof any = keyof T> = CopyKeys<Required<Pick<T, Extract<keyof T, K>>> & Omit<T, K>>

// interface
interface User {
  name?: string
  age?: number
  address?: string
}

interface UserRequiredName {
  name: string
  age?: number
  address?: string 
}

interface UserRequiredNameAndAge {
  name: string
  age: number
  address?: string 
}

// example
type result = RequiredByKeys<User, 'name'>

// test
type cases = [
  Expect<Equal<RequiredByKeys<User, 'name'>, UserRequiredName>>,
  Expect<Equal<RequiredByKeys<User, 'name' | 'unknown'>, UserRequiredName>>,
  Expect<Equal<RequiredByKeys<User, 'name' | 'age'>, UserRequiredNameAndAge>>,
  Expect<Equal<RequiredByKeys<User>, Required<User>>>,
]