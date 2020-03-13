<template>
    <col :id="columnId"/>
</template>

<script>
import { formattersFactory } from "@/mixins/formatters-mixin"
import pixelHelperMixin from "@/mixins/pixel-helper-mixin"
import * as _ from "lodash"

export default {
    name: "ui-table-column",
    mixins: [formattersFactory(true, true), pixelHelperMixin],
    props: {
        header: String,
        prop: String,
        sortable: Boolean,
        sortProp: String,
        width: [String, Number],
        headerClass: [String, Array, Object],
        cellClass: [String, Array, Object, Function]
    },
    computed: {
        columnId() { return _.uniqueId("ui-table-column-") },
        uiTable() {
            let parent = this.$parent
            while (parent && !parent.tableId) parent = parent.$parent
            return parent
        },
        sortOn() { return this.sortProp || this.prop },
        columnWidth() { return this.convertToPixel(this.width) }
    },
    methods: {
        getHeaderClass() { return this.headerClass },
        getCellClass(item) {
            if(!_.isNil(this.cellClass)) {
                if(_.isFunction(this.cellClass)) return this.cellClass(item)
                return this.cellClass
            }
        },
        getValue(item) {
            let value = ""
            if(!_.isNil(this.prop) && _.isPlainObject(item)) value = _.get(item, this.prop)
            return this.formatValue(value)
        },
        renderHeader(props) {
            if(!!this.$slots.header) return this.$slots.header
            if(!!this.$scopedSlots.header) return this.$scopedSlots.header(props)
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