import React from 'react'
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiscord, faGithub, faLinkedin  } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';


function Contact() {

  return (
    <div className='small-section-container'>
      <div className='section-title' >
          <div className='title-text-1'>&#9657;Contacts</div>
          <div className='line'><hr /></div>
      </div>
      <div id='contact-container'>
        <p id='paragraph-text' className='sub-text-2'>
            If you have questions, feel free to reach out to me anytime!
        </p>
        <div id='contact-box'>
          <div className='title-text-3'>Message Kim!</div>
          <ul id='contact-list'>
            <li id='contact-items'>
              <FontAwesomeIcon icon={faGithub} id='list-items'/>
              <div id='list-items-2'>
                <div>Github</div>
                <a href='https://github.com/SPC-Toad' id='link-button'>&#129130;</a>
              </div>
            </li>
            <li id='contact-items'>
              <FontAwesomeIcon icon={faLinkedin} id='list-items'/>
              <div id='list-items-2'>
                <div>LinkedIn</div>
                <a href='https://www.linkedin.com/in/sangyun-kim/' id='link-button'>&#129130;</a>
              </div>
            </li>
            <li id='contact-items'>
              <FontAwesomeIcon icon={faEnvelope} id='list-items'/>
              <div id='list-items-3'>Sangyunkim2025@Gmail.com</div>
            </li>
            <li id='contact-items'>
              <FontAwesomeIcon icon={faDiscord} id='list-items'/>
              <div id='list-items-3'>spctoad</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Contact