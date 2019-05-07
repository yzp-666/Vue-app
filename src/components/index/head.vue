<template>
	<div class="head">
		<span class="iconfont icon-icon_left span-left"></span>
		<span class="inp">
			<span class="iconfont icon-search suso"></span>
			<input type="" name="" id="" value="" placeholder='输入城市/景点/游玩主题' />
		</span>
		<router-link to='/map'>
			<button>{{city}}</button>
		</router-link>
		<router-view />
	</div>
</template>

<script>
	export default {
		name: 'Headtop',
		data() {

			return {
				city: '',
			}
		},
		created() {
			this.city = this.$route.query.id;
			//if判断值是否为传递的路由参数，可用于设置默认路由值
			if (!this.city) {
				this.city = '常熟';
			}
		},
	}
</script>

<style scoped>
	.head {
		display: flex;
		justify-content: space-around;
		height: 0.86rem;
		padding-right: 0.21rem;
		padding-left: 0.22rem;
		box-sizing: border-box;
		line-height: 0.86rem;
		color: white;
		background: #00bcd4;
		font-size: 0.48rem;
	}

	input {
		width: 5.42rem;
		height: 0.64rem;
		box-sizing: border-box;
		padding-left: 0.8rem;
		border: none;
		border-radius: 0.08rem;
		vertical-align: middle;
		color: #cccccc;
	}

	select {
		color: white;
		background: #00bcd4;
		border: none;
		font-size: 0.36rem;
	}

	.inp {
		position: relative;
	}

	.suso {
		margin-top: 0.05rem;
		position: absolute;
		left: 0.2rem;
		color: #cccccc;
		font-size: 0.48rem !important;
	}

	button {
		color: white;
		border: none;
		background: none;
	}
</style>
