import React from 'react';
import Book from './Book';
import AddBook from './addBook';

function Books(props) {
  const { bookList } = props;

  return (
    <div>
      {bookList.map((book) => (
        <Book key={book.id} title={book.title} author={book.author} id={book.id} />
      ))}

      <AddBook />

    </div>
  );
}

Books.defaultProps = {
  books: [],
};

export default Books;
