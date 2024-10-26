import { configureStore } from '@reduxjs/toolkit';
import modalReducer from './reducers/modalSlice';
import tasksReducer from './reducers/tasksSlice';
import { loadState, saveState } from './helpers';

const store = configureStore({
  reducer: {
    modal: modalReducer,
    tasks: tasksReducer,
  },
  preloadedState: loadState()
});

store.subscribe(() => {
  saveState(store.getState()); // Save state to localStorage on any change
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

