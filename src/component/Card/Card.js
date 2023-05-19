import React from 'react'
import './Card.css';

function Card({picture, title, language, description}) {
  return (
    <div id='card-container'>
        <img id='picture' src={picture}/>
        <hr/>
        <div id='language'>{language}</div>
        <hr/>
        <div id='title'>{title}</div>
        <hr/>
        <div id='text'>{description}</div>
    </div>
  )
}

export default Card