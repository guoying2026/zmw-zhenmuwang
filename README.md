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

## 关于调试性能的知识点
1、统计项目里面一共有多少html标签，在浏览器里面的console里面执行
```
new Set([...document.querySelectorAll('*')].map(n=>n.nodeName)).size
```
2、浏览器检查模式的里面最后一项vue。就是调试工具vue devtools，vue devtools可以算是一个elements页面的vue定制版本，
调试页面左侧的显示内容并不是html,而是vue组件嵌套关系，可以从中清晰看到整个项目中最外层的app组件，也能看到app组件内部的routerview里面包含的组件。
点击左侧的组件，右侧会显示对应组件中包含的数据和方法。在页面输入东西，可以清除看到右侧数据对应的值在变化。

3、接上个第2点，在component的下拉框那里，我们还可以选择vuex和router页面，分别用来调试vuex和vue-router.

4、如果代码逻辑比较复杂，过多的console信息也会让我们难以调试。这种情况下就需要断点调试的功能，
chrome的调试窗口会识别代码中的debugger的关键字，并中断代码执行。
点击右侧（弯曲的右箭头），逐行执行代码。
并且鼠标放在任意变量上，都可以看到这个变量在代码执行的结果。
对于复杂代码逻辑的调试来说，使用断点调试，可以让整个项目清晰可见。

5、页面性能调试，遇到页面有卡顿，在调试窗口中点击performance页面中的录制按钮，
然后重复卡顿的操作后，点击结束，就可以清晰看到你在和页面进行交互操作时，浏览器中性能的变化。
还可以详细看到每个函数的执行时间。

6、如果觉得第5点过于繁琐，可以直接使用lightHouse插件，进入lightHouse页面，选择desktop桌面版之后，点击生成报告。
lighthouse在浏览器模拟刷新的操作后，给出一个网页评分。根据性能，可访问性，最佳实践，SEO和PWA 5个维度的评分。

7、如何在 Console 页面写一段代码，来统计首页出现次数最多的 3 种 HTML 标签呢？
```
Object.entries([...document.querySelectorAll("*")].map(n=>n.tagName).reduce((pre, cur)=>{
  pre[cur] = (pre[cur] || 0) + 1;
  return pre;
}, {})).sort((a, b)=>b[1]-a[1]).slice(0, 3)
```
## 关于JSX和template
1、在了解JSX之前，先了解h函数

2、在vue 3的项目开发中，template是vue3默认写法，虽然template长的很像html，
但vue其实会把template解析为render函数，之后，组件运行的时候通过render函数去返回虚拟dom,
你可以在vue devtools中看到组件编译之后的结果。

3、在上面的示意图中，调试窗口右侧代码中的_src_render_函数就是清单应用的template解析成javascript之后的结果。
所以除了template之外，在某些场景下，我们可以直接写render函数来实现组件。
```
  <h1 v-if="num==1">{{title}}</h1>
  <h2 v-if="num==2">{{title}}</h2>
  <h3 v-if="num==3">{{title}}</h3>
  <h4 v-if="num==4">{{title}}</h4>
  <h5 v-if="num==5">{{title}}</h5>
  <h6 v-if="num==6">{{title}}</h6>
```
从上面代码是不是感觉很冗余，所以教你一个新的实现方法，就是vue3中的h函数。
由于render函数可以直接返回虚拟dom,因而我们就不再需要template.我们在
src/components目录下新建一个文件Heading.jsx,要注意的是，这里heading
的结尾从.vue变成了jsx.

在下面的代码中，我们使用defineComponent定义一个组件，组件内部配置了props和
setup。这里的setup函数返回值是一个函数，就是我们所说的render函数。render函数
返回h函数的执行结果，h函数的第一个参数就是标签名，我们可以很方便的使用字符串拼接的方式，
实现和上面代码一样的需求。像这种连标签名都需要动态处理的场景，就需要通过手写h函数来实现。
```
import { defineComponent, h } from 'vue'

export default defineComponent({
  props: {
    level: {
      type: Number,
      required: true
    }
  },
  setup(props, { slots }) {
    return () => h(
      'h' + props.level, // 标签名
      {}, // prop 或 attribute
      slots.default() // 子节点
    )
  }
})
```
那么继续在文件中引入这个组件
```
 <template>
  <Heading :level="3">hello geekbang</Heading>
</template>

<script setup>
import Heading from './components/Head.jsx'
</script>
```
继续说，手写的h函数，可以处理动态性更高的场景。但是如果是复杂的场景，h函数写起来就显的非常繁琐。需要自己把所有的属性都转变为对象。
并且组件嵌套的时候，对象也会变得非常复杂。不过，因为h函数也是返回虚拟dom的，所以有没有更方便的方式去写h函数呢？
答案就是jsx。
先给大家看下jsx的语法
```
const element = <h1 id="app">Hello, Geekbang!</h1>
```
这种在javascript里面写html的语法，就叫做jsx，算是对javascript语法的一个扩展。上面的代码直接在javascript中运行，会报错。

在从 JSX 到 createVNode 函数的转化过程中，我们需要安装一个 JSX 插件。在项目的根目录下，打开命令行，执行下面的代码来安装插件：
```
npm install @vitejs/plugin-vue-jsx -D
```
插件安装完成之后，进入根目录下，打开vite.config.js文件去修改vite配置。
在vite.config.js文件中，我们加入下面代码。
这样儿，在加载jsx插件后，现在的页面中就可以支持jsx插件了。
```
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx';

export default defineConfig({
  plugins: [vue(),vueJsx()]
})
```
然后，我们进入 src/componentns/Heading.jsx 中，
把 setup 函数的返回函数改成下面代码中所示的内容，
这里我们使用变量 tag 计算出标签类型，直接使用渲染，
使用一个大括号把默认插槽包起来就可以了。
```
  setup(props, { slots }) {
    const tag = 'h'+props.level
    return () => <tag>{slots.default()}</tag>
  }
```
