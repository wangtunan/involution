import { Equal, Expect } from '../index'
import type { Reverse } from './reverse'

// 用法：FlipArguments是用来实现函数参数反转的
type FlipArguments<T> = 
  T extends (...args: infer A) => infer R
    ? (...args: Reverse<A>) => R
    : never

// example
type result = FlipArguments<(a: string, b: number) => string | number>

// test
type cases = [
  Expect<Equal<FlipArguments<() => boolean>, () => boolean>>,
  Expect<Equal<FlipArguments<(foo: string) => number>, (foo: string) => number>>,
  Expect<Equal<FlipArguments<(arg0: string, arg1: number, arg2: boolean) => void>, (arg0: boolean, arg1: number, arg2: string) => void>>
]