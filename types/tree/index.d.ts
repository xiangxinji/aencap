/**
 * 树结构操作方法封装
 */
export interface TreeOptions<T> {
    key: keyof T;
    children: keyof T;
    parentKey?: keyof T;
}
/**
 * 查询一个节点的父元素
 * @param tree 树结构数据
 * @param data 要查询的数据值
 * @param options 树结构
 * @returns
 */
export declare function findParent<T = any>(tree: any[], data: any, options: TreeOptions<T>): null | T;
/**
 * 查找一个节点
 * @param tree 树结构数据
 * @param data 要查询的数据值
 * @param options 树结构
 * @returns
 */
export declare function findNode<T = any>(tree: any[], data: any, options: TreeOptions<T>): null | T;
/**
 * 将树拍平
 * @param tree 树结构数据
 * @param options 树结构
 * @returns
 */
export declare function flat<T>(tree: T[], options: TreeOptions<T>): T[];
