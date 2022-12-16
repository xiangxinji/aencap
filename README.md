
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

1. 扩展类型 （以树模块举例，非 TS 环境跳过）
```ts
declare module "@binary-star/aencap/tree" { 
  export * from '@binary-star/aencap/types/tree'
}
```

2. 引入模块方法

```ts
import { findNode } from '@binary-star/aencap/tree'
```


3. 使用
```ts
const node = findNode([{ id : 1 , name : '张三', children : [] }] , { id : 1 } , { 
    key : 'id' ,
    children : 'children'
})
```



工具库



## base
基础工具


### date
处理时间和日期数据


### object
处理对象数据


## dom
关于DOM对象操作集合


## hooks
Vue3hooks


## interactive
交互层操作逻辑


### event
事件处理函数


### functions
交互控制方法


### storage
持久化相关


## tree
树结构操作方法封装


## validate
判断函数

