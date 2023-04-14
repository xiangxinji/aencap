import { ref } from "vue";

/**
 * 进行状态备份， 调用 reset 可以回退至最初状态
 * @param defaultValue 
 * @returns 
 */
export function useDataBackup<T>(defaultValue: T) {
  const backup = JSON.parse(JSON.stringify(defaultValue));

  const result = {
    data: ref(defaultValue),
    reset: () => {
      result.data.value = JSON.parse(JSON.stringify(backup));
    },
  };
  return result;
}
