import { chain, join, map } from "lodash"

export default {
    props: {
        separtor: { type: String, default: ", " }
    },
    methods: {
        arrayFormat(items, formatter) { return chain(items).map(formatter).join(this.separator).value() },
        async asyncArrayFormat(items, formatter) { return join(await Promise.all(map(items, formatter)), this.separator) }
    }
}