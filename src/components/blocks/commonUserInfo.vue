<template lang="pug">
	tr
		td.table__user
			a.table__user-link(href="")
				.table__user-phone +{{user.number}}
				.table__user-email {{user.email}}
		td 25.01.2020
		td
			.table__service
				.table__service-wrap
					.table__service-flag
						img(:src="`data:image/png;base64,${user.flag}`")
					.table__service-num +{{user.service_number}}
				button.table__service-btn(type="button") Изменить
		td 25
		td iOS
		td.table__subscribe
			.table__subscribe-time до {{user.license_expiration}}
			.table__subscribe-change 
				button.table__subscribe-change-btn(type="button") Изменить
		td SMS:15888
			
</template>

<script>
export default {
	props: {
		user: Object
	}
}
</script>