(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{212:function(t,e,n){var content=n(217);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("63cfdf21",content,!0,{sourceMap:!1})},213:function(t,e,n){var content=n(219);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("20db7586",content,!0,{sourceMap:!1})},215:function(t,e,n){"use strict";n.d(e,"a",(function(){return h}));var r=n(70);var o=n(87);function h(t){return function(t){if(Array.isArray(t))return Object(r.a)(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||Object(o.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},216:function(t,e,n){"use strict";var r=n(212);n.n(r).a},217:function(t,e,n){(e=n(15)(!1)).push([t.i,'.breadcrumb-container[data-v-7d96ae4b]{position:absolute;padding:.75em;bottom:0;left:0;width:100%;margin-left:-.75em}.breadcrumb-container .crumbs[data-v-7d96ae4b]{padding:0;list-style-type:none}.breadcrumb-container .crumb[data-v-7d96ae4b]{background:#fff;height:2em;display:inline-flex;justify-content:center;align-items:center;position:relative;margin:.5em 0 0 .75em}.breadcrumb-container .crumb[data-v-7d96ae4b]:not(:last-child):after{content:" ";border:1em solid transparent;border-left:.5em solid #fff;height:1em;position:absolute;right:-1.5em;z-index:9999}.breadcrumb-container .crumb__link[data-v-7d96ae4b]{color:#19175b;font-size:.875em;font-weight:700;padding:.5rem .375rem .5rem .5rem}',""]),t.exports=e},218:function(t,e,n){"use strict";var r=n(213);n.n(r).a},219:function(t,e,n){(e=n(15)(!1)).push([t.i,".hero[data-v-7c2de4d7]{position:relative;width:100%;max-width:26em;margin:0 auto}.hero__background[data-v-7c2de4d7]{position:relative;padding-bottom:7rem;overflow:hidden}.hero__background__image[data-v-7c2de4d7]{position:absolute;top:0;left:0;right:0;width:100%;-webkit-filter:blur(.5rem);filter:blur(.5rem)}",""]),t.exports=e},220:function(t,e,n){"use strict";var r=n(86),o=(n(69),n(215)),h=(n(88),{data:function(){return{items:[]}},created:function(){var t=this.$route.path.split("/");t[0]="home",this.items=t},methods:{path:function(t){if(0===t)return"/";var e=Object(o.a)(this.items);return e.shift(),"/"+e.slice(0,t).join("/").toLowerCase()},prettyCrumb:function(t){return(t.charAt(0).toUpperCase()+t.substr(1)).replace(/-/g," ")}}}),c=(n(216),n(6)),l=Object(c.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"breadcrumb-container"},[n("ul",{staticClass:"crumbs"},t._l(t.items,(function(e,r){return e.length>1?n("li",{key:r,staticClass:"crumb",class:{"is-active":t.items.length===r+1}},[n("nuxt-link",{staticClass:"crumb__link",attrs:{to:t.path(r)}},[t._v(t._s(t.prettyCrumb(e)))])],1):t._e()})),0)])}),[],!1,null,"7d96ae4b",null).exports,d={components:{Header:r.a,Breadcrumb:l},props:{image:{type:Object,required:!0}}},m=(n(218),Object(c.a)(d,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"hero"},[e("Header",{attrs:{showBackButton:!0}}),e("div",{staticClass:"hero__background"},[this.image?e("img",{staticClass:"hero__background__image",attrs:{src:this.image.src,srcSet:this.image.srcSet}}):this._e(),e("Breadcrumb")],1)],1)}),[],!1,null,"7c2de4d7",null));e.a=m.exports},222:function(t,e,n){"use strict";n(132);e.a=function(t){return!!new RegExp("^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$","i").test(t)}},223:function(t,e,n){var content=n(230);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("f78dfddc",content,!0,{sourceMap:!1})},225:function(t,e,n){var content=n(235);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("4b1ff140",content,!0,{sourceMap:!1})},229:function(t,e,n){"use strict";var r=n(223);n.n(r).a},230:function(t,e,n){(e=n(15)(!1)).push([t.i,".button--extra[data-v-311ef926]{padding-top:calc(.75em - 1px);height:2.625em;border:0}[data-v-311ef926] .sm{display:block;font-size:.5em;line-height:1em;text-transform:uppercase;position:absolute;top:.75em;color:hsla(0,0%,100%,.75)}.button--android[data-v-311ef926]{background:#a4c639;color:#fff;border:0}.button--netflix[data-v-311ef926]{background:#e50914;color:#fff}.button--google[data-v-311ef926]{background:#3bccff;color:#fff}.button--hotstar[data-v-311ef926]{background:#048f70;color:#fff}.button--prime[data-v-311ef926]{background:#00a8e1;color:#fff}",""]),t.exports=e},231:function(t,e,n){"use strict";var r=n(222),o={props:{text:{type:String,required:!0},href:{type:String,required:!1,default:"#"},type:{type:String,required:!1,default:""}},computed:{element:function(){return"#"===this.href?"span":Object(r.a)(this.href)?"a":"nuxt-link"},parentAttributes:function(){return"a"===this.element?{href:this.href,target:"_blank",rel:"nofollow"}:"nuxt-link"===this.element?{to:this.href}:{}},buttonAttributes:function(){var t={ios:{type:"is-black","icon-left":"apple"},android:{class:"button--android","icon-left":"google-play"},netflix:{"icon-left":"netflix",class:"button--extra"},prime:{"icon-left":"amazon",class:"button--extra"},hotstar:{"icon-left":"star-outline",class:"button--extra"},google:{"icon-left":"google",class:"button--extra"},default:{type:"is-primary",outlined:!0,"icon-left":"web"}},e=t[this.type];return e&&e.class&&(e.class+=" button--"+this.type),t[this.type]||t.default},content:function(){var t={android:"Android",ios:"iOS",netflix:'<span class="sm">Watch on</span><span class="text">Netflix</span>',google:'<span class="sm">Watch on</span><span class="text">Google</span>',hotstar:'<span class="sm">Watch on</span><span class="text">Hotstar</span>',prime:'<span class="sm">Watch on</span><span class="text">Prime</span>',default:""};return this.text||t[this.type]||this.type||t.default}}},h=(n(229),n(6)),c={name:"ContentButtons",components:{Button:Object(h.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e(this.element,this._b({tag:"component",staticClass:"wrapper"},"component",this.parentAttributes,!1),[e("b-button",this._b({},"b-button",this.buttonAttributes,!1),[e("span",{domProps:{innerHTML:this._s(this.content)}})])],1)}),[],!1,null,"311ef926",null).exports},props:{buttons:{type:Array,required:!0}}},l=Object(h.a)(c,(function(){var t=this.$createElement,e=this._self._c||t;return this.buttons?e("div",{staticClass:"content__buttons"},this._l(this.buttons,(function(button,t){return e("Button",{key:t,staticClass:"content__buttons__item",attrs:{text:button.text||"",type:button.type?button.type.toLowerCase():"",href:button.link}})})),1):this._e()}),[],!1,null,null,null);e.a=l.exports},234:function(t,e,n){"use strict";var r=n(225);n.n(r).a},235:function(t,e,n){(e=n(15)(!1)).push([t.i,".stream-guide[data-v-3c3b0664]{font-size:.875em;padding:1em;display:block;margin:0 0 -1.5em;background:#fad550;color:inherit;opacity:.75}",""]),t.exports=e},237:function(t,e,n){"use strict";n(234);var r=n(6),component=Object(r.a)({},(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"stream-guide",attrs:{href:"https://bit.ly/IndiaSmile-WatchForFree",target:"_blank",rel:"nofollow"}},[e("strong",[e("u",[this._v("Watch For Free Guide")]),this._v(" 🎉")]),this._v(" Learn how to watch any movie or tv show for free at any time. Just ask "),e("strong",[e("u",[this._v("any tech savvy")]),this._v(" family member")]),this._v(" to follow this 2 minute guide 🥳")])}],!1,null,"3c3b0664",null);e.a=component.exports},290:function(t,e,n){t.exports={srcSet:n.p+"img/7f2b058-400.jpg 400w,"+n.p+"img/4b04476-800.jpg 800w,"+n.p+"img/d347837-1280.jpg 1280w",images:[{path:n.p+"img/7f2b058-400.jpg",width:400,height:225},{path:n.p+"img/4b04476-800.jpg",width:800,height:450},{path:n.p+"img/d347837-1280.jpg",width:1280,height:720}],src:n.p+"img/7f2b058-400.jpg",toString:function(){return n.p+"img/7f2b058-400.jpg"},placeholder:void 0,width:400,height:225}},537:function(t,e,n){t.exports={srcSet:n.p+"img/0388539-400.jpg 400w,"+n.p+"img/189200d-800.jpg 800w",images:[{path:n.p+"img/0388539-400.jpg",width:400,height:300},{path:n.p+"img/189200d-800.jpg",width:800,height:600}],src:n.p+"img/0388539-400.jpg",toString:function(){return n.p+"img/0388539-400.jpg"},placeholder:void 0,width:400,height:300}},538:function(t,e,n){t.exports={srcSet:n.p+"img/d7e9084-400.jpg 400w,"+n.p+"img/e5f5aa3-500.jpg 500w",images:[{path:n.p+"img/d7e9084-400.jpg",width:400,height:240},{path:n.p+"img/e5f5aa3-500.jpg",width:500,height:300}],src:n.p+"img/d7e9084-400.jpg",toString:function(){return n.p+"img/d7e9084-400.jpg"},placeholder:void 0,width:400,height:240}},539:function(t,e,n){t.exports={srcSet:n.p+"img/bb1cdcd-400.jpg 400w,"+n.p+"img/f7f8a94-770.jpg 770w",images:[{path:n.p+"img/bb1cdcd-400.jpg",width:400,height:245},{path:n.p+"img/f7f8a94-770.jpg",width:770,height:472}],src:n.p+"img/bb1cdcd-400.jpg",toString:function(){return n.p+"img/bb1cdcd-400.jpg"},placeholder:void 0,width:400,height:245}},540:function(t,e,n){t.exports={srcSet:n.p+"img/257dbe7-400.jpg 400w,"+n.p+"img/ca6b12e-516.jpg 516w",images:[{path:n.p+"img/257dbe7-400.jpg",width:400,height:261},{path:n.p+"img/ca6b12e-516.jpg",width:516,height:337}],src:n.p+"img/257dbe7-400.jpg",toString:function(){return n.p+"img/257dbe7-400.jpg"},placeholder:void 0,width:400,height:261}},541:function(t,e,n){t.exports={srcSet:n.p+"img/928c958-400.jpg 400w,"+n.p+"img/bc72447-800.jpg 800w,"+n.p+"img/da15235-1200.jpg 1200w",images:[{path:n.p+"img/928c958-400.jpg",width:400,height:300},{path:n.p+"img/bc72447-800.jpg",width:800,height:600},{path:n.p+"img/da15235-1200.jpg",width:1200,height:900}],src:n.p+"img/928c958-400.jpg",toString:function(){return n.p+"img/928c958-400.jpg"},placeholder:void 0,width:400,height:300}},542:function(t,e,n){t.exports={srcSet:n.p+"img/740411a-400.jpg 400w",images:[{path:n.p+"img/740411a-400.jpg",width:400,height:202}],src:n.p+"img/740411a-400.jpg",toString:function(){return n.p+"img/740411a-400.jpg"},placeholder:void 0,width:400,height:202}},543:function(t,e,n){t.exports={srcSet:n.p+"img/4d1cd79-400.jpg 400w,"+n.p+"img/4174dc9-800.jpg 800w,"+n.p+"img/635addf-1440.jpg 1440w",images:[{path:n.p+"img/4d1cd79-400.jpg",width:400,height:225},{path:n.p+"img/4174dc9-800.jpg",width:800,height:450},{path:n.p+"img/635addf-1440.jpg",width:1440,height:810}],src:n.p+"img/4d1cd79-400.jpg",toString:function(){return n.p+"img/4d1cd79-400.jpg"},placeholder:void 0,width:400,height:225}},544:function(t,e,n){t.exports={srcSet:n.p+"img/b9a6f9c-400.jpg 400w,"+n.p+"img/d045ab4-800.jpg 800w,"+n.p+"img/4d2085a-1280.jpg 1280w",images:[{path:n.p+"img/b9a6f9c-400.jpg",width:400,height:225},{path:n.p+"img/d045ab4-800.jpg",width:800,height:450},{path:n.p+"img/4d2085a-1280.jpg",width:1280,height:720}],src:n.p+"img/b9a6f9c-400.jpg",toString:function(){return n.p+"img/b9a6f9c-400.jpg"},placeholder:void 0,width:400,height:225}},545:function(t,e,n){t.exports={srcSet:n.p+"img/9bebc8a-400.jpg 400w,"+n.p+"img/03339f7-800.jpg 800w,"+n.p+"img/812f032-1280.jpg 1280w",images:[{path:n.p+"img/9bebc8a-400.jpg",width:400,height:168},{path:n.p+"img/03339f7-800.jpg",width:800,height:335},{path:n.p+"img/812f032-1280.jpg",width:1280,height:536}],src:n.p+"img/9bebc8a-400.jpg",toString:function(){return n.p+"img/9bebc8a-400.jpg"},placeholder:void 0,width:400,height:168}},546:function(t,e,n){t.exports={srcSet:n.p+"img/77c102c-400.jpg 400w,"+n.p+"img/4f3fad7-640.jpg 640w",images:[{path:n.p+"img/77c102c-400.jpg",width:400,height:300},{path:n.p+"img/4f3fad7-640.jpg",width:640,height:480}],src:n.p+"img/77c102c-400.jpg",toString:function(){return n.p+"img/77c102c-400.jpg"},placeholder:void 0,width:400,height:300}},547:function(t,e,n){t.exports={srcSet:n.p+"img/8d595c1-400.jpg 400w,"+n.p+"img/4389586-800.jpg 800w,"+n.p+"img/2d518af-1280.jpg 1280w",images:[{path:n.p+"img/8d595c1-400.jpg",width:400,height:225},{path:n.p+"img/4389586-800.jpg",width:800,height:450},{path:n.p+"img/2d518af-1280.jpg",width:1280,height:720}],src:n.p+"img/8d595c1-400.jpg",toString:function(){return n.p+"img/8d595c1-400.jpg"},placeholder:void 0,width:400,height:225}},603:function(t,e,n){"use strict";n.r(e);var r=n(220),o=n(231),h=n(237),c={name:"HomePage",components:{ArticleHero:r.a,StreamGuide:h.a,ContentButtons:o.a},data:function(){return{image:n(290),title:"Best Bollywood Crimes",article:[{text:"Bollywood has had a history of portraying criminal character psychology really well. 🙏 The use of suspenseful plots and the ruthlessness of India’s underworld has made us witness some great performances and mind bending twists. Let’s go through some of the best crime movies which you can choose from, to enjoy at home!"},{custom:"Sharer"},{heading:"Kahaani",text:"A pregnant woman travels to Kolkata from London to search for her missing husband. When all clues lead to a dead end, she realises that there is more than what meets the eye. The story totally grips you and leaves you at a dramatic high. Vidya Balan is amazing as always!",rating:8.1,image:n(537),buttons:[{type:"Netflix",link:"https://www.netflix.com/title/70236020"}]},{heading:"A Wednesday",text:"A retired police commissioner recounts the most memorable case of his career wherein he was informed about a bomb scare in Mumbai by an ordinary commoner. Now this movie comes as a complete surprise and an extremely pleasant surprise I must say! Newer stories are slowly finding their way into cinema. A Wednesday is an intelligent diatribe against terrorism and a must watch!",rating:8.1,image:n(538),buttons:[{type:"Netflix",link:"https://www.netflix.com/title/70107499"}]},{heading:"Drishyam",text:"When the disappearance of a policewoman's son threatens to ruin Vijay’s family, he leaves no stone unturned in order to shield his family. A suspenseful drama with a nail-biting finish, it holds the viewer by the eyeballs till its' engaging climax.",rating:8.2,image:n(539),buttons:[{type:"Netflix",link:"https://www.netflix.com/title/80068117"}]},{heading:"Special 26",text:"A team of tricksters pose as CBI officers and conduct raids to rob politicians and businessmen of their black money. With the real CBI on their trail, they decide to pull off their biggest robbery. The film grips, excites and climaxes too! Catch it for a pure cinematic journey.",rating:8,image:n(540),buttons:[{type:"Netflix",link:"https://www.netflix.com/title/70273637"}]},{heading:"Raees",text:"Threat lurks over Raees Alam and his illicit business after the ACP decides to get the better of him. In order to survive and keep his trade thriving, Raees must overcome this. Shah Rukh Khan has never looked better, he is full of fury and for once, isn’t spreading his arms, but breaking others!",rating:6.8,image:n(541),buttons:[{type:"Netflix",link:"https://www.netflix.com/title/80164778"}]},{heading:"Satya",text:"Durga's brother is murdered in a gang war, turning him into a revenge-seeking man. Now, his ex-girlfriends cop husband is behind him. This movie has achieved a cult status, and is cited as one of the best Indian gangster films for its realistic portrayal of violence.",rating:8.2,image:n(542),buttons:[{type:"Prime",link:"https://www.amazon.com/Satya-J-D-Chakravarthy/dp/B07T1M3R51"}]},{heading:"Shootout at Lokhandwala",text:"An experienced policeman, Khan, sets out for a shoot-out of gangsters in a residential locality of Mumbai.Little does he know that this will lead to his own integrity being questioned. Based on a true story, Shootout at Lokhandwala is a fantastic movie that is full of violence and naughty action.",rating:7.1,image:n(543),buttons:[{type:"Netflix",link:"https://www.netflix.com/title/70073018"}]},{heading:"Paan Singh Tomar",text:"Paan Singh Tomar, an athlete, is a gold medallist at the Indian National Games seven times in a row. He is forced to become a dacoit when his mother is murdered and the police don't take any action. The movie works because Irfan makes Paan Singh Tomar come alive as an athlete, as a husband and as a dacoit. This is a flawless performance.",rating:8.2,image:n(544),buttons:[{type:"Netflix",link:"https://www.netflix.com/title/70123126"}]},{heading:"Omkara",text:"Langda dreams of becoming Omkara's successor after the latter wins the election. But when Omkara appoints Kesu as his lieutenant, Langda feels betrayed and plots revenge. An extraordinary movie! The Actors were praised for their performances and still today, is an interesting watch.",rating:8.1,image:n(545),message:"Available on Indian streaming platforms"},{heading:"Sarkar",text:"When a powerful gangster is framed for murder, his son steps up to protect his legacy. A gripping tale, this is Ram Gopal Varma at his finest!",rating:7.6,image:n(546),message:"Available on Indian streaming platforms"},{heading:"Ab Tak Chhappan",text:"Sadhu, an encounter specialist, is armed with a personal vendetta to hunt and kill the gang responsible for his wife's death. Have to say, excellent camera work and great direction!",rating:7.9,image:n(547),message:"Available on Indian streaming platforms"}]}},head:function(){return{title:this.title,meta:[{hid:"ogimage",property:"og:image",content:this.image}]}}},l=n(6),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"article"},[n("ArticleHero",{attrs:{image:t.image}}),n("div",{staticClass:"content"},[n("h2",{staticClass:"content__title"},[t._v(t._s(t.title))]),n("StreamGuide"),t._l(t.article,(function(data,e){return n("div",{key:e,staticClass:"content__section"},["Sharer"===data.custom?n("Sharer",{attrs:{title:t.title}}):t._e(),data.custom?t._e():[n("div",{staticClass:"content__header"},[data.heading?n("h5",{staticClass:"content__heading"},[t._v(t._s(data.heading))]):t._e(),data.rating?n("div",{staticClass:"content__rating"},[n("b-icon",{attrs:{icon:"star",size:"is-small"}}),t._v(t._s(data.rating))],1):t._e()]),data.image?n("img",{staticClass:"content__image",attrs:{src:data.image}}):t._e(),"string"==typeof data.text?n("p",{staticClass:"content__text",domProps:{innerHTML:t._s(data.text)}}):t._e(),data.buttons?n("ContentButtons",{attrs:{buttons:data.buttons}}):t._e()]],2)})),n("StreamGuide"),n("Sharer",{attrs:{title:t.title}})],2)],1)}),[],!1,null,"b878b372",null);e.default=component.exports}}]);