import React, { useEffect, useState } from 'react'
import { Link } from 'react-scroll';
import './Navbar.css';

function Navbar() {

  const [time, setTime] = useState(new Date());

  useEffect(() => {
    setInterval(() => setTime(new Date()), 1000);
  }, []);


  return (
      <div className='nav-container'>
        <ul id='section-list'>
          <Link id='section-item' to="PROJECT" spy={true} smooth={true} offset={20} duration={1000}>PROJECT</Link>
          <Link id='section-item' to="MILITARY" spy={true} smooth={true} offset={10} duration={1000}>MILITARY</Link>
          <Link id='section-item' to="CONTACT" spy={true} smooth={true} offset={20} duration={1000}>CONTACTS</Link>
        </ul>
        <div id='time-container'>
          <div id='section-item'>{time.toLocaleTimeString()}</div>
          <div id='section-item'>{time.toLocaleDateString()}</div>
        </div>
        <Link id='home-button' to="HOME" spy={true} smooth={true} offset={-100} duration={1000}>UP</Link>
      </div>
  )
}

export default Navbar