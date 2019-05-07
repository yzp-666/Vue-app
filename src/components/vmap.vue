<template>
	<div>
		<div v-show="city.cities">
			<div class="head">
				<router-link to='/'  class="vspan">
					<span class="iconfont icon-icon_left span-left"></span>
				</router-link>
				<h1>城市选择</h1>
				<div class="inp">
					<input type="" name="" id="" value="" placeholder='输入城市名或拼音' v-model="show" />
				</div>
			</div>
			<div v-show=!show  ref='hid' style="height: 100%;overflow: hidden;position: fixed;top: 1.58rem;">
				<div>
					<div class="main">
						<div>
							<h2>当前城市</h2>
							<div class="main-top">
								<a class="a-site">常熟</a>
							</div>
						</div>
					</div>
					<div class="main">
						<div >
							<h2>热门城市</h2>
							<div class="main-top">
								<a class="a-site" v-for="item in city.hotCities" @click="myclick(item.name)">{{item.name}}</a>
							</div>
						</div>
						<div v-for="(item,index) in city.cities" :ref=index>
							<h2 :id="index">{{index}}</h2>
							<p v-for="items in item" @click="myclick(items.name)">
									{{items.name}}
							</p>
						</div>
					</div>
				</div>
			</div>
			<div class="meng" v-show="show" style="height: 100%;position: fixed;top: 1.58rem;">
				<p class="a-site" v-for="item in arr" @click="myclick(item.name)">{{item.name}}</p>
			</div>
			<ul>
				<!-- @mouseenter="onMouseOver" @mouseleave="onMouseleave" -->
				<li v-for="(item,index) in city.cities"  @click="tz(index)"><a>{{index}}</a></li>
			</ul>
			<div id="mengban">A</div>
			<foot></foot>
		</div>
		<div class="gif" v-show="!city.cities">
			<img src="../../public/timg.gif" >
		</div>
	</div>
</template>

<script>
	import foot from './foot.vue'
	import vscroll from 'better-scroll'

	export default {
		name: 'vMap',
		data() {
			return {
				// list:'',
				// hot:{},
				show:"",
				arr:[]
			}
		},
		components:{
			foot,
		},
		methods:{
			myclick(x){
				this.$router.push({
					path:'/',
					query:{id:x},
				})
			},
			tz(index){
				this.scroll.scrollToElement(this.$refs[index][0], 1000)
			}
		},
		watch:{
			show(){
				var arr=[];
				// console.log(Object.keys(this.list));
				 for (let i in this.city.cities) {
                        // console.log((this.cityData[i]));
                        this.city.cities[i].forEach((value) => {   //匹配搜索的条件
                            if (value.spell.indexOf(this.show) > -1 || value.name.indexOf(this.show) > -1) {
                               arr.push(value)
                            }
                        })
                    }
					this.arr = arr;
				// Object.keys(this.list)
			}
		},
		computed:{
			city(){
				return this.$store.state.city
			}
		},
		mounted(){
		this.scroll = new vscroll(this.$refs.hid,{mouseWheel: true, click: true, tap: true});

		}
	}
</script>

<style lang="less" scoped>
	*{
		font-size: 0;
	}
	.head {
		height: 1.58rem;
		color: white;
		background: #00bcd4;
		text-align: center;
		position: relative;
	}

	.vspan {
		font-size: 0.36rem;
		position: absolute;
		top: 0.23rem;
		left: 0.2rem;
	}
	h1{
		height: 0.86rem;
		line-height: 0.86rem;
		font-size: 0.48rem;
		font-weight: 400;
	}
	.inp{
		font-size: 0;
	}
	input {
		width: 96%;
		height: 0.62rem;
		font-size: 0.32rem;
		color: #757575;
		text-align: center;
		border: none;
		border-radius: 0.08rem;
	}
	h2{
		height: 0.52rem;
		line-height: 0.52rem;
		padding: 0 0.2rem;
		font-size: 0.32rem;
		font-weight: 200;
		background: #eeeeee;
		border-top:1px solid #CCCCCC;
		border-bottom:1px solid #CCCCCC;
	}
	.a-site{
		display: inline-block;
		color: #333333;
		border: 1px solid #CCCCCC;
		font-size: 0.32rem;
		padding: 0.04rem 0.6rem;
		border-radius: 0.08rem;
		margin: 0.1rem;
	}
	.main-top{
		padding: 0.1rem;
	}
	p{
		padding:0.26rem 0.2rem;
		font-weight: 200;
		border-bottom: 1px solid #CCCCCC;
		font-size: 0.36rem;
		color: #000000;
	}

	ul{
		list-style: none;
		text-align: center;
		position: fixed;
		top: 18%;
		right: 0;
		z-index: 1;
	}
	li{
		margin: 0.08rem 0.12rem;
	}
	li>a{
		color: #0077AA;
		font-size: 0.28rem;
	}
	.span-left{
		color: white;
	}
	#mengban{
		display: none;
		width: 1rem;
		height: 1rem;
		line-height: 1rem;
		margin: auto;
		border-radius: 0.08rem;
		color: white;
		font-size: 0.76rem;
		text-align: center;
		background: rgba(0,0,0,0.2);
		position: fixed;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
	}
	.meng{
		width: 100%;
		height: 100%;
		font-size: 0.36rem;
		background: rgba(255,255,255,1);
		position: absolute;
		top: 0;
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
