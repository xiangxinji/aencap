/* eslint-disable prefer-spread */
import { reactive } from "vue";
/**
 * 加载功能工具
 */

type LoopFetchParams = {
  immediate?: boolean;
  onFetchBefore?: Function;
  onFetchEnd?: Function;
};

export function useLoopFetch(
  handler: Function,
  time: number = 1000,
  { immediate = false, onFetchBefore = undefined, onFetchEnd }: LoopFetchParams = {}
) {
  let r: any = null;
  const state = reactive({
    count: 0,
    finish: false,
    pedding: false,
  });

  const context = {
    start,
    stop,
  };

  const _call = () => {
    if (state.finish || state.pedding) return;
    state.count++;
    state.pedding = true;
    r = setTimeout(() => {
      const params = onFetchBefore && onFetchBefore(state.count);
      handler.apply(null, [params]).then((data: any) => {
        onFetchEnd && onFetchEnd(data, context);
        state.pedding = false;
        _call();
      });
    }, time);
  };

  function start() {
    state.finish = false;
    state.count = 0;
    _call();
  }
  function stop() {
    if (r) {
      window.clearTimeout(r);
      r = null;
    }
    state.finish = true;
    state.pedding = false;
  }

  if (immediate) {
    start();
  }

  return [state, context] as [typeof state, typeof context];
}
