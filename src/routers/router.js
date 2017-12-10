import Vue from 'vue';

//导入vue-router
import VueRouter from 'vue-router';
Vue.use(VueRouter);

//和路由相关的代码
//主页组件
const home = () => import('../components/home/home.vue')
const category = () => import('../components/category/category.vue')
const newslist = () => import('../components/news/newslist.vue')
const newsinfo = () => import('../components/news/newsinfo.vue')
const photolist = () => import('../components/photo/photolist.vue')
const phtoinfo = () => import('../components/photo/photoinfo.vue')
const goodslist = () => import('../components/goods/goodslist.vue')
const goodsinfo = () => import('../components/goods/goodsinfo.vue')
const pictureAndText = () => import('../components/goods/pictureAndText.vue')
const goodscomment = () => import('../components/goods/goodscomment.vue')
const shopcart = () => import('../components/shopcart/shopcart.vue')
// import home from '../components/home/home.vue'
// //分类组件
// import category from '../components/category/category.vue'
// //新闻列表组件
// import newslist from '../components/news/newslist.vue'
// //新闻详情组件
// import newsinfo from '../components/news/newsinfo.vue'
// //图片分享组件
// import photolist from '../components/photo/photolist.vue'
// //图片详情组件
// import phtoinfo from '../components/photo/photoinfo.vue'
// //商品列表组件
// import goodslist from '../components/goods/goodslist.vue'
// //商品详情组件
// import goodsinfo from '../components/goods/goodsinfo.vue'
// //图文介绍组件
// import pictureAndText from '../components/goods/pictureAndText.vue'
// //商品评论组件
// import goodscomment from '../components/goods/goodscomment.vue'
// //购物车组件
// import shopcart from '../components/shopcart/shopcart.vue'

//定义路由
const routes = [
  { path: '/', redirect: '/home'},
  { path: '/home',component: home},
  { path: '/category',component: category},
  { path: '/news/newslist',component: newslist},
  { path: '/news/newsinfo/:newsId',component: newsinfo},
  { path: '/photo/photolist',component: photolist},
  { path: '/photo/photoinfo/:photoId',component: phtoinfo},
  { path: '/goods/goodslist',component: goodslist},
  { path: '/goods/goodsinfo/:goodsId',component: goodsinfo},
  { path: '/goods/pictureAndText/:goodsId',component: pictureAndText},
  // { path: '/goods/pictureAndText',name:"pictureAndText",component: pictureAndText}
  { path: '/goods/goodscomment',component:goodscomment},
  { path: '/shopcart',component:shopcart}
]
// 创建 router 实例，然后传 `routes` 配置
const router = new VueRouter({
  routes // （缩写）相当于 routes: routes
})

export default router;