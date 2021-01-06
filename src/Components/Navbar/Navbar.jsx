import React from 'react';
import './Navbar.scss';
import { Link } from 'react-scroll';

const linkList = [
  {
    path: 'header',
    name: 'Home',
  },

  {
    path: 'projects',
    name: 'Projects',
  },

  {
    path: 'aboutMe',
    name: 'About me',
  },
  {
    path: 'contact',
    name: 'Contact',
  },
];

const Navbar = () => {
  return (
    <nav className='navbar-container'>
      <ul className='menu-items'>
        {linkList.map((obj) => (
          <Link
            className='navLink'
            activeClass='active'
            data-item={obj.name}
            to={obj.path}
            spy={true}
            smooth={true}
            duration={500}
            key={obj.path}
          >
            {obj.name}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
