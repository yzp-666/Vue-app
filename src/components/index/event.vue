<template>
	<div>
		<swiper :options="swiperOption" >
				<swiper-slide v-for='(item,index) in num'>
					<div v-for='(itemm) in item' class="list">
						<img :src=itemm.imgUrl />
						<h5>{{itemm.desc}}</h5>
					</div>  
				</swiper-slide>
		</swiper>
	</div>
</template>

<script>
	export default {
		name: 'vEvent',
		data(){
			return{
				swiperOption: {
					
				},
			}
		},
		computed:{
			count(){
				return this.$store.state.count
			},
			num(){
				let i = this.$store.state.count.iconList;
				let arr =[];
				for(let j=0;j<i.length;j+=8){
					arr.push(i.slice(j,j+8))
				}
				return arr;
			},
		}
	}
</script>

<style lang="less" scoped>
	.list{
		display: inline-block;
		width: 25%;
		text-align: center;
		img{
			width: 75%;
		}
		h5{
			font-size: 0.42rem;
			font-weight: 200;
		}
	}
</style>
