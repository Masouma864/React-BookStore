import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <nav>
        <h1>Bookstore CMS</h1>
        <ul>
          <li>
            <Link to="/Book">Book</Link>
          </li>
          <li>
            <Link to="/Categories">Categories</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
export default Navbar;
