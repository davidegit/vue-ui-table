import Vue from "vue"
import * as _ from "lodash"

const config = {
    theme: {
        icons: {
            sort: "fas fa-angle-up",
            toFirstPage: "fas fa-angle-double-lef",
            toPreviousPage: "fas fa-angle-left",
            toNextPage: "fas fa-angle-right",
            toLastPage: "fas fa-angle-double-right"
        },
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
        if(!_.isNil(options.theme) && _.isPlainObject(options.theme)) config.theme = _.merge({}, config.theme, options.theme)
        console.debug("vue-ui-table config updated", config)
    }
}

export function getIcon(icon) { return getConfigValue(`theme.icons.${icon}`, icon) }

export function getConfigValue(key, fallback) { return _.get(config, key, fallback) }

export default config