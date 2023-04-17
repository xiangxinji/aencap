declare type Option = {
    label: string;
    key: string | number;
};
/**
 * 处理单选逻辑
 */
export declare function useChoice(options: Array<Option>, config: {
    defaultKeys?: string[];
    defaultKey?: string;
    multiple: boolean;
    disabled?: boolean;
}): [{
    current: string[];
    datas: {
        label: string;
        key: string | number;
    }[];
    disabled: boolean;
}, {
    setOptions(options: Array<Option>): void;
    changeCurrent(current: string): void;
    setCurrent(current: string): void;
    is(current: string): boolean;
    clear(): void;
    reset(): void;
    current: import("vue").ComputedRef<{
        label: string;
        key: string | number;
    } | ({
        label: string;
        key: string | number;
    } | undefined)[] | undefined>;
}];
export {};
