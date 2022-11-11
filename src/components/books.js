import React, { useState } from 'react';
import Book from './book';
import AddBook from './AddBook';
/* eslint-disable */ 
const BookDisplay = () => {
  const [ books ] = useState([
    { title: 'The Hunger Game', author: 'Suzanne Collins', id: 1 },
    { title: 'Dune', author: 'Frank Herber', id: 2 },
    { title: 'Capital in the Twenty-First Century', author: 'Suzanne Collins', id: 3 },
   
  ]);
  return (
    <div className="books-container">
      {books.map((book) => (
        <div key={book.id} className="bookCard">
          <Book title={book.title} author={book.author} />
         
        </div>
      ))}
      <AddBook />
    </div>
  );
};

export default BookDisplay;