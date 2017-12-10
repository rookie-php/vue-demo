<template>
  <div>
    <!-- 头部 -->
    <mt-header fixed title="vue_index"></mt-header>
    <div class="back" v-show="isShow" @click="goBack()" :indo="$route.path">&lt;返回</div>
    <!-- 中间 -->
    <router-view class="routerViewClass"></router-view>
    <!-- 尾部 -->
    <mt-tabbar fixed :class="tabBarIsShow?'':'tabBarStyle'">
      <mt-tab-item>
        <router-link to="/home">
          <img src="http://img08.jiuxian.com/bill/2016/0224/cccd8df26a754c139de800406af82178.png">
        </router-link>
      </mt-tab-item>
      <mt-tab-item>
        <router-link to="/category">
          <img src="http://img07.jiuxian.com/bill/2016/0224/36a49b28ec5e4cdf9dbe37988199487d.png">
        </router-link>
      </mt-tab-item>
      <mt-tab-item>
        <router-link to="/shopcart">
          <img src="http://img08.jiuxian.com/bill/2016/0224/42baf46987b6460bb43b3396e9941653.png">
          <span v-if="this.badge" class="mui-badge">{{this.badge}}</span>   
        </router-link>     
      </mt-tab-item>
      <mt-tab-item>
        <img src="http://img09.jiuxian.com/bill/2016/0224/cba9029a8f4444a989a2ab5aa84c6538.png">
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<style scoped>
  img {
    width: 42px;
    height: 35px;
  }

  .routerViewClass {
    margin-top: 40px;
  }

  .back {
    position: fixed;
    top: 10px;
    left: 8px;
    z-index: 2;
    color: #fff;
    font-size: 16px;
  }

  .tabBarStyle {
    display: none;
  }

  .mui-badge {
    position: absolute;
    bottom: 30px;
    left: 235px;
    background: red;
    color: #fff;
  }
</style>

<script>
  import bus from './common/commonvue.js';
  export default {
    data(){
      return {
        isShow: false,
        tabBarIsShow: false,
        badge: 0
      }
    },
    created(){
      // console.log(this.$route.path);
      this.isShowOrhide(this.$route.path);
      // 第一种方法
      // const _this = this;
      // bus.$on('changeBadge',function(count){
      //   _this.badge += count;
      // })

      //第二种方法 箭头函数 内部本身没有this 但它会去外面找
      // bus.$on('changeBadge',(count)=>{
      //   this.badge += count;
      // })

      // 第三种方式 使用上下文
      // bus.$on('changeBadge',function(count){
      //   this.badge += count;
      // }.bind(this));

    },
    updated(){
      //从仓库中取出加入购物车中的总数，然后赋值给徽标显示
      this.badge = this.$store.getters.getGoodsTotal
    },
    methods: {
      goBack(){
        this.$router.go(-1);
      },
      isShowOrhide(path){
        if(path !=="/home"){
          this.isShow = true
          this.tabBarIsShow = false
        }else {
          this.isShow = false
          this.tabBarIsShow = true
        }
      }
    },
    watch: {
      $route(val, oldVal){
        // console.log(val);
        this.isShowOrhide(val.path);
      }
    }
  }
</script>