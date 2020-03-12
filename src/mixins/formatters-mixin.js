import { isNil } from "lodash"
import i18nFormatter from "./formatters/i18n-formatter"
import functionFormatter from "./formatters/function-formatter"
import remoteFormatter from "./formatters/remote-formatter"

export function formattersFactory(i18n = false, callback = false, remote = false) {
    const mixins = []
    if(i18n) mixins.push(i18nFormatter)
    if(callback) mixins.push(functionFormatter)
    if(remote) mixins.push(remoteFormatter)
    return {
        mixins: mixins,
        methods: {
            formatValue(value) {
                if(i18n && !isNil(this.i18nPrefix)) return this.i18nTranslate(value)
                if(callback && !isNil(this.format)) return this.translate(value)
                return value
            },
            async asyncFormatValue(value) {
                if(i18n && !isNil(this.i18nPrefix)) return this.i18nTranslate(value)
                if(callback && !isNil(this.format)) return await this.asyncTranslate(value)
                if(remote) return await this.remoteTranslate(value)
                return value
            }
        }
    }
}

export default formattersFactory(true, true, true)