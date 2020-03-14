(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["home"],{f595:function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"container"},[s("section",{staticClass:"section"},[s("h1",{staticClass:"title"},[e._v("Install")]),s("div",{staticClass:"content"},[e._m(0),s("div",{directives:[{name:"highlight",rawName:"v-highlight"}]},[s("pre",{staticClass:"box language-bash"},[s("code",[e._v(e._s(e.installDependency))])])]),s("p",[e._v("To make it available globally, edit your main.js file as follows:")]),s("div",{directives:[{name:"highlight",rawName:"v-highlight"}]},[s("pre",{staticClass:"box language-javascript"},[s("code",[e._v(e._s(e.globalInstall))])])]),s("p",[e._v("Or import the components you need manually:")]),s("div",{directives:[{name:"highlight",rawName:"v-highlight"}]},[s("pre",{staticClass:"box language-javascript"},[s("code",[e._v(e._s(e.localInstall))])])])])]),s("section",{staticClass:"section"},[s("h1",{staticClass:"title"},[e._v("Config object")]),s("div",{staticClass:"content"},[s("p",[e._v("There are some aspects of the library that you can freely customize:")]),s("div",{directives:[{name:"highlight",rawName:"v-highlight"}]},[s("pre",{staticClass:"box language-javascript"},[s("code",[e._v(e._s(e.configObject))])])])]),s("ui-table",{attrs:{items:e.configObjectDetails,"table-class":"docs",striped:"",bordered:""}},[s("ui-table-column",{attrs:{prop:"key",header:"Key",fit:""}}),s("ui-table-column",{attrs:{prop:"type",header:"Type",fit:""}}),s("ui-table-column",{attrs:{prop:"description",header:"Description"}})],1)],1),s("section",{staticClass:"section"},[s("h1",{staticClass:"title"},[e._v("Usage")]),s("ex-1")],1)])},l=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("p",[e._v("To install "),s("b",[e._v("vui-ui-table")]),e._v(", simply run the following command:")])}],r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",{staticClass:"content"},[s("p",[e._v("Customize the style using simple attributes:")]),s("div",{staticClass:"level"},[s("div",{staticClass:"level-item"},[s("label",{staticClass:"checkbox",attrs:{disabled:e.borderless}},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.bordered,expression:"bordered"}],attrs:{type:"checkbox",disabled:e.borderless},domProps:{checked:Array.isArray(e.bordered)?e._i(e.bordered,null)>-1:e.bordered},on:{change:function(t){var s=e.bordered,a=t.target,l=!!a.checked;if(Array.isArray(s)){var r=null,i=e._i(s,r);a.checked?i<0&&(e.bordered=s.concat([r])):i>-1&&(e.bordered=s.slice(0,i).concat(s.slice(i+1)))}else e.bordered=l}}}),e._v(" bordered ")])]),s("div",{staticClass:"level-item"},[s("label",{staticClass:"checkbox"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.striped,expression:"striped"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.striped)?e._i(e.striped,null)>-1:e.striped},on:{change:function(t){var s=e.striped,a=t.target,l=!!a.checked;if(Array.isArray(s)){var r=null,i=e._i(s,r);a.checked?i<0&&(e.striped=s.concat([r])):i>-1&&(e.striped=s.slice(0,i).concat(s.slice(i+1)))}else e.striped=l}}}),e._v(" striped ")])]),s("div",{staticClass:"level-item"},[s("label",{staticClass:"checkbox"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.dense,expression:"dense"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.dense)?e._i(e.dense,null)>-1:e.dense},on:{change:function(t){var s=e.dense,a=t.target,l=!!a.checked;if(Array.isArray(s)){var r=null,i=e._i(s,r);a.checked?i<0&&(e.dense=s.concat([r])):i>-1&&(e.dense=s.slice(0,i).concat(s.slice(i+1)))}else e.dense=l}}}),e._v(" dense ")])]),s("div",{staticClass:"level-item"},[s("label",{staticClass:"checkbox"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.hoverable,expression:"hoverable"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.hoverable)?e._i(e.hoverable,null)>-1:e.hoverable},on:{change:function(t){var s=e.hoverable,a=t.target,l=!!a.checked;if(Array.isArray(s)){var r=null,i=e._i(s,r);a.checked?i<0&&(e.hoverable=s.concat([r])):i>-1&&(e.hoverable=s.slice(0,i).concat(s.slice(i+1)))}else e.hoverable=l}}}),e._v(" hoverable ")])]),s("div",{staticClass:"level-item"},[s("label",{staticClass:"checkbox",attrs:{disabled:e.bordered}},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.borderless,expression:"borderless"}],attrs:{type:"checkbox",disabled:e.bordered},domProps:{checked:Array.isArray(e.borderless)?e._i(e.borderless,null)>-1:e.borderless},on:{change:function(t){var s=e.borderless,a=t.target,l=!!a.checked;if(Array.isArray(s)){var r=null,i=e._i(s,r);a.checked?i<0&&(e.borderless=s.concat([r])):i>-1&&(e.borderless=s.slice(0,i).concat(s.slice(i+1)))}else e.borderless=l}}}),e._v(" borderless ")])])])]),s("ui-table",{attrs:{items:e.items,bordered:e.bordered,striped:e.striped,dense:e.dense,hoverable:e.hoverable,borderless:e.borderless}},[s("ui-table-column",{attrs:{prop:"col1",header:"Col 1"}}),s("ui-table-column",{attrs:{prop:"col2",header:"Col 2"}}),s("ui-table-column",{attrs:{prop:"col3",header:"Col 3"}})],1)],1)},i=[],o={name:"ex-1",data:function(){return{bordered:!1,striped:!1,dense:!1,hoverable:!1,borderless:!1,items:[{col1:"col 1",col2:"col 2",col3:"col 3"},{col1:"col 1",col2:"col 2",col3:"col 3"},{col1:"col 1",col2:"col 2",col3:"col 3"},{col1:"col 1",col2:"col 2",col3:"col 3"},{col1:"col 1",col2:"col 2",col3:"col 3"}]}}},c=o,n=s("2877"),d=Object(n["a"])(c,r,i,!1,null,null,null),p=d.exports,b={name:"home",components:{Ex1:p},data:function(){return{installDependency:"$ npm i @davidegit/vue-ui-table",globalInstall:'import Vue from "vue"\nimport VueUiTable from "@davidegit/vue-ui-table"\n\nVue.use(VueUiTable, { /* config */ })',localInstall:'import { UiTable, UiTableColumn } from "@davidegit/vue-ui-table"\n\nexport default {\n\tname: "your-component",\n\tcomponents: { UiTable, UiTableColumn },\n\t...\n}',configObject:JSON.stringify({theme:{icons:{sort:"fas fa-angle-up",toFirstPage:"fas fa-angle-double-lef",toPreviousPage:"fas fa-angle-left",toNextPage:"fas fa-angle-right",toLastPage:"fas fa-angle-double-right"},classes:{container:"",table:"ui-table",bordered:"bordered",striped:"striped",dense:"dense",hoverable:"hoverable"}}},null,4),configObjectDetails:[{key:"theme.icons.sort",type:"String",description:"Icon used for sorting"},{key:"theme.icons.toFirstPage",type:"String",description:"Icon used for 'go to first page'"},{key:"theme.icons.toPreviousPage",type:"String",description:"Icon used for 'go to previous page'"},{key:"theme.icons.toNextPage",type:"String",description:"Icon used for 'go to next page'"},{key:"theme.icons.toLastPage",type:"String",description:"Icon used for 'go to last page'"},{key:"theme.classes.container",type:"String",description:"Class applied to the table container"},{key:"theme.classes.table",type:"String",description:"Class applied to the table"},{key:"theme.classes.bordered",type:"String",description:"Class applied to the table with bordered props set to true"},{key:"theme.classes.striped",type:"String",description:"Class applied to the table with striped props set to true"},{key:"theme.classes.dense",type:"String",description:"Class applied to the table with dense props set to true"},{key:"theme.classes.hoverable",type:"String",description:"Class applied to the table with hoverable props set to true"}]}}},h=b,v=Object(n["a"])(h,a,l,!1,null,null,null);t["default"]=v.exports}}]);
//# sourceMappingURL=home.00b26400.js.map