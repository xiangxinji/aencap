
import { reactive } from 'vue'

// 控制每个函数的加载状态
export function useFetchScope(fetchHandler: Function) {
    const state = reactive({
      loading: false,
      finish: false,
      error: false,
      data: null as any,
    });
  
    function start(...args: Array<any>) {
      state.loading = true;
      //@ts-ignore
      // eslint-disable-next-line prefer-spread
      return fetchHandler
        .apply(null, args)
        .then((data: any) => {
          state.data = data;
          return state.data;
        })
        .catch(() => {
          state.error = true;
        })
        .finally(() => {
          setTimeout(() => {
            state.loading = false;
            state.finish = true;
          });
        });
    }
    return [state, start] as [typeof state, typeof start];
  }
  