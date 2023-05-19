import React from 'react'
import './Project.css';
import Card from '../Card/Card';
import Seq from '../../visual/seq_align.jpg';


function Project() {
  return (
    <div className='project-container'>
        <div id='project-title' >
            <div className='title-text-1'>&#9657;Project</div>
            <div id='line'><hr /></div>
        </div>
        <div className='project-list'>
            <Card 
                picture={ Seq }
                title={'Sequence Alignment'}
                language={'Java'}
                description={'Implimenting DNA alignment using Dynamic Programming'}
                />
        </div>
    </div>
  )
}

export default Project