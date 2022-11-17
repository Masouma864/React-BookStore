// Actions
const CHECK_STATUS = 'bookstore-app/categories/CHECK_STATUS';
const initialState = [];

export const checkStatus = () => ({
  type: CHECK_STATUS,
});

// Reducer
const reduceCategories = (state = initialState, action) => {
  switch (action.type) {
    // do reducer stuff
    case CHECK_STATUS:
      return 'Under Construction';
    default:
      return state;
  }
};

export default reduceCategories;
