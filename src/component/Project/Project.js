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
              link={'https://github.com/SPC-Toad/UmassBoston_projects/tree/6fab3bee01eef21e856fdef512db8806857b96bb/Backend/Java/Sequence%20Alignment'}
            />
            <Card 
              picture={ Astar }
              title={'Map Routing A* algorithm'}
              language={'Java'}
              description={'Implimenting shortest route from start node to end node using A* version of dijkstra algorithm. (Greedy Algorithm)'}
              link={'https://github.com/SPC-Toad/UmassBoston_projects/tree/6fab3bee01eef21e856fdef512db8806857b96bb/Backend/Java/Map%20Routing%20Astar'}
            />
            <Card 
              picture={ Terminal }
              title={'Terminal Website'}
              language={'HTML CSS React'}
              description={'Implemented Terminal landing page and built portfolio website'}
              link={'https://github.com/SPC-Toad/Terminal-Portfolio'}
            />
            <Card 
              picture={ Learnmore }
              title={'Check out more projects!'}
              language={'Front-end && Backend'}
              description={'Enjoy!'}
              link={'/project'}
            />
        </div>
    </div>
  )
}

export default Project