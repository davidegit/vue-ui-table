<template>
    <table class="ui-table" :class="classes">
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
            <slot name="items">
                <template v-for="(row, rowIndex) in rows">
                    <slot name="row" v-bind="row">
                        <tr :key="`ui-table-row-${rowIndex}`">
                            <ui-table-cell v-for="(column, columnIndex) in columns" :key="`ui-table-cell-${rowIndex}-${columnIndex}`" :column="column" v-bind="row"/>
                        </tr>
                    </slot>
                </template>
            </slot>
        </tbody>
        <tfoot>

        </tfoot>
    </table>
</template>

<script>
import * as _ from "lodash"
import UiTableHeader from "./ui-table-header"
import UiTableCell from "./ui-table-cell"

export default {
    name: "ui-table",
    components: { UiTableHeader, UiTableCell },
    model: {
        prop: "selected",
        event: "change"
    },
    props: {
        caption: String,
        hideHeaders: Boolean,
        items: Array,
        itemKey: [String, Function],
        selected: { required: false },
        multiple: Boolean,
        hideFooter: Boolean,
        pagination: [Boolean, Object],
        bordered: Boolean,
        striped: Boolean,
        dense: Boolean,
        hoverable: Boolean,
        borderless: Boolean
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
        selectable() { return !_.isNil(this.$listeners.change) },
        classes() {
            return {
                bordered: this.bordered && !this.borderless,
                striped: this.striped,
                dense: this.dense,
                hoverable: this.selectable || this.hoverable,
                borderless: this.borderless && !this.bordered
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

<style lang="scss">
    $border-color: var(--v-primary-base);
    $stripe-color: var(--v-secondary-darken1);
    $hover-color: var(--v-secondary-base);

    .ui-table {
        width: 100%;
        border-collapse: collapse;
        &.striped tr:nth-child(even) { background-color: $stripe-color; }
        &.bordered {
            th, td {
                border-top: solid 1px $border-color;
                border-left: solid 1px $border-color;
                border-right: solid 1px $border-color;
            }
        }
        &.dense {
            thead tr { height: unset; }
            th, td { padding: 2px; }
        }
        &.hoverable tbody tr:hover { background-color: $hover-color; }
        th, td {
            padding: 8px;
            &.fit, &[fit] {
                white-space: nowrap;
                width: 1%;
            }
            &.grow, &[grow] { width: 100%; }
        }
        &.borderless {
            thead, tbody td { border-bottom: none; }
        }
        thead {
            border-bottom: solid 2px $border-color;
            tr {
                height: 56px;
                &.ui-table-progress {
                    height: unset;
                    th {
                        height: unset;
                        padding: 0;
                    }
                }
            }
        }
        tbody td { border-bottom: solid 1px $border-color; }
    }
</style>