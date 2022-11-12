import React from 'react';

function Book(props) {
  const { title, author, id } = props;
  return (
    <div className="displayBooks">
      <p className="book">
        {' '}
        {title}
        {' '}
      </p>
      <p className="book-author">
        {' '}
        {author}
        {' '}
      </p>
      <button type="button" className="btn-outline" id={id}> Components </button>
      <button type="button" className="btn-outline" id={id}> Remove </button>
      <button type="button" className="btn-outline" id={id}> edit </button>
    </div>
  );
}

export default Book;
