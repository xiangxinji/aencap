/**
 * 保留对象中的指定 key 元素
 * @param data
 * @param keys
 */
export declare function includeKeys<T extends Object>(data: T, keys: Array<string>): {};
/**
 * 遍历这个对象
 * @param obj 目标对象
 * @param callback 回调函数, { value : 值 , key : 键 }
 */
export declare function each(obj: object, callback: Function): void;
/**
 * 遍历这个对象, 返回一个新的对象
 * @param obj 目标对象
 * @param callback 执行回调 { value : 值 , key : 键 }
 */
export declare function map(obj: object, callback: Function): any;
/**
 * 嵌套设置对象的值
 * @param data
 * @param key
 * @param value
 * @returns
 */
export declare function linkSet(data: any, key: string, value: any): any;
/**
 * 嵌套获取对象的值
 * @param data
 * @param key
 * @returns
 */
export declare function linkGet(data: any, key: string): any;
export declare function deepClone(t: any): any;
