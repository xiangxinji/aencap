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


/**
 * 将对象转换为 FormData , 如果为数组则会转换为多个 key
 * @param obj 
 * @returns 
 */
export function paramsToFormData(obj: any) {
  const formData = new FormData();
  Object.keys(obj).forEach((key) => {
    if (Array.isArray(obj[key])) {
      obj[key].forEach((item: any) => {
        formData.append(key, item);
      });
      return;
    }
    formData.append(key, obj[key]);
  });
  return formData;
}


/**
 * 手动模拟双击事件
 * @param handle 
 * @param wait 
 * @param n 
 * @returns 
 */
export function doubleClick(handle: Function, wait = 200, n = 2) {
  let count = 0;
  let timer: any = null;
  return function (...args: Array<any>) {
    count++;
    if (timer) {
      return;
    }
    timer = setTimeout(() => {
      if (count <= n) {
        // eslint-disable-next-line prefer-spread
        handle.apply(null, [count, ...args]);
      }
      count = 0;
      clearTimeout(timer);
      timer = null;
    }, wait);
  };
}
