import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './index.css';
import Books from './components/Books';
import Navbar from './components/Navbar';
import Categories from './components/Categories';
import { getBooks } from './redux/books/books';

function App() {
  const { books, categories } = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooks());
  }, [books, dispatch]);

  return (
    <>

      <Navbar />

      <Routes>
        <Route path="/book" exact element={<Books bookList={books} />} />
        <Route path="/categories" element={<Categories categories={categories} />} />
      </Routes>

    </>
  );
}

export default App;
