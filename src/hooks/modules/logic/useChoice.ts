import { deepClone } from "../../../base";
import { isDef, required } from "../../../validate";
import { reactive, computed } from "vue";

type Option = { label: string; key: string | number };
/**
 * 处理单选逻辑
 */
export function useChoice(
  options: Array<Option>,
  config: {
    defaultKeys?: string[];
    defaultKey?: string;
    multiple: boolean;
    disabled?: boolean;
  }
) {
  const state = reactive({
    current: [] as string[],
    datas: options as Array<Option>,
    //   是否编辑
    disabled: !!config.disabled,
  });

  const backups = {
    defaultKey: config.defaultKey,
    defaultKeys: deepClone(config.defaultKeys),
  };

  if (config.multiple && isDef(config.defaultKeys)) {
    state.current = config.defaultKeys as string[];
  }

  if (!config.multiple && required(config.defaultKey)) {
    state.current = [config.defaultKey as string];
  }

  const context = {
    // 添加数据
    setOptions(options: Array<Option>) {
      state.datas = options as any;
    },
    // 更改当前元素, 如果是选择, 则取消选择, 如果未选择,则选择
    changeCurrent(current: string) {
      if (state.disabled) return;
      const ind = state.current.findIndex((i) => i === current);
      if (ind === -1) state.current.push(current);
      else state.current.splice(ind, 1);
    },
    // 直接覆盖当前选择, 用于单选模式
    setCurrent(current: string) {
      if (state.disabled) return;
      state.current = [current];
    },
    // 判断是否在此集合中
    is(current: string) {
      return state.current.includes(current);
    },
    // 清空当前所有选择
    clear() {
      state.current = [];
    },

    // 还原 defaultKeys 或者 defaultKey
    reset() {
      if (config.multiple) {
        state.current = [...backups.defaultKeys];
      } else {
        if (backups.defaultKey) state.current = [backups.defaultKey];
      }

      state.current.filter((i) => required(i));
    },

    current: computed(() => {
      if (config.multiple)
        return state.current.map((i) => state.datas.find((j) => j.key === i));
      else return state.datas.find((i) => i.key === state.current[0]);
    }),
  };
  return [state, context] as [typeof state, typeof context];
}
