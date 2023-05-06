/**
 * 将字符串以 “,” 进行分割， 但不包括字符串中的 “,”
 * @param str
 * @param separator
 * @returns
 */
export declare function splitIgnoreQuotes(str: string, separator?: string): string[];
/**
 * 用于模板变量的字符串替换
 * @param template
 * @param data
 * @returns
 */
export declare function parseTemplate<T>(template: string, data: T, stringify?: boolean): string;
