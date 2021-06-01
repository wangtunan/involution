// 用法：合并两个类型，如果有重复的，则第二个类型覆盖第一个类型
type MergeType<F, S> = {
  [P in keyof F]: P extends keyof S ? S[P] : F[P]
}

// interface
type Foo = {
  a: number;
  b: string;
}
type Bar = {
  b: number;
}

// example
type result = MergeType<Foo, Bar>