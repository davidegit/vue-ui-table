<script>
export default {
    name: "ui-table-cell",
    functional: true,
    props: {
        column: { type: Object, required: true },
        item: { required: true },
        itemKey: { required: true }
    },
    render(h, { props, data }) {
        const children = [props.column.renderItem(props.item, props.itemKey)]
        return h("td", data, children)
    }
}
</script>