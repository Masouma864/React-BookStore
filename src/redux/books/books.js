// Actions
const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

// Reducer
const addremoveReducer = (state = [], action = {}) => {
    switch (action.type) {
      // do reducer stuff
      case ADD_BOOK: {
        return [...state, action.payload];
      }
      case REMOVE_BOOK: {
        return [...state.filter((book) => book.id !== action.payload)];
      }
      default:
        return state;
    }
  };
// Action Creators
export const addBook = (payload) => ({
    type: ADD_BOOK,
    payload,
  });
  
  export const removeBook = (payload) => ({
    type: REMOVE_BOOK,
    payload,
  });
  
  export default addremoveReducer;
