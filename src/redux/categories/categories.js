const initialState = [];

// Action_type

const STATUS_CHECKED = 'bookstore/cateogories/STATUS_CHECKED';
// Reducer

export default function categoriesReducer(state = initialState, action) {
  switch (action.type) {
    case STATUS_CHECKED:
      return 'UNDER_CONSTRUCTION';
    default:
      return state;
  }
}
// Action Creators for  actions
export function checkStatus() {
  return {
    type: STATUS_CHECKED,
  };
}