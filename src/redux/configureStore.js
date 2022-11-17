import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import reduceBook from './books/books';
import reduceCategories from './categories/categories';

const rootStore = combineReducers({
  books: reduceBook,
  categories: reduceCategories,
});

const store = configureStore({
  reducer: rootStore,
});

export default store;
