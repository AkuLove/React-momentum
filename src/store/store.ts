import { combineReducers, configureStore } from '@reduxjs/toolkit';
import dayReducer from './daySlice';

const reducers = combineReducers({
  currentDay: dayReducer,
});

export const store = configureStore({
  reducer: reducers,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
