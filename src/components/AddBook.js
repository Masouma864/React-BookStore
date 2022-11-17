import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBook } from '../redux/books/books';

function AddBook() {
  const bookList = useSelector((state) => state);
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
      let totID = 0;
      for (let i = 0; i < bookList.books.length; i += 1) {
        if (bookList.books[i].id > totID) {
          totID = bookList.books[i].id;
        }
      }

      dispatch(
        addBook({
          id: totID + 1,
          title: state.title,
          author: state.author,
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
