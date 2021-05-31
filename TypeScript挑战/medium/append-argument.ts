import { Equal, Expect } from "../index"

// 用法：向函数Fn中追加一个参数
type AppendArgument<Fn, A> = Fn extends (...args: infer R) => infer T ? (...args: [...R, A]) => T : never

// interface
type numberFunc = (a: number, b: number) => number
type numberResult = (a: number, b: number, x: boolean) => number
type voidFunc = () => void
type voidResult = (x: boolean) => void

// example
type result = AppendArgument<numberFunc, boolean>

// test
type testCases = [
  Expect<Equal<AppendArgument<numberFunc, boolean>, numberResult>>,
  Expect<Equal<AppendArgument<voidFunc, boolean>, voidResult>>
]
