import { Equal, Expect } from "../index";
// 用法：是用来解析百分比字符串的
type CheckPrefix<S extends string> = S extends '+' | '-' ? S : never
type CheckSuffix<S extends string> = S extends `${infer L}%` ? [L, '%'] : [S, '']
type PercentageParser<S extends string> = 
  S extends `${CheckPrefix<infer L>}${infer R}`
    ? [L, ...CheckSuffix<R>]
    : ['', ...CheckSuffix<S>]

// example
type result = PercentageParser<'+85%'>

// test
type Case1 = ['', '', '']
type Case2 = ['+', '', '']
type Case3 = ['+', '1', '']
type Case4 = ['+', '100', '%']
type Case5 = ['', '10', '%']
type Case6 = ['-', '99', '%']

type cases = [
    Expect<Equal<PercentageParser<''>, Case1>>,
    Expect<Equal<PercentageParser<'+'>, Case2>>,
    Expect<Equal<PercentageParser<'+1'>, Case3>>,
    Expect<Equal<PercentageParser<'+100%'>, Case4>>,
    Expect<Equal<PercentageParser<'10%'>, Case5>>,
    Expect<Equal<PercentageParser<'-99%'>, Case6>>,
]