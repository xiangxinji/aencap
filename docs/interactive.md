# 交互

## Event 类

事件管理器

```ts
import { interactive } from "@binary-star/aencap";

const { Event } = interactive;

const e = new Event();

e.on("active", () => {
  console.log("ACTIVE"); // 执行
});

e.emit("active");
```

## debounce

防抖函数

```ts
import { interactive } from "@binary-star/aencap";

const { debounce } = interactive;

const fn = debounce(() => {
  console.log("执行了");
}, 300);

fn();
fn(); // 执行了
```

## throttle

节流函数

```ts

import { interactive } from "@binary-star/aencap";

const { throttle } = interactive;

const fn = throttle(() => {
  console.log("执行了");
}, 300);
 
fn()  // 执行了
fn()

```

## createStorage

创建缓存工具类

```ts
import { interactive } from "@binary-star/aencap";

const { createStorage } = interactive;

const storage = createStorage({
  // key 前缀
  prefixKey: "TEST",
  // storage 类型
  storage: sessionStorage,
});
// 设置
storage.set("key", "value");
// 删除
storage.remove("key");
// 清空所有 item
storage.clear();

```



## downloadFile 

将 blob 文件流让浏览器自动跳转下载 

```ts
import { interactive } from '@binary-star/aencap'

const { downloadFile } = interactive

downloadFile('# blob data' , 'filename.txt')
```

## doubleClick

判断为单击还是双击， 默认200ms 内，执行了两次就算双击

```ts
import { interactive } from '@binary-star/aencap'

const { doubleClick } = interactive

doubleClick(() => {
    console.log('用户执行了双击');
},200)
```

## resolveLocationSearch

将 url 的参数部分解析为对象

```ts
import { interactive } from '@binary-star/aencap'

const { resolveLocationSearch } = interactive

const data = resolveLocationSearch('http://localhost:8080/?a=1&b=2&c=3')

console.log(data); // {a: '1', b: '2', c: '3'}
```