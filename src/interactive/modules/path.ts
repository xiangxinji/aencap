
/**
 * 将 url 后的 ? 参数进行解析成对象
 * @param search 
 * @returns 
 */
export function resolveLocationSearch<T>(search = window.location.search): T {
    if (!search) return {} as T;
    if (search.indexOf("?") === -1) return {} as T;
    try {
        const str = search.substring(search.indexOf("?") + 1, search.length);
        const result = str.split("&").reduce((result, item) => {
            const arr = item.split("=");
            if (arr.length === 2) {
                // @ts-ignore
                result[arr[0]] = arr[1];
            }
            return result;
        }, {});
        return result as T;
    } catch (e) {
        return {} as T;
    }
}
