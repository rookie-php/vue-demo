<template>
  <div>
    <div class="left" @click="subtract()">-</div>
    <div class="center">{{count}}</div>
    <div class="right" @click="add()">+</div>
  </div>
</template>

<style scoped>
  .left,.center,.right {
    width: 35px;
    height: 35px;
    border: 1px solid rgba(92,92,92,.3);
    display: inline-block;
    text-align: center;
    line-height: 35px;
    margin-bottom: 6px;
  }

  .center {
    width: 40px;
  }
</style>

<script>
  export default {
    props: ["inputnumber"],
    data(){
      return {
        count: 1,
        stock_quantity: this.inputnumber
      }
    },
    methods: {
      subtract(){
        if(this.count<=1){
          return
        }
        this.count--;
        this.notify();
      },
      add(){
        if(this.count>=this.stock_quantity){
          return
        }
        this.count++;  
        this.notify();      
      },
      //发送方通过触发事件 然后传值
      notify(){
        this.$emit('countChange',this.count)
      }
    }
  }
</script>