/* eslint-disable react/prop-types */
import React from 'react';
import { useDispatch } from 'react-redux';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { removeBook } from '../redux/books/books';

const Book = ({ title, author, id }) => {
  const dispatch = useDispatch();

  const deleteBook = (event) => {
    event.preventDefault();
    dispatch(removeBook(id));
  };

  return (
    <>
      <div className="book-item">
        <div>
          <h2 className="book-title">{title}</h2>
          <p className="">{author}</p>
          <div className="links-container">
            <ul>
              <li><button type="button" className="btn-1 line">Comments</button></li>
              <li><button type="button" className="btn-1 line">Edit</button></li>
              <li><button type="button" className="btn-1" onClick={deleteBook} value={id}>Remove</button></li>
            </ul>
          </div>
        </div>
        <div className="progress">
          <CircularProgressbar
            className="progressBar"
            variant="determinate"
            color="primary"
            sx={{
              width: 50,
            }}
            value={50}
          />
          <div className="numerics">
            <span className="number">50%</span>
            <span className="completed">completed</span>
          </div>
        </div>
        <div className="view-progress">
          <span className="chapter-title">Current chapter</span>
          <h3 className="chapter-number">Chapter 10</h3>
          <button type="button" className="btn-2">
            Update progress
          </button>
        </div>
      </div>
    </>
  );
};
export default Book;
