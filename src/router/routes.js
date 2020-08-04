export default [
	{
    path: "/",
    component: () => import("../components/main.vue"),
    meta: {
      title: "MAIN"
    }
	},
	{
    path: "/current-user",
    component: () => import("../components/pages/current-user.vue"),
    meta: {
      title: "Current user"
    }
	}
];