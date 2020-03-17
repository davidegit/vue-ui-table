<template>
	<div class="ui-table-loading">
		<component :is="loadingType" :color="color" :width="width" :height="height"/>
	</div>
</template>

<script>
	import Spinner from "./loading/spinner"
	import Dots from "./loading/dots"
	import Bars from "./loading/bars"

    export default {
        name: "ui-table-loading",
		components: { Spinner, Dots, Bars },
		props: {
            type: { type: String, validator: value => ["spinner", "dots", "bars"].indexOf(value) !== -1 }
		},
		computed: {
            loadingType() { return this.type || this.$uiTable.theme.loading.type },
            color() { return this.$uiTable.theme.loading[this.loadingType].color },
            width() { return this.$uiTable.theme.loading[this.loadingType].width },
            height() { return this.$uiTable.theme.loading[this.loadingType].height }
		}
    }
</script>