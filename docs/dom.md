# 元素

## findUponDom

从开始节点到终止节点进行查找 dom , 当传入的回调为 true , 则会返回当前的 node 节点

```ts
import { dom } from "@binary-star/aencap";

const { findUponDom } = dom;

const start = document.getElementById("start");
const end = document.getElementById("end");

// 查找 id = start , id = end 节点的第一个 aside 节点
if (start && end)
  findUponDom(start, end, (node: HTMLElement) => {
    return node.tagName === "aside";
  });
```




## fullScreen

将一个 dom 进行全屏展示

```ts
import { dom } from "@binary-star/aencap";

const { fullScreen } = dom;

const div = document.getElementById('div')

// 进行全屏展示
fullScreen(div)

```


## exitScreen 

如果当前时全屏展示时 ， 调用该方法退出全屏

```ts
import { dom } from "@binary-star/aencap";

const { exitScreen } = dom;

exitScreen()
```


## isFullscreen 

判断当前是否处于全屏展示

```ts

import { dom } from "@binary-star/aencap";

const { isFullscreen } = dom;

const flag = isFullscreen()

```



