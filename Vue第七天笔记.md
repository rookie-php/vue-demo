# 今日目标

## Vuex
	全家桶:
		vue、vue-router、vuex
	
	作用:类似于仓库的作用，在项目中进行全局存取数据用的
	
	解释:
		状态 === 数据
		状态/数据 管理模式
		
	Vuex 是什么？	
		专门给vue设计的状态管理模式，可以利用它，在全局中存取数据

## Vuex几个核心概念说明
	state:最终存储数据的地方
	getter:从仓库中取
	mutation:同步往仓库中存，直接可以操作state中数据
	action:异步往仓库中存，不可以直接操作state中的数据，必须借助与mutations再操作
	
	module : 可以创建多个仓库

## 使用Vuex
	步骤:
		1、把vuex集成到项目中
			1.1、安装
			1.2、在main.js中导入并且通过Vue.use(xxx)
		
		2、创建仓库
			2.1 通过 const store = new Vuex.Store({}) 创建仓库
			2.2 把创建好的仓库，注入到根实例，这样整个项目才能使用
		
		3、在项目中，通过写代码往仓库中存取数据

## 在项目中，使用Vuex存取数据
	以 在goodsinfo.vue中 点击加入购物车为例，把数据存到仓库
	   在shopcart.vue 中 取出仓库中的值，展示
	   在App.vue中，取出仓库中放的商品的总个数，展示
	   
	步骤:
		1、先写state，它的值是一个对象，在这个对象里面，要写好我们存数数据的名称，它的格式是什么？
		
		2、写好mutations里面的代码，它也是一个对象，对象里面是函数（函数第一个参数是state，这是固定的写法）
			调用必须使用 this.$store.commit('方法名称',载荷)
			
		3、写好getters中的代码，getters中也是一个对象，对象里面也是一个方法（函数第一个参数是state，这是固定的写法）并且要有返回值
			调用必须使用 this.$store.getters.函数名称
			
		4、写actions中的代码
		
	注意：
		1、state、getter、mutation、action都是以对象的形式书写代码
		2、在mutations中写函数的时候，第一个参数是固定的，就是state,从第二个参数开始，就是载荷(说白了就是参数)
		3、在getters中写的方法，必须要有返回值，函数中的第一个参数也是state

----------------------

## 完成购物车页面的展示及操作
	我现在存储到仓库中的数据是下面这样滴
		[{goodsId:87,count:2},
		{goodsId:88,count:3},
		{goodsId:87,count:3}]
		
	步骤:
		1、先搞定数据
			1.1、先把 [{goodsId:87,count:2},
					  {goodsId:88,count:3},
		              {goodsId:87,count:3}] 
		              	  
		              var tempObj = {87:5,88:3}
		              
		              var tempArray = [87,88].join(',')
		              
		              var idsString = 87,88
		              
		              发送网络请求
		              
		              [{
		              	id:87,
		              	title:'华为',
		              	count:5,
		              	...
		              },{
		              	id:88,
		              	title:'苹果',
		              	count:3,
		              	...
		              }]
		
		2、渲染视图
			见代码
		
		3、对购物车的操作
			3.1、一进来计算总数量和总价格
			
			3.2、根据开关的状态，来重新计算总数量和总价格，并且设置开关的启用和禁用状态
			
			3.3、删除我们购物车中的某一项商品
				弹出一个确认删除的框框
					把该商品从仓库中删除(根据商品id来删除)	
					重新渲染(更改模型数据)
					重新计算总数量和总价格	
	
			注意:我们统计总数量和总价格是根据开关的状态来的，只统计开启的商品项

----------------------

## 传统电商(京东、淘宝)
	如何存?
		京东：
			未登录 本地cookies
			
			登录之后 ： 后台数据库
			
		淘宝:
			后台
	
	各自的优劣势?
		存在在本地(cookies)
			优势:
				操作简单，较少服务器压力
				
			缺点:
				因为和浏览器绑定，换了一台浏览器，就没有了
		
		存放在后台数据库
			优势:
				不容易丢失客户，不容易损失交易
			
			缺点：
				服务器压力大


	Vuex在实际项目中用在哪里?
		内存存储
		用在安全性比较高的网站的登录里面，用于存储登录之后的用户信息

----------------------

## 今日所安装的第三方包
	第一次安装:
		包:vuex
		应用场景:在使用vuex存取购物车的数据时候用到
		安装方式：cnpm i vuex --save/-S