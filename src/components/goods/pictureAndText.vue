<template>
  <div>
    <div class="title">
      <h3>{{ pictureAndText.title }}</h3>
    </div>
    <div class="content" v-html="pictureAndText.content">
    </div>
  </div>
</template>

<style scoped>
  .title {
    padding: 5px;
    border-bottom: 1px solid rgba(92,92,92,.3);
  }

  h3 {
    font-size: 16px;
    text-align: center;
    color:#0094ff;
  }

  .content {
    padding: 10px;
    width: 100%;
  }
  p {
    font-size: 14px;
  }

</style>

<script>
  import common from '../../common/common.js'
  export default {
    data(){
      return {
        pictureAndText: {}
      }
    },
    created(){
      this.getPictureAndTextData()
    },
    methods:{
      getPictureAndTextData(){
        const url = `${common.apihost}api/goods/getdesc/${this.$route.params.goodsId}`
        this.$http.get(url).then(response=>{
          this.pictureAndText = response.body.message[0]
          // console.log(this.pictureAndText)
        })
      }
    }
  }
</script>