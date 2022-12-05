/**
 * 树结构操作方法封装
 */


/**
 * 查询当前节点的父节点
 * @param tree 树数据
 * @param data 数据值
 * @param key 数据参考key 
 * @returns 
 */
 export function findParent<T = any>(tree: any[], data: any, key: string = "id"): null | T {
    function find(tree1: any[], data: any, key: string = "id") {
      for (let index = 0; index < tree1.length; index++) {
        if (tree1[index][key] === data) {
          return tree1;
        }
        if (tree1[index]?.children) {
          const result = find(tree1[index].children, data, key);
          if (result) return tree1[index];
        }
      }
    }
    const r = find(tree, data, key);
    if (r === tree) return null;
    return r;
  }

