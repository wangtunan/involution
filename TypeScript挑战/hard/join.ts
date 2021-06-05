// 用法：将传递的多个字符以指定的分隔符连接起来
type JoinType<
  delimiter extends string,
  Parts extends string[],
  Result extends string = ''
> = any

declare function join<delimiter extends string>(delimiter: string): <Parts extends string[]>(...parts: string[]) => JoinType<delimiter, Parts>


const result = typeof join('-')