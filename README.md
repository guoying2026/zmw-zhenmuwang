# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## vue3比vue2好的点
1、响应式过多，会有内存问题，虚拟dom过多，根据diff计算需要更新变动的dom元素的时间过长就会有卡顿。
针对此vue2的中庸设计思想，组件之间的变化，可以通过响应式来通知更新。组件内部的数据变化，则通过虚拟BOM去更新页面。
这样儿就把响应式的监听器控制在了组件级别，而虚拟dom的量级，也控制在了组件大小。
然而重点是vue3很优秀的点是在虚拟DOM的静态标记上做到了极致，让静态的部分越过虚拟dom的diff计算，真正做到了按需更新，极大提高性能。

2、defineProperty Api作为vue2实现响应式的原理，它的语法中也有缺陷，vue3就采用了proxy解决了这个缺陷

以下是关于第2点的详细解释：

vue2定义个一个对象 obj，使用 defineProperty 代理了 count 属性。这样我们就对 obj 对象的 value 属性实现了拦截，读取 count 属性的时候执行 get 函数，修改 count 属性的时候执行 set 函数，并在 set 函数内部重新计算了 double。

缺陷是删除 obj.count 属性，set 函数就不会执行，double 还是之前的数值。还需要$delete一个专门的函数去删除数据

vue3的响应机制是基于Proxy实现的。就proxy这个名字来说，你也能看出来是代理的意思，在其中我们通过 new Proxy 代理了 obj 这个对象，然后通过 get、set 和 deleteProperty 函数代理了对象的读取、修改和删除操作，从而实现了响应式的功能。

```
let proxy = new Proxy(obj,{
    get : function (target,prop) {
        return target[prop]
    },
    set : function (target,prop,value) {
        target[prop] = value;
        if(prop==='count'){
            double = getDouble(value)
        }
    },
    deleteProperty(target,prop){
        delete target[prop]
        if(prop==='count'){
            double = NaN
        }
    }
})
console.log(obj.count,double)
proxy.count = 2
console.log(obj.count,double) 
delete proxy.count
// 删除属性后，我们打印log时，输出的结果就会是 undefined NaN
console.log(obj.count,double) 
```
proxy是针对对象来监听，而不是针对某个具体属性，所以不仅可以代理那些定义时不存在的属性，还可以代理更丰富的数据结构，比如map,set等，并且我们也可以通过deleteProperty实现对删除操作的处理

reactive 函数可以把一个对象变成响应式数据，而 reactive 就是基于 Proxy 实现的

我们还可以通过 watchEffect，在 obj.count 修改之后，执行数据的打印

有了 Proxy 后，响应式机制就比较完备了。但是在 Vue 3 中还有另一个响应式实现的逻辑，就是利用对象的 get 和 set 函数来进行监听，这种响应式的实现方式，只能拦截某一个属性的修改，这也是 Vue 3 中 ref 这个 API 的实现

| 实现原理 | defineProperty | proxy | value setter |
| --- | --- | --- | --- |
| 实际场景 | vue2响应式 | vue3 reactive | vue3 ref |
| 优势 | 兼容性 | 基于proxy实现了真正的拦截 | 实现简单 |
| 劣势 | 数组和属性删除等拦截不了 | 兼容不了ie11 | 只拦截了value属性 |
| 实际应用 | Vue2 | vue3等复杂数据结构 | vue3简单数据结构|

3、开发维护来说，vue2是使用flow.js来做类型校验。但现在flow.js已经停止维护了，整个社区都在全面使用typescript来构建基础库，vue团队也要跟上，那么vue3就开启了全面支持typescript.

4、从社区开发的二次开发难度来说，vue2内部运行时，是直接执行浏览器api的。这样而就给跨端方案带来难度。

5、option api在组织代码较多组件的时候不易维护。对于option api来说，所有的methods,computed都在一个对象里配置，这对小应用来说还好，但代码超过300行的时候，新增或修改一个功能，就需不停在data,methods里跳转写代码，我称之为上下反复横跳。

