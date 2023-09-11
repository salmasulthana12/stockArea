import { configureStore } from '@reduxjs/toolkit';
import warehouseReducer from './reducers/warehouseReducer';

export const store = configureStore({
  reducer: {warehouseReducer},
})