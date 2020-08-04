const main = {
	namespaced: true,
	state: {
		user: {},
	},
	actions: {
		async getUserByEmail({ commit }, email) {
			const formData = new FormData();
			formData.append("email", email);
			const response = await this.$axios.post("/userSearchByEmail.php", formData);
			commit("SET_USER", response.data);
			
			return response;
		},
		async getUserByPhone({ commit }, phone) {
			const formData = new FormData();
			formData.append("phone", phone);
			const response = await this.$axios.post("/userSearchByPhone.php", formData);
			commit("SET_USER", response.data);
			
			return response;
		},
		async updateUserSettings({ commit }, settings) {
			const formData = new FormData();
			formData.append("id", settings.id);
			formData.append("service_id", settings.selectedService);
			const response = await this.$axios.post("/updateSettings.php", formData);
			// commit("SET_USER", response.data);
			
			return response;
		},
	},
	getters: {},
	mutations: {
		SET_USER: (state, user) => {
			state.user = user;
			state.user.isLoaded = true;
		},
	},
};

export default main;
