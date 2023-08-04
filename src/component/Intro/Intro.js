import React from 'react'
import './Intro.css';
import Me from '../../visual/new_me.jpg';
import Resume from '../../visual/resume.pdf';

function Intro() {
  return (
    <div id='intro-container'>
      <div id='left-container'>
        <div id='para-text'>
          <p className='title-text-1'>I am Sangyun Kim and </p>
          <p className='title-text-2'>Software Engineer</p>
          <p className='sub-text-1'>I enjoy developing websites and data structures!</p>
        </div>
        <div id='button-container'>
          <a href={ Resume } className='button'>RESUME / CV</a>
        </div>
      </div>
      <div id='right-container'>
        <img src={ Me } alt='no-img'/>
        <div id='description'>
          <li id='bullet-point' />
          <p id='description-text'>Currently studying at</p>
          <p id='name-text'>Boston University</p>
        </div>
      </div>
    </div>
  )
}

export default Intro