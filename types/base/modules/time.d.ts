/**
 * 返回一个 Promise，等待指定的时间后 resolve
 * 通常可以搭配 async / await 使用
 * @param time
 * @returns
 */
export declare function sleep(time?: number): Promise<unknown>;
/**
 * 时间戳转换为时间字符串
 * @param second
 * @returns
 */
export declare function secondToString(second: number): string;
