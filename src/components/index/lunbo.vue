<template>
	<div>
		<swiper :options="swiperOption" >
				<swiper-slide v-for='item in count.swiperList'><img :src="item.imgUrl" /></swiper-slide>
				<div class="swiper-pagination " style="position: absolute;top: 2rem;" slot="pagination"></div>
		</swiper>
	</div>
	
</template>

<script>
	export default {
		name: 'lunbo',
		data() {
			return {
				swiperOption: {
					pagination: {
						el: '.swiper-pagination',
						dynamicBullets: true
					},
					loop:true,
				}
			}
		},
		computed:{
			count(){
				return this.$store.state.count
			}
		},
	}

</script>


<style scoped>
	img{
		width: 100%;
	}
</style>
