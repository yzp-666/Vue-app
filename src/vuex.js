import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		count: '',
		city: '',
		detail:''
	},
	mutations: {
		increment(state, val) {
			state.count = val;
		},
		city(state, val) {
			state.city = val;
		},
		detail(state, val){
			state.detail = val;
		}
	},
	actions: {
		getData(x) {
			this._vm.$axios.get('http://www.shouzi.ltd/quner/page.php')
				.then((response) => {
					console.log(1)
					this.commit('increment', response.data.data)
				})
		},
		getCity(x) {
			this._vm.$axios.get('http://www.shouzi.ltd/quner/city.php')
				.then((response) => {
					this.commit('city', response.data.data)
					console.log(2)
				})
		},
		getDetail(x) {
			this._vm.$axios.get('http://www.shouzi.ltd/quner/detail.php')
				.then((response) => {
					this.commit('detail',response.data.data)
					console.log(this.state.detail)
				})
		}
	}
})
