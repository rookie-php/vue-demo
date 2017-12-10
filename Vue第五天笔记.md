# 今日目标

## 图片分类 & 图片列表
	步骤:
		1、通过路由导航到photolist.vue
			1.1、创建photolist.vue
			1.2、在main.js中导入photolist.vue，设置路由规则
			1.3、在home.vue中，通过声明式导航，进行路由跳转
			
			注意点:我们在.vue文件中，除了通过template写内容，还可以通过自己实现js中的render函数来写组件内容
		
		2、实现图片分类
			2.1、先获取数据
			
			2.2、渲染
		
		3、根据分类id加载图片列表
			3.1、监听分类id的点击
			
			3.2、根据id获取对应id的图片列表数据
			
			3.3、渲染

## 模版字符串
	语法:``

	作用:
		1、格式化字符串
			比如换行，不需要加\r\n
		
		2、占位、替换

------------------------

## 图片详情组件
	步骤:
		1、点击图片列表，导航到图片详情组件，带上图片id
			1.1、创建图片详情组件
			1.2、在main.js中导入photoinfo.vue组件，并且设置路由规则
			1.3、在photolist.vue中通过router-link(声明式导航)触发路由
		
		2、根据图片id获取图片详情数据
		
		3、渲染
			图片缩略图数组
				1、获取数据(另外一个接口)
				2、渲染九宫格视图
				3、实现预览图片的功能
			
			评论子组件
				1、在photoinfo.vue(父组件)中导入subcomment.vue
				2、在父组件的components中注册
				3、在父组件的template中使用
				4、父组件给子组件传递commentId

## 组件命名的约定
	https://cn.vuejs.org/v2/guide/components.html#组件命名约定

## 预览图片（photoswipe.com && vue-preview）
	参考:
		https://github.com/LS1231/vue-preview
		
	步骤:
		1、集成到项目中来
			下载
			在main.js中，导入，并且通过Vue.use(xxx)集成它	
		
		2、在需要的地方去使用它
			photoinfo.vue中使用
			
		3、在使用我们的vue-preview的时候，出现问题如何解决?
			能百度就去百度
			运行提供的demo，如果demo没有错，但是自己写错了，对着demo更改自己的代码

## photoswipe
	纯原生，没有依赖于任何第三方库(比如jquery)

	适用于PC端与移动端

	使用：
		参考:http://photoswipe.com/documentation/getting-started.html
		
		步骤:
			1、在html中引入它的css、js
			
			2、把.pswp，写在你需要的dom元素中去
			
			3、写js代码，给它提供数据

------------------------

## 商品列表
	步骤:
		1、跳转到商品列表组件
			创建goodslist.vue
			在main.js中导入并且设置路由规则
			在home.vue中通过声明式导航跳转到goodslist.vue
		
		2、获取商品列表的数据
		
		3、渲染出来

------------------------

## 生命周期钩子/函数

### 什么是Vue的生命周期
	React最先提出来的

	出生 ---> 上幼儿园 ---> 上小学 ---> 上中学 --> 上大学 --> 工作 ---> 黑马 ---> 好好工作 --->  小康 --> 死亡

	参考:
		https://cn.vuejs.org/v2/guide/instance.html#生命周期图示

### Vue中提供的哪几个生命周期钩子
	beforeCreate ---> created(组件被创建出来的) ---> beforeMount ---> mounted(template中的内容挂在到id=app的位置了，用户就能看到组件的内容了) ---> beforeUpdate ---> updated ---> beforeDestory ---> destoryed

	注意点:
		1、只有数据更改了之后，beforeUpdate、updated才会调用
		2、beforeUpdate、updated可能调用多次，其它只会调用一次
		3、上面这些生命周期钩子，我们只需要实现，调用是Vue框架底层的事情

### 应用场景:【面试时候回答上来】
	created:
		发送网络请求
	
	统计用户行为(统计用户最喜欢哪个组件) ---> App埋点
		created:记录进入时间
		beforeDestory:记录销毁时间
			计算出刚刚这个用户在这个组件中停留的时间戳，把newslist.vue及在它上面停留的时间，发送给服务器(调用后台写好的接口)
	
	统计上次用户的浏览器记录
		beforeDestory:记录一下滚动的offsetY,存在localstorage
			13:400px
			
		mounted:去localstorage取出13上次的偏移量,滚动到上次浏览的位置
		
	记录用户买了什么类型的产品
		created:拿到用户进入商品的类型
		
	自动填充用户填写过，但是未提交给服务器的数据
		beforeDestory:把用户填写了，但是没有提交给服务器的数据，先缓存到本地
		
		created:去缓存中去，然后自动给他设置上

------------------------

## 今日安装的包
	第一次安装包
		包:vue-preview
		使用场景:图片详情中，进行缩略图预览
		安装方式:cnpm i vue-preview -S