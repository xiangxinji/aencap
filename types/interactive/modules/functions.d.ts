/**
 * 交互控制方法
 */
/**
 * 节流函数
 * @param fn 函数
 * @param delay 时间戳
 * @returns
 */
export declare function throttle(fn: Function, delay: number): (this: any) => void;
/**
 * 防抖函数
 * @param fn 函数
 * @param wait 时间戳
 * @param immediate 是否在调用时先执行一次
 * @returns
 */
export declare function debounce(fn: Function, wait: number, immediate?: boolean): (this: any) => void;
