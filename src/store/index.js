import Vue from 'vue';
import Vuex from 'vuex';

import driver from '@/store/modules/driver';
import logic from '@/store/modules/logic';

Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
		driver,
		logic
	}
});
