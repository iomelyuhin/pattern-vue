<template lang="pug">
	section.recordings
		h2 Список записей
		ul.recordings__list
			li.recordings__item(
				v-for="record in user.recordings"
				:key="record.id"
			)
				.recordings__item-date-wrap
					.recordings__item-date Начало записи: {{record.creation_time | moment("DD.MM.YYYY hh:mm:ss")}}
					.recordings__item-date Конец записи: {{record.complete_time | moment("DD.MM.YYYY hh:mm:ss")}}
				.recordings__item-name Название: {{record.name || record.mp3_file_name}}
				.recordings__item-text(v-if="record.text") Текст записи: {{record.text}}
				.recordings__item-text(v-else) Текст не распознан

</template>

<script>
export default {
	props: {
		user: Object
	}
}
</script>