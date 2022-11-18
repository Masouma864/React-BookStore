import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';

const AddBook = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    title: '',
    author: '',
  });

  const read = (e) => {
    const input = e.target;
    setState({
      ...state,
      [input.name]: input.value,
    });
  };

  const submit = (e) => {
    e.preventDefault();

    if (state.title && state.author) {
      dispatch(
        addBook({
          item_id: uuidv4(),
          title: state.title,
          author: state.author,
          category: 'Action',
        }),
      );
      setState({
        title: '',
        author: '',
      });
    }
  };

  return (
    <div className="Add-book">
      <h1 className="form-heading">ADD A NEW BOOK</h1>
      <form className="add-form" onSubmit={submit}>
        <input type="text" name="title" placeholder="Book-Title" value={state.title} onChange={read} />
        <input type="text" name="author" placeholder="Book-Author" value={state.author} onChange={read} />
        <select
          name="category"
          key="book-category"
          onChange={read}
          value={state.category}
        >
          <option value="" hidden>Category</option>
          <option value="Action">Action</option>
          <option value="Fiction">Fiction</option>
          <option value="Thriller">Thriller</option>
          <option value="Inspiration">Inspiration</option>
          <option value="Business">Business</option>
        </select>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};
export default AddBook;
