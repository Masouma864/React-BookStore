import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'BOOKS',
    },
    {
      id: 2,
      path: '/Category',
      text: 'CATEGORIES',
    },

  ];
  return (
    <div className="nav_bar">
      <h1 className="heading">Bookstore CMS</h1>
      <nav>
        <ul>
          {links.map((link) => (
            <li key={link.id}>
              <Link to={link.path}>{link.text}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
