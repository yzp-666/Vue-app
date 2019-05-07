<template>
  <div id="app">
	<router-view v-if="this.$store.state.count && this.$store.state.city"></router-view>
  </div>
</template>

<script>

	
	export default {
		created() {
			this.$store.dispatch('getData')
			this.$store.dispatch('getCity')
			this.$store.dispatch('getDetail')
		}
	}
</script>

<style lang="less">

</style>
