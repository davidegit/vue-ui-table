import isNil from "lodash/isNil"
import isNumber from "lodash/isNumber"
import isString from "lodash/isString"

export default {
    methods: {
        convertToPixel(value) {
            if(!isNil(value)) {
                if(isNumber(value)) return `${value}px`
                if(isString(value)) return value
            }
        }
    }
}