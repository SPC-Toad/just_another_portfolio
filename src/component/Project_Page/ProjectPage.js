import React from 'react'
import './ProjectPage.css';
import Card from '../Card/Card';
import Seq from '../../visual/seq_align.jpg';
import Astar from '../../visual/Astar.jpg';
import Bacon from '../../visual/Bacon.jpg';
import binarytree from '../../visual/binarytree.jpg';
import BubbleSort from '../../visual/bubblesort.jpg';
import dijkstra from '../../visual/dijkstra.jpg';
import longseq from '../../visual/LongestSequence.jpg';
import MTF from '../../visual/MTF.PNG';
import Tick from '../../visual/Tick.PNG';
import MP3 from '../../visual/MP3.PNG';
import Terminal from '../../visual/Terminal.jpg';
import ANM from '../../visual/ANM.jpg';
import RSA from '../../visual/RSA.jpg';
import MP1 from '../../visual/cmds.jpg';

function ProjectPage() {
  return (
    <div className='section-container'>
        <div className='section-title' >
            <div className='title-text-1'>&#9657;More Project</div>
            <div className='line'><hr /></div>
        </div>
        <div id='project-list'>
            <Card 
              picture={ Seq }
              title={'Sequence Alignment'}
              language={'Java'}
              description={'Implementing DNA alignment using Dynamic Programming'}
              link={'https://github.com/SPC-Toad/UmassBoston_projects/tree/6fab3bee01eef21e856fdef512db8806857b96bb/Backend/Java/Sequence%20Alignment'}
            />
            <Card 
              picture={ MTF }
              title={'Move To Front Encoding & Decoding'}
              language={'Java'}
              description={'Encoding and decoding using ordered Sequence of 256 ASCII characters.'}
              link={'https://github.com/SPC-Toad/UmassBoston_projects/tree/6fab3bee01eef21e856fdef512db8806857b96bb/Backend/Java/Move%20To%20Front'}
            />
            <Card 
              picture={ longseq }
              title={'Maximum Increasing Subsequence'}
              language={'Java'}
              description={'Finding the maximum increasing subsequence using dynamic programming'}
              link={''}
            />
            <Card 
              picture={ Bacon }
              title={'Bacon Number'}
              language={'Java'}
              description={'Finding the actors number of connections away from actor Kevin Bacon'}
              link={'https://github.com/SPC-Toad/UmassBoston_projects/tree/6fab3bee01eef21e856fdef512db8806857b96bb/Backend/Java/Bacon%20Number'}
            />
            <Card 
              picture={ dijkstra }
              title={'Map Routing Dijkstra algorithm'}
              language={'Java'}
              description={'Implementing shortest route from start node to end node using dijkstra algorithm'}
              link={'https://github.com/SPC-Toad/UmassBoston_projects/tree/6fab3bee01eef21e856fdef512db8806857b96bb/Backend/Java/Map%20Routing%20Dijkstra'}
            />
            <Card 
              picture={ Astar }
              title={'Map Routing A* algorithm'}
              language={'Java'}
              description={'Implementing shortest route from start node to end node using A* version of dijkstra algorithm. (Greedy Algorithm)'}
              link={'https://github.com/SPC-Toad/UmassBoston_projects/tree/6fab3bee01eef21e856fdef512db8806857b96bb/Backend/Java/Map%20Routing%20Astar'}
            />
            <Card 
              picture={ binarytree }
              title={'Binary Tree'}
              language={'C'}
              description={'Implemented Binary Tree with remove and sort function. Printing forward and reverse directions.'}
              link={'https://github.com/SPC-Toad/UmassBoston_projects/tree/6fab3bee01eef21e856fdef512db8806857b96bb/Backend/C/Binary%20Tree'}
            />
            <Card 
              picture={ BubbleSort }
              title={'BubbleSort And Counting Duplicates'}
              language={'C'}
              description={'Implementing BubbleSort and for each word, count the repetition'}
              link={'https://github.com/SPC-Toad/UmassBoston_projects/tree/6fab3bee01eef21e856fdef512db8806857b96bb/Backend/C/BubbleSort'}
            />
            <Card 
              picture={ MP1 }
              title={'Terminal Function'}
              language={'C'}
              description={'Recreating Terminal Functions using C to change and manage address and values.'}
              link={'https://github.com/SPC-Toad/UmassBoston_projects/tree/6fab3bee01eef21e856fdef512db8806857b96bb/Backend/ASM/Terminal%20Function'}
            />
            <Card 
              picture={ MP3 }
              title={'Accessing I/O Ports Using Assembly Language'}
              language={'ASM C'}
              description={'Accessing I/O ports to keep listening to user input or the data ready address and checking for termination character.'}
              link={'https://github.com/SPC-Toad/UmassBoston_projects/tree/6fab3bee01eef21e856fdef512db8806857b96bb/Backend/ASM/Accessing%20IO%20ASM'}
            />
            <Card 
              picture={ Tick }
              title={'Timing Interrupts'}
              language={'ASM C'}
              description={'Count time using Intel 8254 Programmable Interval Timer (PIT) with its interrupt handler'}
              link={'https://github.com/SPC-Toad/UmassBoston_projects/tree/6fab3bee01eef21e856fdef512db8806857b96bb/Backend/ASM/Timing%20Interrupts'}
            />
            <Card 
              picture={ ANM }
              title={'Atomic Nature of Matter'}
              language={'Python'}
              description={'Finding the particle(blob) using Depth First Search Algorithm'}
              link={'https://github.com/SPC-Toad/UmassBoston_projects/tree/6fab3bee01eef21e856fdef512db8806857b96bb/Backend/Python/Atomic%20Nature%20of%20Matter'}
            />
            <Card 
              picture={ RSA }
              title={'RSA Cryptosystem'}
              language={'Python'}
              description={'Implemented RSA Encryption using Python'}
              link={'https://github.com/SPC-Toad/UmassBoston_projects/tree/6fab3bee01eef21e856fdef512db8806857b96bb/Backend/Python/RSA%20Cryptosystem'}
            />
            <Card 
              picture={ Terminal }
              title={'Terminal Website'}
              language={'HTML CSS React'}
              description={'Implemented Terminal landing page and built portfolio website'}
              link={'https://github.com/SPC-Toad/Terminal-Portfolio'}
            />
        </div>
    </div>
  )
}

export default ProjectPage