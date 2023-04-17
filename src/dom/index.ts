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
export function findUponDom(
  startDom: HTMLElement,
  endDom: HTMLElement,
  inCaseCallback: (node: HTMLElement) => boolean
) {
  let node = startDom;
  while (node !== endDom) {
    if (inCaseCallback(node)) return node;
    node = node.parentNode as HTMLElement;
  }
  return null;
}

/**
 * 全屏
 * @param el dom元素
 */
export function fullScreen(el: any = document.documentElement) {
  const ref = el.requestFullscreen || el.webkitRequestFullScreen || el.msRequestFullscreen || el.mozRequestFullScreen;
  if (ref) {
    ref.call(el);
  }
}
/**
 * 退出全屏
 */
export function exitScreen() {
  const el: any = document;
  const ref = el.cancelFullscreen || el.webkitCancelFullScreen || el.mozCancelFullScreen || el.exitFullScreen;
  if (ref) {
    ref.call(el);
  }
}

export function isFullscreen() {
  const el: any = document;
  if (el.fullscreenElement || el.msFullscreenElement || el.mozFullScreenElement || el.webkitFullscreenElement) {
    return true;
  }
  return false;
}

// 获取光标位置
export function getCursortPosition(ctrl: any) {
  let CaretPos = 0; // IE Support
  if (ctrl.selectionStart || ctrl.selectionStart == "0") CaretPos = ctrl.selectionStart;
  return CaretPos;
}

// 设置光标位置
export function setCaretPosition(ctrl: any, pos: number) {
  if (ctrl.setSelectionRange) {
    ctrl.focus();
    ctrl.setSelectionRange(pos, pos);
  } else if (ctrl.createTextRange) {
    const range = ctrl.createTextRange();
    range.collapse(true);
    range.moveEnd("character", pos);
    range.moveStart("character", pos);
    range.select();
  }
}

