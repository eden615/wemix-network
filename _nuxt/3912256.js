(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{506:function(t,e,n){var content=n(511);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(4).default)("0540be90",content,!0,{sourceMap:!1})},508:function(t,e,n){t.exports=n.p+"img/ico-symbol-draco.fc5414f.svg"},509:function(t,e,n){t.exports=n.p+"img/ico-symbol-cq-zuanshi.00170e5.svg"},510:function(t,e,n){"use strict";n(506)},511:function(t,e,n){var r=n(3)(!1);r.push([t.i,'.card img[data-v-411dda4a]{display:block;width:100%;height:100%;border-radius:5px}.card .card__info[data-v-411dda4a]{display:flex;flex-direction:column;grid-gap:6px;gap:6px;color:#f5f5f5;padding:10px 0}.card .card__info-title[data-v-411dda4a]{display:flex;flex-direction:column;flex-grow:1;text-align:left;display:block;font-family:"Poppins",sans-serif;width:100%;font-size:15px;line-height:22px;display:inline-block;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.card .card__info-desc[data-v-411dda4a]{font-family:"Montserrat",sans-serif;width:100%;text-align:left}.card .card__info-token[data-v-411dda4a]{width:100%}.card .card__info-token-wrapper[data-v-411dda4a]{display:flex;justify-content:center;align-items:center;flex-direction:row;margin-top:auto;width:auto;height:100%}.card .card__info-token-symbol[data-v-411dda4a]{font-family:"Poppins",sans-serif;width:100%;font-size:12px;display:flex;align-items:center;grid-gap:6px;gap:6px}.card .card__info-token-symbol img[data-v-411dda4a]{width:auto;height:15px;position:relative}.card .card__info-token-symbol span[data-v-411dda4a]{opacity:.4}',""]),t.exports=r},512:function(t,e,n){"use strict";n.r(e);var r=n(508),o=n.n(r),d=n(503),l=n.n(d),c=n(509),f=n.n(c),_={mixins:[n(505).a],props:{name:{required:!0,type:String,default:""},desc:{required:!0,type:String,default:""},icon:{required:!0,type:String,default:""},token:{required:!0,type:String,default:""},badge:{required:!1,type:String,default:""}},data:function(){return{symbol:{draco:o.a,tornado:l.a,cq_zuanshi:f.a}}},mounted:function(){},methods:{}},x=(n(510),n(2)),component=Object(x.a)(_,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card"},[n("img",{attrs:{srcset:t.icon,src:t.icon,alt:t.name}}),t._v(" "),n("div",{staticClass:"card__info"},[n("div",{staticClass:"card__info-title"},[n("span",[t._v(t._s(t.name))])]),t._v(" "),n("div",{staticClass:"card__info-token"},[n("div",{staticClass:"card__info-token-wrapper"},[n("div",{staticClass:"card__info-token-symbol"},[n("img",{attrs:{src:t.symbol[t.token.toLowerCase().replace(" ","_")],alt:t.name},on:{error:t.$_errorImageDefault}}),t._v(" "),n("span",[t._v(t._s(t.token))])])])])])])}),[],!1,null,"411dda4a",null);e.default=component.exports},527:function(t,e,n){var content=n(591);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(4).default)("d7764644",content,!0,{sourceMap:!1})},528:function(t,e,n){var content=n(593);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(4).default)("761149ee",content,!0,{sourceMap:!1})},529:function(t,e,n){var content=n(595);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(4).default)("737c33eb",content,!0,{sourceMap:!1})},585:function(t,e,n){"use strict";var r=n(5),o=n(95),d=n(35),l=n(22),c=n(6),f=n(586),_=n(186),x=n(587),m=n(588),v=n(94),h=n(589),y=[],w=y.sort,k=c((function(){y.sort(void 0)})),C=c((function(){y.sort(null)})),S=_("sort"),z=!c((function(){if(v)return v<70;if(!(x&&x>3)){if(m)return!0;if(h)return h<603;var code,t,e,n,r="";for(code=65;code<76;code++){switch(t=String.fromCharCode(code),code){case 66:case 69:case 70:case 72:e=3;break;case 68:case 71:e=4;break;default:e=2}for(n=0;n<47;n++)y.push({k:t+n,v:e})}for(y.sort((function(a,b){return b.v-a.v})),n=0;n<y.length;n++)t=y[n].k.charAt(0),r.charAt(r.length-1)!==t&&(r+=t);return"DGBEFHACIJK"!==r}}));r({target:"Array",proto:!0,forced:k||!C||!S||!z},{sort:function(t){void 0!==t&&o(t);var e=d(this);if(z)return void 0===t?w.call(e):w.call(e,t);var n,r,c=[],_=l(e.length);for(r=0;r<_;r++)r in e&&c.push(e[r]);for(n=(c=f(c,function(t){return function(e,n){return void 0===n?-1:void 0===e?1:void 0!==t?+t(e,n)||0:String(e)>String(n)?1:-1}}(t))).length,r=0;r<n;)e[r]=c[r++];for(;r<_;)delete e[r++];return e}})},586:function(t,e){var n=Math.floor,r=function(t,e){var l=t.length,c=n(l/2);return l<8?o(t,e):d(r(t.slice(0,c),e),r(t.slice(c),e),e)},o=function(t,e){for(var element,n,r=t.length,i=1;i<r;){for(n=i,element=t[i];n&&e(t[n-1],element)>0;)t[n]=t[--n];n!==i++&&(t[n]=element)}return t},d=function(t,e,n){for(var r=t.length,o=e.length,d=0,l=0,c=[];d<r||l<o;)d<r&&l<o?c.push(n(t[d],e[l])<=0?t[d++]:e[l++]):c.push(d<r?t[d++]:e[l++]);return c};t.exports=r},587:function(t,e,n){var r=n(93).match(/firefox\/(\d+)/i);t.exports=!!r&&+r[1]},588:function(t,e,n){var r=n(93);t.exports=/MSIE|Trident/.test(r)},589:function(t,e,n){var r=n(93).match(/AppleWebKit\/(\d+)\./);t.exports=!!r&&+r[1]},590:function(t,e,n){"use strict";n(527)},591:function(t,e,n){var r=n(3)(!1);r.push([t.i,'.play-banner__container[data-v-04693fd7]{box-sizing:border-box;display:flex;justify-content:center;cursor:-webkit-grab;cursor:grab}.play-banner__container[data-v-04693fd7]:active{cursor:-webkit-grabbing;cursor:grabbing}.play-banner__group[data-v-04693fd7]{display:flex;align-items:center;width:100%}.play-banner__wrap[data-v-04693fd7]{position:relative;left:0;right:0;margin:0 auto;width:100%}.play-banner__wrap.show[data-v-04693fd7]{-webkit-animation:ani-fadein .5s cubic-bezier(.215,.61,.355,1);animation:ani-fadein .5s cubic-bezier(.215,.61,.355,1)}.item-banner__title[data-v-04693fd7]{display:block;margin-bottom:10px;font-size:18px;color:#000}.play-banner__set[data-v-04693fd7]{min-width:unset;max-width:unset;width:100%;height:100%}.play-banner__wrap .banner_pagination_group[data-v-04693fd7]{position:absolute;left:0;right:0;bottom:21px;font-size:0;text-align:center}.play-banner__wrap .banner_pagination_group .banner_pagination_wrap[data-v-04693fd7]{display:inline-block;vertical-align:top}.play-banner__wrap .banner_pagination_group .banner_pagination_point[aria-current=true][data-v-04693fd7]{width:27px}.play-banner__wrap .banner_pagination_group .banner_pagination_point[data-v-04693fd7]{border:none;background-color:transparent;cursor:pointer;-webkit-appearance:none;display:block;position:relative;width:15px;height:15px}.play-banner__wrap .banner_pagination_group .banner_pagination_point[aria-current=true][data-v-04693fd7]:before{width:18px;opacity:1}.play-banner__content[data-v-04693fd7]{display:block}.play-banner__content[data-v-04693fd7],.play-banner__content .play-banner__content-group[data-v-04693fd7]{width:100%;height:100%}.play-banner__content .play-banner__content-wrap[data-v-04693fd7]{position:relative;display:flex;justify-content:flex-start;align-items:flex-end;width:100%;height:100%;border-radius:6px;box-shadow:0 2px 6px 0 rgba(0,0,0,.5);background-size:cover;background-repeat:no-repeat;background-position:50% 50%}.play-banner__content .play-banner__content-wrap[data-v-04693fd7]:after{position:absolute;top:0;height:100%;width:100%;background-image:linear-gradient(-180deg,transparent 30%,rgba(0,0,0,.7) 65%,rgba(0,0,0,.9));border-radius:5px;content:""}.play-banner__content .play-banner__content-wrap .play-banner__content-image[data-v-04693fd7]{width:100%;border-radius:6px}.play-banner__content .play-banner__content-wrap .play-banner__text-set[data-v-04693fd7]{z-index:1;position:absolute;bottom:0;padding:15px 26px}.play-banner__content .play-banner__content-wrap .play-banner__text[data-v-04693fd7]{width:100%;height:100%;color:#fff;transition:all .3s}.play-banner__content .play-banner__content-wrap .play-banner__text--title[data-v-04693fd7]{text-align:left;display:block;overflow:hidden;width:100%;font-size:26px;line-height:34px;font-weight:500}.play-banner__content .play-banner__content-wrap .play-banner__text--description[data-v-04693fd7]{width:100%;font-size:17px;text-align:left}.play-banner__content .play-banner__content-wrap .play-banner__text--button-box[data-v-04693fd7]{position:relative;width:-webkit-max-content;width:-moz-max-content;width:max-content}.play-banner__content .play-banner__content-wrap .play-banner__text--button a[data-v-04693fd7]{position:relative;display:block}.play-banner__content .play-banner__content-wrap .play-banner__text--symbol[data-v-04693fd7]{position:absolute;top:-3px;right:-45px;width:26px;height:auto;bottom:0;margin:auto}.play-banner__button[data-v-04693fd7]{margin:10px 0;border-radius:5px}.play-banner__button ul[data-v-04693fd7]{display:flex;grid-gap:20px;gap:20px}.link[data-v-04693fd7]{display:inline-block;height:50px;line-height:50px;border-radius:100px;background-color:#000;vertical-align:top;text-align:center}.link[data-v-04693fd7],.link span[data-v-04693fd7]{position:relative}.link span[data-v-04693fd7]{padding:0 62px 0 26px}.link em[data-v-04693fd7]{font-size:20px;font-weight:700}@media screen and (max-width:768px){.play-banner__content .play-banner__content-wrap .play-banner__text-set[data-v-04693fd7]{padding:15px 20px}.play-banner__content .play-banner__content-wrap .play-banner__text--title[data-v-04693fd7]{font-size:22px;line-height:30px}.play-banner__content .play-banner__content-wrap .play-banner__text--description[data-v-04693fd7]{font-size:15px}.play-banner__content .play-banner__content-wrap .play-banner__text--button .button-size--medium[data-v-04693fd7]{padding:9px 20px}}',""]),t.exports=r},592:function(t,e,n){"use strict";n(528)},593:function(t,e,n){var r=n(3)(!1);r.push([t.i,'.store__container[data-v-68f1f6b0]{box-sizing:border-box;display:flex;justify-content:center;flex-direction:column}.store__container h2[data-v-68f1f6b0]{font-family:"Montserrat-Bold",sans-serif;font-size:20px;color:#f5f5f5;padding-bottom:10px}.store__set[data-v-68f1f6b0]{display:flex;align-items:center;width:100%}.store__group[data-v-68f1f6b0]{position:relative;left:0;right:0;margin:0 auto;width:100%}.store__group ul[data-v-68f1f6b0]{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));grid-gap:36px 26px;gap:36px 26px;width:100%}.store__group li[data-v-68f1f6b0]{height:auto;cursor:pointer;transition:all .1s ease-out;overflow:hidden}.store__group li[data-v-68f1f6b0]:hover{transform:translateY(-3px);box-shadow:0 0 10px 0 rgba(0,0,0,.07);position:relative;z-index:1}.store__group li[data-v-68f1f6b0]:active{transform:translateY(0);box-shadow:0 1px 2px 0 rgba(0,0,0,.07),0 0 5px 0 rgba(0,0,0,.06),0 2px 0 -2px rgba(0,0,0,.2)}.store__content img[data-v-68f1f6b0]{display:block;width:100%;height:100%;border-radius:5px}.store__content .store__game[data-v-68f1f6b0]{display:flex;flex-direction:column;grid-gap:6px;gap:6px;color:#f5f5f5;padding:10px 0}.store__content .store__game--title[data-v-68f1f6b0]{display:flex;flex-direction:column;flex-grow:1;text-align:left;display:block;font-family:"Poppins",sans-serif;width:100%;font-size:15px;line-height:22px;display:inline-block;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.store__content .store__game--description[data-v-68f1f6b0]{font-family:"Montserrat",sans-serif;width:100%;text-align:left}.store__content .store-product__item-inner[data-v-68f1f6b0]{width:100%}.store__content .store-product__item-wrapper[data-v-68f1f6b0]{display:flex;justify-content:center;align-items:center;flex-direction:row;margin-top:auto;width:auto;height:100%}.store__content .store-product__item-cate[data-v-68f1f6b0]{font-family:"Poppins",sans-serif;width:100%;font-size:12px;display:flex;align-items:center;grid-gap:6px;gap:6px}.store__content .store-product__item-cate img[data-v-68f1f6b0]{width:auto;height:16px;position:relative;top:-1px}.store__content .store-product__item-cate span[data-v-68f1f6b0]{opacity:.4}.store__content .store-product__item-aos[data-v-68f1f6b0]{display:flex;height:100%;align-items:center;font-size:17px}.store__content .store-product__item-aos img[data-v-68f1f6b0]{width:18px;position:relative;top:2px}.store__content .store-product__item-ios[data-v-68f1f6b0]{display:flex;width:40px;height:100%;align-items:center;font-size:20px}.store__content .store-product__item-ios img[data-v-68f1f6b0]{width:18px;position:relative;top:2px}@media screen and (max-width:768px){.store__group ul[data-v-68f1f6b0]{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));grid-gap:25px 15px;gap:25px 15px;width:100%}}@media screen and (max-width:400px){.store__group ul[data-v-68f1f6b0]{display:grid;grid-template-columns:repeat(1,minmax(0,1fr));grid-gap:20px 15px;gap:20px 15px;width:100%}}',""]),t.exports=r},594:function(t,e,n){"use strict";n(529)},595:function(t,e,n){var r=n(3)(!1);r.push([t.i,'.store__container[data-v-037bfd26]{box-sizing:border-box;display:flex;justify-content:center;flex-direction:column}.store__container h2[data-v-037bfd26]{font-family:"Montserrat-Bold",sans-serif;font-size:20px;color:#f5f5f5;padding-bottom:10px}.store__set[data-v-037bfd26]{display:flex;align-items:center;width:100%}.store__group[data-v-037bfd26]{position:relative;left:0;right:0;margin:0 auto;width:100%}.store__group ul[data-v-037bfd26]{display:grid;grid-template-columns:repeat(6,minmax(0,1fr));grid-gap:36px 26px;gap:36px 26px;width:100%}.store__group li[data-v-037bfd26]{height:auto;cursor:pointer;transition:all .1s ease-out;overflow:hidden}.store__group li[data-v-037bfd26]:hover{transform:translateY(-3px);box-shadow:0 0 10px 0 rgba(0,0,0,.07);position:relative;z-index:1}.store__group li[data-v-037bfd26]:active{transform:translateY(0);box-shadow:0 1px 2px 0 rgba(0,0,0,.07),0 0 5px 0 rgba(0,0,0,.06),0 2px 0 -2px rgba(0,0,0,.2)}.store__content img[data-v-037bfd26]{display:block;width:100%;height:100%;border-radius:5px}.store__content .store__game[data-v-037bfd26]{display:flex;flex-direction:column;grid-gap:6px;gap:6px;color:#f5f5f5;padding:10px 0}.store__content .store__game--title[data-v-037bfd26]{display:flex;flex-direction:column;flex-grow:1;text-align:left;display:block;font-family:"Poppins",sans-serif;width:100%;font-size:15px;line-height:22px;display:inline-block;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.store__content .store__game--description[data-v-037bfd26]{font-family:"Montserrat",sans-serif;width:100%;text-align:left}.store__content .store-product__item-inner[data-v-037bfd26]{width:100%}.store__content .store-product__item-wrapper[data-v-037bfd26]{display:flex;justify-content:center;align-items:center;flex-direction:row;margin-top:auto;width:auto;height:100%}.store__content .store-product__item-cate[data-v-037bfd26]{font-family:"Poppins",sans-serif;width:100%;font-size:12px;display:flex;align-items:center;grid-gap:6px;gap:6px}.store__content .store-product__item-cate img[data-v-037bfd26]{width:auto;height:16px;position:relative;top:-1px}.store__content .store-product__item-cate span[data-v-037bfd26]{opacity:.4}.store__content .store-product__item-aos[data-v-037bfd26]{display:flex;height:100%;align-items:center;font-size:17px}.store__content .store-product__item-aos img[data-v-037bfd26]{width:18px;position:relative;top:2px}.store__content .store-product__item-ios[data-v-037bfd26]{display:flex;width:40px;height:100%;align-items:center;font-size:20px}.store__content .store-product__item-ios img[data-v-037bfd26]{width:18px;position:relative;top:2px}@media screen and (max-width:1280px){.store__group ul[data-v-037bfd26]{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));grid-gap:36px 26px;gap:36px 26px;width:100%}}@media screen and (max-width:1024px){.store__group[data-v-037bfd26]{padding-right:0}.store__group ul[data-v-037bfd26]{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));grid-gap:36px 20px;gap:36px 20px;width:100%}}@media screen and (max-width:768px){.store__group ul[data-v-037bfd26]{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));grid-gap:30px 15px;gap:30px 15px;width:100%}}@media screen and (max-width:400px){.store__group ul[data-v-037bfd26]{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));grid-gap:30px 15px;gap:30px 15px;width:100%}}',""]),t.exports=r},617:function(t,e,n){var content=n(659);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(4).default)("91779cfe",content,!0,{sourceMap:!1})},642:function(t,e,n){"use strict";n.r(e);n(29),n(585),n(21),n(32);var r=n(502),o=n(508),d=n.n(o),l=n(503),c=n.n(l),f=n(509),_=n.n(f),x={mixins:[r.a],props:{wemixFeaturedGames:{required:!0,type:Array,default:function(){return null}}},data:function(){return{symbol:{draco:d.a,tornado:c.a,cq_zuanshi:_.a},swiperData:null,swiperOption:{breakpoints:{1280:{slidesPerView:"2"},767:{slidesPerView:"1"}},spaceBetween:20,centeredSlides:!1,autoplayDisableOnInteraction:!1,freeMode:!1,freeModeSticky:!1,loop:!0,speed:500,allowTouchMove:!0,simulateTouch:!0,fadeEffect:{crossFade:!0},parallax:!1,observer:!0,observeParents:!0,lazy:{loadPrevNext:!0,loadPrevNextAmount:1},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}},device:""}},watch:{"$store.state.app.device":function(t){console.log(this.bannerSwiper),this.device=t,setTimeout((function(){}),3e3)}},mounted:function(){},created:function(){this.swiperData=this.shuffle(this.wemixFeaturedGames)},methods:{init:function(){this.startProgress=!0},shuffle:function(t){t.sort((function(){return Math.random()-.5}))},stopAutoplay:function(){try{this.startProgress=!1}catch(t){}},startAutoplay:function(){try{this.startProgress=!0}catch(t){console.log(t)}},onSwiperRedied:function(t){console.log(t)},onSwiperSlide:function(t,e){console.log(e)},setButtonStyle:function(t){return"button-color--"+t.toLowerCase()},converter:function(text){return text.replace(/\n/g,"<br />")}}},m=(n(590),n(2)),component=Object(m.a)(x,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"play-banner__container"},[n("div",{staticClass:"play-banner__group"},[n("div",{staticClass:"play-banner__wrap",class:{show:null!==t.swiperData}},[null!==t.swiperData?n("div",{directives:[{name:"swiper",rawName:"v-swiper:bannerSwiper",value:t.swiperOption,expression:"swiperOption",arg:"bannerSwiper"}],staticClass:"swiper",on:{"click-slide":t.onSwiperSlide}},[n("div",{staticClass:"swiper-wrapper"},t._l(t.wemixFeaturedGames,(function(e,i){return n("div",{key:i,staticClass:"swiper-slide"},[n("div",{staticClass:"play-banner__set"},[n("div",{staticClass:"play-banner__content"},[n("div",{staticClass:"play-banner__content-group"},[n("div",{staticClass:"play-banner__content-wrap"},[n("img",{staticClass:"play-banner__content-image",attrs:{src:e.game_img_banner,alt:e.game_name}}),t._v(" "),n("div",{staticClass:"play-banner__text-set"},[n("div",{staticClass:"play-banner__text"},[n("div",{staticClass:"play-banner__text--title"},[n("span",{attrs:{"data-swiper-parallax":"-100"}},[t._v(t._s(e.game_name))])]),t._v(" "),n("div",{staticClass:"play-banner__text--description"},[n("span",{attrs:{"data-swiper-parallax":"-200"}},[t._v(t._s(e.game_desc))])]),t._v(" "),n("div",{staticClass:"play-banner__text--button"},[n("div",{staticClass:"play-banner__text--button-box"},[n("nuxt-link",{attrs:{to:"games/"+e.id,exact:""}},[n("button",{staticClass:"\n                                  button\n                                  button-size--medium\n                                  play-banner__button\n                                  button-color--white-transparent\n                                ",style:{borderLeft:"3px solid "+e.game_color,color:"#fff"},attrs:{type:"button",tabindex:"3"}},[t._v("\n                                Go to details\n                              ")])]),t._v(" "),n("img",{staticClass:"play-banner__text--symbol",attrs:{src:t.symbol[e.game_token.toLowerCase().replace(" ","_")],alt:""}})],1)])])])])])])])])})),0),t._v(" "),n("div",{staticClass:"swiper-button-prev"}),t._v(" "),n("div",{staticClass:"swiper-button-next"})]):t._e()])])])}),[],!1,null,"04693fd7",null);e.default=component.exports},643:function(t,e,n){"use strict";n.r(e);n(16),n(21),n(32);var r=n(512),o=n(502),d=n(505),l={components:{Card:r.default},mixins:[o.a,d.a],props:{wemixReleaseGames:{required:!0,type:Array,default:function(){return null}}},data:function(){return{}},mounted:function(){},methods:{setButtonStyle:function(t){var e=t.toLowerCase();return["black","dark-grey","grey","light-grey","green","pink","purple","sky-blue","white","blue","royal-blue"].includes(e)?"button-color--"+e:"button-color--white"},converter:function(text){return text.replace(/\n/g,"<br />")}}},c=(n(592),n(2)),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"store__container"},[n("h2",[t._v("위믹스 게임")]),t._v(" "),n("div",{staticClass:"store__set"},[n("div",{staticClass:"store__group"},[n("ul",t._l(t.wemixReleaseGames,(function(e,i){return n("li",{key:i},[n("nuxt-link",{attrs:{to:"games/"+e.id,exact:""}},[n("Card",{attrs:{icon:e.game_img_icon_store,name:e.game_name,desc:e.game_desc,token:e.game_token,state:"update"},on:{error:t.$_errorImageDefault}})],1)],1)})),0)])])])}),[],!1,null,"68f1f6b0",null);e.default=component.exports},644:function(t,e,n){"use strict";n.r(e);n(16),n(21),n(32);var r=n(512),o=n(502),d={components:{Card:r.default},mixins:[o.a],props:{wemixComingSoonGames:{required:!0,type:Array,default:function(){return null}}},data:function(){return{playData:{meta:{},data:[{id:"1",attributes:{text:{title:"CSR 레이싱 2",desc:"TORNADO"},image:"https://cdn1.epicgames.com/salesEvent/salesEvent/EN_ACV_DLC_1_EPIC_Store_Landscape_2560x1440_2560x1440-da7df22fb865584060b8d2266e6f5799?h=480&resize=1&w=854",button:[{text:"Google Play",color:"black"},{text:"Apple Store",color:"white"}]}},{id:"2",attributes:{text:{title:"엔젤 사가: 로그라이크 액션 TORNADO",desc:"TORNADO"},image:"https://cdn2.unrealengine.com/egs-kena-branded-desktop-2028x1140-d732dd096318.png",button:[{text:"Google Play",color:"black"},{text:"Apple Store",color:"white"}]}},{id:"3",attributes:{text:{title:"WemadeTree Flight Simulator",desc:"TORNADO"},image:"https://cdn2.unrealengine.com/egs-battlefield2042goldedition-dice-editions-s1-2560x1440-16f30314e17f.jpg?h=480&resize=1&w=854",button:[{text:"Google Play",color:"black"},{text:"Apple Store",color:"white"}]}}]}}},mounted:function(){},methods:{setButtonStyle:function(t){var e=t.toLowerCase();return["black","dark-grey","grey","light-grey","green","pink","purple","sky-blue","white","blue","royal-blue"].includes(e)?"button-color--"+e:"button-color--white"},converter:function(text){return text.replace(/\n/g,"<br />")}}},l=(n(594),n(2)),component=Object(l.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"store__container"},[n("h2",[t._v("출시 예정")]),t._v(" "),n("div",{staticClass:"store__set"},[n("div",{staticClass:"store__group"},[n("ul",t._l(t.wemixComingSoonGames,(function(t,i){return n("li",{key:i},[n("nuxt-link",{attrs:{to:"games/"+t.id,exact:""}},[n("Card",{attrs:{icon:t.game_img_icon,name:t.game_name,desc:t.game_desc,token:t.game_token,state:"update"}})],1)],1)})),0)])])])}),[],!1,null,"037bfd26",null);e.default=component.exports},658:function(t,e,n){"use strict";n(617)},659:function(t,e,n){var r=n(3)(!1);r.push([t.i,".wemix-play__container[data-v-e51b8fb0]{padding:0 25px}.wemix-play__items[data-v-e51b8fb0]{display:flex;flex-direction:column;grid-gap:50px;gap:50px;padding:60px 0 150px}@media screen and (max-width:768px){.wemix-play__container[data-v-e51b8fb0]{padding:0 15px}.wemix-play__items[data-v-e51b8fb0]{display:flex;flex-direction:column;grid-gap:50px;gap:50px;padding:30px 0 150px}}",""]),t.exports=r},707:function(t,e,n){"use strict";n.r(e);var r=n(9),o=(n(63),n(40),n(16),n(34),n(686)),d=n(642),l=n(643),c=n(644),f={name:"Play",components:{Header:o.default,NewsBanner:d.default,NewGames:l.default,ComingGames:c.default},layout:"index",asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,o,d,l,c,f;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.$axios,n=t.store,r=["RivalStarsHorseRacing","BattleField2024","CashBoom","LoveJourneyMatch"],e.next=4,n.getters["game/wemixAllGames"].filter((function(t,i){return r.includes(t.id)}));case 4:return o=e.sent,d=["RivalStarsHorseRacing","BattleField2024","CashBoom","LoveJourneyMatch","HuggySameStretch","PixelGun3D","HomeScapes","EpicSeven","LnightGetStarted","Psychonauts2"],l=n.getters["game/wemixAllGames"].filter((function(t,i){return d.includes(t.id)})),c=["RivalStarsHorseRacing","BattleField2024","CashBoom","LoveJourneyMatch","HuggySameStretch","PixelGun3D","HomeScapes","EpicSeven","LnightGetStarted","Psychonauts2"],f=n.getters["game/wemixAllGames"].filter((function(t,i){return c.includes(t.id)})),e.abrupt("return",{wemixFeaturedGames:o,wemixReleaseGames:l,wemixComingSoonGames:f});case 10:case"end":return e.stop()}}),e)})))()},data:function(){return{}}},_=(n(658),n(2)),component=Object(_.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wemix-play__container"},[n("Header"),t._v(" "),n("NewsBanner",{attrs:{"wemix-featured-games":t.wemixFeaturedGames}}),t._v(" "),n("div",{staticClass:"wemix-play__items"},[n("NewGames",{attrs:{"wemix-release-games":t.wemixReleaseGames}}),t._v(" "),n("ComingGames",{attrs:{"wemix-coming-soon-games":t.wemixComingSoonGames}})],1)],1)}),[],!1,null,"e51b8fb0",null);e.default=component.exports}}]);