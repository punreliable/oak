// import { createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

const counterReducer = (state = { counter: 0 }, action: any) => {
	if (action.type === 'increment') {
		return {
			counter: state.counter + 1,
		};
	}
	if (action.type === 'decrement') {
		return {
			counter: state.counter - 1,
		};
	}

	return state;
};

//const store = createStore(counterReducer);
const store = configureStore({
	reducer: counterReducer,
});

export default store;
