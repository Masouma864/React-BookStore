import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import reduceBook from './books/books';
import reduceCategories from './categories/categories';

const store = configureStore(
  {
    reducer: {
      books: reduceBook,
      categories: reduceCategories,
    },
  },
  applyMiddleware(thunk),
);

export default store;
