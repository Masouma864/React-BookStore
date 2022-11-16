import React from 'react';
import Book from './book';
import AddBook from './AddBook';

const Books = (props) => {
  const { bookList } = props;
  return (
    <div className="books-container">
      {bookList.map((book) => (

        <Book key={book.id} title={book.title} author={book.author} />

      ))}
      <AddBook />
    </div>
  );
};

Books.defaultProps = {
  books: [],
};

export default Books;
