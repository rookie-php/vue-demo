<template>
  <div>
    <div class="newsInfoTitle">
      <h4>
        {{ newsInfo.title}}
      </h4>
      <p>
        {{ newsInfo.add_time | fmtDate}}
      &nbsp; &nbsp;
      {{ newsInfo.click }}次浏览
      &nbsp; &nbsp;分类:民生经济
      </p>
    </div>
    <div class="newsInfoContent"  v-html="newsInfo.content"> 
    </div>
    <!-- 评论子组件 -->
    <subcomponent :commentId="this.$route.params.newsId"></subcomponent>
    
  </div>
</template>

<style scoped>
  .newsInfoTitle,.newsInfoContent {
    padding: 5px;
  }

  h4 {
    font-size: 16px;
    color: blue;
  }

  .newsInfoTitle {
    border-bottom: 1px solid #ccc;
  }

</style>
<script>
  //导入公用api
  import common from '../../common/common.js';
  //导入子组件
  import subcomponent from '../subcomponents/subcomponent.vue'

  export default {
    data(){
      return {
        newsInfo: {

        }
      }
    },
    created(){
      this.getNewsInfoData();
    },
    methods: {
      getNewsInfoData(){
        const url = common.apihost+"api/getnew/"+this.$route.params.newsId;
        this.$http.get(url).then(response=>{
          this.newsInfo = response.body.message[0];
          // console.log(this.newsInfo);
        })
      }
    },
    components: {
        subcomponent: subcomponent  
    }
  }
</script>