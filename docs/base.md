# 基础


## now


```ts
import { base } from "@binary-star/aencap";
const { now } = base;
const t = now();
```


## includeKeys


```ts
import { base } from "@binary-star/aencap";

const { includeKeys } = base;

const t = includeKeys({ name: "zhangsan", age: 15, gender: 1 }, [
  "name",
  "age",
]);

console.log(t) // { name: 'zhangsan', age: 15  }

```


## each

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

## map 

```ts
import { base } from "@binary-star/aencap";

const { map } = base;

const t = map({ name: "zhangsan", age: 15, gender: 1 }, ({ key, value }: any) => {
  if (key === "age") {
    return 20;
  }
  return value;
});

console.log(t); // { name: 'zhangsan', age: 20, gender: 1 }
```
