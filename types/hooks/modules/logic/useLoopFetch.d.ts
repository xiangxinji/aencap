/**
 * 加载功能工具
 */
type LoopFetchParams = {
    immediate?: boolean;
    onFetchBefore?: Function;
    onFetchEnd?: Function;
};
export declare function useLoopFetch(handler: Function, time?: number, { immediate, onFetchBefore, onFetchEnd }?: LoopFetchParams): [{
    count: number;
    finish: boolean;
    pedding: boolean;
}, {
    start: () => void;
    stop: () => void;
}];
export {};
