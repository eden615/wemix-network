(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{534:function(t,o,n){var content=n(604);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(4).default)("06ab1757",content,!0,{sourceMap:!1})},603:function(t,o,n){"use strict";n(534)},604:function(t,o,n){var e=n(3)(!1);e.push([t.i,".wg_info[data-v-189810f0]{grid-area:desc;position:sticky;top:125px;width:400px;border-radius:5px;border-top:3px solid #03c75a;border-top-left-radius:3px;border-top-right-radius:3px}.wg_info .wg_info-warpper[data-v-189810f0]{padding:30px;background:hsla(0,0%,100%,.03);height:calc(100% - 60px);display:grid;grid-template-columns:1fr;flex-direction:column;justify-content:space-between;border-radius:5px;box-shadow:0 2px 6px 0 rgba(0,0,0,.5)}.wg_info .wg_info-info[data-v-189810f0]{display:flex;flex-direction:column}.wg_info .wg_info-info h4[data-v-189810f0]{color:#f5f5f5;font-size:14px;line-height:18px}.wg_info .wg_info-info[data-v-189810f0],.wg_info .wg_info-info p[data-v-189810f0]{color:#9a9a9a;font-size:14px}.wg_info .wg_info-box[data-v-189810f0]{display:flex;align-items:center;justify-content:space-between;grid-gap:20px;gap:20px;border-bottom:1px solid hsla(0,0%,100%,.05);padding:14px 0}.wg_info .wg_info-box[data-v-189810f0]:last-child{border-bottom:0 solid hsla(0,0%,100%,.05)}.wg_info .wg_info-box.os[data-v-189810f0]{display:flex;flex-direction:row;grid-gap:10px;gap:10px}.wg_info .wg_info-box .icon[data-v-189810f0]{position:relative;display:flex;align-items:flex-end;grid-gap:10px;gap:10px}.wg_info .wg_info-box .icon a[data-v-189810f0]{color:#9a9a9a}.wg_info .wg_info-box .icon a[data-v-189810f0]:hover{transform:rotate(-10deg)}.wg_info .wg_info-box .icon .google[data-v-189810f0]{font-size:19px}.wg_info .wg_info-box .icon .apple[data-v-189810f0]{font-size:23px}.wg_info .wg_info-box .icon .book[data-v-189810f0]{font-size:17px}.wg_info .wg_info-box a[data-v-189810f0]{color:#9a9a9a}.wg_info .wg_info-box a[data-v-189810f0]:hover{color:var(--color-hover)}.wg_info .wg_info-link button[data-v-189810f0]{width:100%;height:50px;margin-top:64px;font-size:14px;color:#121212;background:#03c75a;border-radius:5px;transition:all .25s}.wg_info .wg_info-link button[data-v-189810f0]:hover{transition:all .25s;filter:brightness(.9)}.wg_info .wg_info-link button[data-v-189810f0]:active{transition:all .25s;filter:brightness(1)}.wg_info .wg_info-mobile-btn[data-v-189810f0]{display:none}@media screen and (max-width:1024px){.wg_info[data-v-189810f0]{grid-area:desc;position:sticky;top:125px;width:100%;border-radius:5px;border-top:0 solid #03c75a!important;border-top-left-radius:3px;border-top-right-radius:3px;margin-top:0}.wg_info .wg_info-warpper[data-v-189810f0]{padding:0 20px;border-radius:5px}.wg_info .wg_info-link button[data-v-189810f0]{display:none}.wg_info .wg_info-mobile-btn[data-v-189810f0]{display:block}.wg_info .wg_info-mobile-btn button[data-v-189810f0]{width:100%;height:50px;margin:20px 0;font-size:14px;color:#121212;background:#03c75a;border-radius:5px;transition:all .25s}.wg_info .wg_info-mobile-btn button[data-v-189810f0]:hover{transition:all .25s;filter:brightness(.9)}.wg_info .wg_info-mobile-btn button[data-v-189810f0]:active{transition:all .25s;filter:brightness(1)}}@media screen and (max-width:768px){.wg_info .wg_info-info h4[data-v-189810f0]{font-size:13px;line-height:18px}.wg_info .wg_info-info[data-v-189810f0],.wg_info .wg_info-info p[data-v-189810f0]{font-size:13px}.wg_info .wg_info-box[data-v-189810f0]{padding:10px 0}.wg_info .wg_info-mobile-btn button[data-v-189810f0]{margin:15px 0}}",""]),t.exports=e},648:function(t,o,n){"use strict";n.r(o);n(33),n(16),n(21),n(32);var e=n(123),r={components:{},props:{gameData:{required:!0,type:Object,default:function(){return null}}},data:function(){return{query:{page:0,limit:20},color:null}},computed:{isMobile:function(){return"mobile"===this.$store.state.app.device},styleObject:function(){return{"--color-hover":this.gameData.game_color}}},mounted:function(){},methods:{getClass:function(){return this.isMobile?"borderTop: 0px solid ".concat(this.gameData.game_color," "):"borderTop: 3px solid ".concat(this.gameData.game_color," ")},getFullSplitString:function(t,o,n){return Object(e.a)(t,o,n)},getCategory:function(){var t="";return this.gameData.game_cate.forEach((function(o,i){t+=""===t?o.toUpperCase():", "+o.toUpperCase()})),t},setButtonStyle:function(t){var o=t.toLowerCase();return["black","dark-grey","grey","light-grey","green","pink","purple","sky-blue","white","blue","royal-blue"].includes(o)?"button-color--"+o:"button-color--white"},converter:function(text){return text.replace(/\n/g,"<br />")}}},f=(n(603),n(2)),component=Object(f.a)(r,(function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("section",{staticClass:"wg_info",style:t.getClass()},[n("div",{staticClass:"wg_info-mobile-btn"},[n("button",{staticClass:"button",style:{background:t.gameData.game_color},attrs:{type:"button"}},[t._v("\n      Go to Play\n    ")])]),t._v(" "),n("div",{staticClass:"wg_info-warpper"},[n("div",{staticClass:"wg_info-info"},[n("div",{staticClass:"wg_info-box"},[n("h4",[t._v("개발사")]),t._v(" "),n("p",[t._v(t._s(t.gameData.game_developer))])]),t._v(" "),n("div",{staticClass:"wg_info-box os"},[n("h4",[t._v("플랫폼")]),t._v(" "),n("div",{staticClass:"icon"},[n("a",{style:t.styleObject,attrs:{href:"javascript:;"}},[n("fa",{staticClass:"google",attrs:{icon:["fab","google-play"]}})],1),t._v(" "),n("a",{style:t.styleObject,attrs:{href:"javascript:;"}},[n("fa",{staticClass:"apple",attrs:{icon:["fab","apple"]}})],1)])]),t._v(" "),n("div",{staticClass:"wg_info-box"},[n("h4",[t._v("출시일")]),t._v(" "),n("p",[t._v(t._s(t.gameData.game_created_at))])]),t._v(" "),n("div",{staticClass:"wg_info-box"},[n("h4",[t._v("장르")]),t._v(" "),n("p",[t._v(t._s(t.getCategory()))])]),t._v(" "),n("div",{staticClass:"wg_info-box"},[n("h4",[t._v("토큰 정보")]),t._v(" "),n("p",[t._v(t._s(t.gameData.game_token))])]),t._v(" "),n("div",{staticClass:"wg_info-box address"},[n("h4",[t._v("토큰 주소")]),t._v(" "),n("p",[n("a",{style:t.styleObject,attrs:{href:"javascript:;"}},[t._v("\n            "+t._s(t.getFullSplitString(t.gameData.game_token_address,6,6))+"\n          ")])])]),t._v(" "),n("div",{staticClass:"wg_info-box"},[n("h4",[t._v("홈페이지")]),t._v(" "),n("p",[n("a",{style:t.styleObject,attrs:{href:"javascript:;"}},[t._v("\n            "+t._s(t.gameData.game_site)+"\n          ")])])]),t._v(" "),n("div",{staticClass:"wg_info-box"},[n("h4",[t._v("백서")]),t._v(" "),n("div",{staticClass:"icon"},[n("a",{style:t.styleObject,attrs:{href:"javascript:;"}},[n("fa",{staticClass:"book",attrs:{icon:["fas","book-open"]}})],1)])])]),t._v(" "),n("div",{staticClass:"wg_info-link"},[n("button",{staticClass:"button",style:{background:t.gameData.game_color},attrs:{type:"button"}},[t._v("\n        Go to Play\n      ")])])])])}),[],!1,null,"189810f0",null);o.default=component.exports}}]);