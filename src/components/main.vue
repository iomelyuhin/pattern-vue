<template lang="pug">
	.main
		.main__container.container
			.main__search
				.main__search-inpt
					input.main__search-input(
						@keyup.enter="enter"
						type="text" 
						placeholder="Поиск по email" 
						v-model="searchEmailValue"
					)
					button.main__search-btn(
						@keyup.enter="enterTel"
						type="button"
						@click.prevent="searchUserByEmail"
					)
						.main__search-btn-icon
				.main__search-inpt
					input.main__search-input(
						type="text" 
						placeholder="Поиск по телефону" 
						v-model="searchPhoneValue"
					)
					button.main__search-btn(
						@click.prevent="searchUserByTel"
						type="button"
					)
						.main__search-btn-icon
			.main__user-info.main__user-info--main-table(v-if="user.isLoaded")
				mainTable(
					@licenseChange="licenseChange"
					@serviceChange="serviceChange"
					@transcriptionChange="transcriptionChange"
					:user="user"
				)
			.main__recordings
				.main__recordings-btns
					a.mail__toggle-recordings(
						v-if="user.users && isOpenRecordings==false"
						href="#"
						@click.prevent="isOpenRecordings=true"
					) Открыть записи
					a.mail__toggle-recordings(
						v-if="user.users && isOpenRecordings==true"
						href="#"
						@click.prevent="isOpenRecordings=false"
					) Закрыть записи
				recordingsList(
					v-if="isOpenRecordings"
					:user="user"
				)

		popup(
			v-if="openPopup"
			@closePopup="closePopup"
			:popupVal="popupVal"
			:user="user"
		)
				
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      searchEmailValue: "",
      searchPhoneValue: "",
      userData: [],
      isOpenRecordings: false,
      openPopup: false,
      popupVal: {
        license: "",
        service: "",
        transcription: ""
      }
    };
  },
  components: {
    mainTable: () => import("./blocks/mainTable.vue"),
    popup: () => import("./ui/popup.vue"),
    recordingsList: () => import("./blocks/recordingsList.vue")
  },
  computed: {
    ...mapState("main", {
      user: state => state.user
    })
  },
  methods: {
    ...mapActions("main", ["getUserByEmail", "getUserByPhone"]),
    searchUserByEmail() {
      const response = this.getUserByEmail(this.searchEmailValue);
		},
		searchUserByTel() {
      const response = this.getUserByPhone(this.searchPhoneValue);
		},
    enter() {
      this.searchUserByEmail();
		},
		closePopup() {
			this.openPopup=false;
			this.clearPopup();
		},
		clearPopup() {
			this.popupVal = {
        license: "",
        service: "",
        transcription: ""
      }
		},
    licenseChange() {
			this.popupVal.license = false
			if (this.user.receipt_info.receipt_info) {
				
				let receptInfo = JSON.parse(this.user.receipt_info.receipt_info)
				console.log(receptInfo.receipt_info);
				
				let licensesArr = receptInfo.receipt_info

				let lastLicense = licensesArr[licensesArr.length - 1]
				let licenseExp = lastLicense.expires_date

				let expiresDate = new Date(licenseExp * 1000);
	
				if (expiresDate) {
					this.popupVal.license = expiresDate;
				} else {
					this.popupVal.license = false;
				}
			}
      this.openPopup = true;
		},
		serviceChange () {
			this.popupVal.service = this.user.service.number+`, ${this.user.service.city}`
      this.openPopup = true;
		},
		transcriptionChange() {
			this.popupVal.transcription = this.user.users.recognize_status
      this.openPopup = true;
		}
  }
};
</script>