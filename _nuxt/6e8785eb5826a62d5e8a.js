(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{212:function(t,e,n){var content=n(217);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("63cfdf21",content,!0,{sourceMap:!1})},213:function(t,e,n){var content=n(219);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("20db7586",content,!0,{sourceMap:!1})},215:function(t,e,n){"use strict";n.d(e,"a",(function(){return h}));var r=n(70);var o=n(87);function h(t){return function(t){if(Array.isArray(t))return Object(r.a)(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||Object(o.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},216:function(t,e,n){"use strict";var r=n(212);n.n(r).a},217:function(t,e,n){(e=n(15)(!1)).push([t.i,'.breadcrumb-container[data-v-7d96ae4b]{position:absolute;padding:.75em;bottom:0;left:0;width:100%;margin-left:-.75em}.breadcrumb-container .crumbs[data-v-7d96ae4b]{padding:0;list-style-type:none}.breadcrumb-container .crumb[data-v-7d96ae4b]{background:#fff;height:2em;display:inline-flex;justify-content:center;align-items:center;position:relative;margin:.5em 0 0 .75em}.breadcrumb-container .crumb[data-v-7d96ae4b]:not(:last-child):after{content:" ";border:1em solid transparent;border-left:.5em solid #fff;height:1em;position:absolute;right:-1.5em;z-index:9999}.breadcrumb-container .crumb__link[data-v-7d96ae4b]{color:#19175b;font-size:.875em;font-weight:700;padding:.5rem .375rem .5rem .5rem}',""]),t.exports=e},218:function(t,e,n){"use strict";var r=n(213);n.n(r).a},219:function(t,e,n){(e=n(15)(!1)).push([t.i,".hero[data-v-7c2de4d7]{position:relative;width:100%;max-width:26em;margin:0 auto}.hero__background[data-v-7c2de4d7]{position:relative;padding-bottom:7rem;overflow:hidden}.hero__background__image[data-v-7c2de4d7]{position:absolute;top:0;left:0;right:0;width:100%;-webkit-filter:blur(.5rem);filter:blur(.5rem)}",""]),t.exports=e},220:function(t,e,n){"use strict";var r=n(86),o=(n(69),n(215)),h=(n(88),{data:function(){return{items:[]}},created:function(){var t=this.$route.path.split("/");t[0]="home",this.items=t},methods:{path:function(t){if(0===t)return"/";var e=Object(o.a)(this.items);return e.shift(),"/"+e.slice(0,t).join("/").toLowerCase()},prettyCrumb:function(t){return(t.charAt(0).toUpperCase()+t.substr(1)).replace(/-/g," ")}}}),c=(n(216),n(6)),d=Object(c.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"breadcrumb-container"},[n("ul",{staticClass:"crumbs"},t._l(t.items,(function(e,r){return e.length>1?n("li",{key:r,staticClass:"crumb",class:{"is-active":t.items.length===r+1}},[n("nuxt-link",{staticClass:"crumb__link",attrs:{to:t.path(r)}},[t._v(t._s(t.prettyCrumb(e)))])],1):t._e()})),0)])}),[],!1,null,"7d96ae4b",null).exports,l={components:{Header:r.a,Breadcrumb:d},props:{image:{type:Object,required:!0}}},m=(n(218),Object(c.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"hero"},[e("Header",{attrs:{showBackButton:!0}}),e("div",{staticClass:"hero__background"},[this.image?e("img",{staticClass:"hero__background__image",attrs:{src:this.image.src,srcSet:this.image.srcSet}}):this._e(),e("Breadcrumb")],1)],1)}),[],!1,null,"7c2de4d7",null));e.a=m.exports},222:function(t,e,n){"use strict";n(132);e.a=function(t){return!!new RegExp("^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$","i").test(t)}},223:function(t,e,n){var content=n(230);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("f78dfddc",content,!0,{sourceMap:!1})},225:function(t,e,n){var content=n(235);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("4b1ff140",content,!0,{sourceMap:!1})},229:function(t,e,n){"use strict";var r=n(223);n.n(r).a},230:function(t,e,n){(e=n(15)(!1)).push([t.i,".button--extra[data-v-311ef926]{padding-top:calc(.75em - 1px);height:2.625em;border:0}[data-v-311ef926] .sm{display:block;font-size:.5em;line-height:1em;text-transform:uppercase;position:absolute;top:.75em;color:hsla(0,0%,100%,.75)}.button--android[data-v-311ef926]{background:#a4c639;color:#fff;border:0}.button--netflix[data-v-311ef926]{background:#e50914;color:#fff}.button--google[data-v-311ef926]{background:#3bccff;color:#fff}.button--hotstar[data-v-311ef926]{background:#048f70;color:#fff}.button--prime[data-v-311ef926]{background:#00a8e1;color:#fff}",""]),t.exports=e},231:function(t,e,n){"use strict";var r=n(222),o={props:{text:{type:String,required:!0},href:{type:String,required:!1,default:"#"},type:{type:String,required:!1,default:""}},computed:{element:function(){return"#"===this.href?"span":Object(r.a)(this.href)?"a":"nuxt-link"},parentAttributes:function(){return"a"===this.element?{href:this.href,target:"_blank",rel:"nofollow"}:"nuxt-link"===this.element?{to:this.href}:{}},buttonAttributes:function(){var t={ios:{type:"is-black","icon-left":"apple"},android:{class:"button--android","icon-left":"google-play"},netflix:{"icon-left":"netflix",class:"button--extra"},prime:{"icon-left":"amazon",class:"button--extra"},hotstar:{"icon-left":"star-outline",class:"button--extra"},google:{"icon-left":"google",class:"button--extra"},default:{type:"is-primary",outlined:!0,"icon-left":"web"}},e=t[this.type];return e&&e.class&&(e.class+=" button--"+this.type),t[this.type]||t.default},content:function(){var t={android:"Android",ios:"iOS",netflix:'<span class="sm">Watch on</span><span class="text">Netflix</span>',google:'<span class="sm">Watch on</span><span class="text">Google</span>',hotstar:'<span class="sm">Watch on</span><span class="text">Hotstar</span>',prime:'<span class="sm">Watch on</span><span class="text">Prime</span>',default:""};return this.text||t[this.type]||this.type||t.default}}},h=(n(229),n(6)),c={name:"ContentButtons",components:{Button:Object(h.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e(this.element,this._b({tag:"component",staticClass:"wrapper"},"component",this.parentAttributes,!1),[e("b-button",this._b({},"b-button",this.buttonAttributes,!1),[e("span",{domProps:{innerHTML:this._s(this.content)}})])],1)}),[],!1,null,"311ef926",null).exports},props:{buttons:{type:Array,required:!0}}},d=Object(h.a)(c,(function(){var t=this.$createElement,e=this._self._c||t;return this.buttons?e("div",{staticClass:"content__buttons"},this._l(this.buttons,(function(button,t){return e("Button",{key:t,staticClass:"content__buttons__item",attrs:{text:button.text||"",type:button.type?button.type.toLowerCase():"",href:button.link}})})),1):this._e()}),[],!1,null,null,null);e.a=d.exports},234:function(t,e,n){"use strict";var r=n(225);n.n(r).a},235:function(t,e,n){(e=n(15)(!1)).push([t.i,".stream-guide[data-v-3c3b0664]{font-size:.875em;padding:1em;display:block;margin:0 0 -1.5em;background:#fad550;color:inherit;opacity:.75}",""]),t.exports=e},237:function(t,e,n){"use strict";n(234);var r=n(6),component=Object(r.a)({},(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"stream-guide",attrs:{href:"https://bit.ly/IndiaSmile-WatchForFree",target:"_blank",rel:"nofollow"}},[e("strong",[e("u",[this._v("Watch For Free Guide")]),this._v(" 🎉")]),this._v(" Learn how to watch any movie or tv show for free at any time. Just ask "),e("strong",[e("u",[this._v("any tech savvy")]),this._v(" family member")]),this._v(" to follow this 2 minute guide 🥳")])}],!1,null,"3c3b0664",null);e.a=component.exports},244:function(t,e,n){t.exports={srcSet:n.p+"img/ba0de5f-400.jpg 400w,"+n.p+"img/4f5d3bd-800.jpg 800w,"+n.p+"img/daa187d-1280.jpg 1280w",images:[{path:n.p+"img/ba0de5f-400.jpg",width:400,height:225},{path:n.p+"img/4f5d3bd-800.jpg",width:800,height:450},{path:n.p+"img/daa187d-1280.jpg",width:1280,height:720}],src:n.p+"img/ba0de5f-400.jpg",toString:function(){return n.p+"img/ba0de5f-400.jpg"},placeholder:void 0,width:400,height:225}},516:function(t,e,n){t.exports={srcSet:n.p+"img/e72afb3-400.jpg 400w,"+n.p+"img/93a75b0-800.jpg 800w,"+n.p+"img/8dd0385-968.jpg 968w",images:[{path:n.p+"img/e72afb3-400.jpg",width:400,height:281},{path:n.p+"img/93a75b0-800.jpg",width:800,height:563},{path:n.p+"img/8dd0385-968.jpg",width:968,height:681}],src:n.p+"img/e72afb3-400.jpg",toString:function(){return n.p+"img/e72afb3-400.jpg"},placeholder:void 0,width:400,height:281}},517:function(t,e,n){t.exports={srcSet:n.p+"img/2b160dd-400.jpg 400w,"+n.p+"img/1dd4f3c-800.jpg 800w,"+n.p+"img/9c65769-1600.jpg 1600w",images:[{path:n.p+"img/2b160dd-400.jpg",width:400,height:250},{path:n.p+"img/1dd4f3c-800.jpg",width:800,height:499},{path:n.p+"img/9c65769-1600.jpg",width:1600,height:998}],src:n.p+"img/2b160dd-400.jpg",toString:function(){return n.p+"img/2b160dd-400.jpg"},placeholder:void 0,width:400,height:250}},518:function(t,e,n){t.exports={srcSet:n.p+"img/53dccd1-400.jpg 400w,"+n.p+"img/4b11b1d-800.jpg 800w,"+n.p+"img/c2ed2b8-1200.jpg 1200w",images:[{path:n.p+"img/53dccd1-400.jpg",width:400,height:225},{path:n.p+"img/4b11b1d-800.jpg",width:800,height:450},{path:n.p+"img/c2ed2b8-1200.jpg",width:1200,height:675}],src:n.p+"img/53dccd1-400.jpg",toString:function(){return n.p+"img/53dccd1-400.jpg"},placeholder:void 0,width:400,height:225}},519:function(t,e,n){t.exports={srcSet:n.p+"img/92ff343-400.jpg 400w,"+n.p+"img/559f0f2-800.jpg 800w,"+n.p+"img/8315a46-810.jpg 810w",images:[{path:n.p+"img/92ff343-400.jpg",width:400,height:254},{path:n.p+"img/559f0f2-800.jpg",width:800,height:509},{path:n.p+"img/8315a46-810.jpg",width:810,height:515}],src:n.p+"img/92ff343-400.jpg",toString:function(){return n.p+"img/92ff343-400.jpg"},placeholder:void 0,width:400,height:254}},520:function(t,e,n){t.exports={srcSet:n.p+"img/d6e8d56-400.jpg 400w,"+n.p+"img/9a3b9ca-750.jpg 750w",images:[{path:n.p+"img/d6e8d56-400.jpg",width:400,height:213},{path:n.p+"img/9a3b9ca-750.jpg",width:750,height:400}],src:n.p+"img/d6e8d56-400.jpg",toString:function(){return n.p+"img/d6e8d56-400.jpg"},placeholder:void 0,width:400,height:213}},521:function(t,e,n){t.exports={srcSet:n.p+"img/efb2817-400.jpg 400w,"+n.p+"img/edfaeb0-800.jpg 800w,"+n.p+"img/eb34140-928.jpg 928w",images:[{path:n.p+"img/efb2817-400.jpg",width:400,height:225},{path:n.p+"img/edfaeb0-800.jpg",width:800,height:451},{path:n.p+"img/eb34140-928.jpg",width:928,height:523}],src:n.p+"img/efb2817-400.jpg",toString:function(){return n.p+"img/efb2817-400.jpg"},placeholder:void 0,width:400,height:225}},522:function(t,e,n){t.exports={srcSet:n.p+"img/c2c21d7-400.jpg 400w,"+n.p+"img/d3ef688-800.jpg 800w,"+n.p+"img/c137e44-1280.jpg 1280w",images:[{path:n.p+"img/c2c21d7-400.jpg",width:400,height:225},{path:n.p+"img/d3ef688-800.jpg",width:800,height:450},{path:n.p+"img/c137e44-1280.jpg",width:1280,height:720}],src:n.p+"img/c2c21d7-400.jpg",toString:function(){return n.p+"img/c2c21d7-400.jpg"},placeholder:void 0,width:400,height:225}},523:function(t,e,n){t.exports={srcSet:n.p+"img/831ca58-400.jpg 400w,"+n.p+"img/8f0d8fc-800.jpg 800w,"+n.p+"img/cc1a5f4-1485.jpg 1485w",images:[{path:n.p+"img/831ca58-400.jpg",width:400,height:165},{path:n.p+"img/8f0d8fc-800.jpg",width:800,height:330},{path:n.p+"img/cc1a5f4-1485.jpg",width:1485,height:612}],src:n.p+"img/831ca58-400.jpg",toString:function(){return n.p+"img/831ca58-400.jpg"},placeholder:void 0,width:400,height:165}},524:function(t,e,n){t.exports={srcSet:n.p+"img/0e277a4-400.jpg 400w,"+n.p+"img/56887bc-800.jpg 800w,"+n.p+"img/f7841ce-1280.jpg 1280w",images:[{path:n.p+"img/0e277a4-400.jpg",width:400,height:225},{path:n.p+"img/56887bc-800.jpg",width:800,height:450},{path:n.p+"img/f7841ce-1280.jpg",width:1280,height:720}],src:n.p+"img/0e277a4-400.jpg",toString:function(){return n.p+"img/0e277a4-400.jpg"},placeholder:void 0,width:400,height:225}},525:function(t,e,n){t.exports={srcSet:n.p+"img/eaae4e7-400.jpg 400w,"+n.p+"img/6272dca-800.jpg 800w,"+n.p+"img/a20a8da-1440.jpg 1440w",images:[{path:n.p+"img/eaae4e7-400.jpg",width:400,height:208},{path:n.p+"img/6272dca-800.jpg",width:800,height:417},{path:n.p+"img/a20a8da-1440.jpg",width:1440,height:750}],src:n.p+"img/eaae4e7-400.jpg",toString:function(){return n.p+"img/eaae4e7-400.jpg"},placeholder:void 0,width:400,height:208}},526:function(t,e,n){t.exports={srcSet:n.p+"img/f992dc5-400.jpg 400w,"+n.p+"img/4553b6d-512.jpg 512w",images:[{path:n.p+"img/f992dc5-400.jpg",width:400,height:225},{path:n.p+"img/4553b6d-512.jpg",width:512,height:288}],src:n.p+"img/f992dc5-400.jpg",toString:function(){return n.p+"img/f992dc5-400.jpg"},placeholder:void 0,width:400,height:225}},610:function(t,e,n){"use strict";n.r(e);var r=n(220),o=n(231),h=n(237),c={name:"HomePage",components:{ArticleHero:r.a,ContentButtons:o.a,StreamGuide:h.a},data:function(){return{image:n(244),title:"Best Hollywood Thrillers",article:[{text:"We would like to present our readers with the best suspenseful movies that will heighten your feelings of thrill and excitement! This quarantine period, delve into the foreshadow of dreadful secrets, unsettled issues, buried traumas and shocking revelations. Indulge into the world of unexpected turns, mishappenings and unexplainable moments!"},{heading:"The Silence Of The Lambs",text:"An FBI agent seeks help from a psychopathic serial killer and former psychiatrist, in order to apprehend another serial killer who has been claiming female victims. Psychological supplemented with a gripping tale which inspires suspense amongst its watchers. One of the best suspense thrillers of this decade!",rating:8.6,image:n(516),buttons:[{type:"Google",link:"https://play.google.com/store/movies/details/The_Silence_of_the_Lambs?id=sHqrhjNCmTo&hl=en"}]},{custom:"Sharer"},{heading:"Seven",text:"A dark and gripping thriller which saves its most shocking revelations for the final moments of the movie! Based on two detectives, who try to run down a gruesome serial killer who bases his murders on the seven deadly sins. Will surely get your heart pumping!",rating:8.6,image:n(517),buttons:[{type:"Netflix",link:"https://www.netflix.com/title/950149"}]},{heading:"A Simple Favor",text:"A stylish post-modern film noir directed by Paul Feig, based around Stephanie who seeks to uncover the truth behind her best friend’s sudden disappearance from their small town. It is a thriller, carries suspense and is packed with an uneasy but mild humour at its core!",rating:6.8,image:n(518),buttons:[{type:"Google",link:"https://play.google.com/store/movies/details/A_Simple_Favor?id=7A59F3987EFA280AMV&hl=en"}]},{heading:"Shutter Island",text:"Two US marshals, are sent to an asylum on a remote island in order to investigate the disappearance of a patient, where Teddy uncovers a shocking truth about the place. Oh what can we say about this classic! The film's primary effect is on the senses. Everything is brought together into a disturbing pool of secrets.",rating:8.1,image:n(519),buttons:[{type:"Netflix",link:"https://www.netflix.com/title/70095139"}]},{heading:"No Country for Old Men",text:"A hunter's life takes a drastic turn when he is pursued by a psychopathic killer who wants the money he acquired! Powerful and moving performances from the cast, having won an Oscar for the best film!",rating:8.1,image:n(520),buttons:[{type:"Netflix",link:"https://www.netflix.com/title/70071613"}]},{heading:"Oldboy (2003, Korean)",text:"A man, held captive for no apparent reason for years, is given a cell phone, money and expensive clothes and released. Unless he finds out the identity of his captor, an even worse fate awaits him. This one is for the strong hearted and can be considered a real mind bender!",rating:8.4,image:n(521),buttons:[{type:"Netflix",link:"https://www.netflix.com/title/70024111"}]},{heading:"Mystic River",text:"After the death of a girl, a police officer, investigates her murder which leads him to a crime that took place twenty-five years ago. A back in time thriller with an unprecedented set of events that turn your mind topsy turvy in search for the truth!",rating:7.9,image:n(522),buttons:[{type:"Netflix",link:"https://www.netflix.com/title/60031232"}]},{heading:"Gone Girl",text:"Nick discovers that the entire media focus has shifted on him when his wife disappears on the day of their fifth wedding anniversary. This is a sick film, and also brilliant.",rating:8.1,image:n(523),buttons:[{type:"Netflix",link:"https://www.netflix.com/watch/70305893"}]},{heading:"Memento",text:"An insurance investigator suffers from anterograde amnesia and uses notes and tattoos to hunt for the man he thinks killed his wife, which is the last thing he remembers! One of the most original and unique thrillers that Hollywood has seen in its prime!",rating:8.4,image:n(524)},{heading:"The Gift",text:"A married couple run into an old acquaintance. Things take a turn when he begins to drop in unannounced at their house and inundates them with mysterious gifts. This resourceful and edgy thriller marks another string in the talented director Joel Edgerton’s palette.",rating:7,image:n(525),buttons:[{type:"Netflix",link:"https://www.netflix.com/title/80046694"}]},{heading:"Bird Box",text:"When a mysterious force decimates the world, only one thing is certain, if you see it, you die. Facing the unknown, Malorie finds love, hope and a new beginning and must flee with her two children down a treacherous river to the one place left that may offer sanctuary. Sandra Bullock stars and finds praise for her performance in this thrilling contest of life.",rating:6.6,image:n(526),buttons:[{type:"Netflix",link:"https://www.netflix.com/title/80196789"}]}]}},head:function(){return{title:this.title,meta:[{hid:"ogimage",property:"og:image",content:this.image}]}}},d=n(6),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"article"},[n("ArticleHero",{attrs:{image:t.image}}),n("div",{staticClass:"content"},[n("h2",{staticClass:"content__title"},[t._v(t._s(t.title))]),n("StreamGuide"),t._l(t.article,(function(data,e){return n("div",{key:e,staticClass:"content__section"},["Sharer"===data.custom?n("Sharer",{attrs:{title:t.title}}):t._e(),data.custom?t._e():[n("div",{staticClass:"content__header"},[data.heading?n("h5",{staticClass:"content__heading"},[t._v(t._s(data.heading))]):t._e(),data.rating?n("div",{staticClass:"content__rating"},[n("b-icon",{attrs:{icon:"star",size:"is-small"}}),t._v(t._s(data.rating))],1):t._e()]),data.image?n("img",{staticClass:"content__image",attrs:{src:data.image}}):t._e(),"string"==typeof data.text?n("p",{staticClass:"content__text",domProps:{innerHTML:t._s(data.text)}}):t._e(),data.buttons?n("ContentButtons",{attrs:{buttons:data.buttons}}):t._e()]],2)})),n("StreamGuide"),n("Sharer",{attrs:{title:t.title}})],2)],1)}),[],!1,null,"62882e5a",null);e.default=component.exports}}]);