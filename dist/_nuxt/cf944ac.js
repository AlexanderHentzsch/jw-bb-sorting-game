(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{322:function(t,e,n){var content=n(323);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(69).default)("6b715e77",content,!0,{sourceMap:!1})},323:function(t,e,n){var o=n(68)(!1);o.push([t.i,'.theme--light.v-icon{color:rgba(0,0,0,.54)}.theme--light.v-icon:focus:after{opacity:.12}.theme--light.v-icon.v-icon.v-icon--disabled{color:rgba(0,0,0,.38)!important}.theme--dark.v-icon{color:#fff}.theme--dark.v-icon:focus:after{opacity:.24}.theme--dark.v-icon.v-icon.v-icon--disabled{color:hsla(0,0%,100%,.5)!important}.v-icon.v-icon{align-items:center;display:inline-flex;font-feature-settings:"liga";font-size:24px;justify-content:center;letter-spacing:normal;line-height:1;position:relative;text-indent:0;transition:.3s cubic-bezier(.25,.8,.5,1),visibility 0s;vertical-align:middle;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-icon.v-icon:after{background-color:currentColor;border-radius:50%;content:"";display:inline-block;height:100%;left:0;opacity:0;pointer-events:none;position:absolute;top:0;transform:scale(1.3);width:100%;transition:opacity .2s cubic-bezier(.4,0,.6,1)}.v-icon.v-icon--dense{font-size:20px}.v-icon--right{margin-left:8px}.v-icon--left{margin-right:8px}.v-icon.v-icon.v-icon--link{cursor:pointer;outline:none}.v-icon--disabled{pointer-events:none}.v-icon--dense__component,.v-icon--dense__svg{height:20px}.v-icon__component,.v-icon__svg{height:24px;width:24px}.v-icon__svg{fill:currentColor}',""]),t.exports=o},344:function(t,e,n){"use strict";n.r(e);var o,r={data:function(){return{dialog:!0}},methods:{setThemeMode:function(t){"dark"===t&&this.$store.commit("settings/setDarkMode",!0),"light"===t&&this.$store.commit("settings/setDarkMode",!1)}}},c=n(72),l=n(95),h=n.n(l),d=n(349),v=n(301),f=n(281),m=n(338),x=n(350),C=(n(22),n(14),n(25),n(34),n(19),n(35),n(7)),y=(n(297),n(40),n(49),n(199),n(148),n(78),n(30),n(322),n(293)),w=n(283),_=n(296),k=n(149),S=n(15),O=n(0),z=n(147);function j(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function D(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?j(Object(source),!0).forEach((function(e){Object(C.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):j(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}!function(t){t.xSmall="12px",t.small="16px",t.default="24px",t.medium="28px",t.large="36px",t.xLarge="40px"}(o||(o={}));var L=Object(z.a)(y.a,w.a,_.a,k.a).extend({name:"v-icon",props:{dense:Boolean,disabled:Boolean,left:Boolean,right:Boolean,size:[Number,String],tag:{type:String,required:!1,default:"i"}},computed:{medium:function(){return!1},hasClickListener:function(){return Boolean(this.listeners$.click||this.listeners$["!click"])}},methods:{getIcon:function(){var t="";return this.$slots.default&&(t=this.$slots.default[0].text.trim()),Object(S.r)(this,t)},getSize:function(){var t={xSmall:this.xSmall,small:this.small,medium:this.medium,large:this.large,xLarge:this.xLarge},e=Object(S.o)(t).find((function(e){return t[e]}));return e&&o[e]||Object(S.f)(this.size)},getDefaultData:function(){return{staticClass:"v-icon notranslate",class:{"v-icon--disabled":this.disabled,"v-icon--left":this.left,"v-icon--link":this.hasClickListener,"v-icon--right":this.right,"v-icon--dense":this.dense},attrs:D({"aria-hidden":!this.hasClickListener,disabled:this.hasClickListener&&this.disabled,type:this.hasClickListener?"button":void 0},this.attrs$),on:this.listeners$}},getSvgWrapperData:function(){var t=this.getSize(),e=D(D({},this.getDefaultData()),{},{style:t?{fontSize:t,height:t,width:t}:void 0});return this.applyColors(e),e},applyColors:function(data){data.class=D(D({},data.class),this.themeClasses),this.setTextColor(this.color,data)},renderFontIcon:function(t,e){var n=[],data=this.getDefaultData(),o="material-icons",r=t.indexOf("-"),c=r<=-1;c?n.push(t):function(t){return["fas","far","fal","fab","fad"].some((function(e){return t.includes(e)}))}(o=t.slice(0,r))&&(o=""),data.class[o]=!0,data.class[t]=!c;var l=this.getSize();return l&&(data.style={fontSize:l}),this.applyColors(data),e(this.hasClickListener?"button":this.tag,data,n)},renderSvgIcon:function(t,e){var n={class:"v-icon__svg",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",role:"img","aria-hidden":!0}},o=this.getSize();return o&&(n.style={fontSize:o,height:o,width:o}),e(this.hasClickListener?"button":"span",this.getSvgWrapperData(),[e("svg",n,[e("path",{attrs:{d:t}})])])},renderSvgIconComponent:function(t,e){var data={class:{"v-icon__component":!0}},n=this.getSize();n&&(data.style={fontSize:n,height:n,width:n}),this.applyColors(data);var component=t.component;return data.props=t.props,data.nativeOn=data.on,e(this.hasClickListener?"button":"span",this.getSvgWrapperData(),[e(component,data)])}},render:function(t){var e=this.getIcon();return"string"==typeof e?function(t){return/^[mzlhvcsqta]\s*[-+.0-9][^mlhvzcsqta]+/i.test(t)&&/[\dz]$/i.test(t)&&t.length>4}(e)?this.renderSvgIcon(e,t):this.renderFontIcon(e,t):this.renderSvgIconComponent(e,t)}}),P=O.a.extend({name:"v-icon",$_wrapperFor:L,functional:!0,render:function(t,e){var data=e.data,n=e.children,o="";return data.domProps&&(o=data.domProps.textContent||data.domProps.innerHTML||o,delete data.domProps.textContent,delete data.domProps.innerHTML),t(L,data,o?[o]:n)}}),$=n(339),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"d-flex align-center justify-center",staticStyle:{width:"100%",height:"100%"}},[n("v-card",{staticClass:"px-5 d-flex flex-column",attrs:{width:"350px",height:"500px"}},[n("v-card-title",{staticClass:"flex-grow-0 pb-12"},[n("h1",{staticClass:"text-center",staticStyle:{"font-size":"28px",width:"100%"}},[t._v("🎮"),n("br"),t._v("Bibelbücher sortieren")])]),t._v(" "),n("v-card-text",{staticClass:"text-center flex-grow-1"},[n("v-row",[n("v-col",[n("v-btn",{staticClass:"mb-2",attrs:{to:"/gametype",nuxt:"",block:"",elevation:"0",outlined:"",tile:"","x-large":""}},[t._v("Neues Spiel")]),t._v(" "),n("v-btn",{staticClass:"mb-2",attrs:{to:"/",nuxt:"",block:"",elevation:"0",outlined:"",tile:"","x-large":""}},[t._v("Spielverlauf")]),t._v(" "),n("v-btn",{staticClass:"mb-2",attrs:{to:"/",nuxt:"",block:"",elevation:"0",outlined:"",tile:"","x-large":""}},[t._v("Einstellungen")])],1)],1)],1),t._v(" "),n("v-card-actions",{staticClass:"flex-grow-0 pb-8",attrs:{align:"end"}},[n("v-row",{staticClass:"text-center d-flex flex-column",attrs:{"no-gutters":""}},[n("v-col",{staticClass:"text-uppercase"},[t._v("\n                    Stil\n                ")]),t._v(" "),n("v-col",[n("v-btn",{attrs:{fab:"",icon:"",text:"","x-large":""},on:{click:function(e){return t.setThemeMode("dark")}}},[n("v-icon",[t._v("mdi-weather-night")])],1),t._v(" "),n("v-btn",{attrs:{fab:"",icon:"",text:"","x-large":""},on:{click:function(e){return t.setThemeMode("light")}}},[n("v-icon",[t._v("mdi-weather-sunny")])],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;h()(component,{VBtn:d.a,VCard:v.a,VCardActions:f.a,VCardText:f.b,VCardTitle:f.c,VCol:m.a,VContainer:x.a,VIcon:P,VRow:$.a})}}]);