6、对于产品的最终效果来看，Vue 3 性能更高，体积更小。

## 从7个方面来了解vue3
1、响应式系统

2、composition Api

options api不好的点，由于所有数据都挂载在this之上，因而options api的写法对typescript的类型推导很不友好，并且这样也不好做tree-shaking清理代码

新增功能基本都得修改data、method等配置，并且代码上300行后，会经常上下反复横跳，开发很痛苦。

代码不好复用，vue2的组件很难抽离通用逻辑，只能用mixin,还会带来命名冲突的问题。

composition api的优点，看起来繁琐，但是带来了诸多好处

不再上下反复横跳，可以把一个功能模块的methods,data都放在一起书写，维护更轻松。

代码方便复用，可以把一个功能所有的methods,data封装在一个独立的函数里，复用代码非常容易。

composition api新增的return等语句，在实际项目中使用<script setup特性可以清除

3、新的组件

Fragment: Vue3组件不再要求有一个唯一的根节点，清除了很多无用的占位div。

Telephone: 允许组件渲染在别的元素内，主要在开发弹窗的时候特别有用。

Suspense: 异步组件，更方便开发有异步请求的组件。

4、vite

vite提升的是开发的体验，webpack等工程化工具的原理，就是根据你的import依赖逻辑，
形成一个依赖图，然后调用对应的处理工具，把整个项目打包后，放在内存里再启动调试。

由于要预打包，所以复杂项目的开发，启动调试环境需要3分钟也很常见，vite就是为了解决这个时间资源的消耗问题出现的

vite基于现代浏览器默认支持es6的import语法的原理。不去全部预打包，只是把首页依赖的文件，依次通过网络请求去获取。
整个开发体验就获得巨大提升，做到了复杂项目的秒级调试和热更新。

5、自定义渲染器，vue开发跨端应用时会用到

6、RFC机制

这个第6点，和代码无关，是vue团队开发代码的工作方式

7、typescript重构

## 解决所有的操作状态在刷新后就都没了（举例就是木材易购小程序，用户在发布商品时，保存草稿怎么做到，当时把离开页面前的data保存在缓存里，再进来页面的时候给从缓存里面取data,然后赋值到当前的所有data）

就是让 todolist 和本地存储能够同步，首先可以选择的就是在代码中，显式地声明同步的逻辑，而 watchEffect 这个函数让我们在数据变化之后可以执行指定的函数。

使用<script setup重构之后的 todolist 的代码。这段代码使用 watchEffect，数据变化之后会把数据同步到 localStorage 之上，这样我们就实现了 todolist 和本地存储的同步。

```

import { ref, watchEffect, computed } from "vue";

let title = ref("");
let todos = ref(JSON.parse(localStorage.getItem('todos')||'[]'));
watchEffect(()=>{
    localStorage.setItem('todos',JSON.stringify(todos.value))
})
function addTodo() {
  todos.value.push({
    title: title.value,
    done: false,
  });
  title.value = "";
}
```

更进一步，我们可以直接抽离一个 useStorage 函数，在响应式的基础之上，把任意数据响应式的变化同步到本地存储。我们先看下面的这段代码，ref 从本地存储中获取数据，封装成响应式并且返回，watchEffect 中做本地存储的同步，useStorage 这个函数可以抽离成一个文件，放在工具函数文件夹中。

```
function useStorage(name, value=[]){
    let data = ref(JSON.parse(localStorage.getItem(name)|| value))
    watchEffect(()=>{
        localStorage.setItem(name,JSON.stringify(data.value))
    })
    return data
}
```
在项目中我们使用下面代码的写法，把 ref 变成 useStorage，这也是 Composition API 最大的优点，也就是可以任意拆分出独立的功能。
```

let todos = useStorage('todos',[])

function addTodo() {
  ...code
}
```
应该已经学会了在 Vue 内部进阶地使用响应式机制，去封装独立的函数。
社区也有非常优秀的 Vueuse 工具库，包含了大量类似 useStorage 的工具函数库。在后续的实战应用中，我们也会经常对通用功能进行封装
