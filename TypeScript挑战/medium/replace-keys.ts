import { Equal, Expect } from '../index'
// 用法：在一个类型中，使用指定的Y类型来替换已经存在的T类型
type ReplaceKeys<U, T, Y> = {
  [P in keyof U]:
    P extends T
      ? P extends keyof Y
        ? Y[P]
        : never
      : U[P]
}

// interface
type NodeA = {
  type: 'A';
  name: string;
  flag: number;
}
type NodeB = {
  type: 'B';
  id: number;
  flag: number;
}
type ReplaceNodeA = {
  type: 'A';
  name: boolean;
  flag: string;
}
type ReplaceNodeB = {
  type: 'B';
  id: number;
  flag: string;
}
type NoNameNodeA = {
  type: 'A';
  name: never;
  flag: number;
}
type Nodes = NodeA | NodeB
type ReplaceResult = ReplaceNodeA | ReplaceNodeB
type NoNameReplaceResult = NoNameNodeA | NodeB

// example
type result = ReplaceKeys<Nodes, 'name'|'flag', {name: boolean; flag: string}>

// test
type testCases = [
  Expect<Equal<ReplaceResult, ReplaceKeys<Nodes, 'name'|'flag', { name: boolean; flag: string; }>>>,
  Expect<Equal<NoNameReplaceResult, ReplaceKeys<Nodes, 'name', { aa: number;}>>>
]
