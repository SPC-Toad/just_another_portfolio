import React from 'react'
import './Project.css';
import Card from '../Card/Card';
import Seq from '../../visual/seq_align.jpg';
import Astar from '../../visual/Astar.jpg';
import Terminal from '../../visual/Terminal.jpg';
import Learnmore from '../../visual/Learnmore.jpg';

function Project() {
  return (
    <div className='small-section-container'>
        <div className='section-title' >
            <div className='title-text-1'>&#9657;Project</div>
            <div className='line'><hr /></div>
        </div>
        <div id='project-list'>
            <Card 
              picture={ Seq }
              title={'Sequence Alignment'}
              language={'Java'}
              description={'Implimenting DNA alignment using Dynamic Programming'}
            />
            <Card 
              picture={ Astar }
              title={'Map Routing A* algorithm'}
              language={'Java'}
              description={'Implimenting shortest route from start node to end node using A* version of dijkstra algorithm. (Greedy Algorithm)'}
            />
            <Card 
              picture={ Terminal }
              title={'Terminal Website'}
              language={'HTML CSS React'}
              description={'Implemented Terminal landing page and built portfolio website'}
            />
            <Card 
              picture={ Learnmore }
              title={'Learn more here!'}
              language={':)'}
              description={'SMily Face'}
              link={'/project'}
            />
        </div>
    </div>
  )
}

export default Project