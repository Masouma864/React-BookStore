/* eslint-disable */

import React from 'react';

const AddBook = (props) => {
  const { title, author, id } = props;
  return (
    <div className='formContainer'>
      <form className='form'>
        <label>ADD NEW BOOK</label>
        <input className='input' value={title} type='text' placeholder='Book title'/>
        <input className='input' value={author} type='text' placeholder='Category'/>
        <button id={id} type='submit' className='submitBtn'>ADD BOOK</button>
      </form>
    </div>
  )
}
export default AddBook;