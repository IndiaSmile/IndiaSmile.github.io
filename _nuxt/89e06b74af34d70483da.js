(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{212:function(t,e,n){var content=n(217);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("63cfdf21",content,!0,{sourceMap:!1})},213:function(t,e,n){var content=n(219);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("20db7586",content,!0,{sourceMap:!1})},215:function(t,e,n){"use strict";n.d(e,"a",(function(){return h}));var o=n(70);var r=n(87);function h(t){return function(t){if(Array.isArray(t))return Object(o.a)(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||Object(r.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},216:function(t,e,n){"use strict";var o=n(212);n.n(o).a},217:function(t,e,n){(e=n(15)(!1)).push([t.i,'.breadcrumb-container[data-v-7d96ae4b]{position:absolute;padding:.75em;bottom:0;left:0;width:100%;margin-left:-.75em}.breadcrumb-container .crumbs[data-v-7d96ae4b]{padding:0;list-style-type:none}.breadcrumb-container .crumb[data-v-7d96ae4b]{background:#fff;height:2em;display:inline-flex;justify-content:center;align-items:center;position:relative;margin:.5em 0 0 .75em}.breadcrumb-container .crumb[data-v-7d96ae4b]:not(:last-child):after{content:" ";border:1em solid transparent;border-left:.5em solid #fff;height:1em;position:absolute;right:-1.5em;z-index:9999}.breadcrumb-container .crumb__link[data-v-7d96ae4b]{color:#19175b;font-size:.875em;font-weight:700;padding:.5rem .375rem .5rem .5rem}',""]),t.exports=e},218:function(t,e,n){"use strict";var o=n(213);n.n(o).a},219:function(t,e,n){(e=n(15)(!1)).push([t.i,".hero[data-v-7c2de4d7]{position:relative;width:100%;max-width:26em;margin:0 auto}.hero__background[data-v-7c2de4d7]{position:relative;padding-bottom:7rem;overflow:hidden}.hero__background__image[data-v-7c2de4d7]{position:absolute;top:0;left:0;right:0;width:100%;-webkit-filter:blur(.5rem);filter:blur(.5rem)}",""]),t.exports=e},220:function(t,e,n){"use strict";var o=n(86),r=(n(69),n(215)),h=(n(88),{data:function(){return{items:[]}},created:function(){var t=this.$route.path.split("/");t[0]="home",this.items=t},methods:{path:function(t){if(0===t)return"/";var e=Object(r.a)(this.items);return e.shift(),"/"+e.slice(0,t).join("/").toLowerCase()},prettyCrumb:function(t){return(t.charAt(0).toUpperCase()+t.substr(1)).replace(/-/g," ")}}}),c=(n(216),n(6)),l=Object(c.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"breadcrumb-container"},[n("ul",{staticClass:"crumbs"},t._l(t.items,(function(e,o){return e.length>1?n("li",{key:o,staticClass:"crumb",class:{"is-active":t.items.length===o+1}},[n("nuxt-link",{staticClass:"crumb__link",attrs:{to:t.path(o)}},[t._v(t._s(t.prettyCrumb(e)))])],1):t._e()})),0)])}),[],!1,null,"7d96ae4b",null).exports,d={components:{Header:o.a,Breadcrumb:l},props:{image:{type:Object,required:!0}}},m=(n(218),Object(c.a)(d,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"hero"},[e("Header",{attrs:{showBackButton:!0}}),e("div",{staticClass:"hero__background"},[this.image?e("img",{staticClass:"hero__background__image",attrs:{src:this.image.src,srcSet:this.image.srcSet}}):this._e(),e("Breadcrumb")],1)],1)}),[],!1,null,"7c2de4d7",null));e.a=m.exports},222:function(t,e,n){"use strict";n(132);e.a=function(t){return!!new RegExp("^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$","i").test(t)}},223:function(t,e,n){var content=n(230);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("f78dfddc",content,!0,{sourceMap:!1})},225:function(t,e,n){var content=n(235);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("4b1ff140",content,!0,{sourceMap:!1})},229:function(t,e,n){"use strict";var o=n(223);n.n(o).a},230:function(t,e,n){(e=n(15)(!1)).push([t.i,".button--extra[data-v-311ef926]{padding-top:calc(.75em - 1px);height:2.625em;border:0}[data-v-311ef926] .sm{display:block;font-size:.5em;line-height:1em;text-transform:uppercase;position:absolute;top:.75em;color:hsla(0,0%,100%,.75)}.button--android[data-v-311ef926]{background:#a4c639;color:#fff;border:0}.button--netflix[data-v-311ef926]{background:#e50914;color:#fff}.button--google[data-v-311ef926]{background:#3bccff;color:#fff}.button--hotstar[data-v-311ef926]{background:#048f70;color:#fff}.button--prime[data-v-311ef926]{background:#00a8e1;color:#fff}",""]),t.exports=e},231:function(t,e,n){"use strict";var o=n(222),r={props:{text:{type:String,required:!0},href:{type:String,required:!1,default:"#"},type:{type:String,required:!1,default:""}},computed:{element:function(){return"#"===this.href?"span":Object(o.a)(this.href)?"a":"nuxt-link"},parentAttributes:function(){return"a"===this.element?{href:this.href,target:"_blank",rel:"nofollow"}:"nuxt-link"===this.element?{to:this.href}:{}},buttonAttributes:function(){var t={ios:{type:"is-black","icon-left":"apple"},android:{class:"button--android","icon-left":"google-play"},netflix:{"icon-left":"netflix",class:"button--extra"},prime:{"icon-left":"amazon",class:"button--extra"},hotstar:{"icon-left":"star-outline",class:"button--extra"},google:{"icon-left":"google",class:"button--extra"},default:{type:"is-primary",outlined:!0,"icon-left":"web"}},e=t[this.type];return e&&e.class&&(e.class+=" button--"+this.type),t[this.type]||t.default},content:function(){var t={android:"Android",ios:"iOS",netflix:'<span class="sm">Watch on</span><span class="text">Netflix</span>',google:'<span class="sm">Watch on</span><span class="text">Google</span>',hotstar:'<span class="sm">Watch on</span><span class="text">Hotstar</span>',prime:'<span class="sm">Watch on</span><span class="text">Prime</span>',default:""};return this.text||t[this.type]||this.type||t.default}}},h=(n(229),n(6)),c={name:"ContentButtons",components:{Button:Object(h.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e(this.element,this._b({tag:"component",staticClass:"wrapper"},"component",this.parentAttributes,!1),[e("b-button",this._b({},"b-button",this.buttonAttributes,!1),[e("span",{domProps:{innerHTML:this._s(this.content)}})])],1)}),[],!1,null,"311ef926",null).exports},props:{buttons:{type:Array,required:!0}}},l=Object(h.a)(c,(function(){var t=this.$createElement,e=this._self._c||t;return this.buttons?e("div",{staticClass:"content__buttons"},this._l(this.buttons,(function(button,t){return e("Button",{key:t,staticClass:"content__buttons__item",attrs:{text:button.text||"",type:button.type?button.type.toLowerCase():"",href:button.link}})})),1):this._e()}),[],!1,null,null,null);e.a=l.exports},234:function(t,e,n){"use strict";var o=n(225);n.n(o).a},235:function(t,e,n){(e=n(15)(!1)).push([t.i,".stream-guide[data-v-3c3b0664]{font-size:.875em;padding:1em;display:block;margin:0 0 -1.5em;background:#fad550;color:inherit;opacity:.75}",""]),t.exports=e},237:function(t,e,n){"use strict";n(234);var o=n(6),component=Object(o.a)({},(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"stream-guide",attrs:{href:"https://bit.ly/IndiaSmile-WatchForFree",target:"_blank",rel:"nofollow"}},[e("strong",[e("u",[this._v("Watch For Free Guide")]),this._v(" 🎉")]),this._v(" Learn how to watch any movie or tv show for free at any time. Just ask "),e("strong",[e("u",[this._v("any tech savvy")]),this._v(" family member")]),this._v(" to follow this 2 minute guide 🥳")])}],!1,null,"3c3b0664",null);e.a=component.exports},287:function(t,e,n){t.exports={srcSet:n.p+"img/54344b6-400.jpg 400w,"+n.p+"img/da55db4-800.jpg 800w,"+n.p+"img/0adb607-1280.jpg 1280w",images:[{path:n.p+"img/54344b6-400.jpg",width:400,height:225},{path:n.p+"img/da55db4-800.jpg",width:800,height:450},{path:n.p+"img/0adb607-1280.jpg",width:1280,height:720}],src:n.p+"img/54344b6-400.jpg",toString:function(){return n.p+"img/54344b6-400.jpg"},placeholder:void 0,width:400,height:225}},482:function(t,e,n){t.exports={srcSet:n.p+"img/1fe546d-400.jpg 400w,"+n.p+"img/d86dc14-750.jpg 750w",images:[{path:n.p+"img/1fe546d-400.jpg",width:400,height:215},{path:n.p+"img/d86dc14-750.jpg",width:750,height:404}],src:n.p+"img/1fe546d-400.jpg",toString:function(){return n.p+"img/1fe546d-400.jpg"},placeholder:void 0,width:400,height:215}},483:function(t,e,n){t.exports={srcSet:n.p+"img/e814476-400.jpg 400w,"+n.p+"img/4bf8fc1-800.jpg 800w,"+n.p+"img/0ff6388-1200.jpg 1200w",images:[{path:n.p+"img/e814476-400.jpg",width:400,height:225},{path:n.p+"img/4bf8fc1-800.jpg",width:800,height:450},{path:n.p+"img/0ff6388-1200.jpg",width:1200,height:675}],src:n.p+"img/e814476-400.jpg",toString:function(){return n.p+"img/e814476-400.jpg"},placeholder:void 0,width:400,height:225}},484:function(t,e,n){t.exports={srcSet:n.p+"img/806f5ae-400.jpg 400w,"+n.p+"img/232964b-800.jpg 800w,"+n.p+"img/73d3ba4-960.jpg 960w",images:[{path:n.p+"img/806f5ae-400.jpg",width:400,height:225},{path:n.p+"img/232964b-800.jpg",width:800,height:451},{path:n.p+"img/73d3ba4-960.jpg",width:960,height:541}],src:n.p+"img/806f5ae-400.jpg",toString:function(){return n.p+"img/806f5ae-400.jpg"},placeholder:void 0,width:400,height:225}},485:function(t,e,n){t.exports={srcSet:n.p+"img/a4a6233-400.jpg 400w,"+n.p+"img/6c76884-800.jpg 800w,"+n.p+"img/886dcce-1280.jpg 1280w",images:[{path:n.p+"img/a4a6233-400.jpg",width:400,height:250},{path:n.p+"img/6c76884-800.jpg",width:800,height:500},{path:n.p+"img/886dcce-1280.jpg",width:1280,height:800}],src:n.p+"img/a4a6233-400.jpg",toString:function(){return n.p+"img/a4a6233-400.jpg"},placeholder:void 0,width:400,height:250}},486:function(t,e,n){t.exports={srcSet:n.p+"img/7650016-400.jpg 400w,"+n.p+"img/2accff6-800.jpg 800w,"+n.p+"img/a67ae5c-1600.jpg 1600w",images:[{path:n.p+"img/7650016-400.jpg",width:400,height:225},{path:n.p+"img/2accff6-800.jpg",width:800,height:450},{path:n.p+"img/a67ae5c-1600.jpg",width:1600,height:900}],src:n.p+"img/7650016-400.jpg",toString:function(){return n.p+"img/7650016-400.jpg"},placeholder:void 0,width:400,height:225}},487:function(t,e,n){t.exports={srcSet:n.p+"img/f72b55e-400.jpg 400w,"+n.p+"img/94f81e4-800.jpg 800w,"+n.p+"img/3250ad5-1600.jpg 1600w",images:[{path:n.p+"img/f72b55e-400.jpg",width:400,height:259},{path:n.p+"img/94f81e4-800.jpg",width:800,height:517},{path:n.p+"img/3250ad5-1600.jpg",width:1600,height:1034}],src:n.p+"img/f72b55e-400.jpg",toString:function(){return n.p+"img/f72b55e-400.jpg"},placeholder:void 0,width:400,height:259}},488:function(t,e,n){t.exports={srcSet:n.p+"img/ee94f12-400.jpg 400w,"+n.p+"img/c8f8225-800.jpg 800w,"+n.p+"img/34d15fe-1200.jpg 1200w",images:[{path:n.p+"img/ee94f12-400.jpg",width:400,height:257},{path:n.p+"img/c8f8225-800.jpg",width:800,height:514},{path:n.p+"img/34d15fe-1200.jpg",width:1200,height:771}],src:n.p+"img/ee94f12-400.jpg",toString:function(){return n.p+"img/ee94f12-400.jpg"},placeholder:void 0,width:400,height:257}},489:function(t,e,n){t.exports={srcSet:n.p+"img/ee2d906-400.jpg 400w,"+n.p+"img/0e4d908-800.jpg 800w,"+n.p+"img/10d45e0-1200.jpg 1200w",images:[{path:n.p+"img/ee2d906-400.jpg",width:400,height:211},{path:n.p+"img/0e4d908-800.jpg",width:800,height:421},{path:n.p+"img/10d45e0-1200.jpg",width:1200,height:632}],src:n.p+"img/ee2d906-400.jpg",toString:function(){return n.p+"img/ee2d906-400.jpg"},placeholder:void 0,width:400,height:211}},584:function(t,e,n){"use strict";n.r(e);var o=n(231),r=n(237),h={name:"HomePage",components:{ArticleHero:n(220).a,ContentButtons:o.a,StreamGuide:r.a},data:function(){return{image:n(287),title:"Best Hollywood Comedies",article:[{text:'Nothing better than to laugh yourself out till half the blood vessels of your face start popping out! Just kidding.😄 How can you not love comedy? It is the perfect stress buster for any situation especially during quarantine. <span class="js--h">Enjoy this list of fresh and heart lightening comedies that will help you pass your day with a smile, rather than utter boredom!</span>'},{heading:"Anchorman: The Legend of Ron Burgundy",text:"A chauvinistic host of a top-rated American news programme is threatened with the arrival of an ambitious female reporter which starts a battle of the sexes. Filled with inspired silliness and quotable lines, though Anchorman isn't the most consistent comedy in the world, it hosts a great lead performance from Will Ferrell and a talented ensemble cast.",image:n(482),rating:7.2},{custom:"Sharer"},{heading:"Borat",text:"Borat, a Kazakh resident, travels to the USA to make a documentary on the country. While on his mission, he learns that the USA is the same as his own country in many ways. The brilliance of “Borat” is that its comedy is pitiless but simultaneously brainy. It seems absurd and is simultaneously outrageous as well as gross! One guarantee, you will laugh!",image:n(483),rating:7.3,buttons:[{type:"Hotstar",link:"https://www.hotstar.com/in/movies/borat-cultural-learnings-of-america-for-make-benefit-glorious-nation-of-kazakhstan/1770000753"}]},{heading:"The Big Lebowski",text:"Two goons mistake Lebowski for a millionaire urinating on his rug. Trying to recompense his rug from the wealthy Lebowski, he gets involved in a kidnapping case. This masterpiece is sleek and sharp, with a slight dose of menace and mystery! Indulge into a wild and funny as hell ride through Los Angeles' underworld",image:n(484),rating:8.1},{heading:"Game Night",text:"Max and Annie set out to solve the mystery and find Brooks, Max's brother, who mysteriously disappeared during their game night. Game Night meshes together a twist-filled plot, outlandish gags and a clever fusion of visuals. Hosts awesome dialogues, outstanding camerawork as well as compelling direction. A must watch!",image:n(485),rating:6.9,buttons:[{type:"Netflix",link:"https://www.netflix.com/watch/80201565"}]},{heading:"In Bruges",text:"Two hitmen get stuck in Bruges, after an unsuccessful mission. The situation becomes complicated when their boss asks one to kill the other. It's a smart and funny gangster film, with some high powered acting by Colin Farrell as the conscience-stricken, suicidal hitman who has killed a small boy on his first assignment",image:n(486),rating:7.9,buttons:[{type:"Netflix",link:"https://www.netflix.com/title/70083111"}]},{heading:"Burn After Reading",text:"Two gym employees chance upon a CD containing the memoirs of a CIA agent. They then decide to sell it back to him, failing which they plan to sell it to the Russian embassy.The self amusing comedy has a tricky plot, a set visual style and little heart. Wickedly funny and outrageous!",image:n(487),rating:7},{heading:"The Grand Budapest Hotel",text:"A concierge, is wrongly framed for murder at the Grand Budapest Hotel. In the process of proving his innocence, he befriends a lobby boy This movie makes a marvellous mockery of history, turning its horrors into a series of graceful jokes and hilarious instances!",image:n(488),rating:8.1,buttons:[{type:"Hotstar",link:"https://www.hotstar.com/in/movies/the-grand-budapest-hotel/1770000334/watch?utm_source=gwa"}]},{heading:"Shaun of the Dead",text:"Shaun is a salesman whose life has no direction. However, his uneventful life takes a sudden turn when he has to single handedly deal with an entire community of zombies A cult favourite for sure! Shaun of the Dead cleverly balances scares and witty satire, making for a bloody good zombie movie with some good old fashioned comedy. The trilogy is an anthology series of films directed by Edgar Wright, consists of Shaun of the dead (2004), Hot Fuzz(2007), and The World’s End(2013). We suggest giving each one a look!",image:n(489),rating:7.9}]}},head:function(){return{title:this.title,meta:[{hid:"ogimage",property:"og:image",content:this.image}]}}},c=n(6),component=Object(c.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"article"},[n("ArticleHero",{attrs:{image:t.image}}),n("div",{staticClass:"content"},[n("h2",{staticClass:"content__title"},[t._v(t._s(t.title))]),n("StreamGuide"),t._l(t.article,(function(data,e){return n("div",{key:e,staticClass:"content__section"},["Sharer"===data.custom?n("Sharer",{attrs:{title:t.title}}):t._e(),data.custom?t._e():[n("div",{staticClass:"content__header"},[data.heading?n("h5",{staticClass:"content__heading"},[t._v(t._s(data.heading))]):t._e(),data.rating?n("div",{staticClass:"content__rating"},[n("b-icon",{attrs:{icon:"star",size:"is-small"}}),t._v(t._s(data.rating))],1):t._e()]),data.image?n("img",{staticClass:"content__image",attrs:{src:data.image}}):t._e(),"string"==typeof data.text?n("p",{staticClass:"content__text",domProps:{innerHTML:t._s(data.text)}}):t._e(),data.buttons?n("ContentButtons",{attrs:{buttons:data.buttons}}):t._e()]],2)})),n("StreamGuide"),n("Sharer",{attrs:{title:t.title}})],2)],1)}),[],!1,null,"dd458a10",null);e.default=component.exports}}]);