import { configureStore } from '@reduxjs/toolkit';
import pokemonReducer from './pokemonReducer';
// import rootReducer from './index';

const store = configureStore({
	reducer: pokemonReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
