export function classComputed(
    ...params: Array<string | { [key: string]: boolean } | Array<string>>
  ) {
    const classList = params.reduce((acc: string[], cur) => {
      if (typeof cur === "string") {
        acc.push(cur);
      } else if (Array.isArray(cur)) {
        acc.push(...cur);
      } else if (typeof cur === "object") {
        acc.push(...Object.keys(cur).filter((key) => cur[key]));
      }
      return acc;
    }, []);
  
    return classList.join(" ");
  }
  