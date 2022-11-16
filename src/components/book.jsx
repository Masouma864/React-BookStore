import React from 'react';
import { useDispatch } from 'react-redux';



const  Book = (props)=> {
  const dispatch = useDispatch();
  const { title, author, id } = props;

    const deleteBook = (id) => {
    dispatch(removeBook(id));
  };
  return (

    <div className="displayBooks">
     
        <p className='book'>{' '} Book Title: {title}</p>
        <p className='book-author'>{' '} Book Author: {author}</p>
      <button type="button" className="btn-outline" id={id}> Comments </button>
      <button type="button" className="btn-outline" id={id}> Remove </button>
      <button type="button" className="btn-outline" onClick={() => deleteBook(id)}> edit </button>
    
    </div>
    
  );
}
Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
}
export default Book;
