import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../api';
// Actions
const ADD_BOOK = 'bookstore-app/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore-app/books/REMOVE_BOOK';
const GET_BOOKS = 'bookstore-app/books/GET_BOOKS';

const initialState = [];

const addBook = createAsyncThunk(ADD_BOOK, async (item) => {
  await fetch(`${api}/books`, {
    method: 'POST',
    body: JSON.stringify(item),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return item;
});

const getBooks = createAsyncThunk(GET_BOOKS, async () => {
  const response = await fetch(`${api}/books`);
  const data = await response.json();
  const books = Object.keys(data).map((key) => ({
    ...data[key][0],
    item_id: key,
  }));
  return books;
});

const removeBook = createAsyncThunk(REMOVE_BOOK, async (id) => {
  await fetch(`${api}/books/${id}`, {
    method: 'DELETE',
  });
  return id;
});

const reduceBook = (state = initialState, action) => {
  switch (action.type) {
    case 'bookstore-app/books/ADD_BOOK/fulfilled':
      return [...state, action.payload];

    case 'bookstore-app/books/GET_BOOKS/fulfilled':
      return action.payload;

    case 'bookstore-app/books/REMOVE_BOOK/fulfilled':
      return state.filter((item) => item.id !== action.payload);
    default:
      return state;
  }
};

export default reduceBook;
export { addBook, removeBook, getBooks };
