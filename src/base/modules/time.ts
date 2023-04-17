
/**
 * 返回一个 Promise，等待指定的时间后 resolve
 * 通常可以搭配 async / await 使用
 * @param time 
 * @returns 
 */
export function sleep(time = 300) {
    return new Promise((resolve) => setTimeout(resolve, time));
}

/**
 * 时间戳转换为时间字符串
 * @param second 
 * @returns 
 */
export function secondToString(second: number) {
    if (second < 60) {
      return second + "秒";
    }
    if (second < 60 * 60) {
      return parseInt((second / 60).toString()) + "分钟";
    }
  
    if (second < 60 * 60 * 24) {
      return parseInt((second / (60 * 60)).toString()) + "小时";
    }
  
    return parseInt((second / (60 * 60 * 24)).toString()) + "天";
  }
  