<script>
	import UiTable from "./ui-table"
    import {default as _, isString} from "lodash"
	import axios from "axios"

    export default {
        name: "ui-remote-table",
		extends: UiTable,
		props: {
            api: [String, Object],
            getPaginationParams: Function,
            parseResponse: Function,
			onError: Function
		},
		data() {
            return {
                remoteLoading: false,
                remoteItems: [],
				remoteTotals: 0
			}
		},
		computed: {
            fetchConfig() {
                const config = isString(this.api) ? { url: this.api, method: "get" } : Object.assign({}, this.api)
				const paginationParams = this.getRemotePaginationParams({ sort: this.sort, max: this.max, page: this.page })
				return Object.assign({}, config, paginationParams)
			},
            pagedAndSortedItems() { return this.remoteItems },
            totalItems() { return this.remoteTotals },
			isLoading() { return this.remoteLoading || this.loading }
		},
		methods: {
            getRemotePaginationParams(params) {
				const getter = this.getPaginationParams || this.$uiTable.pagination.remote.getPaginationParams
				return getter(params)
			},
            parseRemoteResponse(response) {
                const parser = this.parseResponse || this.$uiTable.pagination.remote.parseResponse
				return parser(response)
			},
            async fetchItems() {
				try {
				    console.debug("ui-remote-table fetch items", this.fetchConfig)
					this.remoteLoading = true
				    const response = await axios.request(this.fetchConfig)
					const parsed = this.parseRemoteResponse(response)
					this.remoteItems = _.get(parsed, "items", [])
					this.remoteTotals = _.get(parsed, "totalItems", 0)
                    const page = _.get(parsed, "page", this.page)
                    const max = _.get(parsed, "max", this.max)
                    const sort = _.get(parsed, "sort", this.sort)
					this.setPagination({ page, max, sort })
				} catch(e) { this.onError && this.onError(e) }
				finally { this.remoteLoading = false }
			}
		},
		watch: {
            fetchConfig: {
                handler: "fetchItems",
				immediate: true
			}
		}
    }
</script>