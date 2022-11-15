// Actions
const ADD_BOOK = 'React-BookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'React-BookStore/books/REMOVE_BOOK';

// Reducer
const addremoveReducer = (state = [], action) => {
    switch (action.type) {
      // do reducer stuff
      case ADD_BOOK: {
        return [...state,   {
            id: action.id,
            title: action.title,
            author: action.author,
          }];
      }
      case REMOVE_BOOK: {
        return state.filter((book) => book.id !== action.id);
      }
      default:
        return state;
    }
  };
// Action Creators
export const addBook = (id, title, author) => ({
    type: ADD_BOOK,
    id,
    title,
    author,
  });
  
  export const removeBook = (id) => ({
    type: REMOVE_BOOK,
    id,
  });
  
  export default addremoveReducer;
