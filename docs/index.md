# Aencap



Typescript 封装库, 封装常用功能和逻辑. 

## 安装

```bash
yarn add @binary-star/aencap
# or 
npm install @binary-star/aencap
```

## 使用条件导出

如果只需要使用该一下模块的其中一个或者部分方法， 可以使用条件导出， 并且如果是 typescript 环境的话， 可以新建一个 aencap.d.ts 并且将一下代码进行粘贴

**如果项目为 javascript 环境的话， 可以忽略创建文件并且复制代码这一步**

```ts
declare module "@binary-star/aencap/tree" {
    export  *  from "@binary-star/aencap/types/tree/index";
}
declare module "@binary-star/aencap/base" {
    export  *  from "@binary-star/aencap/types/base/index";
}
declare module "@binary-star/aencap/dom" {
    export  *  from "@binary-star/aencap/types/dom/index";
}
declare module "@binary-star/aencap/hooks" {
    export  *  from "@binary-star/aencap/types/hooks/index";
}
declare module "@binary-star/aencap/interactive" {
    export  *  from "@binary-star/aencap/types/interactive/index";
}
declare module "@binary-star/aencap/validate" {
    export  *  from "@binary-star/aencap/types/validate/index";
}
```

条件引入的代码如下  , 以调用树结构的 findParent 方法为例子： 
```ts
import { findParent } from '@binary-star/aencap/tree'
```


## 使用 

```ts
import {
  hooks,
  dom,
  interactive,
  tree,
  base,
  validate,
} from "@binary-star/aencap";

```



```ts
import { base } from "@binary-star/aencap";
const { now } = base;
const t = now();
```

```ts
import { base } from "@binary-star/aencap";

const { includeKeys } = base;

const t = includeKeys({ name: "zhangsan", age: 15, gender: 1 }, [
  "name",
  "age",
]);

console.log(t) // { name: 'zhangsan', age: 15  }

```

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

