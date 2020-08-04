<template lang="pug">
	.maincontent
		appHead
		router-view
		appFooter
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";
export default {
	data() {
		return {
			title: "hello world!!!"
		};
	},
	components: {
		appHead: () => import('./components/sections/header'),
		appFooter: () => import('./components/sections/footer')
	}
	// computed: {
	//   ...mapState("tooltips", {
	//     showed: state => state.showed
	//   }),
	//   ...mapGetters("user", ["userIsLogged"])
	// },
	// methods: {
	//   ...mapActions("tooltips", ["closeTooltip"])
	// },
	// watch: {
	//   showed(value) {
	//     if (value === true) {
	//       let timeout;
	//       clearTimeout(timeout);
	//       timeout = setTimeout(() => {
	//         this.closeTooltip();
	//       }, 3000);
	//     }
	//   }
	// }
};
</script>