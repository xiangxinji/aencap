# 基础


## now


```ts
import { base } from "@binary-star/aencap";
const { now } = base;
const t = now();
```


## includeKeys


```ts
import { base } from "@binary-star/aencap";

const { includeKeys } = base;

const t = includeKeys({ name: "zhangsan", age: 15, gender: 1 }, [
  "name",
  "age",
]);

console.log(t) // { name: 'zhangsan', age: 15  }

```


## each

```ts
import { base } from "@binary-star/aencap";

const { each } = base;

each({ name: "zhangsan", age: 15, gender: 1 }, ({ key, value }: any) => {
  console.log(key, value);
});

// name zhangsan
// age 15
// gender 1
```

## map 

```ts
import { base } from "@binary-star/aencap";

const { map } = base;

const t = map({ name: "zhangsan", age: 15, gender: 1 }, ({ key, value }: any) => {
  if (key === "age") {
    return 20;
  }
  return value;
});

console.log(t); // { name: 'zhangsan', age: 20, gender: 1 }
```


## convertToChinaNum 

将 数字转换为中文大写单位 如：1234567890 -> 十二亿三千四百五十六万七千八百九十

```ts
import { base } from '@binary-star/aencap'
const { convertToChinaNum} = base
convertToChinaNum(1234567890)
```


## sleep 
返回一个 Promise，等待指定的时间后 resolve

通常可以搭配 async / await 使用
```ts
import { base } from '@binary-star/aencap'
const { sleep } = base

const start = async () => {
    await sleep(3000)
    console.log('start');
}

start()
```


## secondToString
时间戳转换为时间字符串

```ts
import { base } from '@binary-star/aencap'
const { secondToString } = base

console.log(secondToString(120)); // 120 -> 2 分钟
```
## linkSet 
使用 '.' 进行深度设置对象值 

```ts
import { base } from '@binary-star/aencap'

const { linkSet } = base 
const data = {
    user : {
        name : 'John',
    },
}

linkSet(data , 'user.name' , 'Alice')
console.log(data.user.name); // Alice 

```

## linkGet 

使用 '.' 进行深度获取对象值

```ts
import { base } from '@binary-star/aencap'

const { linkGet } = base 
const data = {
    user : {
        name : 'John',
    },
}

console.log(linkGet(data , 'user.name')); // John
```


## toFixed

```ts
import { toFixed } from "@binary-star/aencap/base";

console.log(toFixed(12.3444444 , 2));  // 12.34

```


## computeTwoNumber

两个数进行运算 

```ts

import { computeTwoNumber } from "@binary-star/aencap/base";

console.log(computeTwoNumber(1, 2, '+')); // 3
```

## splitIgnoreQuotes

将字符串以 “,” 进行分割， 但不包括字符串中的 “,” 


```ts
import { splitIgnoreQuotes } from "@binary-star/aencap/base";

console.log(splitIgnoreQuotes('a,b,c,"d,e,f"')) // ['a','b','c','"d,e,f"']
```


## classComputed

将 array , string , object 转换并且合并为 css class 字符串

```ts
import { classComputed } from "@binary-star/aencap/base";

console.log(classComputed('loading' , ['fill' , 'disabled'] , { lock : true })) // 'loading fill disabled lock'
```

