import React from 'react';
import './Header.scss';
import Navbar from '../Navbar/Navbar';
import myPhoto from '../../assets/myPhoto.jpg';

const Header = () => {
  return (
    <section id='header' className='header-containner'>
      <Navbar />
      <div className='content-container'>
        <img className='photo' src={myPhoto} alt='author' />
        <h1>Paweł Bożejewski</h1>
      </div>
    </section>
  );
};

export default Header;
