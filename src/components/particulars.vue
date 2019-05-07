<template>
	<div>
		<header>
			<router-link to='/'  class="vspan">
				<span class="iconfont icon-icon_left span-left v-span"></span>
			</router-link>
			<h2></h2>
			<img :src="detail.bannerImg" />
		</header>
		<div class="main">
			<div v-for="item in detail.categoryList">
				<div class="v-div">
					<img src="imges" />
					{{item.title}}
				</div>
				<div v-if="item.children" v-for="items in item.children" class=" Child">
					<div class="v-div">
						<img src="imges" />
						{{items.title}}
					</div>
					<div v-if="items.children" v-for="citems in items.children" class=" Child">
						<div class="v-div">
							<img src="imges" />
							{{citems.title}}
						</div>
					</div>
				</div>
			</div>
		</div>
		<foot></foot>
	</div>
</template>
<script>
	import foot from './foot.vue'
	export default {
		name: 'particulars',
		components:{
			foot
		},
		// beforeCreate() {
		// 	axios.get('http://www.shouzi.ltd/quner/detail.php')
		// 	  .then( (response)=> {
		// 	    console.log(response);
		// 		this.xq=response.data.data;
		// 	  })
		// }
		computed:{
			detail(){
				return this.$store.state.detail
			}
		},
	}
</script>

<style scoped>
	header{
		position: relative;
		font-size: 0;
	}
	.v-span{
		display: block;
		width: 0.82rem;
		height: 0.82rem;
		line-height: 0.82rem;
		text-align: center;
		background: #000000;
		border-radius: 50%;
		color: white;
		margin: 0.2rem;
		position: absolute;
	}
	img{
		width: 100%;
	}
	h2{
		font-size: 0.42rem;
		font-weight: 300;
		color: white;
		margin: 0.2rem;
		position: absolute;
		bottom: 0;
	}
	.v-div{
		font-size: 0.36rem;
		height: 0.8rem;
		line-height: 0.8rem;
		border-bottom: 1px solid #CCCCCC;
	}
	.main>div>div{
		padding:0 0.23rem;
	}
	.Child{
		margin:0 0.23rem;
	}
</style>
