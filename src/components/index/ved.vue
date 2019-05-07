<template>
	<div class="list">
		<h1> 热销推荐</h1>
		<div v-for="item in count.recommendList" class="text">
			<img :src='item.imgUrl' />
			<div>
				<h6>{{item.title}}</h6>
				<p>{{item.desc}} </p>
				<router-link to='/xq'>
					<button>查看详情</button>
				</router-link>
				<router-view />
			</div>
		</div>
		
	</div>
</template>

<script>
	export default{
		name: 'ved',
		computed:{
			count(){
				return this.$store.state.count
			}
		}
	}
</script>

<style lang="less" scoped>
	.list{
		h1{
			padding: 0.27rem 0.2rem;
			font-size: 0.48rem;
			font-weight: 400;
			background: #eeeeee;
		}
		.text{
			display: flex;
			justify-content:flex-start;
			height: 1.89rem;
			box-sizing: border-box;
			padding: 0.1rem 0.1rem;
			border-bottom: 0.01rem solid #eeeeee;
			img{
				width: 1.8rem
			}
			div{
				margin-left: 0.2rem;
				position: relative;
				h6{
					margin-bottom: 0.24rem;
					font-size: 0.36rem;
					font-weight:400;
				}
				p{
					margin-bottom: 0.24rem;
					font-size: 0.28rem;
					color: #eeeeee;
				}
				button{
					padding: 0.04rem 0.1rem;
					border: none;
					border-radius: 0.08rem;
					color: white;
					background: #ff9300;
					position: absolute;
					bottom: 0;
				}
			}
		}
	}
</style>
