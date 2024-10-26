import { configureStore } from '@reduxjs/toolkit';
import modalReducer from './reducers/modalSlice';
import tasksReducer from './reducers/tasksSlice';

const store = configureStore({
  reducer: {
    modal: modalReducer,
    tasks: tasksReducer,
  }
});
export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

