(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{503:function(t,e,r){t.exports=r.p+"img/ico-symbol-tornado.5fefdc6.svg"},505:function(t,e,r){var content=r(511);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(4).default)("c5c2a174",content,!0,{sourceMap:!1})},506:function(t,e,r){"use strict";var o=r(507),n=r.n(o);e.a={data:function(){return{ERROR_IMAGE_URL:n.a}},methods:{$_errorImageDefault:function(t){t.target.src=this.ERROR_IMAGE_URL}}}},507:function(t,e,r){t.exports=r.p+"img/default.9e1bc43.svg"},508:function(t,e,r){t.exports=r.p+"img/ico-symbol-draco.fc5414f.svg"},509:function(t,e,r){t.exports=r.p+"img/ico-symbol-cq-zuanshi.00170e5.svg"},510:function(t,e,r){"use strict";r(505)},511:function(t,e,r){var o=r(3)(!1);o.push([t.i,'.card .card__image-wrapper img[data-v-792d3780]{display:block;width:100%;height:100%;border-radius:5px}.card .card__image-wrapper.wide[data-v-792d3780]{position:relative;padding-bottom:56.25%;height:0;width:100%}.card .card__image-wrapper.wide img[data-v-792d3780]{display:block;position:absolute;-o-object-fit:cover;object-fit:cover;width:100%;height:100%;border-radius:5px}.card .card__info[data-v-792d3780]{display:flex;flex-direction:column;grid-gap:6px;gap:6px;color:#f5f5f5;padding:10px 0}.card .card__info-title[data-v-792d3780]{display:flex;flex-direction:column;flex-grow:1;text-align:left;display:block;font-family:"Poppins",sans-serif;width:100%;font-size:15px;line-height:22px;display:inline-block;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.card .card__info-desc[data-v-792d3780]{font-family:"Montserrat",sans-serif;width:100%;text-align:left}.card .card__info-token[data-v-792d3780]{width:100%}.card .card__info-token-wrapper[data-v-792d3780]{display:flex;justify-content:center;align-items:center;flex-direction:row;margin-top:auto;width:auto;height:100%}.card .card__info-token-symbol[data-v-792d3780]{font-family:"Poppins",sans-serif;width:100%;font-size:12px;display:flex;align-items:center;grid-gap:6px;gap:6px}.card .card__info-token-symbol img[data-v-792d3780]{width:auto;height:15px;position:relative}.card .card__info-token-symbol span[data-v-792d3780]{opacity:.4}',""]),t.exports=o},512:function(t,e,r){"use strict";r.r(e);var o=r(508),n=r.n(o),d=r(503),c=r.n(d),l=r(509),f=r.n(l),_={mixins:[r(506).a],props:{name:{required:!0,type:String,default:""},desc:{required:!0,type:String,default:""},icon:{required:!0,type:String,default:""},token:{required:!0,type:String,default:""},badge:{required:!1,type:String,default:""},type:{required:!1,type:String,default:""}},data:function(){return{symbol:{draco:n.a,tornado:c.a,cq_zuanshi:f.a}}},mounted:function(){},methods:{}},m=(r(510),r(2)),component=Object(m.a)(_,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"card"},[r("div",{staticClass:"card__image-wrapper",class:t.type},[r("img",{attrs:{src:t.icon,alt:t.name},on:{error:t.$_errorImageDefault}})]),t._v(" "),r("div",{staticClass:"card__info"},[r("div",{staticClass:"card__info-title"},[r("span",[t._v(t._s(t.name))])]),t._v(" "),r("div",{staticClass:"card__info-token"},[r("div",{staticClass:"card__info-token-wrapper"},[r("div",{staticClass:"card__info-token-symbol"},[r("img",{attrs:{src:t.symbol[t.token.toLowerCase().replace(" ","_")],alt:t.name},on:{error:t.$_errorImageDefault}}),t._v(" "),r("span",[t._v(t._s(t.token))])])])])])])}),[],!1,null,"792d3780",null);e.default=component.exports}}]);