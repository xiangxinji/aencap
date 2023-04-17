// 保留小数 不四舍五入
export const toFixed = (num: number, len: number) => {
    const na = String(num).split('.');
    if (na[1]) {
      if (na[1].length > len) {
        na[1] = na[1].substring(0, len);
        return Number(na.join('.'));
      }
    }
    return num;
  };
  