
export default {
    methods: {
        getApiConfig(api) {
            if(this._.isString(api)) return { url: api, method: "get" }
            else if(this._.isPlainObject(api)) return Object.assign({}, api)
            return api
        }
    }
}