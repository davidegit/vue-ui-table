import * as _ from "lodash"

export default {
    methods: {
        convertClassToObject(clazz) {
            if(_.isString(clazz)) return { [clazz]: true }
            if(_.isArray(clazz)) return _.reduce(clazz, (classObject, c) => Object.assign(classObject, this.convertClassToObject(c)), {})
            if(_.isObject(clazz)) return clazz
            return {}
        }
    }
}