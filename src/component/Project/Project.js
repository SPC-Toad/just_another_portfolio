import React from 'react'
import './Project.css';
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

function Project() {
  return (
    <div className='section-container'>
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
              picture={ MTF }
              title={'Move To Front Encoding & Decoding'}
              language={'Java'}
              description={'Encoding and decoding using ordered Sequence of 256 ASCII characters.'}
            />
            <Card 
              picture={ longseq }
              title={'Maximum Increasing Subsequence'}
              language={'Java'}
              description={'Finding the maximum increasing subsequence using dynamic programming'}
            />
            <Card 
              picture={ Bacon }
              title={'Bacon Number'}
              language={'Java'}
              description={'Finding the actors number of connections away from actor Kevin Bacon'}
            />
            <Card 
              picture={ dijkstra }
              title={'Map Routing Dijkstra algorithm'}
              language={'Java'}
              description={'Implimenting shortest route from start node to end node using dijkstra algorithm'}
            />
            <Card 
              picture={ Astar }
              title={'Map Routing A* algorithm'}
              language={'Java'}
              description={'Implimenting shortest route from start node to end node using A* version of dijkstra algorithm. (Greedy Algorithm)'}
            />
            <Card 
              picture={ binarytree }
              title={'Binary Tree'}
              language={'C'}
              description={'Implemented Binary Tree with remove and sort function. Printing forward and reverse directions.'}
            />
            <Card 
              picture={ BubbleSort }
              title={'BubbleSort And Counting Duplicates'}
              language={'C'}
              description={'Implementing BubbleSort and for each word, count the repetition'}
            />
            <Card 
              picture={ MP1 }
              title={'Terminal Function'}
              language={'C'}
              description={'Recreating Terminal Functions using C to change and manage address and values.'}
            />
            <Card 
              picture={ MP3 }
              title={'Accessing I/O Ports Using Assembly Language'}
              language={'ASM C'}
              description={'Accessing I/O ports to keep listening to user input or the data ready address and checking for termination character.'}
            />
            <Card 
              picture={ Tick }
              title={'Timing Interrupts'}
              language={'ASM C'}
              description={'Count time using Intel 8254 Programmable Interval Timer (PIT) with its interrupt handler'}
            />
            <Card 
              picture={ ANM }
              title={'Atomic Nature of Matter'}
              language={'Python'}
              description={'Finding the particle(blob) using Depth First Search Algorithm'}
            />
            <Card 
              picture={ RSA }
              title={'RSA Cryptosystem'}
              language={'Python'}
              description={'Implemented RSA Encryption using Python'}
            />
            <Card 
              picture={ Terminal }
              title={'Terminal Website'}
              language={'HTML CSS React'}
              description={'Implemented Terminal landing page and built portfolio website'}
            />
        </div>
    </div>
  )
}

export default Project