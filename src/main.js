import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/font_e05evfr353a/iconfont.js'
import './assets/font_e05evfr353a/iconfont.css'
import axios from 'axios'
import store from './vuex.js'

require('../node_modules/swiper/dist/css/swiper.css');
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper);

Vue.config.productionTip = false

Vue.prototype.$axios = axios;

new Vue({
	store,
	router,
	render: h => h(App),
}).$mount('#app')

// 调整font-size大小
refresh();
window.onresize = function() {
	setTimeout(function() {
		refresh();
	}, 10)
};

function refresh() {
	let deviceWidth = document.documentElement.clientWidth;
	if (deviceWidth > 1200) {
		document.documentElement.style.fontSize = 1200 / 12 + "px";
	} else {
		document.documentElement.style.fontSize = deviceWidth / 7.5 + "px";
	}
}
