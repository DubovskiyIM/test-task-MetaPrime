export default {
	state: {
		items: ['A', 'B', 'C', 'D', 'E']
	},
	actions: {
		mutateDriverCat({ commit, state }, values) {
			commit('updateDriverCat', {
				items: state.items,
				values
			});
		}
	},
	getters: {
		getItems(state) {
			return state.items;
		}
	}
};
