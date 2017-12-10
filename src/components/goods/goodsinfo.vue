<template>
  <div>
    <!-- 轮播图 -->
    <div class="lunbo">
      <slideshow :swipeUrl="'api/getthumimages/'+this.$route.params.goodsId" :swiperTime="2000"></slideshow>
    </div>
    <!-- 商品详情 -->
    <div class="goodsInfo">
      <h5>{{goodsInfoData.title}}</h5>
      <p>
        市场价: <del>&yen;{{goodsInfoData.market_price}}</del>
        &nbsp;
        &nbsp;
        销售价: <span class="sellPrice">&yen;{{goodsInfoData.sell_price}}</span>
      </p>
      <inputNum v-if="goodsInfoData.stock_quantity" :inputnumber="goodsInfoData.stock_quantity" v-on:countChange="getInputNumCount"></inputNum>
      <mt-button size="small" type="primary">立即购买</mt-button>
      <mt-button @click="addToShowCart()" size="small" type="danger">加入购物车</mt-button>
    </div>  
    <!-- 商品参数 -->
    <div class="goodsParam">
      <h6>商品参数</h6>
      <ul>
        <li>商品货号:{{goodsInfoData.goods_no}}</li>
        <li>库存情况:{{goodsInfoData.stock_quantity}}</li>
        <li>上架时间:{{goodsInfoData.add_time | fmtDate}}</li>
      </ul>
    </div>
    <!-- 图文介绍&商品评论 -->
    <div class="goodsProduct">
      <mt-button size="large" @click="goToPicAndText()" type="primary" plain>图文介绍</mt-button>
      <mt-button size="large" @click="goToGoodsComment()" type="danger" plain>商品评论</mt-button>
    </div>
  </div>
</template>

<style scoped>
  .lunbo,.goodsInfo,.goodsParam,.goodsProduct {
    border: 1px solid rgba(92,92,92,.3);
    border-radius: 5px;
    margin: 10px;
    padding: 5px;
  }

  h5 {
    font-size:14px;
    border-bottom: 1px solid rgba(92,92,92,.3);
    padding-bottom: 5px;
    color: #0094ff;
  }

  .sellPrice {
    color: red;
    font-size: 14px;
  }
  h6 {
    border-bottom: 1px solid rgba(92,92,92,.3);
    padding-bottom: 5px;
  }
  ul li {
    font-size: 12px;
    list-style: none;
  }

  .mint-button--danger.is-plain {
    margin-top: 10px;
  }
</style>

<script>
  import common from '../../common/common.js';
  //导入子组件
  import slideshow from '../subcomponents/slideshow.vue';
  import inputNum from '../subcomponents/inputnum.vue';
  //导入公共vue
  import bus from '../../common/commonvue.js';
  import { Toast } from 'mint-ui';

  export default {
    data(){
      return {
        goodsInfoData: {},
        goodsCount: 1
      }
    },
    created(){
      this.getGoodsInfo();
    },
    methods: {
      getGoodsInfo(){
        const url = `${common.apihost}api/goods/getinfo/${this.$route.params.goodsId}`;
        this.$http.get(url).then(response=>{
          this.goodsInfoData = response.body.message[0];
          // console.log(this.goodsInfoData);
        })
      },
      //跳转到图文介绍中去
      goToPicAndText(){
        this.$router.push({ path: `/goods/pictureAndText/${this.$route.params.goodsId}` })
        // 命名的路由 不带参数的时候使用 刷新会丢失id
        // this.$router.push({ name: 'pictureAndText', params: { goodsId: this.$route.params.goodsId }})
      },
      //跳转到商品评论
      goToGoodsComment(){
        // 带查询参数，变成 /register?plan=private
          this.$router.push({ path: '/goods/goodscomment', query: { goodsId: this.$route.params.goodsId }})
      },
      //获取子组件传递过来的值的处理函数
      getInputNumCount(num){
        this.goodsCount = num;
      },
      //加入到购物车
      addToShowCart(){
        //提示信息
      Toast({
          message: '添加成功',
          position: 'middle',
          duration: 3000
        });
        // bus.$emit('changeBadge',this.goodsCount)
        const goods = { goodsId:this.$route.params.goodsId,goodsCount:this.goodsCount };
        //同步的往仓库中去存储数据
        this.$store.commit('addGoods',goods);
      }
    },
    components: {
      slideshow: slideshow,
      inputNum: inputNum
    }
  }
</script>