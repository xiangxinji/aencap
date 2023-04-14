
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





## base


基础工具



### date



##### now

获取当前时间

### object



##### includeKeys

保留对象中的指定key元素



##### each

遍历这个对象



##### map

遍历这个对象,返回一个新的对象

## dom


关于DOM对象操作集合





##### findUponDom

向上找dom节点

## hooks


Vue3hooks



#### functions

函数缓存

##### useCachedFunction

函数缓存

#### logic


range区域操作




##### useNumberScope

range区域操作

## interactive


交互层操作逻辑



### event

### functions



##### throttle

交互控制方法

节流函数



##### debounce

防抖函数

### storage



##### createStorage

创建本地缓存对象

## tree


树结构操作方法封装





##### findParent

查询一个节点的父元素



##### findNode

查找一个节点



##### flat

将树拍平



##### each

遍历树结构

## validate


判断函数





##### isDef

是否定义



##### required

是否必填



##### isObject

是否是对象



##### isArray

是否是数组



##### isUpper

是否是全大写



##### isLower

是否全小写



##### isOutlink

是否是外部链接

