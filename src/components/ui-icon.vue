<script>
    import { getIcon } from "@/config"

    const UiIcon = {
        name: "ui-icon",
        methods: {
            getIcon() {
                let icon = ""
                if(this.$slots.default) icon = this.$slots.default[0].text.trim()
                return getIcon(icon)
            }
        },
        render(h) {
            const icon = this.getIcon()
            const data = {
                class: {
                    [icon]: true
                }
            }
            return h("i", data)
        }
    }

    export default {
        functional: true,
        render(h, { data, children }) {
            let icon = ""
            if(data.domProps) {
                icon = data.domProps.textContent || data.domProps.innerHTML || icon
                delete data.domProps.textContent
                delete data.domProps.innerHTML
            }
            return h(UiIcon, data, icon ? [icon] : children)
        }
    }
</script>