/**
 * 树结构操作方法封装
 */


export interface TreeOptions <T>{
    key : keyof T ,
    children : keyof T ,
    parentKey ?: keyof T 
}

/**
 * 查询一个节点的父元素
 * @param tree 树结构数据
 * @param data 要查询的数据值
 * @param options 树结构
 * @returns 
 */
export function findParent<T>(
  tree: T[],
  data: any,
  options: TreeOptions<T>
): null | T {
  function find(tree1: any[], data: any, key: keyof T) {
    for (let index = 0; index < tree1.length; index++) {
      if (tree1[index][key] === data) {
        return tree1;
      }
      if (tree1[index] && tree1[index][options.children]) {
        const result = find(tree1[index].children, data, key);
        if (result) return tree1[index];
      }
    }
  }
  const r = find(tree, data, options.key);
  if (r === tree) return null;
  return r;
}

/**
 * 查找一个节点
 * @param tree 树结构数据
 * @param data 要查询的数据值
 * @param options 树结构
 * @returns 
 */
export function findNode<T = any>(
  tree: T[],
  data: any,
  options: TreeOptions<T>
): null | T {
  for (let index = 0; index < tree.length; index++) {
    if (tree[index][options.key] === data) {
      return tree[index];
    }
    if (tree[index] && tree[index][options.children]) {
      const result = findNode((tree[index] as any)[options.children], data, options);
      if (result) return result;
    }
  }
  return null;
}

/**
 * 将树拍平
 * @param tree 树结构数据 
 * @param options 树结构
 * @returns 
 */
export function flat<T>(tree: T[], options: TreeOptions<T>) {
  const result: T[] = [];
  function each(tree: T[], p?: T) {
    for (let i = 0; i < tree.length; i++) {
      const parent :any = tree[i] as T;
      if (p && options.parentKey) parent[options.parentKey] = p[options.key];
      result.push({
        ...parent,
        children: undefined,
      });
      if (parent[options.children] && parent[options.children].length > 0) {
        each(parent.children, parent);
      }
    }
  }
  each(tree);
  return result;
}


/**
 * 遍历树结构
 * @param datas 树结构数据
 * @param callback 回调函数 (node : 当前节点 , parent : 父节点)
 */
export function each<T>(datas: Array<T>, callback: Function , options : TreeOptions<T>) {
  const _deep = (node: T, parent?: T) => {
    if (callback) callback(node , parent);
    if (node[options.children] && (node[options.children] as unknown as Array<any>).length > 0) {
      (node[options.children] as unknown as Array<any>).forEach((i) => _deep(i, node));
    }
  };
  datas.forEach((i) => _deep(i));
}




