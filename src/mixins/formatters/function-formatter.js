import { isArray } from "lodash"
import arrayFormatter from "./array-formatter"

export default {
    mixins: [arrayFormatter],
    props: {
        format: { type: Function, default: value => value }
    },
    methods: {
        translate(value) {
            if(isArray(value)) return this.arrayFormat(value, this.format)
            else return this.format(value)
        },
        async asyncTranslate(value) {
            if(isArray(value)) return await this.asyncArrayFormat(value, this.format)
            else return await this.format(value)
        }
    }
}