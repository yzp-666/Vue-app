import Vue from 'vue'
import Router from 'vue-router'
import Index from './components/index/index.vue'
import Vmap from './components/vmap.vue'
import Vxq from './components/particulars.vue'

Vue.use(Router)

export default new Router({
	routes:[
		{path:'/',component:Index},
		{path: '/index', component: Index},
		{path: '/map', component: Vmap},
		{path: '/xq', component: Vxq},
	]
})
