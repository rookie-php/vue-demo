//导入第三方包
import Vue from 'vue';
//导入App.vue
// var app = require('./App.vue'); ES5
import App from './App.vue'; //ES6
//min-ui框架
import Mint from 'mint-ui';
//导入momentjs
import moment from 'moment';
//导入vue-preview
import VuePreview from 'vue-preview';
//导入vue-resource
import VueResource from 'vue-resource';
import axios from 'axios'

Vue.use(Mint);
Vue.use(VuePreview);
Vue.use(VueResource);
Vue.prototype.$axios = axios


//过滤返回的时间格式
Vue.filter('fmtDate',(input,fmtDateStr)=>{
  return moment(input).format(fmtDateStr || 'YYYY-MM-DD HH:mm:ss');
});

Vue.filter('fmtDateAgo',(input,fmtDateStr)=>{
  moment.locale('zh-cn');
  return moment(input).startOf('hour').fromNow();
});

//mint-ui框架样式
import 'mint-ui/lib/style.css';
//mui框架样式
import './static/mui/css/mui.css';
//导入自己的样式
import './static/css/site.css';

//路由占位
import router from './routers/router.js'

//仓库占位
import store from './vuex/store.js'

//创建根实例 让根实例显示App.vue
new Vue({
  el: '#app',
  store,
  render: h=>h(App),
  router //（缩写）相当于 router: router 
})