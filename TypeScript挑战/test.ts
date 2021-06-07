import { Equal, Expect } from './index'

type Shift<T extends any[]> = T extends [infer F, ...infer R] ? R : never

type Unshift<T extends any[], K> = [K, ...T]

type result1 = Shift<[1, 2, 3]>
type result2 = Unshift<[1, 2, 3], 0>