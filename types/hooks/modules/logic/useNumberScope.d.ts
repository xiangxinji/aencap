import { Ref } from "vue";
/**
 * range 区域操作
 */
export declare function useNumberScope(min: number, max: number, { loop, onChange, onInitState }?: {
    loop?: boolean | undefined;
    onChange?: Function | null | undefined;
    onInitState?: Function | null | undefined;
}): [
    {
        current: number;
        min: number;
        max: number;
    },
    {
        next: () => void;
        prev: () => void;
        isMin: Ref<boolean>;
        isMax: Ref<boolean>;
    }
];
