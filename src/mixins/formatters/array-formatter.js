import join from "lodash/join"
import map from "lodash/map"
import { chain } from "@/utils/lodash-helper"
import fpJoin from "lodash/fp/join"
import fpMap from "lodash/fp/map"

export default {
    props: {
        separtor: { type: String, default: ", " }
    },
    methods: {
        arrayFormat(items, formatter) { return chain(items, fpMap(formatter), fpJoin(this.separator)) },
        async asyncArrayFormat(items, formatter) { return join(await Promise.all(map(items, formatter)), this.separator) }
    }
}