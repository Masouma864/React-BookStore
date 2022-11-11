/* eslint-disable */

import React from 'react';

const AddBook = (props) => {
    const { title, author, id } = props;
    return (
        <div className='formContainer'>
            <div className='line'></div>
            <label className='title'>ADD NEW BOOK</label>
            <form className='form'>
                
                <input className='input' value={title} type='text' placeholder='Book title' />
                <input className='input2' value={author} type='text' placeholder='Category' />
                <button id={id} type='submit' className='submitBtn'>ADD BOOK</button>
            </form>
        </div>
    )
}
export default AddBook;
console.log('hi')