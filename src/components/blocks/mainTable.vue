<template lang="pug">
	table.main-table
		tr
			td Пользователь
			td 
				div(v-if="user.web_accounts") {{user.web_accounts.email}} 
				div(v-else) Не зареган в дашборде
				div(v-if="user.users") +{{user.users.tel}}
				div(v-else) Телефон не зарегистрирован
		tr
			td Зарегистрирован
			td 
				div(v-if="user.web_accounts") В дашборде: {{user.web_accounts.reg_date | moment("DD.MM.YYYY hh:mm")}}
				div(v-else) В дашборде: Не зарегистрирован
				div(v-if="user.users") Телефон: {{user.users.datetime | moment("DD.MM.YYYY hh:mm")}}
				div(v-else) Номер телефона не подтверждён
		tr
			td PIN
			td 
				div(v-if="user.sms") <span >SMS:</span> {{ user.sms.code }} <br /> 
				div(v-else) <span >SMS:</span> Нет <br /> 
				div(v-if="user.confirmCalls") <span>Последние 4 цифры телефона:</span> {{ user.confirmCalls.code}}
				div(v-else) <span>Последние 4 цифры телефона:</span> Нет
		tr
			td Лицензия
			td(v-if="user.receipt_info.receipt_info") 
				div(v-for="recept in recepts.receipt_info")
					//- pre {{recepts}}
					| Продукт - {{recept.product_id}} <br />
					| Куплена {{ recept.purchase_date | moment("DD.MM.YYYY hh:mm") }} <br />
					| до {{ recept.expires_date | moment("DD.MM.YYYY hh:mm") }} <br />
				button.main-table__item-content-btn(
					@click.prevent="$emit('licenseChange')"
				) Изменить
			td(v-else) нет лицензий 
				button.main-table__item-content-btn(
					type="button"
					@click.prevent="$emit('licenseChange')"
				) Изменить
		tr
			td Сервисный номер
			td(v-if="user.service") +{{user.service.number}}, {{user.service.city}} 
				button.main-table__item-content-btn(@click.prevent="$emit('serviceChange')") Изменить
			td(v-else) не установлен #[button.main-table__item-content-btn Изменить]
		tr
			td Количество записей
			td(v-if="user.recordings") {{user.recordings.length}}
			td(v-else) записей нет
		tr
			td Дата последней записи
			td(v-if="user.recordings[0]") {{user.recordings[0].creation_time | moment("DD.MM.YYYY hh:mm")}}
			td(v-else) записей нет
		tr
			td Сохранять транскрипцию
			td(v-if="user.users.recognize_status == 1") Да #[button.main-table__item-content-btn(@click.prevent="$emit('transcriptionChange')") Изменить]
			td(v-else) Нет #[button.main-table__item-content-btn(@click.prevent="$emit('transcriptionChange')") Изменить]

		tr
			td Ссылка для восстановления пароля
			td(v-if="user.web_accounts && user.web_accounts.pass_recovery_hash") 
				a(:href="'https://dashboard.rekk.io/set-new-pass/'+user.web_accounts.pass_recovery_hash") Ссылка
			td(v-else) записей нет

</template>

<script>
export default {
	props: {
		user: Object
	},
	data() {
		return {
		}
	},
	computed: {
		purchaseDate() {
			let seconds = JSON.parse(this.user.receipt_info.receipt_info).receipt_info[0].purchase_date;

			let purchaseDate = new Date(seconds* 1000)
			// let purchaseDate = date.getUTCDate()
			// let hours = purchaseDate.getHours();
			// let minutes = purchaseDate.getMinutes();

			return purchaseDate
		},
		recepts() {
			let seconds = JSON.parse(this.user.receipt_info.receipt_info);
			// let expiresDate = new Date(seconds*1000)

			return seconds

		},
		pre() {
			let seconds = JSON.parse(this.user.receipt_info.receipt_info);
			let expiresDate = new Date(seconds)
			console.log(this.user.receipt_info);
			
			return seconds

		}
	},
	components: {
		commonUserInfo: () => import('../blocks/commonUserInfo')
	}
}
</script>