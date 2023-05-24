import React from 'react'
import './Card.css';

function Card({picture, title, language, description, link}) {
  return (
    <div id='card-container'>
        <img id='picture' src={picture} alt='No-img'/>
        <hr/>
        <div id='language'>{language}</div>
        <hr/>
        <div id='title'>{title}</div>
        <hr/>
        <div id='box'>
          <div id='text'>{description}</div>
          <div id='link-placeholder'>
            <a href={link} className='link-button-2'>&#129130;</a>
          </div>
        </div>
    </div>
  )
}

export default Card