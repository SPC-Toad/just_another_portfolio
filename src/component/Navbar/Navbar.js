import React from 'react'
import './Navbar.css';

function Navbar() {
  return (
      <div className='nav-items'>
          <div id='section_logo'>LOGO</div>
          <ul id='section_list'>
              <li id='section_item'>PROJECT</li>
              <li id='section_item'>MILITARY</li>
              <li id='section_item'>ENTERTAINMENT</li>
          </ul>
      </div>
  )
}

export default Navbar