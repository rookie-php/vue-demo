<template>
  <div>
    <nav>
      <ul>
        <li @click="getPhotoListData(0)">全部</li>
        <li v-for="item in navTitleArr" :key="item.id" @click="getPhotoListData(item.id)">{{ item.title }}</li>
      </ul>
    </nav>
    <div class="cateInfo" v-for="item in photoListArr" :key="item.id">
      <router-link :to="'/photo/photoinfo/'+item.id">
        <img :src="item.img_url" alt="">
        <div class="desc">
          <h4>{{ item.title }}</h4>
          <p>{{ item.zhaiyao }}</p>
        </div>
      </router-link>
    </div>
  </div>
</template>

<style scoped>
  nav {
    overflow-x: auto;
  }
  ul {
    list-style: none;
    overflow: hidden;
    width: 910px;    
    white-space: nowrap;
    margin: 0;
    padding: 5px 0 0;
  }

  li {
    float: left;
    margin-left: 10px;
    color: #0094ff;
  }

 .cateInfo {
   padding: 5px;
   border: 1px solid #ccc;
   margin-top: 5px;
 } 

 img {
   width: 100%
 }
</style>


<script>
  //导入公共模块
  import common from '../../common/common.js'
  export default {
    data(){
      return {
        navTitleArr: [],
        photoListArr: [],
        defaultcateid: 0
      }
    },
    created(){
      this.getNavTitleData();
      this.getPhotoListData();
    },
    methods: {
      getNavTitleData(){
        const url = common.apihost+"api/getimgcategory";
        this.$http.get(url).then(response=>{
          this.navTitleArr = response.body.message;
        })
      },
      getPhotoListData(id){
        this.defaultcateid = id?id:0;
        const url = common.apihost+"api/getimages/"+this.defaultcateid;
        this.$http.get(url).then(response=>{
          // console.log(response.body.message);
          this.photoListArr = response.body.message;
        })
      }
    }
  }
</script>