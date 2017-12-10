# 昨天内容回顾

## Vuex
	作用:全局存取数据用的，和生活中仓库有点类似
	
	专业解释:Vuex是专门给Vue提供状态管理模式
	
	状态===数据

### 核心概念
	state 存储的数据类型，只要是js的类型都支持
	getter 从仓库中获取数据
	Mutation 同步的往仓库中存数据
	Action 异步的往仓库中存数据
	
	module 可以创建多个仓库
	
	注意点:
		1、Action是不能直接操作state中的数据的，必须借助与同步方法
	
### 代码步骤
	1、集成到项目中来
		
	2、创建一个空仓库，注入到根实例，整个应用才能拥有全局状态管理的功能
	
	3、在需要的地方写代码
	
## 购物车
	1、先准备好需要渲染的数据
		[{goodsId:87,count:2},{goodsId:88,count:3},{goodsId:87,count:3}]
		
		=> {87:5,88:3}
		
		=> [87,88]
		
		=> 87,88
		
		=> 发送网络请求
		
		===> [{
				id:87,
				name:'华为',
				count:5,
				...
			},{
				id:88,
				name:'苹果',
				count:3,
				...
			}]

	2、渲染出来
	
	3、对购物车组件进行操作
		先删除仓库中对应id的数据
		再删除自己
		再统计信息
		
### 电商项目购物车数据存储
	京东
		未登录
			本地浏览器的cooikes
		
		登录
			京东后台服务器
			
	淘宝
		淘宝的服务器
		
	Vuex

---------------------

# 今日课程目标

## 加密&支付宝
	加密的应用场景:
		登录
		支付

	md5密码加密【不可以解密】
		md5、sha1、sha256、sha512
		上面这些叫做哈希算法，抽取特征值，经过hash的计算，都能得到定长（比如md5算出来是32位），算出来的202cb962ac59075b964b07152d234b70是不可逆的
		
		应用场景:适合做密码加密，密码可以加盐
	
	aes 对称加密算法【可以解密】
		加密和解密都是用的同一把钥匙
		
		应用场景:支付
		
		参考:https://www.npmjs.com/package/aes256
	
	rsa 非对称加密算法【可以解密】
		加密和解密用的不是同一把钥匙
		
		公钥&私钥
			就像鸳鸯，你用私钥加密的数据，必须要有对应的公钥解密
				你用公钥加密，必须使用对应的私钥解密
				
			注意：
				公钥&私钥必须成对使用
				
				私钥解密 ---> 对应公钥解密
				公钥加密 ---> 对应私钥解密
		
		应用场景:支付
	
