/**
 * 处理对象数据
 */

import { isArray, isObject } from "../../validate/index";

/**
 *
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
          _deep(node[key], k, res)
          resNode[key] = res;
        } else resNode[key] = node[key];
      }
    });
  };
  _deep(data, "", t);
  return t;
}

console.log(includeKeys({ username: "zs", age: 15 }, ["username"]));
