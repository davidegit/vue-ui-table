import * as _ from "lodash"

const config = {
    icons: {
        sort: "fas fa-angle-up",
        toFirstPage: "fas fa-angle-double-lef",
        toPreviousPage: "fas fa-angle-left",
        toNextPage: "fas fa-angle-right",
        toLastPage: "fas fa-angle-double-right"
    },
    theme: {
        classes: {
            container: "",
            table: "ui-table",
            bordered: "bordered",
            striped: "striped",
            dense: "dense",
            hoverable: "hoverable"
        }
    }
}

export function setConfig(options) {
    if(!_.isNil(options) && _.isPlainObject(options) && !_.isEmpty(options)) {
        if(!_.isNil(options.icons) && _.isPlainObject(options.icons)) config.icons = Object.assign({}, config.icons, options.icons)
        if(!_.isNil(options.theme) && _.isPlainObject(options.theme)) config.theme = Object.assign({}, config.theme, options.theme)
    }
}

export function getIcon(icon) { return getConfigValue(`icons.${icon}`, icon) }

export function getConfigValue(key, fallback) { return _.get(config, key, fallback) }

export default config