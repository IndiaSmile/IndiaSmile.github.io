(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{212:function(t,e,r){var content=r(217);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(16).default)("63cfdf21",content,!0,{sourceMap:!1})},213:function(t,e,r){var content=r(219);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(16).default)("20db7586",content,!0,{sourceMap:!1})},215:function(t,e,r){"use strict";r.d(e,"a",(function(){return c}));var n=r(70);var o=r(87);function c(t){return function(t){if(Array.isArray(t))return Object(n.a)(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||Object(o.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},216:function(t,e,r){"use strict";var n=r(212);r.n(n).a},217:function(t,e,r){(e=r(15)(!1)).push([t.i,'.breadcrumb-container[data-v-7d96ae4b]{position:absolute;padding:.75em;bottom:0;left:0;width:100%;margin-left:-.75em}.breadcrumb-container .crumbs[data-v-7d96ae4b]{padding:0;list-style-type:none}.breadcrumb-container .crumb[data-v-7d96ae4b]{background:#fff;height:2em;display:inline-flex;justify-content:center;align-items:center;position:relative;margin:.5em 0 0 .75em}.breadcrumb-container .crumb[data-v-7d96ae4b]:not(:last-child):after{content:" ";border:1em solid transparent;border-left:.5em solid #fff;height:1em;position:absolute;right:-1.5em;z-index:9999}.breadcrumb-container .crumb__link[data-v-7d96ae4b]{color:#19175b;font-size:.875em;font-weight:700;padding:.5rem .375rem .5rem .5rem}',""]),t.exports=e},218:function(t,e,r){"use strict";var n=r(213);r.n(n).a},219:function(t,e,r){(e=r(15)(!1)).push([t.i,".hero[data-v-7c2de4d7]{position:relative;width:100%;max-width:26em;margin:0 auto}.hero__background[data-v-7c2de4d7]{position:relative;padding-bottom:7rem;overflow:hidden}.hero__background__image[data-v-7c2de4d7]{position:absolute;top:0;left:0;right:0;width:100%;-webkit-filter:blur(.5rem);filter:blur(.5rem)}",""]),t.exports=e},220:function(t,e,r){"use strict";var n=r(86),o=(r(69),r(215)),c=(r(88),{data:function(){return{items:[]}},created:function(){var t=this.$route.path.split("/");t[0]="home",this.items=t},methods:{path:function(t){if(0===t)return"/";var e=Object(o.a)(this.items);return e.shift(),"/"+e.slice(0,t).join("/").toLowerCase()},prettyCrumb:function(t){return(t.charAt(0).toUpperCase()+t.substr(1)).replace(/-/g," ")}}}),d=(r(216),r(6)),l=Object(d.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"breadcrumb-container"},[r("ul",{staticClass:"crumbs"},t._l(t.items,(function(e,n){return e.length>1?r("li",{key:n,staticClass:"crumb",class:{"is-active":t.items.length===n+1}},[r("nuxt-link",{staticClass:"crumb__link",attrs:{to:t.path(n)}},[t._v(t._s(t.prettyCrumb(e)))])],1):t._e()})),0)])}),[],!1,null,"7d96ae4b",null).exports,m={components:{Header:n.a,Breadcrumb:l},props:{image:{type:Object,required:!0}}},h=(r(218),Object(d.a)(m,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"hero"},[e("Header",{attrs:{showBackButton:!0}}),e("div",{staticClass:"hero__background"},[this.image?e("img",{staticClass:"hero__background__image",attrs:{src:this.image.src,srcSet:this.image.srcSet}}):this._e(),e("Breadcrumb")],1)],1)}),[],!1,null,"7c2de4d7",null));e.a=h.exports},275:function(t,e,r){t.exports={srcSet:r.p+"img/77d7d6a-400.jpg 400w,"+r.p+"img/efafa68-800.jpg 800w,"+r.p+"img/787b204-1280.jpg 1280w",images:[{path:r.p+"img/77d7d6a-400.jpg",width:400,height:225},{path:r.p+"img/efafa68-800.jpg",width:800,height:450},{path:r.p+"img/787b204-1280.jpg",width:1280,height:720}],src:r.p+"img/77d7d6a-400.jpg",toString:function(){return r.p+"img/77d7d6a-400.jpg"},placeholder:void 0,width:400,height:225}},598:function(t,e,r){"use strict";r.r(e);var n={name:"HomePage",components:{ArticleHero:r(220).a},data:function(){return{image:r(275),title:"New Hindi Songs",article:[{custom:"Sharer"},{custom:"Spotify",embed:"https://open.spotify.com/embed/playlist/37i9dQZF1DX0XUfTFmNBRM?si=Up7eavnGREmoud3NjqhrEQ"}]}},head:function(){return{title:this.title,meta:[{hid:"ogimage",property:"og:image",content:this.image}]}}},o=r(6),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"article"},[r("ArticleHero",{attrs:{image:t.image}}),r("div",{staticClass:"content"},[r("h2",{staticClass:"content__title"},[t._v(t._s(t.title))]),t._l(t.article,(function(data,e){return r("div",{key:e,staticClass:"content__section"},["Sharer"===data.custom?r("Sharer",{attrs:{title:t.title}}):t._e(),"Spotify"===data.custom?r("iframe",{staticClass:"content__embed",attrs:{src:data.embed}}):t._e()],1)})),r("Sharer",{attrs:{title:t.title}})],2)],1)}),[],!1,null,"454be736",null);e.default=component.exports}}]);