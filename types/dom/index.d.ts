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
/**
 * 全屏
 * @param el dom元素
 */
export declare function fullScreen(el?: any): void;
/**
 * 退出全屏
 */
export declare function exitScreen(): void;
export declare function isFullscreen(): boolean;
export declare function getCursortPosition(ctrl: any): number;
export declare function setCaretPosition(ctrl: any, pos: number): void;
