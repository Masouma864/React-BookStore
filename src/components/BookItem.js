/* eslint-disable */
import React from 'react';
// import { IoTrashBin } from 'react-icons/io5';

function BookItem(props) {
  const { title, author, id } = props
  return (
    <section className='displayBooks'>
        <p className='book'> Book Title: {title} </p>
        <p className='book'> Author's Name: {author} </p>
        <button type='button' className='removeBtn' id={id}><IoTrashBin /></button>
    </section>
  )
}

export default BookItem;