<template>
  <div>
    <ul class="mui-table-view mui-grid-view">
      <li class="mui-table-view-cell mui-media mui-col-xs-6" v-for="item in goodslistArr" :key="item.id">
       <div class="goodsStyle">
         <router-link :to="'/goods/goodsinfo/'+item.id">
          <img class="mui-media-object" :src="item.img_url">
          <div class="title">{{item.title}}</div>
          <div class="goods">
            <p class="price">
              <span class="priceNow">&yen;{{item.sell_price}}</span>
              <span class="priceOld">&yen;{{item.market_price}}</span>
            </p>
            <p class="hot">
              <span>热卖中</span>
              <span>剩余60件</span>
            </p>
          </div>
        </router-link>
       </div>
      </li>
    </ul>
  </div>
</template>

<style scoped>
  .mui-table-view.mui-grid-view {
    padding: 0;
    margin: 0;
  }
  .mui-table-view.mui-grid-view .mui-table-view-cell {
    margin: 0;
    padding: 5px;
  }

  .goodsStyle {
    border: 1px solid rgba(92,92,92,0.3);;
    box-shadow: 0px 0px 5px rgba(92,92,92,0.3);;
    border-radius: 5px;
    padding: 5px;
  }

  .mui-table-view-cell >a {
    margin: 0;
    padding: 0;
  }

  .title {
    color: black;
    font-size: 14px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }

  .goods .price {
    display: flex;
    justify-content: space-between;
  }

  .goods .price .priceNow {
    font-size: 16px;
    color: red;
  }

  .goods .price .priceOld {
    text-decoration: line-through;
  }

  .goods .hot {
    display: flex;
    justify-content: space-between;
  }
  
</style>


<script>
  import common from '../../common/common.js'
  export default {
    data(){
      return {
        goodslistArr: []
      }
    },
    created(){
      this.getGoodsData()
    },
    methods: {
      getGoodsData(){
        const url = `${common.apihost}api/getgoods`;
        this.$http.get(url).then(response=>{
          this.goodslistArr = response.body.message;
          // console.log(this.goodslistArr);
        })
      }
    }
  }
</script>