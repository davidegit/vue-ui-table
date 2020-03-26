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
                        <ui-table-header v-for="(column, columnIndex) in columns" :key="`ui-table-header-${columnIndex}`"
                                         :column="column" :sort.sync="sort" :sort-disabled="sortDisabled"
                                         :fixed-layout="isFixedLayout"/>
                    </tr>
                </slot>
            </thead>
            <tbody>
                <slot name="rows" v-bind="{ rows }">
                    <template v-for="(row, rowIndex) in rows">
                        <slot name="row" v-bind="row">
                            <tr :key="`ui-table-row-${rowIndex}`" :class="row.class" :style="row.style">
                                <ui-table-cell v-for="(column, columnIndex) in columns" :key="`ui-table-cell-${rowIndex}-${columnIndex}`" :column="column" v-bind="row"/>
                            </tr>
                        </slot>
                    </template>
                </slot>
                <slot name="noItems" v-if="rows.length === 0">
                    <tr>
                        <td :colspan="columns.length" class="ui-table-cell-no-items">{{emptyMessage}}</td>
                    </tr>
                </slot>
            </tbody>
            <tfoot v-if="hasFooter">
                <slot name="footer">
                    <tr>
                        <td :colspan="columns.length">{{footer}}</td>
                    </tr>
                </slot>
            </tfoot>
        </table>
        <slot name="pagination" v-if="paginationEnabled && !hidePagination">
            <ui-table-pagination :max.sync="max" :page.sync="page" :total-items="totalItems"/>
        </slot>
        <ui-table-loading v-if="isLoading" :type="loadingType"/>
    </div>
</template>

