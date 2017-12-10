# 今日目标

## npm 
	node -v 查看当前版本

## cnpm 	
	强烈建立，先安装cnpm
	安装方式：npm i cnpm -g

## 步骤
	1、先安装node , 查看npm -v 如果低于3.0 
	2、再使用 npm 安装 cnpm : npm i cnpm -g (开个流量，舍得一点)，使用cnpm -v 检测是否安装成功
	3、使用cnpm 安装 webpack、webpack-dev-server
		cnpm i webpack -g
		cnpm i webpack-dev-server -g
		
	4、检测是否安装了 webpack webpack-dev-server 
		webpack -v
		webpack-dev-server -v
		
	报错了如何处理
		如果发现，安装webpack webpack-dev-server 报错
		删掉 npm文件夹下面的webpack相关，及node_modules下面的webpack文件

## Webpack的使用

### 安装
	cnpm i webpack -g
	cnpm i webpack-dev-server -g
	
	检测是否安装成功
		webpack -v
		webpack-dev-server -v

### 基本概念
	官网:
		https://webpack.js.org/ 2.0之后官网
		https://webpack.github.io/docs/ 1.x的文档


	它是什么?
		Webpack 是当下最热门的前端资源模块化管理和打包工具。
	
	它能帮我们干什么事情
		1、把我们项目所有的源代码，打包成一个bundle.js
		2、打包之后，打包保护源代码的目的
		
	从1.x升级到2.x
		https://segmentfault.com/a/1190000008181955

### 核心概念
	参考:https://doc.webpack-china.org/concepts/

	入口:
		打包的入口文件
	
	出口(输出):
		打包得到的结果
	
	Loader:
		让webpack能打包除了js的其它格式的文件
	
	Plugins:
		让我们webpack打包起来更加牛逼

### 注意点
	1、webpack默认只能打包.js结尾的文件，但是通过loader就可以打包任何后缀结尾的文件

### 代码演练(参考：http://zhaoda.net/webpack-handbook/usage.html)
	打包一个js源文件
		1、先新建entry.js并且写好代码
		2、使用webpack打包entry.js
			webpack entry.js(入口文件) bundle.js(输出文件)
			注意:切换到项目的根目录
		3、自己新建一个index.html，并且导入bundle.js
		4、运行index.html看效果
	
	打包多个具有依赖关系的js文件
		1、新建entry.js、module.js写好各自的内容，并且在entry.js通过模块化的方式导入module.js中的内容
		2、使用webpack打包entry.js
			webpack entry.js(入口文件) bundle.js(输出文件)
			注意:切换到项目的根目录
		3、自己新建一个index.html，并且导入bundle.js
		4、运行index.html看效果
	
	打包非js(以.css)文件
		1、新建entry.js、module.js、site.css写好各自的内容，并且在entry.js通过模块化的方式导入module.js中的内容和site.css中的内容
		2、使用webpack打包entry.js
			webpack entry.js(入口文件) bundle.js(输出文件)
			注意:切换到项目的根目录
		3、发现打包css出现问题，是因为默认情况下，webpack只能打包js,如果要打包css，需要安装两个loader
			参考:https://doc.webpack-china.org/loaders/
			style-loader
			css-loader
		4、自己新建一个index.html，并且导入bundle.js
		5、运行index.html看效果


	配置文件:
		简化我们在命令行中输入的一大串打包指令
		步骤:
			1、在项目根目录下面创建一个名为`webpack.config.js`的文件
			
			2、在我们的webpack.config.js中，配置入口、输出、loader、plugins
			
			3、建议大家拷贝，不要写了
			
			4、切换到项目根目录，调用`webpack`打包
	
	插件:
		写在webpack.config.js中plugins中的

### webpack打包其它参数说明
	说明:
		1、参数不是必须的，可以加，也可以不加
		2、打包的参数，可以接多个，多个之间用空格分割，没有先后之分
	
	webpack -p 压缩我们的bundle.js
	webpack --progress 查看打包进度
	webpack --config 指定打包的文件名称
	webpack --watch 监控源文件更改，如果发现，源文件有更改，就自动打包成bundle.js

### 打包css时候，loader使用
	步骤:
		1、安装style-loader css-loader
			cnpm i style-loader css-loader --save-dev
			
		2、使用
			2.1、在导入css的时候，给它加上style-loader、css-loader
			
			例子:require('!style-loader!css-loader!./site.css')
			
			2.2、在导入css的时候，不需要写!style-loader!css-loader!，但是一定要在打包的时候，后面加上 --module-bind "css=style-loader!css-loader" ，注意这个地方，必须要用`""`

### 在使用npm/cnpm安装本地包，接的参数说明
	cnpm i 包名 --save-dev(开发阶段)
	cnpm i 包名 --save(生产阶段)

