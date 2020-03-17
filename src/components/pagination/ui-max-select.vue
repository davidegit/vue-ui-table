<template>
	<ui-select class="ui-max-select" v-model="max" :items="items" :label="label" :id="id"/>
</template>

<script>
	import UiSelect from "@/components/ui-select"
	import uniqueId from "lodash/uniqueId"

    export default {
        name: "ui-max-select",
		components: { UiSelect },
		props: {
            value: Number,
            items: Array,
			label: String
		},
		computed: {
            id() { return this.$attrs.id || uniqueId("ui-max-select-") },
			max: {
                get() { return this.value || this.$uiTable.pagination.max.default  },
				set(max) { this.$emit("input", max) }
			}
		}
    }
</script>