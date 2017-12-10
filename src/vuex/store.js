import Vue from 'vue';
//导入vuex
import Vuex from 'vuex';
Vue.use(Vuex);
//创建仓库
const store = new Vuex.Store({
  state: {
    goodsList: [] //存 用户添加进来的商品
  },
  getters: {
    //返回购物车中加入商品的总数
    getGoodsTotal(state){
      let totalCount = 0;
      state.goodsList.forEach(item=>{
        totalCount += item.goodsCount
      })
      return totalCount;
    },
    //获取购物车中的所有数据
    getGoodsList(state){
      return state.goodsList;
    }
  },
  mutations: {
    /**
     * goodsInfo.vue 调用
     * @param {*} state 固定参数 
     * @param {*} goods 传递过来的商品参数 {goodsId:23,goodsCount: 2}
     */
    addGoods(state,goods){
      state.goodsList.push(goods);
    },
    deleteGoodsByGoodsId(state,goodsId){
      for(var i = state.goodsList.length-1;i>=0;i--){
        if(+state.goodsList[i].goodsId===goodsId){
        
          state.goodsList.splice(i,1);
        }
      }
    }
    
  }
})

export default store;