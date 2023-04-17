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

// 小数计算方法 注：不支持()
export const floatCalculate = (arg0: any, ...args: any) => {
  try {
    // 过滤不符合规则的参数
    arg0 = arg0.filter(Boolean).map((s: string) => s.trim());
    args = args.map((num: number) => {
      if (!num) {
        return 0;
      }
      return num;
    });

    // 通过递归先计算 * / 然后计算 + -
    const diGuiCompute = (arg0: any, args: number[]): number => {
      if (args.length === 1) {
        return args[0];
      } else {
        let index = arg0.findIndex((s: Symbol) => s === "*" || s === "/");
        if (index === -1) {
          index = 0;
        }
        args.splice(
          index,
          2,
          computeTwoNumber(args[index], args[index + 1], arg0[index])
        );
        arg0.splice(index, 1);
        return diGuiCompute(arg0, args);
      }
    };

    return diGuiCompute(arg0, args);
  } catch {
    console.error("计算出错了：", arg0, args);
    return 0;
  }
};
