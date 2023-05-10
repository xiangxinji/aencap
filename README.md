
# AEncap 

## 快速开始

### 安装
```bash
yarn add @binary-star/aencap
# or 
npm install @binary-star/aencap
```

### 使用

引用部分模块， 根据文档进行使用 

扩展类型 （以树模块举例，非 TS 环境跳过）
```ts
declare module "@binary-star/aencap/tree" { 
  export * from '@binary-star/aencap/types/tree'
}
```

引入模块方法

```ts
import { findNode } from '@binary-star/aencap/tree'
```


使用
调用树模块中的 findNode 来查询单个节点方法
```ts
const node = findNode([{ id : 1 , name : '张三', children : [] }] , { id : 1 } , { 
    key : 'id' ,
    children : 'children'
})
```



