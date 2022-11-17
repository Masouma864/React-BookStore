import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

function AddBook() {
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
          item_id: Math.floor(Math.random() * 100),
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
    <div className="form-inputs">
      <h1>ADD A NEW BOOK</h1>
      <form className="inputs" onSubmit={submit}>
        <input type="text" name="title" placeholder="Book-Title" value={state.title} onChange={read} />
        <input type="text" name="author" placeholder="Book-Author" value={state.author} onChange={read} />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
export default AddBook;
