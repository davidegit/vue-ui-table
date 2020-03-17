import * as _ from "lodash"

export default {
    methods: {
        convertClassToObject(clazz) {
            if(!_.isEmpty(clazz)) {
                if (_.isString(clazz)) return {[clazz]: true}
                if (_.isArray(clazz)) return _.reduce(clazz, (classObject, c) => Object.assign(classObject, this.convertClassToObject(c)), {})
                if (_.isPlainObject(clazz)) return clazz
            }
            return {}
        },
        convertStyleToObject(style) {
            if(!_.isEmpty(style)) {
                if (_.isString(style)) {
                    const array = _.split(style, ";")
                    if (array.length > 1) return this.convertStyleToObject(array)
                    if (array.length === 1) {
                        const [key, value] = _.chain(array).first().split(":").value()
                        return {[_.trim(key)]: _.trim(value)}
                    }
                }
                if (_.isArray(style)) return _.reduce(style, (styleObject, s) => Object.assign(styleObject, this.convertStyleToObject(s)), {})
                if (_.isPlainObject(style)) return style
            }
            return {}
        }
    }
}