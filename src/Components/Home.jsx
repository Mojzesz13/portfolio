import React from 'react';
import Sketch from '../ThreeJs/modul';
import AboutMe from './AboutMe/AboutMe';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Sketch from '../ThreeJs/modul';

import './Home.scss';
import Projects from './Projects/Projects';

const Home = () => {
  return (
    <div className='home-containner'>
      {/* <Header /> */}
      {/* <Projects /> */}
      {/* <AboutMe />
      <Contact />
      <Footer /> */}
      <Sketch />
    </div>
  );
};

export default Home;
