浏览器加载 HTML 页面时，如果遇上 `<script></script>` 标签，则需要停止加载构建 DOM，立即加载并执行脚本。

这种表现对于外部 `<script src="..." />` 同样生效。

这种加载行为通常会引起下面两个问题：

- 脚本加载时，位于脚本下面的元素是不可见的。如果脚本的体积比较大，会造成长时间的页面元素缺失现象。
- 脚本无法访问位于下面的元素。在脚本需要对元素进行初始化操作时，可能会出现访问空元素的错误。

```html
<div id="before"></div>
<script src="..."></script>
<div id="after"></div>
```

对于上面这个示例，在 `script` 加载期间，`id=after` 的元素是不可见的，并且脚本也无法访问这个元素。

对于标签加载顺序引起的问题，可以通过以下几个方法尝试去解决。

### 更换标签的位置

将脚本放到 HTML 文档的底部。这个时候脚本可以访问所有的元素，并且也不会阻塞页面DOM的构建。

```html
<div id="before"></div>
<div id="after"></div>
<script src="..."></script>
```

但是这种方法也有缺点，在所有的 DOM 构建完毕之后才会去加载脚本。脚本未加载时，元素的一些依赖于脚本的交互不可用。

### defer

`<script src="..." defer />` 标签告诉浏览器，应当在后台加载脚本，停止阻塞 HTML 的处理。

当 DOM 构建完毕后，在 `DOMContentLoaded` 事件触发之前，执行脚本。需要注意的是，使用 `defer` 加载的脚本，在执行时是按照其在文档中的顺序执行的。

如果脚本没有 `src` 属性，则忽略 `defer` 的作用。

对于下面这个 HTML 文档，

```html
<div id="1" />
<div id="2" />
<script id="a" ></script>
<script id="b" ></script>
<div id="3" />
<div id="4" />
```

加载顺序为

![CleanShot 2024-06-15 at 16.50.41@2x](CleanShot%202024-06-15%20at%2016.50.41@2x.png)

### async

`<script src="..." async />` 标签告诉浏览器，加载脚本的时候应当后台加载，停止阻塞 HTML 的处理。

在加载完脚本后，立即执行脚本。

需要注意，脚本的执行顺序与其在文档中的顺序是无关的，先加载完成的脚本先执行。同样，如果脚本没有 `src` 属性，则忽略 `async` 的作用。

![CleanShot 2024-06-15 at 16.50.58@2x](CleanShot%202024-06-15%20at%2016.50.58@2x.png)

### 动态脚本

使用 JavaScript 动态地创建一个脚本，并将其附加到文档中。

```js
let script = document.createElement('script');
script.src = "/article/script-async-defer/long.js";
document.body.append(script); // (*)
```

默认情况下，动态脚本是异步的，在插入文档后立即开始加载。即行为跟 `async` 一致。

如果我们显式的设置 `script.async=false` ，那么这个脚本的加载表现跟 `defer` 一致。
