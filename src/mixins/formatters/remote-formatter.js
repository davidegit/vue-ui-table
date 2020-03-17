import isFunction from "lodash/isFunction"
import isString from "lodash/isString"
import isPlainObject from "lodash/isPlainObject"
import get from "lodash/get"
import arrayFormatter from "./array-formatter"
import apiMixin from "@/mixins/api-mixin"
import axios from "axios"

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
            if(isFunction(this.formatApi)) return this.getApiConfig(this.formatApi(value))
            else return this.getApiConfig(this.formatApi)
        },
        async remoteFormat(value) {
            try {
                this.formatting = true
                const response = await axios.request(this.getFormatApiConfig(value))
                const data = response.data
                if(isString(data)) return data
                if(isString(this.itemFormat) && isPlainObject(data)) return get(data, this.itemFormat, "")
                if(isFunction(this.itemFormat)) return this.itemFormat(data)
                return data
            } finally { this.formatting = false }
        },
        async remoteTranslate(value) {
            if(isArray(value)) return await this.asyncArrayFormat(value, this.remoteFormat)
            else return await this.remoteFormat(value)
        }
    }
}