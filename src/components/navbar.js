import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <nav>
        <h1>Bookstore CMS</h1>
        <ul>
          <Link key="1" to="/book">Books</Link>
          <Link key="2" to="/Categories">Categories</Link>
        </ul>
      </nav>
    </div>
  );
}
export default Navbar;
