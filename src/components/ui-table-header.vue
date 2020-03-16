<script>
import { isNil, get, has } from "lodash"
import UiIcon from "./ui-icon"

export default {
    name: "ui-table-header",
	components: { UiIcon },
    props: {
        column: { type: Object, required: true },
		sort: { type: Object, default: () => ({}) },
        fixedLayout: Boolean,
        sortDisabled: Boolean
    },
	computed: {
        isSortable() { return !this.sortDisabled && this.column.sortable },
		order() { return get(this.sort, this.column.sortOn) },
		isAsc() { return this.order === this.$uiTable.pagination.sort.asc },
		isDesc() { return this.order === this.$uiTable.pagination.sort.desc },
		isSorted() { return this.isSortable && has(this.sort, this.column.sortOn) && (this.isAsc || this.isDesc) }
	},
	methods: {
        doSort() {
            if(this.isSortable) {
				const order = this.isAsc ? this.$uiTable.pagination.sort.desc : this.isDesc ? this.$uiTable.pagination.sort.noOrder : this.$uiTable.pagination.sort.asc
                this.$emit("update:sort", { prop: this.column.sortOn, order })
			}
		},
		genSortIcon(h) {
            const { tag, data } = this.$uiTable.theme.icons.component
			return h(tag, Object.assign({}, data, { class: "ui-table-sort-icon" }), [this.$uiTable.theme.icons.sort])
		}
	},
    render(h) {
        const headerData = { class: this.column.getHeaderClass(this.item) }
        if(this.fixedLayout && !isNil(this.column.columnWidth)) headerData.style = { width: this.column.columnWidth }
        const children = []
		if(this.isSortable) {
            if (this.column.hasCustomHeader) children.push(this.column.renderHeader({ sortable: this.isSortable, sorted: this.isSorted, doSort: this.doSort }))
            else {
                const data = {
                    class: {
                        [this.$uiTable.theme.classes.sortable]: this.isSortable,
                        [this.$uiTable.theme.classes.sorted]: this.isSorted,
                        [this.$uiTable.theme.classes.ascSorted]: this.isAsc,
                        [this.$uiTable.theme.classes.descSorted]: this.isDesc
                    },
					on: { click: this.doSort }
                }
                children.push(h("span", data, [this.genSortIcon(h), this.column.renderHeader()]))
            }
        } else children.push(this.column.renderHeader())
        return h(this.column.headerTag, headerData, children)
    }
}
</script>