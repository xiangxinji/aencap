type Symbol = "+" | "-" | "*" | "/";

// 无限循环小数保留八位
const keep = 8;

// 小数转整数
const floatToInt = (nums: [number, number]) => {
  let decimalPlaces = 0;
  const numsArr = nums.map((num) => {
    const numArr = String(num).split(".");
    if (numArr[1]?.length > decimalPlaces) {
      decimalPlaces = numArr[1]?.length;
    }
    return numArr;
  });
  const intNums = numsArr.map((num) => {
    if (decimalPlaces && (num[1]?.length < decimalPlaces || !num[1])) {
      if (!num[1]) {
        num[1] = "0";
      }
      const len = decimalPlaces - num[1].length;
      for (let i = 0; i < len; i++) {
        num[1] += 0;
      }
    }

    // 去除前置位的 0 （如果0则0）
    if (num.join("").startsWith("-")) {
      return num.join("").replace(/(^-0+)/, "-") || 0;
    } else {
      return num.join("").replace(/(^0+)/, "") || 0;
    }
  });

  return {
    nums: intNums,
    decimalPlaces,
  };
};

// 整数转小数
const intToFloat = (nums: number, decimalPlaces: number) => {
  // 是否小数
  const hasMinus = nums < 0;
  // 通过小数点位移来回复精度
  const s1 = String(Math.abs(nums)).split(".");
  // 如果小数位不够则在前面拼接0
  if (s1[0].length < decimalPlaces) {
    const len = decimalPlaces - s1[0].length;
    for (let i = 0; i <= len; i++) {
      s1[0] = "0" + s1[0];
    }
  }
  const s2 = s1[0].split("");
  const s3 = s2.splice(s2.length - decimalPlaces);
  return hasMinus
    ? -Number([...s2, ".", ...s3, s1[1] ?? ""].join(""))
    : Number([...s2, ".", ...s3, s1[1] ?? ""].join(""));
};

// 计算
export const computeTwoNumber = (
  num1: number,
  num2: number,
  symbol: Symbol
) => {
  const { nums, decimalPlaces } = floatToInt([num1, num2]);

  let num = eval(nums.join(symbol));
  // 无限循环小数最多只计算八位小数
  if (String(num).split(".")[1]?.length > keep) {
    num = Number(num.toFixed(keep));
  }

  // 乘法小数位要翻倍
  if (symbol === "*") {
    return intToFloat(num, decimalPlaces * 2);
  }

  // 除法不需要处理
  if (symbol === "/") {
    return num;
  }

  return intToFloat(num, decimalPlaces);
};

// 创建一个 n * n 的矩阵
export function createMatrix(MAX_ROW: number, MAX_COL: number) {
  const matrix = [];
  for (let i = 0; i < MAX_ROW; i++) {
    const row = [];
    for (let j = 0; j < MAX_COL; j++) {
      row.push(null);
    }
    matrix.push(row);
  }
  return matrix;
}
