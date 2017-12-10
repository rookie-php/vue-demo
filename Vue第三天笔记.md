# 今日内容

## vue-cli
	作用:帮助我们快速创建项目的结构

	参考

### 使用步骤:
	1、安装全局包 
		cnpm i vue-cli -g
		cnpm i cross-env -g
		
		cross-env 设置项目的环境
		
	2、在桌面生成项目
		vue init webpack-simple my_vue_project
		
	3、切换到根目录下
		cd my_vue_project
		cnpm install 安装依赖的包
		
	4、运行
		npm run dev

------------------

## App.vue
	头部
		1、集成mint-ui到项目中
			安装
			main.js中，导入并且集成，Vue.use(xxx)
			
		2、在需要的地方去使用它
			App.vue的头部
	
	底部TabBar
	
	实现中间的路由部分
		1、集成vue-router到项目中
			安装
			main.js中，导入并且集成，Vue.use(xxx)
		
		2、在需要的地方去使用它	
			html中
				router-link：触发路径				
				router-view：占位符
				
			js中
				定义/新建组件
				创建路由对象，设置路由规则(自动帮助我们注册)
				把我们创建好的路由对象，注入到根实例中

-------------------------				
​	
## mint-ui
	基于Vue的移动端组件库
	地址:https://mint-ui.github.io/#!/zh-cn
	
	PC端基于Vue的组件库
		https://www.awesomes.cn/subject/vue#应用-框架
		http://element.eleme.io/#/zh-CN/component/installation

------------------

## home.vue

### 轮播图
	步骤:
		1、利用vue-resource获取轮播的数据
			把vue-resource集成到我们项目中来
				安装
				在main.js中导入并且Vue.use(xxx)
				
			在需要的地方使用它
		
		2、使用mint-ui中的swipe组件来实现轮播功能
			参考:https://mint-ui.github.io/docs/#/zh-cn2/swipe

### 九宫格布局
	步骤:
		1、把mui集成到项目中(假设它没有上传到npm)
			把mui的dist目录下面的那些需要的内容，拷贝到当前目录下
			在main.js导入其样式文件
			
		2、在需要使用它的地方，使用
			home.vue

### mui
	http://www.dcloud.io/hellomui
------------------

## 新闻列表
	步骤:
		1、点击首页的新闻资讯按钮，跳转到新闻列表组件
			在home.vue中，点击新闻咨询，使用router-link触发
			创建newslist.vue
			main.js中写代码，设置路由规则


		2、使用vue-resource发送网络请求
			this.$http.get(xxx).then()
			
			注意:
				必须在main.js中使用Vue.use(VueResource)


		3、渲染新闻列表
-----------------

## 今日所安装的包
	第一次安装
		包:mint-ui
		应用场景:App.vue中实现头部和底部
		安装方式:cnpm i mint-ui --save/-S


	第二次安装
		包:vue-router
		应用场景:在App.vue中间要呈现内容的时候，使用它
		安装方式:cnpm i vue-router -S


	第三次安装
		包:vue-resource
		应用场景:在首页轮播功能获取轮播数据的时候
		安装方式:cnpm i vue-resource -S
		
	第四次安装
		包：file-loader
		应用场景:在导入mui的样式的时候，需要到入字体文件mui.ttf
		安装方式:cnpm i file-loader --save-dev

----------------