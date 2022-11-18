/* eslint-disable react/prop-types */
import React from 'react';
import Book from './book';
import AddBook from './AddBook';

function Books(props) {
  const { bookList } = props;
  return (
    <div>
      {bookList.map((book) => (
        <Book key={book.item_id} title={book.title} author={book.author} id={book.item_id} />
      ))}
      <hr />
      <AddBook />

    </div>
  );
}

Books.defaultProps = {
  books: [],
};

export default Books;
