(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{534:function(e,t,o){var content=o(606);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(4).default)("9359991e",content,!0,{sourceMap:!1})},605:function(e,t,o){"use strict";o(534)},606:function(e,t,o){var n=o(3)(!1);n.push([e.i,'.modal__screenshot-container[data-v-415067ee]{position:fixed!important;top:0!important;bottom:0!important;left:0!important;right:0!important;width:100%!important;height:100%!important;z-index:1000!important;display:flex;align-content:space-around;justify-content:space-around;flex-wrap:wrap;flex-direction:row;-webkit-animation:ani-slideup .8s cubic-bezier(.215,.61,.355,1);animation:ani-slideup .8s cubic-bezier(.215,.61,.355,1)}.modal__dimmed[data-v-415067ee]{position:absolute;width:100%;height:100%;background-color:rgba(0,0,0,.9);content:""}.modal__screenshot-warpper[data-v-415067ee]{display:block;position:fixed;top:0;bottom:0;left:0;right:0;z-index:10000;opacity:1;visibility:visible;transition:opacity .3s}.modal__screenshot-warpper .swiper-container[data-v-415067ee]{width:100%;height:100%}.modal__screenshot-warpper img[data-v-415067ee]{margin:auto;position:absolute;top:0;left:0;right:0;bottom:0;width:auto;height:auto;max-width:100%;max-height:100%}',""]),e.exports=n},649:function(e,t,o){"use strict";o.r(t);o(61);var n={name:"ConfirmModal",props:{visible:{required:!0,type:Boolean,default:!1},position:{required:!0,type:Number,default:0},gameData:{required:!0,type:Object,default:function(){return null}}},data:function(){return{reallyIndex:null,swiperOption:{slidesPerView:1,speed:250,touchRatio:.2,slideToClickedSlide:!0,direction:"horizontal",loop:!0,loopAdditionalSlides:1,preloadImages:!1,lazy:{loadPrevNext:!0,loadPrevNextAmount:1},pagination:{el:"#modal-screenshot-pagination",clickable:!0},navigation:{nextEl:"#modal-screenshot-next",prevEl:"#modal-screenshot-prev"}}}},computed:{locale:function(){return this.$store.state.app.locale}},methods:{clickSlide:function(e,t){this.reallyIndex=e,this.setFullScreenshot()},setFullScreenshot:function(){console.log(this.gameData.game_img_screenshot[this.reallyIndex])},clickClose:function(e){e.stopPropagation(),this.reallyIndex=null,this.$emit("update:visible",!1)}}},l=(o(605),o(2)),component=Object(l.a)(n,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return e.visible?o("div",{staticClass:"modal__screenshot-container",on:{click:e.clickClose}},[o("div",{staticClass:"modal__dimmed"}),e._v(" "),o("div",{staticClass:"modal__screenshot-set"},[o("div",{staticClass:"modal__screenshot-warpper"},[o("div",{directives:[{name:"swiper",rawName:"v-swiper:mySwiper",value:e.swiperOption,expression:"swiperOption",arg:"mySwiper"}],staticClass:"swiper",on:{"click-slide":e.clickSlide}},[o("div",{staticClass:"swiper-wrapper"},e._l(e.gameData.game_img_screenshot,(function(e,i){return o("div",{key:i,staticClass:"swiper-slide"},[o("img",{attrs:{src:e,alt:e.game_name,"data-id":i}})])})),0)]),e._v(" "),o("div",{staticClass:"modal__loading"},[o("LoadingThreePoint",{attrs:{color:"#fff"}})],1)])])]):e._e()}),[],!1,null,"415067ee",null);t.default=component.exports}}]);