# 树结构

## 当前 mock 数据结构

```ts
const data = [
  {
    name: "zhangsan",
    children: [
      {
        name: "zhangxiaosan",
      },
    ],
  },
  {
    name: "lisi",
    children: [
      {
        name: "lixiaosi",
        children: [
          {
            name: "lixiaoxiaosi",
          },
        ],
      },
    ],
  },
];
```

## findNode

根据 data-key 来进行查找节点

```ts
import { tree } from "@binary-star/aencap";

const { findNode } = tree;

const node = findNode(data, "lixiaoxiaosi", {
  key: "name",
  children: "children",
});

console.log(node); // { name: 'lixiaoxiaosi' }
```

## findParent

根据 data-key 来进行查找父节点

```ts
import { tree } from "@binary-star/aencap";

const { findParent } = tree;

const node = findParent(data, "lixiaosi", {
  key: "name",
  children: "children",
});

console.log(node); // { name: 'lisi', children: [ { name: 'lixiaosi', children: [Array] } ] }
```

## each

遍历所有节点

```ts
import { tree } from "@binary-star/aencap";

const { each } = tree;

each(
  data,
  (node: any) => {
    console.log(node);
// { name: 'zhangsan', children: [ { name: 'zhangxiaosan' } ] }
// { name: 'zhangxiaosan' }
// { name: 'lisi', children: [ { name: 'lixiaosi', children: [Array] } ] }
// { name: 'lixiaosi', children: [ { name: 'lixiaoxiaosi' } ] }
// { name: 'lixiaoxiaosi' }
  },
  { key: "name", children: "children" }
);

```



## flat

拍平一个树结构

```ts
import { tree } from "@binary-star/aencap";

const { flat } = tree;

const d = flat(data, { key: "name", children: "children" });
console.log(d);

// [
//   { name: 'zhangsan', children: undefined },
//   { name: 'zhangxiaosan', children: undefined },
//   { name: 'lisi', children: undefined },
//   { name: 'lixiaosi', children: undefined },
//   { name: 'lixiaoxiaosi', children: undefined }
// ]

```