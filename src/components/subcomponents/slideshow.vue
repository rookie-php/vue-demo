<template>
  <div>
    <!-- 轮播图 -->
    <mt-swipe :auto="this.swipeTime">
      <mt-swipe-item v-for="(item,index) in lunboArr" :key='index'>
        <img :src="item.img" alt="">
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>


<style scoped>
  /* lunbotu*/
   .mint-swipe {
    width: 100%;
    height: 200px;
  }

  img {
    width: 100%;
    height: 100%;
  }

</style>

<script>
import common from '../../common/common.js'
  export default{
    data(){
      return {
        lunboArr: [] //设置轮播图所需的数据
      }
    },
    props: ['swipeUrl','swipeTime'],
    created(){
      this.getLunboArrData();
    },
    methods:{
       getLunboArrData(){
        const url = `${common.apihost}${this.swipeUrl}`;
        this.$http.get(url).then(response=>{
          // response.body.message.forEach(function(item){
          //   item.img = item.src;
          // })
          response.body.message.forEach(item=>{
             if(item.src){
               item.img = item.src;
             }
          })
          this.lunboArr = response.body.message;
          // console.log(this.lunboArr);
        })
      }
    }
  }
</script>