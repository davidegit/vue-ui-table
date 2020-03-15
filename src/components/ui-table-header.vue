<script>
import { isNil } from "lodash"

export default {
    name: "ui-table-header",
    props: {
        column: { type: Object, required: true },
    },
    render(h) {
        const data = { class: this.column.getHeaderClass(this.item) }
        if(!isNil(this.column.columnWidth)) data.style = { width: this.column.columnWidth }
        const children = [this.column.renderHeader()]
        return h(this.column.headerTag, data, children)
    }
}
</script>