import PropTypes from 'prop-types';
import React from 'react';
import Book from './book';
import AddBook from './AddBook';

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

Books.propTypes = {
  bookList: PropTypes.instanceOf(Array).isRequired,
};

export default Books;
