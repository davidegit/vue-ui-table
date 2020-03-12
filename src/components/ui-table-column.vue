<template>
    <col :id="columnId"/>
</template>

<script>
import { formattersFactory } from "@/mixins/formatters-mixin"

export default {
    name: "ui-table-column",
    mixins: [formattersFactory(true, true)],
    props: {
        header: String,
        prop: String,
        sortable: Boolean,
        sortProp: String,
        width: [String, Number]
    },
    computed: {
        columnId() { return this._.uniqueId("ui-table-column-") },
        uiTable() {
            let parent = this.$parent
            while (parent && !parent.tableId) parent = parent.$parent
            return parent
        },
        sortOn() { return this.sortProp || this.prop },
        columnWidth() {
            if(this._.isNumber(this.width)) return `${this.width}px`
            else if(this._.isString(this.width)) {
                if(this._.endsWith(this.width, "px")) return this.width
                return `${this.width}px`
            }
        }
    },
    methods: {
        getValue(item) {
            let value = ""
            if(!this._.isNil(this.prop) && this._.isPlainObject(item)) value = this._.get(item, this.prop)
            return this.formatValue(value)
        },
        renderHeader() {
            if(!!this.$slots.header) return this.$slots.header
            return this.header
        },
        renderItem(item, itemKey) {
            const value = this.getValue(item)
            if(this.$scopedSlots.default) {
                const props = { item, itemKey, value }
                return this.$scopedSlots.default(props)
            }
            return value
        }
    },
    mounted() {
        console.debug("ui-table-column mounted", this.columnId)
        this.uiTable.addColumn(this)
    },
    beforeDestroy() {
        console.debug("ui-table-column before destroy", this.columnId)
        this.uiTable.removeColumn(this)
    }
}
</script>