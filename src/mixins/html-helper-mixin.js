import isEmpty from "lodash/isEmpty"
import isString from "lodash/isString"
import isArray from "lodash/isArray"
import reduce from "lodash/reduce"
import isPlainObject from "lodash/isPlainObject"
import split from "lodash/split"
import trim from "lodash/trim"
import { chain } from "@/utils/lodash-helper"
import fpFirst from "lodash/fp/first"
import fpSplit from "lodash/fp/split"

export default {
    methods: {
        convertClassToObject(clazz) {
            if(!isEmpty(clazz)) {
                if (isString(clazz)) return {[clazz]: true}
                if (isArray(clazz)) return reduce(clazz, (classObject, c) => Object.assign(classObject, this.convertClassToObject(c)), {})
                if (isPlainObject(clazz)) return clazz
            }
            return {}
        },
        convertStyleToObject(style) {
            if(!isEmpty(style)) {
                if (isString(style)) {
                    const array = split(style, ";")
                    if (array.length > 1) return this.convertStyleToObject(array)
                    if (array.length === 1) {
                        const [key, value] = chain(array, fpFirst, fpSplit(":"))
                        return {[trim(key)]: trim(value)}
                    }
                }
                if (isArray(style)) return reduce(style, (styleObject, s) => Object.assign(styleObject, this.convertStyleToObject(s)), {})
                if (isPlainObject(style)) return style
            }
            return {}
        }
    }
}