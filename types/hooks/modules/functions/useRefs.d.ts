declare type Index = number | string;
export declare function useRefs(): [Map<Index, any>, {
    set: (e: any, index: Index) => void;
    remove: (index: Index) => void;
    get: (index: Index) => any;
    clear: () => void;
}];
export {};
