import Vue from "vue"
import UiTable from "./ui-table"
import UiTableColumn from "./ui-table-column"

Vue.component(UiTable.name, UiTable)
Vue.component(UiTableColumn.name, UiTableColumn)

export { UiTable, UiTableColumn }

export default { UiTable, UiTableColumn }