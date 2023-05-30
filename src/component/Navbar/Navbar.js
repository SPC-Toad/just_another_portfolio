import React from 'react'
import { Link } from 'react-scroll';
import './Navbar.css';
import logo from '../../visual/logo.png';

function Navbar() {
  return (
      <div className='nav-items'>
          <Link to="HOME" spy={true} smooth={true} offset={0} duration={500}><img id='logo' src={logo} alt='HOME'/></Link>
          <ul id='section_list'>
            <Link id='section_item' to="PROJECT" spy={true} smooth={true} offset={-50} duration={500}>PROJECT</Link>
            <Link id='section_item' to="MILITARY" spy={true} smooth={true} offset={-50} duration={500}>MILITARY</Link>
            <Link id='section_item' to="CONTACT" spy={true} smooth={true} offset={-50} duration={500}>CONTACTS</Link>
        </ul>
      </div>
  )
}

export default Navbar