import { linkGet } from "./object";

/**
 * 将字符串以 “,” 进行分割， 但不包括字符串中的 “,”
 * @param str
 * @param separator
 * @returns
 */
export function splitIgnoreQuotes(str: string, separator = ",") {
  let result = [];
  let inQuote = false;
  let current = "";
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (char === '"' || char === "'") {
      inQuote = !inQuote;
      current += char;
    } else if (char === separator && !inQuote) {
      result.push(current);
      current = "";
    } else {
      current += char;
    }
  }
  result.push(current);
  return result;
}

/**
 * 用于模板变量的字符串替换
 * @param template
 * @param data
 * @returns
 */
export function parseTemplate<T>(
  template: string,
  data: T,
  stringify?: boolean
) {
  template.match(/\$\{(.*?)\}/g)?.forEach((i) => {
    const key = i
      .trim()
      .substring(2, i.length - 1)
      .trim();

    const temp = linkGet(data, key);
    template = template.replace(i, stringify ? JSON.stringify(temp) : temp);
  });
  return template;
}
