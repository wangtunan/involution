import { Equal, Expect } from '../index'

// 用法：MapTypes是根据指定类型进行替换的
type GetMapType<
  T, 
  R,
  Type = R extends { mapFrom: T, mapTo: infer To } ? To : never
> = [Type] extends [never] ? T : Type
type MapTypes<T, R> = {
  [P in keyof T]: GetMapType<T[P], R>
}

// example
type result = MapTypes<{ type: string; age: number; }, { mapFrom: string;mapTo: number; }>

// test
type cases = [
  Expect<Equal<MapTypes<{stringToArray: string}, {mapFrom: string; mapTo: []}>, { stringToArray: [];}>>,
  Expect<Equal<MapTypes<{stringToNumber: string}, {mapFrom: string; mapTo: number;}>, { stringToNumber: number;}>>,
  Expect<Equal<MapTypes<{stringToNumber: string, skipParsingMe: boolean;}, {mapFrom: string; mapTo: number;}>, { stringToNumber: number; skipParsingMe: boolean;}>>,
  Expect<Equal<MapTypes<{date: string}, {mapFrom: string; mapTo: Date;} | {mapFrom: string; mapTo: null;}>, {date: null | Date}>>,
  Expect<Equal<MapTypes<{date: string}, {mapFrom: string; mapTo: Date | null;}>, {date: null | Date}>>,
  Expect<Equal<MapTypes<{fields: Record<string, boolean>}, {mapFrom: Record<string, boolean>; mapTo: string[];}>, { fields: string[];}>>,
  Expect<Equal<MapTypes<{name: string}, {mapFrom: boolean; mapTo: never;}>, { name: string;}>>,
  Expect<Equal<MapTypes<{name: string, date: Date}, {mapFrom: string; mapTo: boolean;} | {mapFrom: Date; mapTo: string;}>, {name: boolean; date: string;}>>,
]