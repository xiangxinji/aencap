export * as rules from "./rules";
/**
 * 是否定义
 * @param v 数据
 * @returns boolean 是否定义
 */
export declare function isDef(v: any): boolean;
/**
 * 是否必填
 * @param v 数据
 * @returns
 */
export declare function required(v: any): boolean;
/**
 * 是否是对象
 * @param obj 数据
 * @returns
 */
export declare function isObject(obj: object): boolean;
/**
 * 是否是数组
 * @param arr 数据
 * @returns
 */
export declare function isArray(arr: Array<any>): boolean;
/**
 *  是否是全大写
 * @param str 字符串
 * @returns
 */
export declare function isUpper(str: string): boolean;
/**
 * 是否全小写
 * @param str 字符串
 * @returns
 */
export declare function isLower(str: string): boolean;
/**
 * 是否是外部链接
 * @param value url 字符串
 * @returns
 */
export declare function isOutlink(value: string): boolean;
export declare function isDevEnv(v: string): boolean;
export declare function isTestEnv(v: string): boolean;
/**
 * 是否是 rgb 颜色字符串 如 rgb(0,0,0)
 * @param str
 * @returns
 */
export declare function isRgb(str: string): boolean;
/**
 * 是否是 rgba 颜色字符串 如 rgba(0,0,0,0)
 * @param str
 * @returns
 */
export declare function isRgba(str: string): boolean;
/**
 * 默认值
 */
export declare function defaultValue<T>(fallbackValue: T, value?: T): T;
