import type { Ref } from "vue";
export type IDefineFormOptions<T> = {
    formModel: T;
    formRef: Ref<any>;
    onGet?: (formModel: T, formType: IDefineFormOptions<T>["formType"]) => T | null;
    formType?: "create" | "update";
};
/**
 * 定义一个表单结构
 * @param formName
 * @param options
 * @returns
 */
export declare function useDefineForm<T>(formName: string, options: IDefineFormOptions<T>): [{
    formModel: import("vue").UnwrapRef<T>;
    formName: string;
    formType: "create" | "update";
    rules: any;
}, {
    reset: () => void;
    get: () => Promise<unknown>;
    defineRules: (rules?: any) => void;
}];
