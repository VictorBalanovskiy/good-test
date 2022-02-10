import { createStore } from "vuex";

const store = createStore({
	state() {
		return {
			count: 0,
			message: "",
			storage: [],
		};
	},
	mutations: {
		lastNumber(state) {
			let lastNumberInCount = state.count;
			let lastOne = lastNumberInCount.toString().split("").pop();
			if (state.count == 11) {
				return (state.message = "монет");
			} else if (lastOne == 1) {
				return (state.message = "монета");
			} else if (
				state.count == 10 ||
				state.count == 11 ||
				state.count == 12 ||
				state.count == 13 ||
				state.count == 14 ||
				state.count == 15 ||
				state.count == 16 ||
				state.count == 17 ||
				state.count == 18 ||
				state.count == 19 ||
				state.count == 20
			) {
				return (state.message = "монет");
			} else if (lastOne == 2 || lastOne == 3 || lastOne == 4) {
				return (state.message = "монеты");
			} else if (
				lastOne == 5 ||
				lastOne == 6 ||
				lastOne == 7 ||
				lastOne == 8 ||
				lastOne == 9 ||
				lastOne == 0 ||
				state.count == 11 ||
				state.count == 12
			) {
				return (state.message = "монет");
			}
		},
	},
	getters: {
		increment(state) {
			state.count++;
		},
		incrementFiveCoin(state) {
			return (state.count += 5);
		},
		maxCoin(state) {
			if (state.count > 100) {
				alert("Количество монет ограничено");
				return (state.count = 100);
			}
		},
		getStorage() {
			return state.storage;
		},
	},
	actions: {},
	modules: {},
});

export default store;
