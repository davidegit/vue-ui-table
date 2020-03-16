import Vue from "vue"
import * as _ from "lodash"

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
        }
    },
    pagination: {
        sort: {
            asc: "asc",
            desc: "desc",
            noOrder: ""
        },
        max: {
            values: [5, 10, 20, 50, 100],
            default: 20,
            component: {
                tag: "ui-max-select",
                data: {},
                label: "items per page"
            }
        },
        page: {
            default: 1,
            component: {
                tag: "ui-page-select",
                data: {},
                label: "page"
            }
        }
    }
}

export function setConfig(options) {
    if(!_.isNil(options) && _.isPlainObject(options) && !_.isEmpty(options)) {
        if(!_.isNil(options.theme) && _.isPlainObject(options.theme)) config.theme = _.merge({}, config.theme, options.theme)
        if(!_.isNil(options.pagination) && _.isPlainObject(options.pagination)) config.pagination = _.merge({}, config.pagination, options.pagination)
        console.debug("vue-ui-table config updated", config)
    }
}

export function getIcon(icon) { return getConfigValue(`theme.icons.${icon}`, icon) }

export function getConfigValue(key, fallback) { return _.get(config, key, fallback) }

export default Vue.observable(config)