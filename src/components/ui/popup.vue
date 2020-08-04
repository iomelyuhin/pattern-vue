<template lang="pug">
	.popup
		form.popup__form(action="")
			h2(
				v-if="popupVal.license"
			) Изменить дату окончания лицензии
			h2(
				v-else-if="popupVal.service"
			) Изменить сервисный номер
			.popup__value Сейчас установлено:
			.popup__value-license(
				v-if="popupVal.license"
			) {{popupVal.license | moment("DD.MM.YYYY hh:mm")}}
			.popup__value-license(
				v-else
			) Лицензий нет
			.popup__value-phone(
				v-if="popupVal.service"
			) +{{popupVal.service}}
			button.popup__close(
				type="button"
				@click.prevent="$emit('closePopup')"
			) X
			select.popup__input(
				v-if="popupVal.service"
				name="service"
				v-model="selectedServicePhoneId"
			)
				option(disabled) Выбери сервисный номер
				option(
					v-for="phone in servicePhones"

					:value="phone.id"
				) +{{ phone.number }}, {{phone.city}}
			input.popup__input( 
				v-if="popupVal.license"
				type="date"
				name="license"
			)
			label(v-if="popupVal.transcription")
				input.popup__input( 
					type="checkbox"
					name="transcription"
					:checked="isChecked"
				) 
				.checkbox-text Сохранять транскрипцию
			button.popup__btn(
				type="submit"
				@click.prevent="updateVal"
			) Сохранить
			//- pre {{user}}

</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  props: {
    popupVal: Object,
		user: Object
  },
  data() {
    return {
      servicePhones: [
        {
          id: "2",
          number: "12132830637",
          city: "Los Angeles"
        },
        {
          id: "3",
          number: "16472475031",
          city: "Toronto"
        },
        {
          id: "5",
          number: "442033184749",
          city: "London"
        },
        {
          id: "6",
          number: "74992816957",
          city: "Moscow"
        },
        {
          id: "7",
          number: "390694500173",
          city: "Rome"
        },
        {
          id: "8",
          number: "34911982355",
          city: "Madrid"
        },
        {
          id: "9",
          number: "525511689608",
          city: "Mexico City"
        },
        {
          id: "11",
          number: "552135001490",
          city: "Rio de Janeiro"
        },
        {
          id: "12",
          number: "48222922957",
          city: "Warsaw"
        },
        {
          id: "13",
          number: "380444992845",
          city: "Kiev"
        },
        {
          id: "14",
          number: "31208089811",
          city: "Amsterdam, Nederland"
        },
        {
          id: "15",
          number: "903622290001",
          city: "Samsun, Türkiye"
        },
        {
          id: "16",
          number: "5511689608",
          city: "Mexico City, México"
        },
        {
          id: "18",
          number: "74954813746",
          city: "Moscow"
        },
        {
          id: "19",
          number: "74991130740",
          city: "Moskow"
        }
			],
			selectedServicePhoneId: ""
    };
  },
  computed: {
    currentServiceNum() {
			this.servicePhones.forEach(item => {
				if (item.id==2) {
					
					return item.id
				}
			})
		},
		transcription() {
			return this.popupVal.transcription
		},
		isChecked() {
			if (this.popupVal.transcription == 1) {
				return true
			} else {
				return false
			}
		}
  },
  methods: {
		...mapActions("main", ["updateUserSettings"]),
    searchUserByEmail() {
      const response = this.getUserByEmail(this.searchEmailValue);
    },
		updateVal() {
			const userId = this.user.users.id;
			const currentService = this.popupVal.service.split(",")[0];
			const usetSettings = {
				id: userId,
				selectedService: this.selectedServicePhoneId
			}
			// console.log(this.selectedServicePhoneId);
			// console.log(this.popupVal.service.split(",")[0]);
			this.updateUserSettings(usetSettings);
		}
	}
};
</script>