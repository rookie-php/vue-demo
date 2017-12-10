<template>
  <div>
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media" v-for="item in newslistArr" :key="item.id">
        <router-link :to="'/news/newsinfo/'+ item.id " class="">
          <img class="mui-media-object mui-pull-left" :src="item.img_url">
          <div class="mui-media-body">
            <p class="news-title">{{ item.title }}</p>
            <p class="mui-ellipsis">
              <span>{{ item.add_time | fmtDate('YYYY-MM-DD HH:mm') }}</span>
              <span>点击数量{{ item.click }}次</span>
            </p>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<style scoped>
  .mui-table-view .mui-media-object {
    max-width: 65px;
    height: 65px;
  }

  .news-title {
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
  }
  .mui-ellipsis {
    margin-top: 25px;
    color: blue;
    display: flex;
    justify-content: space-between;
  }
</style>
<script>
  import common from '../../common/common.js'
  export default {
    data(){
      return {
        newslistArr: []
      }
    },
    created(){
      this.getNewsListData();
    },
    methods:{
      getNewsListData(){
        const url = common.apihost+"api/getnewslist";
        this.$http.get(url).then(response=>{
          this.newslistArr = response.body.message;
          // console.log(this.newslistArr);
          //返回的时间不是自己想要的时间格式 所以要用到monent.js日期处理库
        })
      }
    }
  }
</script>