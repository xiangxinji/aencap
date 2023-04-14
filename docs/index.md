# Aencap



Typescript 封装库, 封装常用功能和逻辑. 



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

