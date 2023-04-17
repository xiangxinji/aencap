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



##  useDataBackup 

进行状态备份， 调用 reset 可以回退至最初状态

```ts
import { hooks } from '@binary-star/aencap'

const { useDataBackup } = hooks

const { data, reset } = useDataBackup({
    user: {
        name: 'Alice'
    }
})

console.log(data.value.user.name);
data.value.user.name = 'Bob'
reset() // 重置为最初值
```


## useRefs 

用于循环处理 ref , 如以下案例， 请确保组件或者 dom 定义了唯一 key ， 否则将会出现错乱的情况

```vue

<template>
    <div>
        <ul>
            <li :ref="set"></li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { hooks } from '@binary-star/aencap'
const { useRefs } = hooks
const data = reactive([
    { name: 'zhangsan' },
    { name: 'lisi' },
])

const [refs, { set , remove }] = useRefs()

// 在适当的业务逻辑中可以调用 remove 方法， 删除对应的索引
</script>
```

## useLoopFetch
用于轮询请求。 

案例： 每三秒执行一次， 通过 onFetchEnd 拿到结果

```ts
import { hooks } from '@binary-star/aencap'

const { useLoopFetch } = hooks
useLoopFetch(() => {
    return new Promise((res) => {
        setTimeout(() => {
            res({})
        }, 1000)
    })
}, 3000, {
    onFetchEnd(data: any) {
        console.log(data);
    },
    immediate: true
})
```

## useFetchScope

传入请求函数， 生成对应的响应式状态， 如加载中，已结束，错误，还有数据


```ts
import { useFetchScope } from "@binary-star/aencap/hooks";

const [fetchState, start] = useFetchScope(() => new Promise((res) => {
  setTimeout(() => {
    res(1)
  }, 2000)
}))
```




## useChoice 

用于选择逻辑， 如单选， 多选逻辑等。 

```ts
import { useChoice } from "@binary-star/aencap/hooks";

const [choiceState, choiceContext] = useChoice([
  { label: '張三', key: 1 },
  { label: '李四', key: 2 },
], {
  multiple: true,
  defaultKeys: []
})
```