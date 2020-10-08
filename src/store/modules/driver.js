export default {
	state: {
		driverCat: '12211'
	},
	mutations: {
		updateDriverCat(state, { items, values }) {
			let res = [];
			for (let item in items) {
				values
					.sort()
					.indexOf(items[item]) !== -1 ? res.push(2) : res.push(1);
			}
			state.driverCat = res.join('');
		}
	},
	getters: {
		getDriverCat(state) {
			return state.driverCat;
		}
	}
};
