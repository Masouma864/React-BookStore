import { useSelector } from 'react-redux';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './index.css';
import Books from './components/Books';
import Navbar from './components/Navbar';
import Categories from './components/Categories';

function App() {
  const state = useSelector((state) => state);
  return (
    <>

      <Navbar />

      <Routes>
        <Route path="/book" exact element={<Books bookList={state.books} />} />
        <Route path="/categories" element={<Categories categories={state.categories} />} />
      </Routes>

    </>
  );
}

export default App;
