
import { isObject } from "../../validate/index";

/**
 * 保留对象中的指定 key 元素
 * @param data
 * @param keys
 */
export function includeKeys<T extends Object>(data: T, keys: Array<string>) {
  const t = {};
  const _deep = (node: any, parentKey: string, resNode: any) => {
    Object.keys(node).forEach((key) => {
      const k = parentKey ? parentKey + "." + key : key;
      const exis = keys.find((i) => i === k);
      if (exis) {
        console.log(resNode);

        if (isObject(node[key])) {
          const res = {};
          _deep(node[key], k, res);
          resNode[key] = res;
        } else resNode[key] = node[key];
      }
    });
  };
  _deep(data, "", t);
  return t;
}

