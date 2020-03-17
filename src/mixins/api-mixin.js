import isString from "lodash/isString"
import isPlainObject from "lodash/isPlainObject"

export default {
    methods: {
        getApiConfig(api) {
            if(isString(api)) return { url: api, method: "get" }
            else if(isPlainObject(api)) return Object.assign({}, api)
            return api
        }
    }
}