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