<script>
    import pixelHelperMixin from "@/mixins/pixel-helper-mixin"
    import htmlHelperMixin from "@/mixins/html-helper-mixin"
    import UiTableHeader from "./ui-table-header"
    import UiTableCell from "./ui-table-cell"
    import UiTablePagination from "./ui-table-pagination"
    import UiTableLoading from "./ui-table-loading"
    import uniqueId from "lodash/uniqueId"
    import isBoolean from "lodash/isBoolean"
    import keys from "lodash/keys"
    import map from "lodash/map"
    import isNil from "lodash/isNil"
    import set from "lodash/set"
    import isString from "lodash/isString"
    import isPlainObject from "lodash/isPlainObject"
    import get from "lodash/get"
    import isFunction from "lodash/isFunction"
    import isEqual from "lodash/isEqual"
    import isEmpty from "lodash/isEmpty"
    import { chain, pipeline } from "@/utils/lodash-helper"
    import fpMap from "lodash/fp/map"
    import fpValues from "lodash/fp/values"
    import fpOrderBy from "lodash/fp/orderBy"
    import fpFind from "lodash/fp/find"
    import fpIsNil from "lodash/fp/isNil"
    import fpSlice from "lodash/fp/slice"

    export default {
        name: "ui-table",
        mixins: [pixelHelperMixin, htmlHelperMixin],
        components: { UiTableLoading, UiTableHeader, UiTableCell, UiTablePagination },
        props: {
            caption: String,
            footer: String,
            hideHeaders: Boolean,
            items: Array,
            itemKey: [String, Function],
            multisort: Boolean,
            pagination: [Boolean, Object],
            hidePagination: Boolean,
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
            tableClass: [String, Array, Object],
            fixedLayout: Boolean,
            sortDisabled: Boolean,
            noItemsMessage: String,
            rowClass: [String, Array, Object, Function],
            rowStyle: [String, Array, Object, Function],
            loading: Boolean,
            loadingType: { type: String, validator: value => ["spinner", "dots", "bars"].indexOf(value) !== -1 }
        },
        data() {
            return {
                columns: [],
                pageable: {
                    lastSort: {},
                    sort: {},
                    max: 20,
                    page: 1
                }
            }
        },
        computed: {
            tableId() { return uniqueId("ui-table-") },
            hasCaption() { return !isNil(this.caption) || !isNil(this.$slots.caption) },
            hasFooter() { return !isNil(this.footer) || !isNil(this.$slots.footer) },
            sortingEnabled() { return !this.sortDisabled && !chain(this.columns, fpFind(column => column.sortable), fpIsNil) },
            reactivePagination() { return isPlainObject(this.pagination) && !isEmpty(this.pagination) },
            paginationEnabled() {
                if(isBoolean(this.pagination)) return this.pagination
                else return this.reactivePagination
            },
            firstPage() { return this.$uiTable.pagination.page.default },
            lastPage() { return Math.ceil(this.totalItems / Math.abs(this.max)) },
            sort: {
                get() {
                    if(this.reactivePagination) return get(this.pagination, "sort", {})
                    const sort = get(this.pageable, "sort", {})
                    if(!this.multisort && keys(sort).length > 1) return this.pageable.lastSort
                    return sort
                },
                set(sort) {
                    if(sort.order === this.$uiTable.pagination.sort.noOrder) this.pageable.lastSort = {}
                    else this.pageable.lastSort = { [sort.prop]: sort.order }
                    if(this.multisort) {
                        const actual = Object.assign({}, this.sort)
                        if(sort.order === this.$uiTable.pagination.sort.noOrder) {
                            delete actual[sort.prop]
                            this.pageable.sort = actual
                        } else this.pageable.sort = Object.assign(actual, this.pageable.lastSort)
                    } else this.pageable.sort = this.pageable.lastSort
                    this.updatePagination()
                }
            },
            max: {
                get() { return this.pageable.max },
                set(max) {
                    if(max !== this.max) {
                        this.pageable.max = max
                        this.fixPage()
                        this.updatePagination()
                    }
                }
            },
            page: {
                get() { return this.pageable.page },
                set(page) {
                    if(page !== this.page) {
                        if(page > this.lastPage) this.pageable.page = this.lastPage
                        else if(page < this.firstPage) this.pageable.page = this.firstPage
                        else this.pageable.page = page
                        this.updatePagination()
                    }
                }
            },
            pagedAndSortedItems() {
                const pageAndSort = pipeline(this.items)
                if(this.sortingEnabled) {
                    const props = keys(this.sort)
                    const orders = chain(this.sort, fpValues, fpMap(order => order === this.$uiTable.pagination.sort.asc ? "asc" : "desc"))
                    console.debug("ui-table sort on", props, orders)
                    pageAndSort.pipe(fpOrderBy(props, orders))
                }
                if(this.paginationEnabled) {
                    const start = this.max * (this.page - 1)
                    const end = start + this.max
                    console.debug("ui-table slice rows", start, end)
                    pageAndSort.pipe(fpSlice(start, end))
                }
                return pageAndSort.run()
            },
            rows() { return map(this.pagedAndSortedItems, (item, index) => ({ item, itemKey: this.getItemKey(item, index), class: this.getRowClass(item), style: this.getRowStyle(item) })) },
            totalItems() { return this.items.length },
            isFixedLayout() { return this.fixedLayout || !chain(this.columns, fpFind(column => !!column.columnWidth), fpIsNil) },
            isLoading() { return this.loading },
            containerClasses() {
                return {
                    [this.$uiTable.theme.classes.container]: true,
                    loading: this.isLoading,
                    ...this.convertClassToObject(this.containerClass)
                }
            },
            containerStyle() {
                const width = this.convertToPixel(this.width)
                const height = this.convertToPixel(this.height)
                const maxWidth = this.convertToPixel(this.maxWidth)
                const maxHeight = this.convertToPixel(this.maxHeight)
                const style = {}
                if(!isNil(width)) set(style, "width", width)
                if(!isNil(height)) set(style, "height", height)
                if(!isNil(maxWidth)) set(style, "maxWidth", maxWidth)
                if(!isNil(maxHeight)) set(style, "maxHeight", maxHeight)
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
                    fixed: this.isFixedLayout,
                    ...this.convertClassToObject(this.tableClass)
                }
            },
            emptyMessage() { return this.noItemsMessage || this.$uiTable.emptyMessage }
        },
        methods: {
            getItemKey(item, index) {
                if(isString(this.itemKey) && isPlainObject(item)) return get(item, this.itemKey)
                if(isFunction(this.itemKey)) return this.itemKey(item)
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
            },
            getRowClass(item) {
                const rowClass = isFunction(this.rowClass) ? this.rowClass(item) : this.rowClass
                return this.convertClassToObject(rowClass)
            },
            getRowStyle(item) {
                const rowStyle = isFunction(this.rowStyle) ? this.rowStyle(item) : this.rowStyle
                return this.convertStyleToObject(rowStyle)
            },
            fixPage() {
                if(this.page > this.lastPage) {
                    this.pageable.page = this.lastPage
                    return true
                } else if(this.page < this.firstPage) {
                    this.pageable.page = this.firstPage
                    return true
                }
                return false
            },
            updatePagination() {
                const { sort, max, page } = this.pageable
                if(this.reactivePagination) {
                    console.debug("ui-table update pagination", max, page, sort)
                    this.$nextTick(() => this.$emit("update:pagination", { sort, max, page }))
                }
            },
            setPagination(pagination) {
                if(isPlainObject(pagination)) {
                    console.debug("ui-table set pagination", pagination)
                    const { sort, max, page } = pagination
                    if(page !== this.page) this.pageable.page = page
                    if(max !== this.max) {
                        this.pageable.max = max
                        if(this.fixPage()) this.updatePagination()
                    }
                    if(!isEqual(sort, this.sort)) this.pageable.sort = sort
                }
            }
        },
        watch: {
            pagination: { handler: "setPagination", immediate: true, deep: true }
        }
    }
</script>