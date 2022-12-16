/**
 * 持久化相关
 */
/**
 * 创建本地缓存对象
 * @param {string=} prefixKey -
 * @param {Object} [storage=localStorage] - sessionStorage | localStorage
 */
export declare function createStorage({ prefixKey, storage, }: {
    prefixKey: string;
    storage: any;
}): {
    storage: any;
    prefixKey?: string | undefined;
    getKey(key: string): string;
    /**
     * @description 设置缓存
     * @param {string} key 缓存键
     * @param {*} value 缓存值
     * @param expire
     */
    set(key: string, value: any, expire?: number | null): void;
    /**
     * 读取缓存
     * @param {string} key 缓存键
     * @param {*=} def 默认值
     */
    get(key: string, def?: any): any;
    /**
     * 从缓存删除某项
     * @param {string} key
     */
    remove(key: string): void;
    /**
     * 清空所有缓存
     * @memberOf Cache
     */
    clear(): void;
    /**
     * 设置cookie
     * @param {string} name cookie 名称
     * @param {*} value cookie 值
     * @param {number=} expire 过期时间
     * 如果过期时间为设置，默认关闭浏览器自动删除
     * @example
     */
    setCookie(name: string, value: any, expire?: number | null): void;
    /**
     * 根据名字获取cookie值
     * @param name
     */
    getCookie(name: string): string;
    /**
     * 根据名字删除指定的cookie
     * @param {string} key
     */
    removeCookie(key: string): void;
    /**
     * 清空cookie，使所有cookie失效
     */
    clearCookie(): void;
};