### 全局包和本地包
	用处不一样
		全局包：将来用在终端里面，执行指令
		本地包：用在当前项目中的
	
	安装的方式不一样
		全局包 cnpm i xxx -g
		本地包 cnpm i xxx --save-dev/--save
		
	安装地方不一样
		全局包:C:\Users\用户名\AppData\Roaming\npm
		本地包:当前项目的node_modules里面

-----------------------

## Webpack/Webpack-dev-server +Vue搭建项目

### webpack & webpack-dev-server
	webpack-dev-server参考:
​				

	共同点:
		1、webpack & webpack-dev-server 都是全局包，都能执行打包操作
		
		2、webpack&webpack-dev-server都能对我们源代码进行打包
		
		3、打包的指令及参数都一样 webpack/webpack-dev-server 入口 输出文件 --module-bind "css=style-loader!css-loader" --progress -p --watch --config xxx.js
		
		4、webpack-dev-server除了拥有webpack的打包指令之外，它还能拥有自动打开浏览器，配合vue-loader，实现热重载
		
	不同点:
		使用场合不一样:
			webpack ： 在生产阶段使用，最终项目做完之后，把我们项目打包成符合生产环境的静态资源
			
			webpack-dev-server : 在开发阶段使用，它把我们项目的源代码打包，发布到`webpack-dev-server`提供的服务器里面，我们在项目中，看不到打包出来的文件的
			
		打包出来的成果不一样：
			webpack打包会在当前项目的目录下生成实实在在的文件
			
			webpack-dev-server 让我们开发人员看不到打包出来的文件，其实已经打包好，并且发布到`webpack-dev-server`开启的node服务里面去了
	
	说明:
		并不是所有框架都支持，vue默认是官方提供了热重载的支持，React第三方提供了，Angular2暂时没有比较成熟的方案

### 搭建项目之创建项目必要的文件和文件夹
	注意:创建的项目的文件夹不要放在中文目录下，项目的名称不要有中文

	src: 项目源代码所在目录
		main.js 项目打包的入口文件
		App.vue 启动项目之后，用户看到的第一个组件
		
	package.json：项目的描述文件
	webpack.config.dev.js ： 开发阶段的webpack的配置文件

### 搭建项目，当更改了App.vue中内容的时候，实现热重载
	1、写好App.vue中的代码
		写在template之间
		
	2、在main.js中写代码
		2.1、导入App.vue
		
		2.2、使用Vue框架，把App.vue作为第一个让用户看到的组件
			安装vue: cnpm i vue --save
			创建根实例，在根实例中，让我们的框架第一个显示App.vue
		
	3、在webpack.config.dev.js中配置打包的指令
		入口
		loader: 
			安装`vue-loader`对我们.vue结尾的文件打包
			
	4、使用`html-webpack-plugin`，来根据参照文件(template.html)，生成一个index.html
		4.1、先写好template中的内容，里面要写上id=app的div
		4.2、安装`html-webpack-plugin`插件，在webpack.config.dev.js中写好代码
			参考:https://github.com/jantimon/html-webpack-plugin
			
	5、使用 webpack-dev-server 打包
		在我们项目的根目录下，运行下面的代码:
			webpack-dev-server --progress --config webpack.config.dev.js --open --port 6008 --hot
			
		解释:
			--progress 查看打包进度
			--config xxx.js 指定打包的配置文件
			--open 打开默认浏览器
			--port 6008 指定打开的端口，如果不指定，默认是8080
			--hot 启动热重载，告诉vue-loader可以进行热重载了
	
	注意：
		开发阶段，我们生成的index.html及bundle.js都发布到`webpack-dev-server`这个服务器上面去了，我们在项目里面是看不到生成的实实在在的这些文件的

-----------------------

## 今日所安装的第三方包
	第一次安装:
		包:vue
		应用场景:在main.js中使用Vue去展示App.vue的时候用到
		安装方式:cnpm i vue --save
		
	第二次安装:
		包:vue-loader vue-template-compiler css-loader style-loader
		应用场景:打包.vue结尾的文件的时候
		安装方式：cnpm i vue-loader vue-template-compiler css-loader style-loader --save-dev
		
		注意：如果包安装失败了之后，先卸载掉，比如
			cnpm uninstall vue-loader --save-dev
		
	第三次安装:
		包:html-webpack-plugin webpack webpack-dev-server
		应用场景:在我们使用一个参照文件生成index.html的时候，需要用到它
		安装方式:cnpm i html-webpack-plugin webpack webpack-dev-server --save-dev

## 使用vue-cli搭建我们的项目
	安装 
		npm install -g vue-cli 
		npm install -g cross-env
		
	生成项目:vue init webpack-simple vue_simple_demo
	
	安装第三方包
		切换到根目录 cnpm install