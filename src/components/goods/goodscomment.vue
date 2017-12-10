<template>
  <div>
    <subcomponent :commentId="this.$route.query.goodsId"></subcomponent>
  </div>
</template>


<script>
 //导入子组件
 import subcomponent from '../subcomponents/subcomponent.vue'
  export default {
    components: {
      subcomponent
    }
  }
</script>