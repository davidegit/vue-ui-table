(function(e){function t(t){for(var r,s,o=t[0],u=t[1],c=t[2],l=0,m=[];l<o.length;l++)s=o[l],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&m.push(i[s][0]),i[s]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);h&&h(t);while(m.length)m.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,s=1;s<n.length;s++){var u=n[s];0!==i[u]&&(r=!1)}r&&(a.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},i={app:0},a=[];function s(e){return o.p+"js/"+({bulma:"bulma",home:"home"}[e]||e)+"."+{bulma:"a0fe359e",home:"314d3f6c"}[e]+".js"}function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.e=function(e){var t=[],n=i[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=i[e]=[t,r]}));t.push(n[2]=r);var a,u=document.createElement("script");u.charset="utf-8",u.timeout=120,o.nc&&u.setAttribute("nonce",o.nc),u.src=s(e);var c=new Error;a=function(t){u.onerror=u.onload=null,clearTimeout(l);var n=i[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;c.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",c.name="ChunkLoadError",c.type=r,c.request=a,n[1](c)}i[e]=void 0}};var l=setTimeout((function(){a({type:"timeout",target:u})}),12e4);u.onerror=u.onload=a,document.head.appendChild(u)}return Promise.all(t)},o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var h=c;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"1cc9":function(e,t,n){},"281a":function(e,t,n){"use strict";var r,i,a,s,o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"ui-table-container",class:e.containerClasses,style:e.containerStyle},[n("table",{class:e.tableclasses},[n("colgroup",{ref:"columns"},[e._t("default")],2),e.hasCaption?n("caption",[e._t("caption",[e._v(e._s(e.caption))])],2):e._e(),e.hideHeaders?e._e():n("thead",[e._t("headers",[n("tr",e._l(e.columns,(function(e,t){return n("ui-table-header",{key:"ui-table-header-"+t,attrs:{column:e}})})),1)])],2),n("tbody",[e._t("items",[e._l(e.rows,(function(t,r){return[e._t("row",[n("tr",{key:"ui-table-row-"+r},e._l(e.columns,(function(i,a){return n("ui-table-cell",e._b({key:"ui-table-cell-"+r+"-"+a,attrs:{column:i}},"ui-table-cell",t,!1))})),1)],null,t)]}))])],2),n("tfoot")])])},u=[],c=(n("7db0"),n("c975"),n("a434"),n("a9e3"),n("ade3")),l=n("5530"),h=n("c0e1"),m=n("2ef0"),d={methods:{convertClassToObject:function(e){var t=this;return m["isString"](e)?Object(c["a"])({},e,!0):m["isArray"](e)?m["reduce"](e,(function(e,n){return Object.assign(e,t.convertClassToObject(n))}),{}):m["isObject"](e)?e:{}}}},f={name:"ui-table-header",props:{column:{type:Object,required:!0}},render:function(e){var t={};Object(m["isNil"])(this.column.columnWidth)||(t.style={width:this.column.columnWidth});var n=[this.column.renderHeader()];return e("th",t,n)}},b=f,p=n("2877"),g=Object(p["a"])(b,r,i,!1,null,null,null),v=g.exports,j={column:{type:Object,required:!0},item:{required:!0},itemKey:{required:!0}},y={name:"ui-table-cell",props:Object.assign({},j),render:function(e){var t={class:this.column.getCellClass(this.item)},n=[this.column.renderItem(this.item,this.itemKey)];return e("td",t,n)}},O={functional:!0,props:Object.assign({},j),render:function(e,t){var n=t.props,r=t.data,i=t.children;return e(y,Object.assign(r,{props:n}),i)}},x=O,w=Object(p["a"])(x,a,s,!1,null,null,null),C=w.exports,P={name:"ui-table",mixins:[h["a"],d],components:{UiTableHeader:v,UiTableCell:C},model:{prop:"selected",event:"change"},props:{caption:String,hideHeaders:Boolean,items:Array,itemKey:[String,Function],selected:{required:!1},multiple:Boolean,hideFooter:Boolean,pagination:[Boolean,Object],bordered:Boolean,striped:Boolean,dense:Boolean,hoverable:Boolean,borderless:Boolean,width:[String,Number],maxWidth:[String,Number],height:[String,Number],maxHeight:[String,Number],containerClass:[String,Array,Object],tableClass:[String,Array,Object]},data:function(){return{columns:[]}},computed:{tableId:function(){return m["uniqueId"]("ui-table-")},hasCaption:function(){return!m["isNil"](this.caption)||!m["isNil"](this.$slots.caption)},paginationEnabled:function(){return m["isBoolean"](this.pagination)?!this.hideFooter&&this.pagination:!this.hideFooter&&!m["isEmpty"](this.pagination)},pagedItems:function(){return this.items},rows:function(){var e=this;return m["map"](this.pagedItems,(function(t,n){return{item:t,itemKey:e.getItemKey(t,n)}}))},fixedLayout:function(){return!m["chain"](this.columns).find((function(e){return!!e.columnWidth})).isNil().value()},selectable:function(){return!m["isNil"](this.$listeners.change)},containerClasses:function(){return Object(l["a"])(Object(c["a"])({},this.$uiTable.theme.classes.container,!0),this.convertClassToObject(this.containerClass))},containerStyle:function(){var e=this.convertToPixel(this.width),t=this.convertToPixel(this.height),n=this.convertToPixel(this.maxWidth),r=this.convertToPixel(this.maxHeight),i={};return m["isNil"](e)||m["set"](i,"width",e),m["isNil"](t)||m["set"](i,"height",t),m["isNil"](n)||m["set"](i,"maxWidth",n),m["isNil"](r)||m["set"](i,"maxHeight",r),i},tableclasses:function(){var e;return Object(l["a"])((e={},Object(c["a"])(e,this.$uiTable.theme.classes.table,!0),Object(c["a"])(e,this.$uiTable.theme.classes.bordered,this.bordered&&!this.borderless),Object(c["a"])(e,this.$uiTable.theme.classes.striped,this.striped),Object(c["a"])(e,this.$uiTable.theme.classes.dense,this.dense),Object(c["a"])(e,this.$uiTable.theme.classes.hoverable,this.selectable||this.hoverable),Object(c["a"])(e,"borderless",this.borderless&&!this.bordered),e),this.convertClassToObject(this.tableClass))}},methods:{getItemKey:function(e,t){return m["isString"](this.itemKey)&&m["isPlainObject"](e)?m["get"](e,this.itemKey):m["isFunction"](this.itemKey)?this.itemKey(e):t},getColumnIndex:function(e){return[].indexOf.call(this.$refs.columns.children,e.$el)},addColumn:function(e){var t=this.getColumnIndex(e);e.columnIndex=t,console.debug("ui-table add column",e.columnId,"at index",t),this.columns.splice(t,0,e)},removeColumn:function(e){var t=e.columnIndex;t>=0&&(console.debug("ui-table remove column",e.columnId,"at index",t),this.columns.splice(t,1))}}},S=P,T=Object(p["a"])(S,o,u,!1,null,null,null);t["a"]=T.exports},"3af3":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),i=(n("6597"),n("de2a")),a=(n("d3b7"),n("8c4f"));r["a"].use(a["a"]);var s=[{path:"/",name:"home",component:function(){return n.e("home").then(n.bind(null,"f595"))}},{path:"/bulma",name:"bulma",component:function(){return n.e("bulma").then(n.bind(null,"221d"))}},{path:"*",redirect:{name:"home"}}],o=new a["a"]({routes:s}),u=o,c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"columns"},[n("div",{staticClass:"column is-2-fullhd is-3-desktop is-hidden-touch"}),n("div",{staticClass:"column"},[n("div",{staticClass:"container"},[n("router-view")],1)])])},l=[],h={name:"docs"},m=h,d=n("2877"),f=Object(d["a"])(m,c,l,!1,null,null,null),b=f.exports;n("1cc9"),n("3af3");r["a"].use(i["a"]),r["a"].config.productionTip=!1,new r["a"]({router:u,render:function(e){return e(b)}}).$mount("#app")},c0e1:function(e,t,n){"use strict";var r=n("2ef0");t["a"]={methods:{convertToPixel:function(e){if(!Object(r["isNil"])(e)){if(Object(r["isNumber"])(e))return"".concat(e,"px");if(Object(r["isString"])(e))return e}}}}},db49:function(e,t,n){"use strict";n.d(t,"b",(function(){return a}));var r=n("2ef0"),i={icons:{sort:"fas fa-angle-up",toFirstPage:"fas fa-angle-double-lef",toPreviousPage:"fas fa-angle-left",toNextPage:"fas fa-angle-right",toLastPage:"fas fa-angle-double-right"},theme:{classes:{container:"",table:"ui-table",bordered:"bordered",striped:"striped",dense:"dense",hoverable:"hoverable"}}};function a(e){r["isNil"](e)||!r["isPlainObject"](e)||r["isEmpty"](e)||(!r["isNil"](e.icons)&&r["isPlainObject"](e.icons)&&(i.icons=r["merge"]({},i.icons,e.icons)),!r["isNil"](e.theme)&&r["isPlainObject"](e.theme)&&(i.theme=r["merge"]({},i.theme,e.theme)),console.debug("vue-ui-table config updated",i))}t["a"]=i},de2a:function(e,t,n){"use strict";(function(e){n("b0c0"),n("7a82");var r,i=n("db49"),a=n("281a"),s=n("e3a5"),o={install:function(e,t){console.debug("install vue-ui-table",t),Object(i["b"])(t),Object.defineProperty(e.prototype,"$uiTable",{get:function(){return e.observable(i["a"])},set:i["b"]}),e.component(a["a"].name,a["a"]),e.component(s["a"].name,s["a"])}};"undefined"!==typeof window?r=window.Vue:"undefined"!==typeof e&&(r=e.Vue),r&&r.use(o),t["a"]=o}).call(this,n("c8ba"))},e3a5:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("col",{attrs:{id:e.columnId}})},i=[],a=(n("a9e3"),n("96cf"),n("1da1")),s=n("2ef0"),o=(n("99af"),n("a15b"),n("d81d"),n("d3b7"),n("3ca3"),n("ddb0"),{props:{separtor:{type:String,default:", "}},methods:{arrayFormat:function(e,t){return Object(s["chain"])(e).map(t).join(this.separator).value()},asyncArrayFormat:function(e,t){var n=this;return Object(a["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.t0=s["join"],r.next=3,Promise.all(Object(s["map"])(e,t));case 3:return r.t1=r.sent,r.t2=n.separator,r.abrupt("return",(0,r.t0)(r.t1,r.t2));case 6:case"end":return r.stop()}}),r)})))()}}}),u={mixins:[o],props:{i18nPrefix:String},methods:{i18nFormat:function(e){return this.$t("".concat(this.i18nPrefix,".").concat(e))},i18nTranslate:function(e){return Object(s["isArray"])(e)?this.arrayFormat(e,this.i18nFormat):this.i18nFormat(e)}}},c={mixins:[o],props:{format:{type:Function,default:function(e){return e}}},methods:{translate:function(e){return Object(s["isArray"])(e)?this.arrayFormat(e,this.format):this.format(e)},asyncTranslate:function(e){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(!Object(s["isArray"])(e)){n.next=6;break}return n.next=3,t.asyncArrayFormat(e,t.format);case 3:return n.abrupt("return",n.sent);case 6:return n.next=8,t.format(e);case 8:return n.abrupt("return",n.sent);case 9:case"end":return n.stop()}}),n)})))()}}},l={methods:{getApiConfig:function(e){return Object(s["isString"])(e)?{url:e,method:"get"}:Object(s["isPlainObject"])(e)?Object.assign({},e):e}}},h={mixins:[o,l],props:{formatApi:[String,Object,Function],itemFormat:[String,Function]},data:function(){return{formatting:!1}},methods:{getFormatApiConfig:function(e){return s["isFunction"](this.formatApi)?this.getApiConfig(this.formatApi(e)):this.getApiConfig(this.formatApi)},remoteFormat:function(e){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function n(){var r,i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,t.formatting=!0,n.next=4,t.axios.reques(t.getFormatApiConfig(e));case 4:if(r=n.sent,i=r.data,!s["isString"](i)){n.next=8;break}return n.abrupt("return",i);case 8:if(!s["isString"](t.itemFormat)||!s["isPlainObject"](i)){n.next=10;break}return n.abrupt("return",s["get"](i,t.itemFormat,""));case 10:if(!s["isFunction"](t.itemFormat)){n.next=12;break}return n.abrupt("return",t.itemFormat(i));case 12:return n.abrupt("return",i);case 13:return n.prev=13,t.formatting=!1,n.finish(13);case 16:case"end":return n.stop()}}),n,null,[[0,,13,16]])})))()},remoteTranslate:function(e){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(!s["isArray"](e)){n.next=6;break}return n.next=3,t.asyncArrayFormat(e,t.remoteFormat);case 3:return n.abrupt("return",n.sent);case 6:return n.next=8,t.remoteFormat(e);case 8:return n.abrupt("return",n.sent);case 9:case"end":return n.stop()}}),n)})))()}}};function m(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=[];return e&&r.push(u),t&&r.push(c),n&&r.push(h),{mixins:r,methods:{formatValue:function(n){return e&&!Object(s["isNil"])(this.i18nPrefix)?this.i18nTranslate(n):t&&!Object(s["isNil"])(this.format)?this.translate(n):n},asyncFormatValue:function(r){var i=this;return Object(a["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(!e||Object(s["isNil"])(i.i18nPrefix)){a.next=2;break}return a.abrupt("return",i.i18nTranslate(r));case 2:if(!t||Object(s["isNil"])(i.format)){a.next=6;break}return a.next=5,i.asyncTranslate(r);case 5:return a.abrupt("return",a.sent);case 6:if(!n){a.next=10;break}return a.next=9,i.remoteTranslate(r);case 9:return a.abrupt("return",a.sent);case 10:return a.abrupt("return",r);case 11:case"end":return a.stop()}}),a)})))()}}}}m(!0,!0,!0);var d=n("c0e1"),f={name:"ui-table-column",mixins:[m(!0,!0),d["a"]],props:{header:String,prop:String,sortable:Boolean,sortProp:String,width:[String,Number],headerClass:[String,Array,Object],cellClass:[String,Array,Object,Function]},computed:{columnId:function(){return s["uniqueId"]("ui-table-column-")},uiTable:function(){var e=this.$parent;while(e&&!e.tableId)e=e.$parent;return e},sortOn:function(){return this.sortProp||this.prop},columnWidth:function(){return this.convertToPixel(this.width)}},methods:{getHeaderClass:function(){return this.headerClass},getCellClass:function(e){if(!s["isNil"](this.cellClass))return s["isFunction"](this.cellClass)?this.cellClass(e):this.cellClass},getValue:function(e){var t="";return!s["isNil"](this.prop)&&s["isPlainObject"](e)&&(t=s["get"](e,this.prop)),this.formatValue(t)},renderHeader:function(e){return this.$slots.header?this.$slots.header:this.$scopedSlots.header?this.$scopedSlots.header(e):this.header},renderItem:function(e,t){var n=this.getValue(e);if(this.$scopedSlots["default"]){var r={item:e,itemKey:t,value:n};return this.$scopedSlots["default"](r)}return n}},mounted:function(){console.debug("ui-table-column mounted",this.columnId),this.uiTable.addColumn(this)},beforeDestroy:function(){console.debug("ui-table-column before destroy",this.columnId),this.uiTable.removeColumn(this)}},b=f,p=n("2877"),g=Object(p["a"])(b,r,i,!1,null,null,null);t["a"]=g.exports}});
//# sourceMappingURL=app.bc1df854.js.map