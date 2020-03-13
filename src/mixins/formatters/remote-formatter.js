import * as _ from "lodash"
import arrayFormatter from "./array-formatter"
import apiMixin from "@/mixins/api-mixin"

export default {
    mixins: [arrayFormatter, apiMixin],
    props: {
        formatApi: [String, Object, Function],
        itemFormat: [String, Function]
    },
    data() {
        return {
            formatting: false
        }
    },
    methods: {
        getFormatApiConfig(value) {
            if(_.isFunction(this.formatApi)) return this.getApiConfig(this.formatApi(value))
            else return this.getApiConfig(this.formatApi)
        },
        async remoteFormat(value) {
            try {
                this.formatting = true
                const response = await this.axios.reques(this.getFormatApiConfig(value))
                const data = response.data
                if(_.isString(data)) return data
                if(_.isString(this.itemFormat) && _.isPlainObject(data)) return _.get(data, this.itemFormat, "")
                if(_.isFunction(this.itemFormat)) return this.itemFormat(data)
                return data
            } finally { this.formatting = false }
        },
        async remoteTranslate(value) {
            if(_.isArray(value)) return await this.asyncArrayFormat(value, this.remoteFormat)
            else return await this.remoteFormat(value)
        }
    }
}