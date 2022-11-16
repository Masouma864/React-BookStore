import React from 'react';
import { useSelector } from 'react-redux';
import { Routes, Route,} from 'react-router-dom';
import NavBar from './components/navbar';
import Categories from './components/categories';
import Books from './components/books';

function App() {
  const state = useSelector((state) => state);
  return (
    <div className="container">
      <NavBar />
      <Routes>
        <Route path="/" element={<Books bookList={state.books}/>} />
        <Route path="/Category" element={<Categories categories={state.categories}/>} />
      </Routes>
    </div>
  );
}

export default App;
