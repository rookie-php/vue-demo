webpackJsonp([9],{201:function(t,e,i){"use strict";function a(t){r||i(244)}Object.defineProperty(e,"__esModule",{value:!0});var n=i(246),s=i.n(n),o=i(247),r=!1,d=i(5),l=a,c=d(s.a,o.a,!1,l,"data-v-42b415a4",null);c.options.__file="src\\components\\goods\\goodslist.vue",c.esModule&&Object.keys(c.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),e.default=c.exports},206:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={apihost:"http://vue.studyit.io/"}},244:function(t,e,i){var a=i(245);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);i(6)("2a505f46",a,!1)},245:function(t,e,i){e=t.exports=i(3)(void 0),e.push([t.i,"\n.mui-table-view.mui-grid-view[data-v-42b415a4] {\n  padding: 0;\n  margin: 0;\n}\n.mui-table-view.mui-grid-view .mui-table-view-cell[data-v-42b415a4] {\n  margin: 0;\n  padding: 5px;\n}\n.goodsStyle[data-v-42b415a4] {\n  border: 1px solid rgba(92,92,92,0.3);;\n  box-shadow: 0px 0px 5px rgba(92,92,92,0.3);;\n  border-radius: 5px;\n  padding: 5px;\n}\n.mui-table-view-cell >a[data-v-42b415a4] {\n  margin: 0;\n  padding: 0;\n}\n.title[data-v-42b415a4] {\n  color: black;\n  font-size: 14px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 2;\n}\n.goods .price[data-v-42b415a4] {\n  display: flex;\n  justify-content: space-between;\n}\n.goods .price .priceNow[data-v-42b415a4] {\n  font-size: 16px;\n  color: red;\n}\n.goods .price .priceOld[data-v-42b415a4] {\n  text-decoration: line-through;\n}\n.goods .hot[data-v-42b415a4] {\n  display: flex;\n  justify-content: space-between;\n}\n\n",""])},246:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i(206),n=function(t){return t&&t.__esModule?t:{default:t}}(a);e.default={data:function(){return{goodslistArr:[]}},created:function(){this.getGoodsData()},methods:{getGoodsData:function(){var t=this,e=n.default.apihost+"api/getgoods";this.$http.get(e).then(function(e){t.goodslistArr=e.body.message})}}}},247:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("ul",{staticClass:"mui-table-view mui-grid-view"},t._l(t.goodslistArr,function(e){return i("li",{key:e.id,staticClass:"mui-table-view-cell mui-media mui-col-xs-6"},[i("div",{staticClass:"goodsStyle"},[i("router-link",{attrs:{to:"/goods/goodsinfo/"+e.id}},[i("img",{staticClass:"mui-media-object",attrs:{src:e.img_url}}),t._v(" "),i("div",{staticClass:"title"},[t._v(t._s(e.title))]),t._v(" "),i("div",{staticClass:"goods"},[i("p",{staticClass:"price"},[i("span",{staticClass:"priceNow"},[t._v("¥"+t._s(e.sell_price))]),t._v(" "),i("span",{staticClass:"priceOld"},[t._v("¥"+t._s(e.market_price))])]),t._v(" "),i("p",{staticClass:"hot"},[i("span",[t._v("热卖中")]),t._v(" "),i("span",[t._v("剩余60件")])])])])],1)])}))])},n=[];a._withStripped=!0;var s={render:a,staticRenderFns:n};e.a=s}});