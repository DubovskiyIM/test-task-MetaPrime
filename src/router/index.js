import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
	},
	{
		path: '/:id',
		name: 'About',
		component: () => import('../views/About.vue')
	}
];

const index = new VueRouter({
	routes
});

export default index;