### 支付宝
		整个流程
			哪些人参与?负责做的事情是什么?
			
			前提:
				1、注册成为支付宝的商户(https://open.alipay.com)，并且和支付宝签约
					一般这个事情是老板或是财务 
					
				2、开发配置
					2.1、生成公钥和私钥，并且私钥我们留着(放在我们自己的服务器里面)，公钥一定要上传到支付宝
					一般是老板需要技术经理来协助一起完成 
			
			正式写代码(以美团为例来分析)
				前端开发人员/iOS/Android
					1、调用后台生成订单的接口(ajax)
					
					3、当用户点击了确认支付之后，发送请求给美团服务器
					
					5、浏览器通过window.open的方式，打开支付宝的支付链接（已经加密了的）
				
				后台开发人员(苦逼)
					2、在后台生成该商品的订单、让浏览器跳转到选择支付方式的页面上面去(重定向)
					
					4、拿着我们私钥，对我们的商品信息进行加密，会把生成好的加密的链接，返回给浏览器
						参考:https://docs.open.alipay.com/60/104790/
		
		
		前端到时候去公司之后需要写哪几部分代码
			1、写好订单页面、调用后台的接口，提交用户订单
			
			2、写好选择支付方式的页面，当用户选择了某种支付方式之后，点击确认支付按钮，发送请求给我们公司服务器(带上参数，比如用户到底选择了哪个支付方式)
			
			3、当后台把支付宝加密的链接返回给我们之后，我们需要通过window.open打开它，打开的链接如下
				https://mclient.alipay.com/home/exterfaceAssign.htm?alipay_exterface_invoke_assign_client_ip=183.237.64.70&body=%E7%BE%8E%E5%9B%A2%E8%AE%A2%E5%8D%95-206933412118451512804200&subject=%E7%BE%8E%E5%9B%A2%E8%AE%A2%E5%8D%95-206933412118451512804200&sign_type=RSA&notify_url=http%3A%2F%2F10.53.86.13%3A8966%2Fpaygate%2Fnotify%2Falipay%2Fpaynotify%2Fwap&out_trade_no=206933412118451512804200&return_url=http%3A%2F%2Fmeishi.meituan.com%2Fi%2Forder%2Fresult%2F4098632745&sign=trwmwMXWEg00hK7pn9Kz9LB36L0z%2BcFMPeCoFzKNK2rNVw%2F7t%2FJg238Wnvgwlz%2Fv%2B9hfY9M5Mh6kYVisGTCFZsjrXYfStvOhr8Uj5x6zXvMAWxgt94XCr3BnkXFDqTyINaRGC2eeFxDezeiS6Ji1Tzx6bhZgA0ozsI9Od%2Fl4bJU%3D&_input_charset=utf-8&it_b_pay=1440m&alipay_exterface_invoke_assign_target=mapi_direct_trade.htm&alipay_exterface_invoke_assign_model=cashier&total_fee=11.9&service=alipay.wap.create.direct.pay.by.user&partner=2088311465207164&seller_id=2088311465207164&alipay_exterface_invoke_assign_sign=_d_ms7_bsh_j_g_h2_o%2F_trc5_e_w_h1h4g_e_t_idr_iwj_g_l0s4q_iut_x7_ad_ch_ux_z_h_w7g%3D%3D&payment_type=1


## webpack打包上线
	webpack把源代码打包成符合生产环境部署的前端资源
		理解就行，工作中，拷贝我的代码就行
		
### 打包优化的思路(代码能记住多少，到时候去公司开发，就把那个写好的生产阶段的webpack配置文件拷贝过去就行)
	
	1、对bundle.js进行es6转es5及压缩
	
	2、
	
### 代码步骤
	1、在项目根目录下创建一个生产阶段的webpack.config.prod.js配置文件
		注意:生产阶段配置文件中的内容，就是在开发阶段的基础上，多写一些针对生产环境的配置
		
	2、在package.json中增加一个scripts的配置
		"build":"webpack --progress --config webpack.config.prod.js"
		
	3、对我们项目中es6的代码转es5【babel】
		参考:https://babeljs.io/docs/setup/#installation 选择webpack构建工具
		
		3.1、安装包
			cnpm i babel-loader babel-core babel-preset-env --save-dev
		
		3.2、使用
			在当前根目录下，创建一个babel的配置文件，写好预设代码
				{
				    "presets": ["env"]
				}
				
			在webpack.config.prod.js中对js进行转换
				{ 
	                test: /\.js$/, 
	                exclude: /node_modules/, 
	                loader: "babel-loader" 
	            },
	            {
	                test: /vue-preview.src.*?js$/,
	                loader: 'babel-loader'
	            }
	            
	4、对bundle.js和index.html压缩
		压缩bundle.js
			参考:https://cn.vuejs.org/v2/guide/deployment.html
			在 webpack.config.prod.js 中配置
				new webpack.DefinePlugin({
		            'process.env': {
		              NODE_ENV: '"production"'
		            }
		        }),
		        new webpack.optimize.UglifyJsPlugin({
		            compress: {
		                warnings: false //压缩警告
		            },
		            comments: false //去掉版权信息等注释
		        })
	   	
	   	压缩index.html
	   		参考:https://github.com/jantimon/html-webpack-plugin
	   		https://github.com/kangax/html-minifier#options-quick-reference
				minify:{
	                collapseWhitespace:true,//压缩空格
	                removeComments:true,//去除注释
	                minifyJS:true,//压缩js
	                minifyCSS:true//压缩css
	            }
	            
	 5、对bundle.js进行优化
	 	达到的目的：
	 		bundle.js 尽可能小，可包含我们自己写的源代码
	 		
	 	什么原因造成他过大?
	 		项目中用的图标
	 		第三方包
	 		项目中的样式
	 		
### 把项目中的图片和第三方包及样式，从bundle.js抽离出来
	你知道原理即可，能记住则记住，到时候看我的笔记和代码即可
	
	1、从bundle.js中抽离图片(见代码)
	
	2、从bundle.js中抽离第三方包(见代码)
		entry:
			改成对象，多入口
			
		output
			改成多出口
			
		plugin
			见代码
			
	3、从bundle.js中抽离第三方样式
		使用一个第三方插件
			https://github.com/webpack-contrib/extract-text-webpack-plugin
	
	
	4、vue提供了路由懒加载（把每个组件从bundle.js中抽离出来，等需要的时候，再按需加载...）
		第一步：安装 https://babeljs.io/docs/plugins/syntax-dynamic-import/
		
		第二步：把router.js中，导入组件的方式改成 const Foo = () => import('./Foo.vue')

### 发布阿里云
		

## requirejs
	异步加载所需的js库
	jquery artTemplate

----------------------