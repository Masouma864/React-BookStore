const initialState = [
  {
    title: 'The Hunger Game',
    author: 'Suzanne Collins',
    id: 1,
  },
  {
    title: 'Dune',
    author: 'Frank Herber',
    id: 2,
  },
  {
    title:
      'Capital in the Twenty-First Century',
    author: 'Suzanne Collins',
    id: 3,
  },

];
// Actions
const ADD_BOOK = 'React-BookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'React-BookStore/books/REMOVE_BOOK';

// Reducer
const addremoveReducer = (state = initialState, action) => {
  switch (action.type) {
    // do reducer stuff
    case ADD_BOOK: {
      return [...state, action.payload];
    }
    case REMOVE_BOOK: {
      return state.filter((book) => book.id !== action.payload);
    }
    default:
      return state;
  }
};
// Action Creators
export const addBook = (book) => ({
  type: ADD_BOOK,
  payload:book,
});

export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  payload: id,
});

export default addremoveReducer;
