/**
 * 判断函数
 */

/**
 * 是否定义
 * @param v
 * @returns
 */
export function isDef(v: any) {
  return v !== null && typeof v !== "undefined";
}
/**
 * 是否必填
 * @param v
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
 * @param obj
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


