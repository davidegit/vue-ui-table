<template>
    <div :style="containerStyle" class="ui-table-container" :class="containerClasses">
        <table :class="tableclasses">
            <colgroup ref="columns">
                <slot/>
            </colgroup>
            <caption v-if="hasCaption">
                <slot name="caption">{{caption}}</slot>
            </caption>
            <thead v-if="!hideHeaders">
                <slot name="headers">
                    <tr>
                        <ui-table-header v-for="(column, columnIndex) in columns" :key="`ui-table-header-${columnIndex}`" :column="column"/>
                    </tr>
                </slot>
            </thead>
            <tbody>
                <slot name="rows" v-bind="{ rows }">
                    <template v-for="(row, rowIndex) in rows">
                        <slot name="row" v-bind="row">
                            <tr :key="`ui-table-row-${rowIndex}`">
                                <ui-table-cell v-for="(column, columnIndex) in columns" :key="`ui-table-cell-${rowIndex}-${columnIndex}`" :column="column" v-bind="row"/>
                            </tr>
                        </slot>
                    </template>
                </slot>
            </tbody>
        </table>
    </div>
</template>

<script>
    import pixelHelperMixin from "@/mixins/pixel-helper-mixin"
    import htmlHelperMixin from "@/mixins/html-helper-mixin"
    import * as _ from "lodash"
    import UiTableHeader from "./ui-table-header"
    import UiTableCell from "./ui-table-cell"

    export default {
        name: "ui-table",
        mixins: [pixelHelperMixin, htmlHelperMixin],
        components: { UiTableHeader, UiTableCell },
        props: {
            caption: String,
            hideHeaders: Boolean,
            items: Array,
            itemKey: [String, Function],
            pagination: [Boolean, Object],
            bordered: Boolean,
            striped: Boolean,
            dense: Boolean,
            hoverable: Boolean,
            borderless: Boolean,
            width: [String, Number],
            maxWidth: [String, Number],
            height: [String, Number],
            maxHeight: [String, Number],
            containerClass: [String, Array, Object],
            tableClass: [String, Array, Object]
        },
        data() {
            return {
                columns: []
            }
        },
        computed: {
            tableId() { return _.uniqueId("ui-table-") },
            hasCaption() { return !_.isNil(this.caption) || !_.isNil(this.$slots.caption) },
            paginationEnabled() {
                if(_.isBoolean(this.pagination)) return !this.hideFooter && this.pagination
                else return !this.hideFooter && !_.isEmpty(this.pagination)
            },
            pagedItems() { return this.items },
            rows() { return _.map(this.pagedItems, (item, index) => ({ item, itemKey: this.getItemKey(item, index) })) },
            fixedLayout() { return !_.chain(this.columns).find(column => !!column.columnWidth).isNil().value() },
            containerClasses() {
                return {
                    [this.$uiTable.theme.classes.container]: true,
                    ...this.convertClassToObject(this.containerClass)
                }
            },
            containerStyle() {
                const width = this.convertToPixel(this.width)
                const height = this.convertToPixel(this.height)
                const maxWidth = this.convertToPixel(this.maxWidth)
                const maxHeight = this.convertToPixel(this.maxHeight)
                const style = {}
                if(!_.isNil(width)) _.set(style, "width", width)
                if(!_.isNil(height)) _.set(style, "height", height)
                if(!_.isNil(maxWidth)) _.set(style, "maxWidth", maxWidth)
                if(!_.isNil(maxHeight)) _.set(style, "maxHeight", maxHeight)
                return style
            },
            tableclasses() {
                return {
                    [this.$uiTable.theme.classes.table]: true,
                    [this.$uiTable.theme.classes.bordered]: this.bordered && !this.borderless,
                    [this.$uiTable.theme.classes.striped]: this.striped,
                    [this.$uiTable.theme.classes.dense]: this.dense,
                    [this.$uiTable.theme.classes.hoverable]: this.hoverable,
                    borderless: this.borderless && !this.bordered,
                    fixed: this.fixedLayout,
                    ...this.convertClassToObject(this.tableClass)
                }
            }
        },
        methods: {
            getItemKey(item, index) {
                if(_.isString(this.itemKey) && _.isPlainObject(item)) return _.get(item, this.itemKey)
                if(_.isFunction(this.itemKey)) return this.itemKey(item)
                return index
            },
            getColumnIndex(column) { return [].indexOf.call(this.$refs.columns.children, column.$el) },
            addColumn(column) {
                const index = this.getColumnIndex(column)
                column.columnIndex = index
                console.debug("ui-table add column", column.columnId, "at index", index)
                this.columns.splice(index, 0, column)
            },
            removeColumn(column) {
                const index = column.columnIndex
                if(index >= 0) {
                    console.debug("ui-table remove column", column.columnId, "at index", index)
                    this.columns.splice(index, 1)
                }
            }
        }
    }
</script>