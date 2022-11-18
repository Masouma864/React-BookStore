import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserAlt } from 'react-icons/fa';

const Navbar = () => (
  <header>
    <h1>Bookstore CMS</h1>
    <nav>
      <ul>
        <li>
          <Link to="/Book">Book</Link>
        </li>
        <li>
          <Link to="/Categories">Categories</Link>
        </li>
      </ul>
      <div className="user-container">
        <FaUserAlt />
      </div>
    </nav>
  </header>
);
export default Navbar;
