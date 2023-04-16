/**
 * 进行状态备份， 调用 reset 可以回退至最初状态
 * @param defaultValue
 * @returns
 */
export declare function useDataBackup<T>(defaultValue: T): {
    data: import("vue").Ref<import("vue").UnwrapRef<T>>;
    reset: () => void;
};
