(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{212:function(t,e,r){var content=r(217);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(16).default)("63cfdf21",content,!0,{sourceMap:!1})},213:function(t,e,r){var content=r(219);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(16).default)("20db7586",content,!0,{sourceMap:!1})},215:function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));var n=r(70);var d=r(87);function o(t){return function(t){if(Array.isArray(t))return Object(n.a)(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||Object(d.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},216:function(t,e,r){"use strict";var n=r(212);r.n(n).a},217:function(t,e,r){(e=r(15)(!1)).push([t.i,'.breadcrumb-container[data-v-7d96ae4b]{position:absolute;padding:.75em;bottom:0;left:0;width:100%;margin-left:-.75em}.breadcrumb-container .crumbs[data-v-7d96ae4b]{padding:0;list-style-type:none}.breadcrumb-container .crumb[data-v-7d96ae4b]{background:#fff;height:2em;display:inline-flex;justify-content:center;align-items:center;position:relative;margin:.5em 0 0 .75em}.breadcrumb-container .crumb[data-v-7d96ae4b]:not(:last-child):after{content:" ";border:1em solid transparent;border-left:.5em solid #fff;height:1em;position:absolute;right:-1.5em;z-index:9999}.breadcrumb-container .crumb__link[data-v-7d96ae4b]{color:#19175b;font-size:.875em;font-weight:700;padding:.5rem .375rem .5rem .5rem}',""]),t.exports=e},218:function(t,e,r){"use strict";var n=r(213);r.n(n).a},219:function(t,e,r){(e=r(15)(!1)).push([t.i,".hero[data-v-7c2de4d7]{position:relative;width:100%;max-width:26em;margin:0 auto}.hero__background[data-v-7c2de4d7]{position:relative;padding-bottom:7rem;overflow:hidden}.hero__background__image[data-v-7c2de4d7]{position:absolute;top:0;left:0;right:0;width:100%;-webkit-filter:blur(.5rem);filter:blur(.5rem)}",""]),t.exports=e},220:function(t,e,r){"use strict";var n=r(86),d=(r(69),r(215)),o=(r(88),{data:function(){return{items:[]}},created:function(){var t=this.$route.path.split("/");t[0]="home",this.items=t},methods:{path:function(t){if(0===t)return"/";var e=Object(d.a)(this.items);return e.shift(),"/"+e.slice(0,t).join("/").toLowerCase()},prettyCrumb:function(t){return(t.charAt(0).toUpperCase()+t.substr(1)).replace(/-/g," ")}}}),c=(r(216),r(6)),l=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"breadcrumb-container"},[r("ul",{staticClass:"crumbs"},t._l(t.items,(function(e,n){return e.length>1?r("li",{key:n,staticClass:"crumb",class:{"is-active":t.items.length===n+1}},[r("nuxt-link",{staticClass:"crumb__link",attrs:{to:t.path(n)}},[t._v(t._s(t.prettyCrumb(e)))])],1):t._e()})),0)])}),[],!1,null,"7d96ae4b",null).exports,m={components:{Header:n.a,Breadcrumb:l},props:{image:{type:Object,required:!0}}},_=(r(218),Object(c.a)(m,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"hero"},[e("Header",{attrs:{showBackButton:!0}}),e("div",{staticClass:"hero__background"},[this.image?e("img",{staticClass:"hero__background__image",attrs:{src:this.image.src,srcSet:this.image.srcSet}}):this._e(),e("Breadcrumb")],1)],1)}),[],!1,null,"7c2de4d7",null));e.a=_.exports},221:function(t,e,r){var content=r(227);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(16).default)("63c71cb6",content,!0,{sourceMap:!1})},222:function(t,e,r){"use strict";r(132);e.a=function(t){return!!new RegExp("^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$","i").test(t)}},226:function(t,e,r){"use strict";var n=r(221);r.n(n).a},227:function(t,e,r){(e=r(15)(!1)).push([t.i,".card[data-v-0da6db60]{border-radius:.4em;position:relative;box-shadow:none;overflow:hidden;padding-bottom:56.25%}.card__gradient[data-v-0da6db60]{position:absolute;width:100%;height:100%;left:0;bottom:0;z-index:2;border-radius:.4em}.card--large[data-v-0da6db60]{padding-bottom:100%}.card--large .card__gradient[data-v-0da6db60]{height:125%}.card--list--1[data-v-0da6db60]{padding-bottom:56%}.card--list--1 .card__gradient[data-v-0da6db60]{height:100%}.card--list--2[data-v-0da6db60]{padding-bottom:70%}.card--list--2 .card__gradient[data-v-0da6db60]{height:90%}.card--list--3[data-v-0da6db60]{padding-bottom:96%}.card--list--3 .card__gradient[data-v-0da6db60]{height:170%}.card--list--4[data-v-0da6db60]{padding-bottom:140%}.card--list--4 .card__gradient[data-v-0da6db60]{height:180%}.card--list--5[data-v-0da6db60]{padding-bottom:140%}.card--list--5 .card__gradient[data-v-0da6db60]{height:210%}.card__image[data-v-0da6db60]{display:block;width:100%}.card__text[data-v-0da6db60]{position:absolute;left:1em;right:1em;bottom:.75em;z-index:3}.card__text__title[data-v-0da6db60]{font-weight:700;font-size:1em;color:#fff}.card__text__title.text--dark[data-v-0da6db60]{color:#000}.card__text__subtitle[data-v-0da6db60]{font-size:.875em;color:hsla(0,0%,100%,.75)}.card__text__subtitle.text--dark[data-v-0da6db60]{color:rgba(25,23,91,.75)}.card__action[data-v-0da6db60]{margin-top:.75rem}.card__action__button[data-v-0da6db60]{border:0;color:#fff;background:hsla(0,0%,100%,.2)}.card__action__button.text--dark[data-v-0da6db60]{color:#000;background:rgba(0,0,0,.1)}.card__list__item[data-v-0da6db60]{display:flex;justify-content:flex-start;align-items:center;border-bottom:1px solid rgba(0,0,0,.12);padding:8px 0;min-height:3.375rem}.card__list__item[data-v-0da6db60]:last-child{border-bottom:0}.card__list__item__icon[data-v-0da6db60]{width:2.25rem;height:2.25rem;border-radius:.375rem;margin-right:.75rem}.card__list__item__body[data-v-0da6db60]{width:100%;display:inline-flex;justify-content:space-between}.card__list__item__body__text__name[data-v-0da6db60]{font-weight:500;color:#19175b;font-size:.875em}.card__list__item__body__text__name.text--light[data-v-0da6db60]{color:hsla(0,0%,100%,.9)}.card__list__item__body__text__subtext[data-v-0da6db60]{font-size:.75em;color:rgba(25,23,91,.6)}.card__list__item__body__text__subtext.text--light[data-v-0da6db60]{color:hsla(0,0%,100%,.85)}.card__list__item__body__button[data-v-0da6db60]{border:0;color:hsla(0,0%,100%,.85);background:hsla(0,0%,100%,.2)}.link[data-v-0da6db60]{display:block;overflow:hidden;position:absolute;top:0;right:0;bottom:0;left:0}",""]),t.exports=e},228:function(t,e,r){"use strict";var n=r(222),d={props:{image:{type:Object,required:!0},color:{type:String,required:!0},title:{type:String,required:!0},subtitle:{type:String,required:!0},to:{type:String,required:!1,default:"#"},isDarkText:{type:Boolean,required:!1,default:!1},button:{type:String,required:!1,default:""},list:{type:Array,required:!1,default:function(){return[]}}},computed:{parentClassNames:function(){return this.list.length?["card--list","card--list--"+(this.list.length<=5?this.list.length:5)]:this.button?"card--large":""},textClassName:function(){return this.isDarkText?"text--dark":"text--light"},parentElement:function(){return this.button||this.list.length?"div":"nuxt-link"}},methods:{childElement:function(t){return Object(n.a)(t)?"a":"nuxt-link"},target:function(t){return Object(n.a)(t)?"_blank":"_self"}}},o=(r(226),r(6)),component=Object(o.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"card",class:t.parentClassNames},[r(t.parentElement,{tag:"component",staticClass:"link",attrs:{to:t.to}},[r("img",{staticClass:"card__image",attrs:{srcSet:t.image.srcSet,src:t.image.src}}),r("div",{staticClass:"card__gradient",style:{backgroundImage:"linear-gradient(180deg, rgba(196, 196, 196, 0) 30.73%, "+t.color+" 70.31%)"}}),r("div",{staticClass:"card__text"},[r("div",{staticClass:"card__text__title",class:t.textClassName},[t._v(t._s(t.title))]),r("div",{staticClass:"card__text__subtitle",class:t.textClassName},[t._v(t._s(t.subtitle))]),t.list.length?r("div",{staticClass:"card__list"},t._l(t.list,(function(e,n){return r(t.childElement(e.link),{key:n,tag:"component",staticClass:"card__list__item",attrs:{to:e.link,href:e.link,target:t.target(e.link),rel:"nofollow"}},[e.image?r("img",{staticClass:"card__list__item__icon",attrs:{src:e.image}}):t._e(),r("div",{staticClass:"card__list__item__body"},[r("div",{staticClass:"card__list__item__body__text"},[r("div",{staticClass:"card__list__item__body__text__name",class:t.textClassName},[t._v(t._s(e.name))]),e.text?r("div",{staticClass:"card__list__item__body__text__subtext",class:t.textClassName},[t._v(t._s(e.text))]):t._e()]),r("b-button",{staticClass:"card__list__item__body__button",class:t.textClassName,attrs:{"icon-right":"chevron-right",size:"is-small"}},[t._v("Join Now")])],1)])})),1):t._e(),t.button?r("div",{staticClass:"card__action"},[r("a",{attrs:{href:t.to}},[r("b-button",{staticClass:"card__action__button",class:t.textClassName,attrs:{"icon-right":"chevron-right"}},[t._v(t._s(t.button))])],1)]):t._e()])])],1)}),[],!1,null,"0da6db60",null);e.a=component.exports},248:function(t,e,r){t.exports={srcSet:r.p+"img/4720244-400.jpg 400w,"+r.p+"img/5da30ea-800.jpg 800w,"+r.p+"img/dd5ffda-1280.jpg 1280w",images:[{path:r.p+"img/4720244-400.jpg",width:400,height:225},{path:r.p+"img/5da30ea-800.jpg",width:800,height:450},{path:r.p+"img/dd5ffda-1280.jpg",width:1280,height:720}],src:r.p+"img/4720244-400.jpg",toString:function(){return r.p+"img/4720244-400.jpg"},placeholder:void 0,width:400,height:225}},260:function(t,e,r){t.exports={srcSet:r.p+"img/279038e-400.jpg 400w,"+r.p+"img/4fe9144-800.jpg 800w,"+r.p+"img/f6ad075-1280.jpg 1280w",images:[{path:r.p+"img/279038e-400.jpg",width:400,height:225},{path:r.p+"img/4fe9144-800.jpg",width:800,height:450},{path:r.p+"img/f6ad075-1280.jpg",width:1280,height:720}],src:r.p+"img/279038e-400.jpg",toString:function(){return r.p+"img/279038e-400.jpg"},placeholder:void 0,width:400,height:225}},455:function(t,e,r){t.exports=r.p+"img/d497249.png"},456:function(t,e,r){t.exports=r.p+"img/801b332.png"},457:function(t,e,r){t.exports=r.p+"img/1742fa0.png"},458:function(t,e,r){t.exports=r.p+"img/fce3821.png"},459:function(t,e,r){t.exports={srcSet:r.p+"img/9382769-400.jpg 400w,"+r.p+"img/82502b2-800.jpg 800w,"+r.p+"img/9822964-1280.jpg 1280w",images:[{path:r.p+"img/9382769-400.jpg",width:400,height:225},{path:r.p+"img/82502b2-800.jpg",width:800,height:450},{path:r.p+"img/9822964-1280.jpg",width:1280,height:720}],src:r.p+"img/9382769-400.jpg",toString:function(){return r.p+"img/9382769-400.jpg"},placeholder:void 0,width:400,height:225}},460:function(t,e,r){t.exports={srcSet:r.p+"img/624fcd8-400.jpg 400w,"+r.p+"img/29923ed-800.jpg 800w,"+r.p+"img/20ab378-1280.jpg 1280w",images:[{path:r.p+"img/624fcd8-400.jpg",width:400,height:225},{path:r.p+"img/29923ed-800.jpg",width:800,height:450},{path:r.p+"img/20ab378-1280.jpg",width:1280,height:720}],src:r.p+"img/624fcd8-400.jpg",toString:function(){return r.p+"img/624fcd8-400.jpg"},placeholder:void 0,width:400,height:225}},461:function(t,e,r){t.exports={srcSet:r.p+"img/b0ea8ab-400.jpg 400w,"+r.p+"img/bf40099-800.jpg 800w,"+r.p+"img/ad5370c-1280.jpg 1280w",images:[{path:r.p+"img/b0ea8ab-400.jpg",width:400,height:225},{path:r.p+"img/bf40099-800.jpg",width:800,height:450},{path:r.p+"img/ad5370c-1280.jpg",width:1280,height:720}],src:r.p+"img/b0ea8ab-400.jpg",toString:function(){return r.p+"img/b0ea8ab-400.jpg"},placeholder:void 0,width:400,height:225}},623:function(t,e,r){"use strict";r.r(e);var n=r(228),d=r(220),o=r(455),c=r.n(o),l=r(456),m=r.n(l),_=r(457),h=r.n(_),f=r(458),v=r.n(f),w={components:{Card:n.a,ArticleHero:d.a},data:function(){return{title:"Survival Starter Pack",image:r(260),list:[{title:"Soaps",subtitle:"Discussion groups",image:r(459),color:"rgba(234, 230, 219, 0.85)",isDarkText:!0,links:[{name:"Big Basket",text:"Buy now",image:v.a,link:"https://www.bigbasket.com/ps/?q=soap"},{name:"Grofers",text:"Buy now",image:c.a,link:"https://grofers.com/s/?q=Soap&category_id=979&suggestion_type=1&t=1"}]},{title:"Sanitisers",subtitle:"Get fit at home",image:r(460),color:"rgba(230, 226, 225, 0.85)",isDarkText:!0,links:[{name:"Big Basket",text:"Buy now",image:v.a,link:"https://www.bigbasket.com/ps/?q=sanitizer"}]},{title:"Vegetables",subtitle:"Discussion groups",image:r(248),color:"rgba(124, 98, 58, 0.85)",isDarkText:!1,links:[{name:"Big Basket",text:"Buy now",image:v.a,link:"https://www.bigbasket.com/cl/fruits-vegetables/?nc=nb"},{name:"Frugivore",text:"Buy now",image:h.a,link:"https://www.frugivore.in/product-listing-category/vegetables"},{name:"Amazon Fresh",text:"Buy now",image:m.a,link:"https://www.amazon.com/alm/category?almBrandId=QW1hem9uIEZyZXNo&node=6506977011&pf_rd_r=TP0Q49EDBD9BRRJG9K6X&pf_rd_p=a1eaf3f8-3995-44f2-af04-1f3d738af323&ref_=fs_dsk_sf_ai_sml_f3_sf_ais"}]},{title:"Grocery essentials",subtitle:"Discussion groups",image:r(461),color:"rgba(108, 101, 84, 0.85)",isDarkText:!1,links:[{name:"Big Basket",text:"Buy now",image:v.a,link:"https://www.bigbasket.com/cl/foodgrains-oil-masala/?nc=nb"},{name:"Frugivore",text:"Buy now",image:h.a,link:"https://www.frugivore.in/product-listing-category/essentials"},{name:"Amazon Fresh",text:"Buy now",image:m.a,link:"https://www.amazon.com/alm/category?almBrandId=QW1hem9uIEZyZXNo&node=18787303011&redirect=rsp"},{name:"Grofers",text:"Buy now",image:c.a,link:"https://grofers.com/cn/grocery-staples/cid/16"}]},{custom:"Sharer"}]}},head:function(){return{title:this.title,meta:[{hid:"ogimage",property:"og:image",content:this.image}]}}},x=r(6),component=Object(x.a)(w,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"main"},[r("ArticleHero",{attrs:{image:t.image}}),r("section",{staticClass:"section content"},[r("h2",{staticClass:"content__title"},[t._v(t._s(t.title))]),r("div",{staticClass:"container"},[r("div",{staticClass:"columns is-multiline"},t._l(t.list,(function(e,n){return r("div",{key:n,staticClass:"column is-one-third"},[e.custom?"Sharer"===e.custom?r("Sharer",{attrs:{title:t.title,textType:"list"}}):t._e():r("card",{attrs:{title:e.title,subtitle:e.subtitle,image:e.image,color:e.color,isDarkText:e.isDarkText,list:e.links}})],1)})),0)])])],1)}),[],!1,null,"0bb86cac",null);e.default=component.exports}}]);