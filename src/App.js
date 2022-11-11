import React from 'react';
import {
  Routes,
  Route,
} from 'react-router-dom';
import NavBar from './components/navbar';
import Categories from './components/categories';
import Books from './components/books';

function App() {
  return (
    <div className="container">
      <NavBar />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/Category" element={<Categories />} />
      </Routes>
    </div>
  );
}

export default App;
