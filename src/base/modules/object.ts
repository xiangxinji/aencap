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

/**
 * 遍历这个对象
 * @param obj 目标对象
 * @param callback 回调函数, { value : 值 , key : 键 }
 */
export function each(obj: object, callback: Function) {
  //@ts-ignore
  Object.keys(obj).forEach((key: keyof typeof obj) => {
    callback({ value: obj[key], key: key });
  });
}

/**
 * 遍历这个对象, 返回一个新的对象
 * @param obj 目标对象 
 * @param callback 执行回调 { value : 值 , key : 键 }
 */
export function map(obj: object, callback: Function) {
  let r: any = {};
  //@ts-ignore
  Object.keys(obj).forEach((key: keyof typeof obj) => {
    let res = callback({ value: obj[key], key: key });
    r[key] = res;
  });
  return r;
}


/**
 * 嵌套设置对象的值
 * @param data 
 * @param key 
 * @param value 
 * @returns 
 */
export function linkSet(data: any, key: string, value: any) {
  const keys = key.split(".");
  if (keys.length <= 1) {
    return (data[key] = value);
  }
  let temp = data;
  keys.forEach((k: string, index: number) => {
    //@ts-ginore
    temp = temp[k];
    if (index === keys.length - 2) {
      temp[keys[index + 1]] = value;
    }
  });
}

/**
 * 嵌套获取对象的值
 * @param data 
 * @param key 
 * @returns 
 */
export function linkGet(data: any, key: string) {
  const keys = key.split(".");
  if (keys.length <= 1) return data[key];
  let temp = data;
  keys.forEach((k: string, index: number) => {
    temp = temp[k];
  });
  return temp;
}



export function deepClone (t : any ) {
  return JSON.parse(JSON.stringify(t))
  
}