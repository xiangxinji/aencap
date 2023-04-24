/**
 * 将字符串以 “,” 进行分割， 但不包括字符串中的 “,” 
 * @param str 
 * @param separator 
 * @returns 
 */
export function splitIgnoreQuotes(str: string, separator = ',') {
    let result = [];
    let inQuote = false;
    let current = "";
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (char === '"' || char === "'") {
            inQuote = !inQuote;
        } else if (char === separator && !inQuote) {
            result.push(current);
            current = "";
        } else {
            current += char;
        }
    }
    result.push(current);
    return result;
}