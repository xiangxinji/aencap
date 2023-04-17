# 验证

## rules 

使用方式 


```vue
<template>
    <el-form :rules="formRules">
    <!-- ...  -->
    </el-form>
</template>
<script setup lang="ts">
import { validate } from "@binary-star/aencap";
const { rules } = validate 

const formRules = {
    name : [
        rules.required , 
    ],
    email : [
        rules.required , 
        rules.email
    ]
}
</script>

```

element-plus / element-ui  通用校验规则

### required 
必填项


### password 
密码


### email
邮箱

### phone
手机

### cn 
中文

### en 
字母

### number 
数字


### positiveNumber 
正数


### numberOrEn 
数字或字母


### numberOrEnOrUnderline 
数字字母下划线

## isDef

是否不为 null 或者 undefined

```ts
import { validate } from "@binary-star/aencap";

const { isDef } = validate;

console.log(isDef(0));
console.log(isDef(undefined));
console.log(isDef(null));
console.log(isDef(""));
console.log(isDef(false));

// true
// false
// false
// true
// true
```

## required

是否不为空

```ts
import { validate } from "@binary-star/aencap";

const { required } = validate;

console.log(required(0));
console.log(required(undefined));
console.log(required(null));
console.log(required(""));
console.log(required(false));

// true
// false
// false
// false
// true
```

## isObject

是否是对象类型

```ts
import { validate } from "@binary-star/aencap";

const { isObject } = validate;
class P {}
console.log(isObject({}));
console.log(isObject(new P()));
console.log(isObject(new RegExp("a")));

// true
// true
// false
```

## isArray

是否是数组

```ts
import { validate } from "@binary-star/aencap";

const { isArray } = validate;
console.log(isArray([])); // true
```

## isUpper

是否为全大写字符串

```ts
import { validate } from "@binary-star/aencap";

const { isUpper } = validate;
console.log(isUpper("aaa")); // false
console.log(isUpper("Aaa")); // false
console.log(isUpper("AAA")); // true
```

## isLower

是否为全小写字符串

```ts
import { validate } from "@binary-star/aencap";

const { isLower } = validate;
console.log(isLower('aaa')); // true 
console.log(isLower('Aaa')); // false 
console.log(isLower('AAA')); // false

```

## isOutlink

是否为外部链接/全链接
```ts
import { validate } from "@binary-star/aencap";

const { isOutlink } = validate;
console.log(isOutlink('/user')); // false  
console.log(isOutlink('http://aaa')); // true 
console.log(isOutlink('https://aaa')); // true 

```

