import React from 'react'
import './Military.css';

function Military() {
  return (
    <div className='small-section-container'>
      <div className='section-title' >
          <div className='title-text-1'>&#9657;Military</div>
          <div className='line'><hr /></div>
      </div>
      <div id='military-container'>
        <p className='sub-text-1' id='paragraph-text'>
          I am a Specialist "E-4" in United State Army, working as wheeled vehicle mechanic.
          I joined U.S. Army reserves a month after graduation of high school, because I want different experiences in life. 
        </p>
        <div id='military-right-container'>
          <ul id='award-list' className='title-text-2'>
            Awards
            <li>National Defense Service Medal</li>
            <li>Army Service Ribbon</li>
          </ul>
          <div id='army-button-container'>
            <a id='army-essentials-button' href='./armyessentials'>Army Essentials</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Military