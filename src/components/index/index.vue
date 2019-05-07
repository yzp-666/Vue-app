<template>
	<div>
		<div>
			<div v-show="count">
				<headTop></headTop>
				<lunbo></lunbo>
				<vEvent></vEvent>
				<gundong></gundong>
				<ved></ved>
				<where></where>
				<foot></foot>
			</div>
			<div class="gif" v-show="!count">
				<img src="../../../public/timg.gif" >
			</div>
		</div>
	</div>
</template>

<script>
	import headTop from './head.vue'
	import lunbo from './lunbo.vue'
	import ved from './ved.vue'
	import vEvent from './event.vue'
	import where from './where.vue'
	import foot from '../foot.vue'
	import gundong from './gundong.vue'

	export default {
		name: 'index',
		components: {
			headTop,
			lunbo,
			vEvent,
			ved,
			where,
			foot,
			gundong,
		},
		computed:{
			count(){
				return this.$store.state.count
			}
		}
	}
</script>

<style lang="less">
	a{
		text-decoration:none;
	}
	.gif{
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		background: rgba(255,255,255,1);
		z-index: 101;
		img{
			width: 100%;
			position: absolute;
			top: 0;
			right: 0;
			bottom: 0;
			left: 0;
			margin: auto;
		}
	}
</style>
