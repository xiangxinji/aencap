import { reactive } from "vue";
import type { Ref } from "vue";

export type IDefineFormOptions<T> = {
  formModel: T;
  formRef: Ref<any>;
  onGet?: (
    formModel: T,
    formType: IDefineFormOptions<T>["formType"]
  ) => T | null;
  formType?: "create" | "update";
};

const dc = (v: any) => JSON.parse(JSON.stringify(v));

/**
 * 定义一个表单结构
 * @param formName
 * @param options
 * @returns
 */
export function useDefineForm<T>(
  formName: string,
  options: IDefineFormOptions<T>
) {
  let backup = null as null | T;

  const state = reactive({
    formModel: options.formModel,
    formName,
    formType: options.formType || ("create" as "create" | "update"),
    rules: {} as any,
  });

  backup = dc(state.formModel);

  /**
   * 重置
   */
  function reset() {
    state.formModel = dc(backup);
  }

  /**
   * 外部调用方法，获取表单数据
   * @returns
   */
  function get() {
    const { formRef } = options;
    return new Promise((resolve, reject) => {
      formRef.value.validate((valid: boolean) => {
        if (!valid) {
          return reject();
        }
        const newValue = dc(state.formModel);
        if (options.onGet) {
          const r = options.onGet(newValue, state.formType);
          if (r) {
            resolve(r);
          } else reject();
        }
        resolve(newValue);
      });
    });
  }

  /**
   * 定义表单校验规则
   * @param rules
   */
  function defineRules(rules?: any) {
    state.rules = rules;
  }

  const context = {
    reset,
    get,
    defineRules,
  };

  return [state, context] as [typeof state, typeof context];
}
