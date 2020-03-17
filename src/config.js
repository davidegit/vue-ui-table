import Vue from "vue"
import get from "lodash/get"
import isNil from "lodash/isNil"
import isPlainObject from "lodash/isPlainObject"
import isEmpty from "lodash/isEmpty"
import merge from "lodash/merge"

const DEFAULT_MAX = 20
const DEFAULT_PAGE = 1
const DEFAULT_SORT = {}

const config = {
    theme: {
        icons: {
            sort: "fas fa-angle-up",
            toFirstPage: "fas fa-angle-double-left",
            toPreviousPage: "fas fa-angle-left",
            toNextPage: "fas fa-angle-right",
            toLastPage: "fas fa-angle-double-right",
            component: {
                tag: "ui-icon",
                data: {}
            }
        },
        classes: {
            container: "",
            table: "ui-table",
            bordered: "bordered",
            striped: "striped",
            dense: "dense",
            hoverable: "hoverable",
            sortable: "sortable",
            sorted: "sorted",
            ascSorted: "asc",
            descSorted: "desc"
        },
        loading: {
            type: "spinner",
            spinner: { width: 64, height: 64, color: "#000000" },
            dots: { width: 60, height: 240, color: "#000000" },
            bars: { width: 40, height: 40, color: "#000000" },
        }
    },
    pagination: {
        sort: {
            asc: "asc",
            desc: "desc",
            noOrder: "",
            default: DEFAULT_SORT,
        },
        max: {
            values: [5, 10, 20, 50, 100],
            default: DEFAULT_MAX,
            component: {
                tag: "ui-max-select",
                data: {},
                label: "items per page"
            }
        },
        page: {
            default: DEFAULT_PAGE,
            component: {
                tag: "ui-page-select",
                data: {},
                label: "page"
            }
        },
        remote: {
            getPaginationParams({ sort, max, page }) { return { params: { max, page, sort }} },
            parseResponse(response) {
                const items = get(response.data, "items", [])
                const totalItems = get(response.data, "totalItems", 0)
                const page = get(response.data, "page", DEFAULT_PAGE)
                const max = get(response.data, "max", DEFAULT_MAX)
                const sort = get(response.data, "sort", DEFAULT_SORT)
                return { items, totalItems, page, max, sort }
            }
        }
    },
    emptyMessage: "No items found"
}

export function setConfig(options) {
    if(!isNil(options) && isPlainObject(options) && !isEmpty(options)) {
        if(!isNil(options.theme) && isPlainObject(options.theme)) config.theme = merge({}, config.theme, options.theme)
        if(!isNil(options.pagination) && isPlainObject(options.pagination)) config.pagination = merge({}, config.pagination, options.pagination)
        console.debug("vue-ui-table config updated", config)
    }
}

export function getIcon(icon) { return getConfigValue(`theme.icons.${icon}`, icon) }

export function getConfigValue(key, fallback) { return get(config, key, fallback) }

export default Vue.observable(config)