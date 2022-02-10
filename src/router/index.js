import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Factory from "../components/Factory.vue";

const routes = [
	{
		path: "/",
		name: "Home",
		component: Home,
	},
	{
		path: "/factory",
		name: "Factory",
		component: Factory,
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
