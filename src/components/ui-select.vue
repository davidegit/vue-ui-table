<template>
	<div class="ui-select">
		<label :for="id">{{label}}</label>
		<select :id="id" v-model="max">
			<option v-for="(item, index) in items" :key="`ui-select-option-${index}`" :value="item" :selected="item === max">{{item}}</option>
		</select>
	</div>
</template>

<script>
	import { uniqueId } from "lodash"

    export default {
        name: "ui-select",
		props: {
            value: Number,
            items: Array,
			label: String
		},
		computed: {
            id() { return this.$attrs.id || uniqueId("ui-select-") },
			max: {
                get() { return this.value  },
				set(value) { if(value !== this.value) this.$emit("input", value) }
			}
		}
    }
</script>