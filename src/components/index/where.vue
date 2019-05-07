<template>
	<div>
		<h1>周末去哪儿</h1>
		<div v-for="item in count.weekendList" class="vfont">
			<img :src='item.imgUrl' />
			<h2>{{item.title}}</h2>
			<p>{{item.desc}}</p>
		</div>
	</div>
</template>

<script>
	export default{
		name:'where',
		computed:{
			count(){
				return this.$store.state.count
			}
		}
	}
</script>

<style lang="less" scoped>
	h1{
		padding: 0.27rem 0.2rem;
		font-size: 0.48rem;
		font-weight: 400;
		background: #eeeeee;
	}
	.vfont{
		font-size: 0;
		img{
			width: 100%;
		}
		h2{
			font-size: 0.36rem;
			font-weight: 400;
			margin-left: 0.1rem;
			margin-bottom: 0.21rem;
		}
		p{
			margin-bottom: 0.24rem;
			font-size: 0.28rem;
			color: #eeeeee;
			margin-left: 0.1rem;
		}
	}
</style>
