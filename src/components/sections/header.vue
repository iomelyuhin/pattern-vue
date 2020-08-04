<template lang="pug">
	header.header
		.header__container.container
			.header__logo.header__logo--logo
				logo
			//- .header__logout.header__logout--logout
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