(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{212:function(t,e,r){var content=r(217);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(16).default)("63cfdf21",content,!0,{sourceMap:!1})},213:function(t,e,r){var content=r(219);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(16).default)("20db7586",content,!0,{sourceMap:!1})},215:function(t,e,r){"use strict";r.d(e,"a",(function(){return c}));var n=r(70);var o=r(87);function c(t){return function(t){if(Array.isArray(t))return Object(n.a)(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||Object(o.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},216:function(t,e,r){"use strict";var n=r(212);r.n(n).a},217:function(t,e,r){(e=r(15)(!1)).push([t.i,'.breadcrumb-container[data-v-7d96ae4b]{position:absolute;padding:.75em;bottom:0;left:0;width:100%;margin-left:-.75em}.breadcrumb-container .crumbs[data-v-7d96ae4b]{padding:0;list-style-type:none}.breadcrumb-container .crumb[data-v-7d96ae4b]{background:#fff;height:2em;display:inline-flex;justify-content:center;align-items:center;position:relative;margin:.5em 0 0 .75em}.breadcrumb-container .crumb[data-v-7d96ae4b]:not(:last-child):after{content:" ";border:1em solid transparent;border-left:.5em solid #fff;height:1em;position:absolute;right:-1.5em;z-index:9999}.breadcrumb-container .crumb__link[data-v-7d96ae4b]{color:#19175b;font-size:.875em;font-weight:700;padding:.5rem .375rem .5rem .5rem}',""]),t.exports=e},218:function(t,e,r){"use strict";var n=r(213);r.n(n).a},219:function(t,e,r){(e=r(15)(!1)).push([t.i,".hero[data-v-7c2de4d7]{position:relative;width:100%;max-width:26em;margin:0 auto}.hero__background[data-v-7c2de4d7]{position:relative;padding-bottom:7rem;overflow:hidden}.hero__background__image[data-v-7c2de4d7]{position:absolute;top:0;left:0;right:0;width:100%;-webkit-filter:blur(.5rem);filter:blur(.5rem)}",""]),t.exports=e},220:function(t,e,r){"use strict";var n=r(86),o=(r(69),r(215)),c=(r(88),{data:function(){return{items:[]}},created:function(){var t=this.$route.path.split("/");t[0]="home",this.items=t},methods:{path:function(t){if(0===t)return"/";var e=Object(o.a)(this.items);return e.shift(),"/"+e.slice(0,t).join("/").toLowerCase()},prettyCrumb:function(t){return(t.charAt(0).toUpperCase()+t.substr(1)).replace(/-/g," ")}}}),d=(r(216),r(6)),l=Object(d.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"breadcrumb-container"},[r("ul",{staticClass:"crumbs"},t._l(t.items,(function(e,n){return e.length>1?r("li",{key:n,staticClass:"crumb",class:{"is-active":t.items.length===n+1}},[r("nuxt-link",{staticClass:"crumb__link",attrs:{to:t.path(n)}},[t._v(t._s(t.prettyCrumb(e)))])],1):t._e()})),0)])}),[],!1,null,"7d96ae4b",null).exports,h={components:{Header:n.a,Breadcrumb:l},props:{image:{type:Object,required:!0}}},m=(r(218),Object(d.a)(h,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"hero"},[e("Header",{attrs:{showBackButton:!0}}),e("div",{staticClass:"hero__background"},[this.image?e("img",{staticClass:"hero__background__image",attrs:{src:this.image.src,srcSet:this.image.srcSet}}):this._e(),e("Breadcrumb")],1)],1)}),[],!1,null,"7c2de4d7",null));e.a=m.exports},224:function(t,e,r){var content=r(233);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(16).default)("5322e369",content,!0,{sourceMap:!1})},232:function(t,e,r){"use strict";var n=r(224);r.n(n).a},233:function(t,e,r){(e=r(15)(!1)).push([t.i,".wrapper[data-v-c91a28ee]{position:relative;width:100%;height:0;padding-top:56.25%;margin-bottom:1em}.wrapper iframe[data-v-c91a28ee]{position:absolute;left:0;top:0;width:100%;height:100%}",""]),t.exports=e},236:function(t,e,r){"use strict";r(69);var n={props:{src:{type:String,required:!1,default:""}},computed:{computedSource:function(){return this.src.replace("watch?v=","embed/")}}},o=(r(232),r(6)),component=Object(o.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"wrapper"},[e("iframe",{attrs:{src:this.computedSource,frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})])}),[],!1,null,"c91a28ee",null);e.a=component.exports},280:function(t,e,r){t.exports={srcSet:r.p+"img/0c8c2fe-400.jpg 400w,"+r.p+"img/e0008a6-800.jpg 800w,"+r.p+"img/826ce4a-1280.jpg 1280w",images:[{path:r.p+"img/0c8c2fe-400.jpg",width:400,height:225},{path:r.p+"img/e0008a6-800.jpg",width:800,height:450},{path:r.p+"img/826ce4a-1280.jpg",width:1280,height:720}],src:r.p+"img/0c8c2fe-400.jpg",toString:function(){return r.p+"img/0c8c2fe-400.jpg"},placeholder:void 0,width:400,height:225}},588:function(t,e,r){"use strict";r.r(e);var n=r(236),o=r(220),c={name:"HomePage",components:{YTEmbed:n.a,ArticleHero:o.a},data:function(){return{title:"Indian",image:r(280),article:[{text:["A day with good food is a day well spent in isolation. The aroma of a delicious dish is a stress buster, don’t you agree? We suggest trying a new recipe everyday to keep things spicy in the household 😋","We would love to help our readers choose interesting recipes they can try at home. These are easy to make and require no additional equipment other than basic home ingredients. If any ingredient is unavailable, don’t worry, choose a dish from this variety of choices that suits your grocery shelf, as we know it is difficult to arrange essentials right now! ","These are some unique Indian dishes that taste great and are easy to make!"]},{custom:"Sharer"},{heading:"Kadi Pakoda",text:"A tangy curry mixed with delicious besan pakoda. A great add on to the usual Sabzi Roti!",youtube:"https://www.youtube.com/watch?v=Oa2s0dklrRo"},{heading:"Paneer Masala",text:"Dhaba style authentic Paneer Masala. An original and authentic recipe of India, packed with spices and flavour!",youtube:"https://www.youtube.com/watch?v=kvq-jZwZRDE"},{heading:"Lemon Rice",text:"A refreshing form of rice given a tangy lemon flavour which blends very well. Advised to try it out with pudina chutney or your favourite dip.",youtube:"https://www.youtube.com/watch?v=S582ox6c4l4"},{heading:"Chicken Curry ",text:"This is not a traditional chicken curry recipe, it is easier and much faster to make! You can add more spices as per your preference.",youtube:"https://www.youtube.com/watch?v=WRYOVVexMhU"},{heading:"Tawa Pulav",text:"A delightful change from the daily daal chawal, a recipe that is packed with vibrant flavours and is certainly a favourite among many youngsters.",youtube:"https://www.youtube.com/watch?v=SiGWhwvdyB4"}]}},head:function(){return{title:this.title,meta:[{hid:"ogimage",property:"og:image",content:this.image}]}}},d=r(6),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"article"},[r("ArticleHero",{attrs:{image:t.image}}),r("div",{staticClass:"content"},[r("h2",{staticClass:"content__title"},[t._v(t._s(t.title))]),t._l(t.article,(function(data,e){return r("div",{key:e,staticClass:"content__section"},["Sharer"===data.custom?r("Sharer",{attrs:{title:t.title}}):t._e(),data.heading?r("h5",{staticClass:"content__heading"},[t._v(t._s(data.heading))]):t._e(),"string"==typeof data.text?r("p",{staticClass:"content__text",domProps:{innerHTML:t._s(data.text)}}):"object"==typeof data.text?r("div",t._l(data.text,(function(text,e){return r("p",{key:e,staticClass:"content__text",domProps:{innerHTML:t._s(text)}})})),0):t._e(),data.youtube?r("YTEmbed",{attrs:{src:data.youtube}}):t._e()],1)})),r("Sharer",{attrs:{title:t.title}})],2)],1)}),[],!1,null,"7022435c",null);e.default=component.exports}}]);