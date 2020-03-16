<script>
	import { includes, sortBy, times } from "lodash"
	import UiMaxSelect from "./pagination/ui-max-select"
	import UiPageSelect from "./pagination/ui-page-select"

    export default {
        name: "ui-table-pagination",
		components: { UiMaxSelect, UiPageSelect },
		props: {
            max: Number,
			page: Number,
			totalItems: { type: Number, default: 0 }
		},
		computed: {
            rowsPerPage() {
                const maxes = this.$uiTable.pagination.max.values
                if(this.max < this.totalItems && !includes(maxes, this.max)) maxes.push(this.max)
                return sortBy(maxes)
            },
            pages() {
                if(this.totalItems < this.max) return [1]
                else return times(Math.ceil(this.totalItems / Math.abs(this.max)), n => n + 1)
            },
		},
		methods: {
            updateMax(max) { this.$emit("update:max", max) },
			updatePage(page) { this.$emit("update:page", page) },
            genMaxSelect(h) {
                const { tag, data, label } = this.$uiTable.pagination.max.component
				const maxSelectData = {
                    props: { value: this.max, items: this.rowsPerPage, label },
					on: { input: this.updateMax }
                }
                return h(tag, Object.assign({}, data, maxSelectData))
			},
			genPageSelect(h) {
                const { tag, data, label } = this.$uiTable.pagination.page.component
                const pageSelectData = {
                    props: { value: this.page, items: this.pages, label },
                    on: { input: this.updatePage }
                }
                return h(tag, Object.assign({}, data, pageSelectData))
			}
		},
		render(h) {
            return h("div", { class: "ui-table-pagination" }, [this.genMaxSelect(h), this.genPageSelect(h)])
		}
    }
</script>