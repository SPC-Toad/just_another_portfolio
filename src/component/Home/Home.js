import React from 'react'
import Navbar from '../Navbar/Navbar';
import Intro from '../Intro/Intro';
import Project from '../Project/Project';
import Military from '../Military/Military';
import Contact from '../../Contact/Contact';
import Entertainment from '../../Entertainment/Entertainment';
import Footer from '../Footer/Footer';
import './Home.css';

function Home() {
  return (
    <div className='main'>
        <Navbar />
        <div id='HOME' />
        <Intro />
        <div id='PROJECT' />
        <Project />
        <div id='MILITARY' />
        <Military />
        <div id='CONTACT' />
        <Contact />
        <Entertainment />
        <Footer />
    </div>
  )
}

export default Home