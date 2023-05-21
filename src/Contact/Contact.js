import React from 'react'
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiscord, faGithub, faLinkedin  } from '@fortawesome/free-brands-svg-icons';
import { faMailBulk, faMailForward, faMailReply } from '@fortawesome/free-solid-svg-icons';
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
        <ul id='contact-list'>
            <li className='title-text-2'>Message Kim!</li>
            <li id='item-list'><FontAwesomeIcon icon={faEnvelope} />Sangyunkim2025@Gmail.com</li>
            <a id='item-list' href='https://github.com/SPC-Toad'><FontAwesomeIcon icon={faGithub} />GitHub</a>
            <a id='item-list' href='https://www.linkedin.com/in/sangyun-kim/'><FontAwesomeIcon icon={faLinkedin} />LinkedIn</a>
            <li id='item-list'><FontAwesomeIcon icon={faDiscord} />SPC Toad#7198</li>
        </ul>
      </div>
    </div>
  )
}

export default Contact