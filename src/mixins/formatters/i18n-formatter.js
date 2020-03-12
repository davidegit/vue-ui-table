import arrayFormatter from "./array-formatter"

export default {
    mixins: [arrayFormatter],
    props: {
        i18nPrefix: String
    },
    methods: {
        i18nFormat(value) { return this.$t(`${this.i18nPrefix}.${value}`) },
        i18nTranslate(value) {
            if(this._.isArray(value)) return this.arrayFormat(value, this.i18nFormat)
            else return this.i18nFormat(value)
        }
    }
}