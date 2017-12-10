<template>
  <div>
    <div class="photoinfo">
      <div class="title">
        <h4>{{ photoInfoObj.title}}</h4>
        <p>
          <span>{{ photoInfoObj.add_time | fmtDate('YYYY-MM-DD') }}</span>&nbsp;&nbsp;
          <span>{{ photoInfoObj.click }}</span>次浏览
        </p>
      </div>
      <!-- 九宫格 -->
      <ul class="mui-table-view mui-grid-view mui-grid-9">
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3" v-for="(item,index) in photoPicArr" :key="index">
            <img :src="item.src" alt="" class="preview-img" @click="$preview.open(index, photoPicArr)" >
        </li>
      </ul>
      <p class="desc" v-html="photoInfoObj.content"></p>
    </div>
    <subcomponent :commentId="this.$route.params.photoId"></subcomponent>
  </div>
</template>

<style scoped>
  .title {
    padding: 10px;
  }
  h4 {
    color: #0094ff;
    font-size: 16px;
    margin: 0;
  }
  p {
    margin: 0;
    margin-top:10px;
  }

  img {
    width: 100px;
    height: 100px;
  }
</style>

<script>
  import common from '../../common/common.js'
  //导入评论组件
  import subcomponent from '../subcomponents/subcomponent.vue'
  export default {
    //注册组件 subcomponent只将在父组件模版中使用
    components: { 
        subcomponent:subcomponent 
      },
    data(){
        return {
          photoInfoObj: {},
          photoPicArr: []
        }
    }, 
    created(){
      // console.log(this.$route.params.photoId);
      this.getPhotoInfoData();
      this.getPhotoPic();
    },
    methods: {
      getPhotoInfoData(){
        const url = `${common.apihost}api/getimageInfo/${this.$route.params.photoId}`;
        this.$http.get(url).then(response=>{
            this.photoInfoObj = response.body.message[0];
            // console.log(this.photoInfoObj);
        })
      },
      getPhotoPic(){
        // const url = common.apihost+"api/getthumimages/"+this.$route.params.photoId;
        const url = `${common.apihost}api/getthumimages/${this.$route.params.photoId}`;
        this.$http.get(url).then(response=>{
          response.body.message.forEach(item=>{
            item.w = 600,
            item.h = 600
          })
          this.photoPicArr = response.body.message;
          // console.log(this.photoPicArr)
        })
      }
    }
  }
</script>