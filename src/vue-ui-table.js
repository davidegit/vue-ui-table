import config, { setConfig } from "./config"
import UiTable from "./components/ui-table"
import UiTableColumn from "./components/ui-table-column"
import "@/assets/scss/ui-table.scss"

const VueUiTable = {
    install(Vue, options) {
        console.debug("install vue-ui-table", options)
        setConfig(options)
        Object.defineProperty(Vue.prototype, "$uiTable", {
            get() { return Vue.observable(config) } ,
            set: setConfig
        })
        Vue.component(UiTable.name, UiTable)
        Vue.component(UiTableColumn.name, UiTableColumn)
    }
}

let GlobalVue
if(typeof window !== "undefined") GlobalVue = window.Vue
else if(typeof global !== "undefined") GlobalVue = global.Vue
if(GlobalVue) GlobalVue.use(VueUiTable)

export { UiTable, UiTableColumn }

export default VueUiTable