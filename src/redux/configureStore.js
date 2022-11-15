import { combineReducers, configureStore } from '@reduxjs/toolkit';
import addremoveReducer from './books/books';
import categoriesReducer from './categories/categories';

const rootReducer = combineReducers({
  addremoveReducer,
  categoriesReducer,
});
const store = configureStore({ reducer: rootReducer });

export default store;
