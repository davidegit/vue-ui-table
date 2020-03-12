import UiTable from "./ui-table"
import UiTableColumn from "./ui-table-column"

const VueUiTablePlugin = {
    install(Vue, options) {
        console.log("install vue-ui-table")
        Vue.component(UiTable.name, UiTable)
        Vue.component(UiTableColumn.name, UiTableColumn)
    }
}

let GlobalVue
if(typeof window !== "undefined") GlobalVue = window.Vue
else if(typeof global !== "undefined") GlobalVue = global.Vue
if(GlobalVue) GlobalVue.use(VueUiTablePlugin)

export { UiTable, UiTableColumn }

export default VueUiTablePlugin