<template>
	<div>
		<h2> 热门景区</h2>
		<div ref='hid' style="overflow: hidden;">
			<div style="width: 22rem;">
				<div v-for="item in obj" class="hot">
					<img :src='item.hotactionImg' />
					<h4>{{item.hotactionName}}</h4>
					<h5>{{item.hotactionPrice}}</h5>
				</div>
			</div>
		</div>
	</div>
</template>



<script>
  import vscroll from 'better-scroll'
  export default {
    name: 'gundong',
	data(){
		return {
			obj:'',
		}
	},
    beforeCreate() {
    	this.$axios.get('/static/hotaction.json')
    	  .then( (response)=> {
			this.obj = response.data.data
    	  })
    },
	mounted(){
	this.scroll = new vscroll(this.$refs.hid,{startX: 0, click: true, scrollX: true, scrollY: false,});
	}
  }
</script>

<style lang="less" scoped>
	h2{
		font-size: 0.48rem;
		font-weight: 400;
	}
	.hot{
		display: inline-block;
		width: 2.2rem;
		font-size: 0;
		vertical-align: top;
		img{
			width: 100%;
		}
		h4{
			font-size: 0.36rem;
			font-weight: 400;
		}
		h5{
			font-size: 0.28rem;
			font-weight: 200;
		}
	}
</style>
