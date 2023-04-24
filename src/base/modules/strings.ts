/**
 * 将字符串以 “,” 进行分割， 但不包括字符串中的 “,” 
 * @param str 
 * @param separator 
 * @returns 
 */
export function splitIgnoreQuotes(str: string) {
    const result: string[] = []
    let begin = 0
    let hasQuotes = false
    for (let i = 0; i < str.length; i++) {
      const char = str[i]
      if (['"', "'"].includes(char)) {
        hasQuotes = !hasQuotes
      }
      if (char === ',' && !hasQuotes) {
        result.push(str.substring(begin, i))
        begin = i + 1
      } else if (i === str.length - 1) {
        result.push(str.substring(begin))
      }
    }
    return result 
  }