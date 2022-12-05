/**
 * 交互控制方法
 */

/**
 * 节流函数
 * @param fn 函数
 * @param delay 时间戳
 * @returns 
 */
export function throttle(fn: Function, delay: number) {
    let ctx: any = null;
    let args: any = null;
    // 记录上次触发事件
    let previous = Date.now();
  
    const later = function () {
      fn.apply(ctx, args);
    };
  
    return function (this: any) {
      ctx = this;
      // eslint-disable-next-line prefer-rest-params
      args = arguments;
      const now = Date.now();
      const diff = now - previous - delay;
      if (diff >= 0) {
        previous = now;
        setTimeout(later, delay);
      }
    };
  }
  
  /**
   * 防抖函数
   * @param fn 函数
   * @param wait 时间戳
   * @param immediate 是否在调用时先执行一次
   * @returns 
   */
  export function debounce(fn: Function, wait: number, immediate?: boolean) {
    let timer: null | any = null;
  
    return function (this: any) {
      const args = arguments;
      const cleanup = () => {
        clearTimeout(timer);
        timer = null;
      };
      if (!timer && immediate) {
        fn();
        timer = setTimeout(cleanup, wait);
      } else {
        timer && cleanup();
        timer = setTimeout(() => {
          fn.apply(this, args);
        }, wait);
      }
    };
  }