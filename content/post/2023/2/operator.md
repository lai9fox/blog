---
title: JS 运算符
description: Test Article
date: 2020-09-09
slug: js-operator
draft: false
categories:
  - js
---

## 一元加 (+)

**一元加**（**`+`**）运算符在其操作数之前并计算其操作数，但会尝试将其[转换为数字](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number#数值转换)。

```javascript
const x = 1;
const y = -1;

console.log(+x);
// expected output: 1
// 注释中的中文字体，测试。？！、

console.log(+y);
// expected output: -1

console.log(+'');
// expected output: 0

console.log(+true);
// expected output: 1

console.log(+false);
// expected output: 0

console.log(+'hello');
// expected output: NaN
```

## 按位非 (~)

按位非运算符（`~`）将操作数的位反转。如同其他位运算符一样，它将操作数转化为 32 位的有符号整型。

超过 32 位的数字将丢弃其最高有效位，任何数字 x 的运算结果都是 -(x+1)。

```js
const a = 5;     // 00000000000000000000000000000101
const b = -3;    // 11111111111111111111111111111101

console.log(~a); // 11111111111111111111111111111010
// expected output: -6

console.log(~b); // 00000000000000000000000000000010
// expected output: 2
```

## 左移 (<<)

**左移操作符 (`<<`)** 将第一个操作数向左移动指定位数，左边超出的位数将会被清除，右边将会补零。

> A<<B，可以简单理解为 A * 2^B

```js
const a = 5;         // 00000000000000000000000000000101
const b = 2;         // 00000000000000000000000000000010

console.log(a << b); // 00000000000000000000000000010100
// expected output: 20
```

## 右移 (>>)

**右移操作符 (`>>`)** 是将一个操作数按指定移动的位数向右移动，右边移出位被丢弃，左边移出的空位补符号位（最左边那位）。

```js
const a = 5;          //  00000000000000000000000000000101
const b = 2;          //  00000000000000000000000000000010
const c = -5;         //  11111111111111111111111111111011

console.log(a >> b);  //  00000000000000000000000000000001
// expected output: 1

console.log(c >> b);  //  11111111111111111111111111111110
// expected output: -2
```

## 无符号右移 (>>>)

**无符号右移运算符（`>>>`）**（零填充右移）将左操作数计算为无符号数，并将该数字的二进制表示形式移位为右操作数指定的位数，取模 32。向右移动的多余位将被丢弃，零位从左移入。其符号位变为 `0`，因此结果始终为非负数。与其他按位运算符不同，零填充右移返回一个无符号 32 位整数。>>>>>>

> 右移时，最左边数值位补充 0

```js
const a = 5;          //  00000000000000000000000000000101
const b = 2;          //  00000000000000000000000000000010
const c = -5;         //  11111111111111111111111111111011

console.log(a >>> b); //  00000000000000000000000000000001
// expected output: 1

console.log(c >>> b); //  00111111111111111111111111111110
// expected output: 1073741822
```

## 按位与 (&)

**按位与**（**`&`**）运算符在两个操作数对应的二进位都为 `1` 时，该位的结果值才为 `1`。

操作树将被转换为 32 位的整数，超过 32 位的属猪将被丢弃。

```js
const a = 5;        // 00000000000000000000000000000101
const b = 3;        // 00000000000000000000000000000011

console.log(a & b); // 00000000000000000000000000000001
// expected output: 1
```

## 按位或 (|)

**按位或**（**`|`**）运算符在其中一个或两个操作数对应的二进制位为 `1` 时，该位的结果值为 `1`。

```js
const a = 5;        // 00000000000000000000000000000101
const b = 3;        // 00000000000000000000000000000011

console.log(a | b); // 00000000000000000000000000000111
// expected output: 7
```

## 按位异或 (^)

**按位异或**（**`^`**）运算符在其中任意一个操作数对应的二进制位为 `1` 时，该位的结果值为 `1`。

| a    | b    | a XOR b |
| :--- | :--- | :------ |
| 0    | 0    | 0       |
| 0    | 1    | 1       |
| 1    | 0    | 1       |
| 1    | 1    | 0       |

## 逻辑与 (&&)

对于一组操作数来说，逻辑AND（&&）运算符在当且仅当其所有操作数均为真的时候为真。

`expr1 && expr2`

> 如果 `expr1` 可以转换为 `true` ，将返回表达式 `expr2`，否则返回 `expr1`

可以转换为 `Falsy` 的值:

- `null`
- `NaN`
- `0`
- 空字符串('', "", ``)
- `undefined`

逻辑与表达式从左到右进行评估，它使用以下规则测试可能的 "短路 "评估:

`(some falsy expression) && expr`

如果左边的部分被评估为 `fasly`，那么 `expr` 不会执行。

```js
function A(){ console.log('called A'); return false; }
function B(){ console.log('called B'); return true; }

console.log( A() && B() );
// logs "called A" due to the function call,
// then logs false (which is the resulting value of the operator)
```

## 逻辑或 (||)

对于一组操作数来说，逻辑或OR (||) 运算符当至少一个操作数为真时才为真。

`expr1 && expr2`

> 如果 `expr1` 可以转换为 `true`, 那么将返回 `expr1`, 否则，返回 `expr2`

短路评估：

`(some truthy expression) || expr`

如果左边的部分被评估为 `truth`, 将直接返回左边的部分，不会到达右边。

## 空值合并运算符 (??)

当左侧的操作数为 `null` 或者 `undefined` 时，返回其右侧操作数，否则返回左侧操作数。

与[逻辑或运算符（`||`）](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Logical_OR)不同，逻辑或运算符会在左侧操作数为[假值](https://developer.mozilla.org/zh-CN/docs/Glossary/Falsy)时返回右侧操作数。也就是说，如果使用 `||` 来为某些变量设置默认值，可能会遇到意料之外的行为。比如为假值（例如，`''` 或 `0`）时。

> 与 OR 和 AND 相似，当左边的表达式不为 `null` 或者 `undefined` 时，不会对右边表达式求值。

## 可选链式运算符 (?.)

**可选链运算符**（**`?.`**）允许读取位于连接对象链深处的属性的值，而不必明确验证链中的每个引用是否有效。

功能与 `.` 链式运算符相似，但不同点在于：

- `.` 在引用为空(`null 或者 undefined`)会引起错误；
- `?.` 在引用为空时不会引起错误，而是返回 `undefined`;

```js
const adventurer = {
  name: 'Alice',
  cat: {
    name: 'Dinah'
  }
};

const dogName = adventurer.dog?.name;
console.log(dogName);
// expected output: undefined

console.log(adventurer.someNonExistentMethod?.());
// expected output: undefined

```

### 使用可选链调用函数

尝试调用一个可能不存在的方法时也可以使用可选链。

函数调用时如果被调用的方法不存在，使用可选链可以使表达式自动返回`undefined`而不是抛出一个异常。

> 如果存在一个属性名且非函数，使用函数调用的方式调用将会产生一个异常。

## 逻辑和赋值运算 (&&=)

`expr1 &&= expr2`

>x && (x = y);

```js
let x = 0;
let y = 1;

x &&= 0; // 0
x &&= 1; // 0
y &&= 1; // 1
y &&= 0; // 0
```

## 逻辑或赋值运算 (||=)

`x ||=y` 仅在 x 为虚值时赋值。

>x || (x = y);

```js
const a = { duration: 50, title: '' };

a.duration ||= 10;
console.log(a.duration);
// expected output: 50

a.title ||= 'title is empty.';
console.log(a.title);
// expected output: "title is empty"

```

## 逻辑空赋值运算符 (??=)

逻辑空赋值运算符（`x ??= y`）仅在 `x` 是[空值](https://developer.mozilla.org/zh-CN/docs/Glossary/Nullish)（`null` 或 `undefined`）时对其赋值。

> 注意与 `||=` 运算符的区别

`x ??= y` <=> `x ?? (x = y);`

```js
function config(options) {
  options.duration ??= 100;
  options.speed ??= 25;
  return options;
}

config({ duration: 125 }); // { duration: 125, speed: 25 }
config({}); // { duration: 100, speed: 25 }
```

## 解构赋值

JavaScript 表达式，可以将数中的值或者对象中的属性取出，赋值给其他变量。

### 绑定和赋值

在绑定模式中，模式以声明关键字（`var`、`let` 或 `const`）开始。然后，每个单独的属性必须绑定到一个变量或进一步解构。

```js
const obj = { a: 1, b: { c: 2 } };
const { a, b: { c: d } } = obj;
// Two variables are bound: `a` and `d`
```

在赋值模式中，模式不以关键字开头。每个解构属性都被赋值给一个赋值目标。

```js
const numbers = [];
const obj = { a: 1, b: 2 };
({ a: numbers[0], b: numbers[1] } = obj);
// The properties `a` and `b` are assigned to properties of `numbers`
```

### 默认值

每个解构都可以有一个默认值，当属性值不存在或者为 `undefined` 时，将使用默认值。

> 注意：`null` 将会赋值，默认值可以是任何表达式。

```js
const [a = 1] = []; // a is 1
const { b = 2 } = { b: undefined }; // b is 2
const { c = 2 } = { c: null }; // c is null
```

### 剩余属性

`...rest` 剩余属性可以用于结束解构模式，此方法会将对象或者数组的所有剩余的属性存储到新的对象或者数组中。

```js
const { a, ...others } = { a: 1, b: 2, c: 3 };
console.log(others); // { b: 2, c: 3 }

const [first, ...others2] = [1, 2, 3];
console.log(others2); // [2, 3]
```

### 交换变量

可以在一个解构表达式中交换两个变量的值，这种写法不需要一个临时变量。

```js
let a = 1;
let b = 3;

[a, b] = [b, a];
console.log(a); // 3
console.log(b); // 1

const arr = [1, 2, 3];
[arr[2], arr[1]] = [arr[1], arr[2]];
console.log(arr); // [1, 3, 2]
```

### 忽略返回值

某些情况下，在解构中我们可能需要忽略一些不感兴趣的值，使用 `,` 分割留空即可。

```js
function f() {
  return [1, 2, 3];
}

const [a, , b] = f();
console.log(a); // 1
console.log(b); // 3

const [c] = f();
console.log(c); // 1

// 完全忽略返回值
[,,] = f();
```

### 正则表达式上的解构

当正则表达式的 [`exec()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec) 方法找到匹配项时，它将返回一个数组，该数组首先包含字符串的整个匹配部分，然后返回与正则表达式中**<font color="red">每个括号组</font>**匹配的字符串部分。

```js
function parseProtocol(url) {
  const parsedURL = /^(\w+):\/\/([^/]+)\/(.*)$/.exec(url);
  if (!parsedURL) {
    return false;
  }
  console.log(parsedURL);
  // ["https://developer.mozilla.org/zh-CN/docs/Web/JavaScript",
  // "https", "developer.mozilla.org", "zh-CN/docs/Web/JavaScript"]

  const [, protocol, fullhost, fullpath] = parsedURL;
  return protocol;
}

console.log(parseProtocol('https://developer.mozilla.org/zh-CN/docs/Web/JavaScript'));
// "https"

```

### <font color="red">对象上的解构</font>

#### 新的名称与默认值

可以从对象中抽取属性，然后将其赋值给名称与对象属性不同的变量

```js
const o = { p: 42, q: true };
const { p: foo, q: bar } = o;

console.log(foo); // 42
console.log(bar); // true

```

上面的例子的意思是，从对象 `o` 中获取 `p` 属性，并将其值赋值给 `foo` 变量。

也可以在分配的时候为新变量取一个默认值，以防止获取的值为 `undefined`。

```js
const { a: aa = 10, b: bb = 5 } = { a: 3 };

console.log(aa); // 3
console.log(bb); // 5

```

#### 函数参数中的属性提取

传递给一个函数的参数也可以提取到变量中，然后在函数体内访问变量。

```js
const user = {
  id: 42,
  displayName: 'jdoe',
  fullName: {
    firstName: 'Jane',
    lastName: 'Doe',
  },
};

function userId({ id }) {
  return id;
}

console.log(userId(user)); // 42

```

> 在提取变量的时候，可以给变量指定一个别名。

```js
function userDisplayName({ displayName: dname }) {
  return dname;
}

console.log(userDisplayName(user)); // `jdoe`

```

> 参数默认值: 默认值可以使用 `=` 指定，如果指定的属性在传递的对象中不存在，则将其用作变量值。

```js
function drawChart({ size = 'big', coords = { x: 0, y: 0 }, radius = 25 } = {}) {
  console.log(size, coords, radius);
  // do some chart drawing
}

drawChart({
  coords: { x: 18, y: 30 },
  radius: 30,
});

```

#### 解构对象时查找原型链

解构对象时，如对象本身没有该属性，将会沿着原型链继续查找。

```js
const obj = {
  self: '123',
  __proto__: {
    prot: '456',
  },
};
const { self, prot } = obj;
// self "123"
// prot "456" (Access to the prototype chain)

```

