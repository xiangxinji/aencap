
import { ref } from "vue";

/**
 * 函数缓存
 */
export function useCachedFunction(fn: Function) {
  const cache = ref(new Map());

  return function (...args: Array<any>) {
    const key = JSON.stringify(args);

    if (cache.value.has(key)) {
      return cache.value.get(key);
    }

    const result = fn(...args);
    cache.value.set(key, result);
    return result;
  };
}
