/* eslint-disable react/prop-types */
import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

function Book({ title, author, id }) {
  const dispatch = useDispatch();

  const deleteBook = (event) => {
    event.preventDefault();
    dispatch(removeBook(id));
  };

  return (
    <>
      <div className="books">
        <h2 className="book-title">{title}</h2>
        <p className="book-author">{author}</p>
        <button type="button" className="remove-btn" onClick={deleteBook} value={id}>Remove</button>
      </div>
    </>
  );
}
export default Book;
