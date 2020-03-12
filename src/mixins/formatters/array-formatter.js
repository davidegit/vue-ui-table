export default {
    props: {
        separtor: { type: String, default: ", " }
    },
    methods: {
        arrayFormat(items, formatter) { return this._.chain(items).map(formatter).join(this.separator).value() },
        async asyncArrayFormat(items, formatter) { return this._.join(await Promise.all(this._.map(items, formatter)), this.separator) }
    }
}