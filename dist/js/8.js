webpackJsonp([8],{203:function(t,e,n){"use strict";function o(t){r||n(257)}Object.defineProperty(e,"__esModule",{value:!0});var i=n(259),s=n.n(i),a=n(260),r=!1,d=n(5),u=o,c=d(s.a,a.a,!1,u,"data-v-9a065408",null);c.options.__file="src\\components\\goods\\pictureAndText.vue",c.esModule&&Object.keys(c.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),e.default=c.exports},206:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={apihost:"http://vue.studyit.io/"}},257:function(t,e,n){var o=n(258);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);n(6)("cb41b03c",o,!1)},258:function(t,e,n){e=t.exports=n(3)(void 0),e.push([t.i,"\n.title[data-v-9a065408] {\n  padding: 5px;\n  border-bottom: 1px solid rgba(92,92,92,.3);\n}\nh3[data-v-9a065408] {\n  font-size: 16px;\n  text-align: center;\n  color:#0094ff;\n}\n.content[data-v-9a065408] {\n  padding: 10px;\n  width: 100%;\n}\np[data-v-9a065408] {\n  font-size: 14px;\n}\n\n",""])},259:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(206),i=function(t){return t&&t.__esModule?t:{default:t}}(o);e.default={data:function(){return{pictureAndText:{}}},created:function(){this.getPictureAndTextData()},methods:{getPictureAndTextData:function(){var t=this,e=i.default.apihost+"api/goods/getdesc/"+this.$route.params.goodsId;this.$http.get(e).then(function(e){t.pictureAndText=e.body.message[0]})}}}},260:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"title"},[n("h3",[t._v(t._s(t.pictureAndText.title))])]),t._v(" "),n("div",{staticClass:"content",domProps:{innerHTML:t._s(t.pictureAndText.content)}})])},i=[];o._withStripped=!0;var s={render:o,staticRenderFns:i};e.a=s}});