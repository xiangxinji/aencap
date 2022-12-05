/**
 *  关于 DOM 对象操作集合
 */
/**
 * 向上找 dom 节点
 * @param startDom 开始节点
 * @param endDom 终止节点
 * @param inCaseCallback 判断函数, 返回boolean 值
 * @returns
 */
export declare function findUponDom(startDom: HTMLElement, endDom: HTMLElement, inCaseCallback: (node: HTMLElement) => boolean): HTMLElement | null;
