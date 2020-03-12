<script>
export default {
    name: "ui-table-header",
    props: {
        column: { type: Object, required: true },
    },
    render(h) {
        const data = {}
        if(!this._.isNil(this.column.columnWidth)) data.style = { width: this.column.columnWidth }
        const children = [this.column.renderHeader()]
        return h("th", data, children)
    }
}
</script>