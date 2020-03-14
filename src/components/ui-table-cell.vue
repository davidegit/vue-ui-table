<script>

    const props = {
        column: { type: Object, required: true },
        item: { required: true },
        itemKey: { required: true }
    }

    const UiTableCell = {
        name: "ui-table-cell",
        props: Object.assign({}, props),
        render(h) {
            const data = { class: this.column.getCellClass(this.item) }
            const children = [this.column.renderItem(this.item, this.itemKey)]
            return h(this.column.cellTag, data, children)
        }
    }

    export default {
        functional: true,
        props: Object.assign({}, props),
        render(h, { props, data, children }) {
            return h(UiTableCell, Object.assign(data, { props }), children)
        }
    }
</script>