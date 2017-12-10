<template>
  <div>
    <div class="goodsStyle" v-for="(item,index) in shopCartList" :key="item.id">
      <mt-switch v-model="item.isSelect" @change="countPriceAndNum()"></mt-switch>
      <div class="goodsPic">
        <img :src="item.thumb_path" alt="">
      </div>
      <div class="goodsDesc">
        <h4>{{item.title}}</h4>
        <p>
          <span>&yen;{{item.sell_price}}</span>
          &nbsp;
          &nbsp;
          <span>商品数量:{{item.count}}</span>
        </p>
      </div>
      <mt-button :disabled="!item.isSelect" size="small" type="danger" @click="deleteGoods(index)">删除</mt-button>
    </div>
    <div class="jiesuan">
      <div class="left">
        <p>总计(不含运费)</p>
        <p>已经勾选商品<span>{{goodsCount}}</span>件,总价<span>{{goodsPrice}}</span></p>
      </div>
      <mt-button size="small" type="danger">去结算</mt-button>
    </div>
  </div>
</template>

<style scoped>
  .goodsStyle {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 5px;
    height: 120px;
  }

  .mint-button--small {
    margin-top: 6px;
  }

  h4 {
    color: #0094ff;
    font-size: 18 px;
  }
  .goodsDesc {
    margin-left: 5px;
    flex: 1;
  }
  .goodsPic {
    width: 80px;
    height: 80px;
    border: 1px solid rgba(92,92,92,.3);
    border-radius: 5px;
    margin: 4px;
  }

  img {
    width: 100%;
    height: 100%;
  }

  .jiesuan {
    display: flex;
    justify-content: space-between;
    padding: 5px;
    background: #ccc;
  }
  .jiesuan p:first-child {
    color: black;
    font-size: 20px;
    font-weight: 900;
  }

  .jiesuan p:last-child {
    font-size: 16px;
  }

  .jiesuan p:last-child span {
    color: red;
    font-size: 18px;
  }
</style>

<script>
  import { Switch } from 'mint-ui';
  import Vue from 'vue';
  import common from '../../common/common.js'
  import { MessageBox } from 'mint-ui';
  Vue.component(Switch.name, Switch);
  export default {
    data(){
      return {
        shopCartList: [],
        goodsCount: 0,
        goodsPrice: 0
      }
    },
    created(){
      this.getShopCartData()
    },
    methods: {
      getShopCartData(){
        const tempObj = {};
        const tempArr = [];
        //从仓库中去除数据
        const goodslist = this.$store.getters.getGoodsList;
        // console.log(goodslist)
        //如果没有数据 就不操作
        if(goodslist.length===0){return}
        //生产{87:5,88:3}
        goodslist.forEach(goods=>{
          if(tempObj[goods.goodsId]){
            tempObj[goods.goodsId] += goods.goodsCount
          }else{
            tempObj[goods.goodsId] = goods.goodsCount
          }
        })
        //[87,88]存到临时数组中
        for(let key in tempObj){
          tempArr.push(key)
        }
        //拼接成最终要的字符串 '87,88'
        const tempStr =  tempArr.join(',');
        //发送网络请求
        const url =`${common.apihost}api/goods/getshopcarlist/${tempStr}`;
        this.$http.get(url).then(response=>{
          response.body.message.forEach(item=>{
            item.count = tempObj[item.id];
            item.isSelect = true;
          })
          this.shopCartList = response.body.message;
          // console.log(response.body.message);
          this.countPriceAndNum();
        })

      },
      //计算总价格 总数量
      countPriceAndNum(){
        let tempGoodsCount = 0;
        let tempGoodsPrice = 0;
        this.shopCartList.forEach(item=>{
          if(item.isSelect){
            tempGoodsCount += item.count;
            tempGoodsPrice += item.count*item.sell_price;
          }
        })

        this.goodsCount = tempGoodsCount;
        this.goodsPrice = tempGoodsPrice;
      },
      //删除商品
      deleteGoods(index){
        MessageBox.confirm('确定要删除此商品吗?').then(action => {
            //删除仓库数据
            const id = this.shopCartList[index].id;
            //1.根据id去删除仓库里面的数据
            this.$store.commit('deleteGoodsByGoodsId',id);
            //2.干掉选中的那个
            this.shopCartList.splice(index,1);
            //3.重新渲染
            this.countPriceAndNum();
          },cancel=>{
                   
          });
      }
    }
  }
</script>