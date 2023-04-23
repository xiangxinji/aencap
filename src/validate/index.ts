export * as rules from "./rules";

/**
 * 是否定义
 * @param v 数据
 * @returns boolean 是否定义
 */
export function isDef(v: any) {
  return v !== null && typeof v !== "undefined";
}
/**
 * 是否必填
 * @param v 数据
 * @returns
 */
export function required(v: any) {
  return isDef(v) && v !== "";
}
/**
 * 是否是对象
 * @param obj 数据
 * @returns
 */
export function isObject(obj: object) {
  return Object.prototype.toString.call(obj) === "[object Object]";
}
/**
 * 是否是数组
 * @param arr 数据
 * @returns
 */
export function isArray(arr: Array<any>) {
  return Array.isArray(arr);
}
/**
 *  是否是全大写
 * @param str 字符串
 * @returns
 */
export function isUpper(str: string) {
  if (str === str.toUpperCase()) return true;
  return false;
}
/**
 * 是否全小写
 * @param str 字符串
 * @returns
 */
export function isLower(str: string) {
  if (str === str.toLocaleLowerCase()) return true;
  return false;
}

/**
 * 是否是外部链接
 * @param value url 字符串
 * @returns
 */
export function isOutlink(value: string) {
  return /^https?:\/\//.test(value);
}

export function isDevEnv(v: string) {
  return v.toUpperCase() === "DEVELOPMENT";
}

export function isTestEnv(v: string) {
  return v.toUpperCase() === "TEST";
}

/**
 * 是否是 rgb 颜色字符串 如 rgb(0,0,0)
 * @param str 
 * @returns 
 */
export function isRgb(str: string) {
  return str.indexOf('rgb(') === 0
}

/**
 * 是否是 rgba 颜色字符串 如 rgba(0,0,0,0)
 * @param str 
 * @returns 
 */
export function isRgba(str: string) {
  return str.indexOf('rgba(') === 0
}