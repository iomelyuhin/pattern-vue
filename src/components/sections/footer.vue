<template lang="pug">
	footer.footer
		.footer__container.container
			.footer__logo.footer__logo--logo
				logo
			//- .footer__logout.footer__logout--logout
			//- 	logout
</template>

<script>
export default {
	components: {
		logo: () => import("../ui/logo"),
		logout: () => import("../ui/logout")
	}
}
</script>