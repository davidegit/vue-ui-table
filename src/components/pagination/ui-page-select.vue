<script>
    import UiSelect from "@/components/ui-select"
    import UiIcon from "@/components/ui-icon"
	import { maxBy, isUndefined, head } from "lodash"

    export default {
        name: "ui-page-select",
        components: { UiSelect, UiIcon },
		props: {
            value: Number,
			items: Array,
            label: String
		},
		computed: {
            page: {
                get() { return this.value || this.$uiTable.pagination.page.default },
				set(page) { this.$emit("input", page) }
			},
			firstPage() { return head(this.items) },
			lastPage() {
                const paxPage = maxBy(this.items)
                if(isUndefined(paxPage)) return this.firstPage
                else return paxPage
			},
            prevDisabled() { return this.page === this.firstPage },
            nextDisabled() { return this.page === this.lastPage }
		},
		methods: {
            toFirstPage() { if(!this.prevDisabled) this.page = this.firstPage },
			toPreviousPage() { if(!this.prevDisabled) this.page -= 1 },
			toNextPage() { if(!this.nextDisabled) this.page += 1 },
			toLastPage() { if(!this.nextDisabled) this.page = this.lastPage },
            genPageIcon(h, action) {
                const { tag, data } = this.$uiTable.theme.icons.component
                return h(tag, Object.assign({}, data, { class: "ui-table-sort-icon" }), [this.$uiTable.theme.icons[action]])
            },
			genButton(h, action, disabled) {
                const data = { attrs: { disabled }, on: { click: this[action] } }
                return h("button", data, [this.genPageIcon(h, action)])
			},
			genSelect(h) {
                const data = {
                    props: { value: this.page, items: this.items, label: this.label },
					on: { input: page => this.page = page }
				}
                return h("ui-select", data)
            }
		},
		render(h) {
            return h("div", { class: "ui-page-select" }, [
                this.genButton(h, "toFirstPage", this.prevDisabled),
                this.genButton(h, "toPreviousPage", this.prevDisabled),
				this.genSelect(h),
                this.genButton(h, "toNextPage", this.nextDisabled),
                this.genButton(h, "toLastPage", this.nextDisabled)
			])
		}
    }
</script>