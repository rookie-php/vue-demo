<template>
  <div>
    <!-- 轮播图 -->
    <swipe swipeUrl="api/getlunbo" :swipeTime="3000"></swipe>
    <!-- 九宫格 -->
    <div class="mui-content">
      <ul class="mui-table-view mui-grid-view mui-grid-9">
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link to="/news/newslist">
            <span class="mui-icon mui-icon-home"></span>
            <div class="mui-media-body">新闻咨询</div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link to="/photo/photolist">
            <span class="mui-icon mui-icon-email"></span>
            <div class="mui-media-body">图片分享</div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link to="/goods/goodslist">
            <span class="mui-icon mui-icon-chatbubble"></span>
            <div class="mui-media-body">商品购买</div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <a href="#">
            <span class="mui-icon mui-icon-location"></span>
            <div class="mui-media-body">留言反馈</div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <a href="#">
            <span class="mui-icon mui-icon-search"></span>
            <div class="mui-media-body">视频专区</div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <a href="#">
            <span class="mui-icon mui-icon-phone"></span>
            <div class="mui-media-body">联系我们</div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
  /*去除默认图标*/
  .mui-icon::before {
    content: '';
  }
  span {
    width: 50px;
    height: 50px;
  }
  .mui-icon-home {
    background-image: url('../../static/images/menu3.png');
    background-size: cover;
  }

  .mui-icon-email {
    background-image: url('../../static/images/menu4.png');
    background-size: cover;
  }

  .mui-icon-chatbubble {
    background-image: url('../../static/images/menu5.png');
    background-size: cover;
  }

  .mui-icon-location {
    background-image: url('../../static/images/menu6.png');
    background-size: cover;
  }

  .mui-icon-search {
    background-image: url('../../static/images/menu9.png');
    background-size: cover;
  }

  .mui-icon-phone {
    background-image: url('../../static/images/menu10.png');
    background-size: cover;
  }

  .mui-content .mui-table-view {
    background-color: #fff;
    border: 0px;
  }

  .mui-content .mui-table-view li {
    border: 0px;
  }
</style>

<script>
  //导入轮播图子组件
  import swipe from '../subcomponents/slideshow.vue'
  export default {
    components: {
      swipe:swipe
    }
  }
</script>