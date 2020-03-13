import { isNil, isString, isNumber, endsWith } from "lodash"

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