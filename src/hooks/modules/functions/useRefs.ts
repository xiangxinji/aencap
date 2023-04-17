import { Ref, ref } from "vue";

type Index = number | string;

export function useRefs() {
  const refs: Map<Index, HTMLElement | any> = new Map();

  const set = (e: any, index: Index) => {
    refs.set(index, e);
  };
  const remove = (index: Index) => {
    refs.delete(index);
  };

  const get = (index: Index) => {
    return refs.get(index);
  };

  const clear = () => {
    refs.clear();
  };
  const context = {
    set,
    remove,
    get,
    clear,
  };
  return [refs, context] as [typeof refs, typeof context];
}
