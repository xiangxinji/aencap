# 组合式

## useCachedFunction

函数缓存

```ts
import { hooks } from "@binary-star/aencap";

const { useCachedFunction } = hooks;

const fn = useCachedFunction(() => {
  console.log("---");
});


fn();
// 函数已经被缓存, 如果入参相同则不会调用内部逻辑, 直接拿到结果
fn();
```

## useNumberScope

数字区间操作


```ts
import { hooks } from "@binary-star/aencap";

const { useNumberScope } = hooks;

const [scopeState, scopeContext] = useNumberScope(1, 10);

console.log(scopeState.current); // 1

console.log(scopeContext.isMin.value); // true

console.log(scopeContext.isMax.value); // false

scopeContext.next();
console.log(scopeState.current); // 2
scopeContext.prev();
console.log(scopeState.current); // 1

```