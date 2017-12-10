# 项目安排

## Vue基础

## Webpack + Vue 构建项目

------------------------

# 今日内容

## Vue的基本概念

### Vue是什么?
	中文网址:https://cn.vuejs.org/index.html

	特点:
		易用
		灵活
		高效
		
		数据驱动型
		
		Vue：推荐我们以数据驱动去开发，尽可能少操作Dom,但是你也可以操作Dom
		
	Vue借鉴 Angular1和React

### 能做的事情
	PC:网站、后台管理系统
		https://github.com/almasaeed2010/AdminLTE
		管理系统不错的开源库：
		https://github.com/taylorchen709/vue-admin
		https://github.com/vue-bulma/vue-admin
		
	移动端:
		WebApp、原生App(Weex)

### 我们应该如何学习?
	看文档:
		https://cn.vuejs.org/v2/guide/
		
		第一遍：通读，理解它里面有啥
		第二遍：在项目中要是用到这个知识点的时候，再精读某一块 更加有目的性
		第三遍：当你对这个框架用得非常熟悉之后，再重读一遍
	
	google/百度
		知乎专栏、掘金（https://juejin.im/）、简书、https://segmentfault.com/
		
		www.stackoverflow.com【推荐】
		
	加一些QQ群
		Vue
	
	看大公司开源的一些项目
		360：https://75team.com/
		京东Auto实验室:https://aotu.io/
		百度:http://fex.baidu.com/

------------------------

## Vue中是如何体现`MVVM`

### MVC 
	V:视图 负责呈现内容给用户看
	C:负责协调、控制
	M:模型，处理数据

### MVVM
	java ---> .net
	javascript ---> actionscript
	node ---> typescript(企业级)
	
	V：视图 负责呈现内容给用户看
	VM：View-Model 负责协调、控制
	M：模型，处理数据

### 初体验Vue
	步骤:
		1、导入vue.js


		2、使用(如何体现MVVM)
			先写View
			再写VM和Model
			
			用到了Vue的指令

### 其它
	收录了很多知名的第三方库、框架(比如jQuery)

	http://www.bootcdn.cn/
------------------------

## Vue的指令(简化dom操作)
	作用:
		简化dom操作
		
	指令的特定:
		1、指令就是我们dom中的普通属性一样
		2、为了和普通的属性区分，Vue中的指令以`v-`开头
		
	指令分类:
		{{}} 插值表达式，把模型的值替换到对应的位置
		v-text/v-html 给譬如p、span、h1标签赋值
		v-on 简化事件处理
		v-bind 给我们元素动态绑定值
		v-model 双向数据绑定，大大简化form表单操作
		v-if/v-show 根据条件显示或是隐藏dom元素
		v-for 循环给dom元素赋值
		
	具体指令说明:
		v-text 其实和 插值表达式，差不多
		v-html 能把字符串的内容，解析之后，再呈现
		v-on v-on:可以简写成`@` 
		v-bind 动态给dom元素绑定数据
		v-model 双向数据绑定
			模型 ---> 视图 比如v-bind
			视图 ---> 模型
		v-if&v-show
			https://cn.vuejs.org/v2/guide/conditional.html#v-if-vs-v-show
		
		v-for 循环渲染元素
			key:确保数据更改的时候，页面保持一致
			key如何给值，如果遍历到的每一个元素里面，
			有数据可以唯一标识那一行，就用该数据作为
			key，一般情况下都是id作为key
			如果遍历的每一行数据中，没有可以作为唯一
			标识的数据，使用index(索引)


## v-if & v-show
	当我们给定的boolean为真，表现是一样的
	当我们给定的boolean为假，v-if会把dom节点干掉，v-show不会把其干掉，但是通过样式隐藏
	
	应用场景:(考你的就是性能优化相关)
		当需要进行频繁切换的时候，推荐用v-show
		当需要在条件达到的时候，才创建dom元素，就是用v-if

## vue.js devtools
	使用:
		1、安装，自己去翻墙安装
		2、必须在开发模式下面使用，因为生产模式导入的是min.js，把调试的信息去掉了

------------------------

## Vue的组件
	bootstrap中的组件可以理解为实现某个功能代码的集合

	vue中的组件的概念和bootstrap有些类似，但是vue组件的功能比其更强大

	vue组件就是看到的一个一个页面

	vue中的组件，可以理解一个页面所有功能代码(包含html、css、js)的集合

	组件的特点:
		可以达到复用的目的

### 代码
	1、先定义，再注册，再使用
	2、定义注册一步到位，再使用
	3、对我们组件template中的内容优化写法
		优化写法1：
			使用template标签
		优化写法2：
			使用自定义script标签
			
		写上面的目的是为了能看懂文档
		
	注意：
		组件的template必须要有一个根元素
		组件内部的data必须是函数
	
	单文件组件【掌握】
		项目中就是用这个
		.vue结尾的文件
		
		每个单文件组件，都可以有三部分
			template 写页面结构
			style 对我们写的页面结构代码修饰
			script 处理业务逻辑，比如给我们页面提供数据，处理用户的点击

--------------------------

## Vue的过滤器
	在服务器返回的数据，显示到页面之前，对数据进行处理，把其处理好之后，显示到浏览器上，让用户看

	步骤:
		1、在组件的filters中，写好过滤器函数
		
		2、使用，在需要对数据过滤的地方，调用`|`来使用 
			语法:
				原始数组 | 过滤器函数
	
	注意:
		1、过滤器本身就是一个函数
		2、我们想要使用过滤器去处理数据，必须把原始数据当成参数传递到过滤器函数中去
		3、过滤器必须要有返回值

### 过滤器的分类
	私有过滤器
		过滤器只能在该组件中使用
	
	全局过滤器
		所有组件都能使用
		
		语法:
			Vue.filter('过滤器函数的名称',处理函数)
			处理函数，必须接一个参数，参数就是要处理的原始数组，原始数据处理之后，必须要返回
------------------------

## Vue的路由
	单页面应用程序(SPA)

	浏览器中，路由的作用是:根据触发的不同的路径，呈现不同的组件(网页)

	文档:
		https://router.vuejs.org/zh-cn/
	
	思路分析
		1、在页面上写好a标签，并且实现写好触发的链接
		
		2、路由占位符
		
		3、实现创建好组件，当触发的时候，替换掉路由占位符
		
		4、路劲和组件的对应关系得设置好
		
		5、把写好的路由注入到根实例中去
		
	步骤:
		1、导入vue、vue-router这两个js文件
		
		2、在html中写代码
			触发的超链接 router-link
			路由的占位符 router-view
		
		3、在js中代码
			定义组件
			创建路由对象、设置规则
			把写好的路由注入到根实例中去
			
	路由的补充:
		路由重定向 https://router.vuejs.org/zh-cn/essentials/redirect-and-alias.html
		可以指定默认打开时，跳转到那个组件上去
		
		动态路由匹配:跳转到某个组件的时候给他带上参数

------------------------

## Vue中如何发送网络请求
	vue-resource

	步骤:
		1、导入vue及vue-resource

------------------------