export declare function useFetchScope(fetchHandler: Function): [{
    loading: boolean;
    finish: boolean;
    error: boolean;
    data: any;
}, (...args: Array<any>) => any];
