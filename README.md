
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

|  参数名字 | 参数描述  |
|  - | -  |
|  无 |   |
返回值： Date 


### object



##### includeKeys

保留对象中的指定key元素

|  参数名字 | 参数描述  |
|  - | -  |
|  data |   |
|  keys |   |
返回值： 

## dom


关于DOM对象操作集合





##### findUponDom

向上找dom节点

|  参数名字 | 参数描述  |
|  - | -  |
|  startDom | 开始节点  |
|  endDom | 终止节点  |
|  inCaseCallback | 判断函数,  |
返回值： 

## hooks


Vue3hooks



## interactive


交互层操作逻辑



### event

### functions



##### throttle

交互控制方法

节流函数

|  参数名字 | 参数描述  |
|  - | -  |
|  fn | 函数  |
|  delay | 时间戳  |
返回值： 



##### debounce

防抖函数

|  参数名字 | 参数描述  |
|  - | -  |
|  fn | 函数  |
|  wait | 时间戳  |
|  immediate | 是否在调用时先执行一次  |
返回值： 

### storage



##### createStorage

创建本地缓存对象

|  参数名字 | 参数描述  |
|  - | -  |
|  {string=} | prefixKey  |
|  {Object} | [storage=localStorage]  |
返回值： 

## tree


树结构操作方法封装





##### findParent

查询一个节点的父元素

|  参数名字 | 参数描述  |
|  - | -  |
|  tree | 树结构数据  |
|  data | 要查询的数据值  |
|  options | 树结构  |
返回值： 



##### findNode

查找一个节点

|  参数名字 | 参数描述  |
|  - | -  |
|  tree | 树结构数据  |
|  data | 要查询的数据值  |
|  options | 树结构  |
返回值： 



##### flat

将树拍平

|  参数名字 | 参数描述  |
|  - | -  |
|  tree | 树结构数据  |
|  options | 树结构  |
返回值： 



##### each

遍历树结构

|  参数名字 | 参数描述  |
|  - | -  |
|  datas | 树结构数据  |
|  callback | 回调函数  |
返回值： 

## validate


判断函数





##### isDef

是否定义

|  参数名字 | 参数描述  |
|  - | -  |
|  v | 数据  |
返回值： boolean 是否定义




##### required

是否必填

|  参数名字 | 参数描述  |
|  - | -  |
|  v | 数据  |
返回值： 



##### isObject

是否是对象

|  参数名字 | 参数描述  |
|  - | -  |
|  obj | 数据  |
返回值： 



##### isArray

是否是数组

|  参数名字 | 参数描述  |
|  - | -  |
|  arr | 数据  |
返回值： 



##### isUpper

是否是全大写

|  参数名字 | 参数描述  |
|  - | -  |
|  str | 字符串  |
返回值： 



##### isLower

是否全小写

|  参数名字 | 参数描述  |
|  - | -  |
|  str | 字符串  |
返回值： 



##### isOutlink

是否是外部链接

|  参数名字 | 参数描述  |
|  - | -  |
|  value | url  |
返回值： 

