import { combineReducers } from '@reduxjs/toolkit';
import authReducer from '../features/authSlice';
import themeReducer from '../features/themeSlice';
import homeReducer from '../features/homeSlice';
import categoriesReducer from '../features/categoriesSlice';
import analyticsReducer from '../features/analyticsSlice';
import transactionsReducer from '../features/transactionsSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  theme: themeReducer,
  home: homeReducer,
  categories: categoriesReducer,
  analytics: analyticsReducer,
  transactions: transactionsReducer,
});

export default rootReducer;