<template>
  <div>
    <div class="commentCommit">
      <h4>提交评论</h4>
      <textarea name="" id="" cols="10" rows="5" placeholder="请输入评论内容" ref="textArea"></textarea>
      <mt-button type="primary" size="large" @click="postData()">提交评论</mt-button>
    </div>
    <div class="commentContent">
      <h4>评论列表</h4>        
      <div class="commentList" v-for="(item,index) in commentList" :key="index">
        <p class="content">{{ item.content }}</p>
        <p class="commentUser">
          <span>{{ item.user_name }}</span>
          <span>{{ item.add_time | fmtDateAgo }}</span>
        </p>
      </div>
      <mt-button type="danger" size="large" plain @click="loadMore()">查看更多</mt-button> 
    </div>     
  </div>
</template>

<style scoped>
  .commentCommit,.commentContent {
    padding: 6px;
  }

  .commentList {
    border-bottom: 1px solid #ccc;
  }

  h4 {
    font-size: 16px;
    padding-bottom: 10px;
    border-bottom: 1px solid #ccc;
  }

  .commentUser {
    display: flex;
    justify-content: space-between;
    color: #aaa;
  }
</style>

<script>
  //导入公用模块
  import common from '../../common/common.js';
  import { Toast } from 'mint-ui';

  export default {
    data() {
      return {
        commentList: [],
        pageIndex: 1    
      }
    },
    props: ['commentId'], //父子组件传值
    created(){
      this.getCommentData();
    },
    methods: {
      getCommentData(){
        const url = common.apihost+"api/getcomments/"+this.commentId+"?pageindex="+this.pageIndex;
        this.$http.get(url).then(response=>{
          // console.log(response.body.message);
          if(this.pageIndex===1){
            this.commentList = response.body.message;    
          }else{
            this.commentList = this.commentList.concat(response.body.message);
          }
        })
      },
      loadMore(){
        this.pageIndex++;
        this.getCommentData();
      },
      postData(){
        // console.log(this.$refs.textArea.value);
        const url = common.apihost+"api/postcomment/"+this.commentId;
        //获取评论内容
        const content = this.$refs.textArea.value;
        // console.log(content.trim().length);
        if(content === '' || content.trim().length===0){
          //提示信息
          Toast({
              message: '请输入评论内容',
              position: 'middle',
              duration: 3000
            });
        }else {
          this.$http.post(url,{ content:content },{ emulateJSON: true }).then(response=>{
            //清空文本域内容
            this.$refs.textArea.value = '';
            //提示用户添加结果
            Toast({
              message: '评论成功',
              position: 'middle',
              duration: 3000
            });
            //重新获取评论内容
            this.pageIndex = 1;
            this.getCommentData();
          })
        }
      }
    }
  }
</script>