import { Equal, Expect } from "../index"
// 用法：讲字符串中的单词首字母大写
// way1: 借助额外字符串
// type CapitalizeWords<
//   S extends string,
//   R extends string = ''
// > = S extends `${infer First}${infer Split}${infer Last}`
//     ? Split extends ' ' | '.' | ','
//       ? CapitalizeWords<Capitalize<Last>, `${R}${First}${Split}`>
//       : CapitalizeWords<Last, `${R}${First}${Split}`>
//     : Capitalize<`${R}${S}`>

// way2: 不借助字符串
type CapitalizeWord<
  S extends string
> = S extends `${infer S1}${infer SP}${infer S2}`
    ? SP extends ' ' | ',' | '.'
      ? `${S1}${SP}${CapitalizeWord<Capitalize<S2>>}`
      : `${S1}${SP}${CapitalizeWord<S2>}`
    : S
type CapitalizeWords<S extends string> = Capitalize<CapitalizeWord<S>>

// example
type result = CapitalizeWords<'foo bar.hello,world'>

// test
type testCases = [
  Expect<Equal<CapitalizeWords<'foobar'>, 'Foobar'>>,
  Expect<Equal<CapitalizeWords<'FOOBAR'>, 'FOOBAR'>>,
  Expect<Equal<CapitalizeWords<'foo bar'>, 'Foo Bar'>>,
  Expect<Equal<CapitalizeWords<'foo bar hello world'>, 'Foo Bar Hello World'>>,
  Expect<Equal<CapitalizeWords<'foo bar.hello,world'>, 'Foo Bar.Hello,World'>>,
  Expect<Equal<CapitalizeWords<''>, ''>>,
]