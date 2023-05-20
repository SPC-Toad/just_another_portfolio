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
        <div id='project-list'>
            <Card 
              picture={ Seq }
              title={'Sequence Alignment'}
              language={'Java'}
              description={'Implimenting DNA alignment using Dynamic Programming'}
            />
            <Card 
              picture={ Seq }
              title={'Move To Front Encoding & Decoding'}
              language={'Java'}
              description={'Encoding and decoding using ordered Sequence of 256 ASCII characters.'}
            />
            <Card 
              picture={ Seq }
              title={'Maximum Increasing Subsequence'}
              language={'Java'}
              description={'Finding the maximum increasing subsequence using dynamic programming'}
            />
            <Card 
              picture={ Seq }
              title={'Bacon Number'}
              language={'Java'}
              description={'Finding the actors number of connections away from actor Kevin Bacon'}
            />
            <Card 
              picture={ Seq }
              title={'Map Routing Dijkstra algorithm'}
              language={'Java'}
              description={'Implimenting shortest route from start node to end node using dijkstra algorithm'}
            />
            <Card 
              picture={ Seq }
              title={'Map Routing A* algorithm'}
              language={'Java'}
              description={'Implimenting shortest route from start node to end node using A* version of dijkstra algorithm. (Greedy Algorithm)'}
            />
            <Card 
              picture={ Seq }
              title={'Binary Tree'}
              language={'C'}
              description={'Implemented Binary Tree with remove and sort function. Printing forward and reverse directions.'}
            />
            <Card 
              picture={ Seq }
              title={'BubbleSort And Counting Duplicates'}
              language={'C'}
              description={'Implementing BubbleSort and for each word, count the repetition'}
            />
            <Card 
              picture={ Seq }
              title={'Terminal Function'}
              language={'C'}
              description={'Recreating Terminal Functions using C to change and manage address and values.'}
            />
            <Card 
              picture={ Seq }
              title={'Accessing I/O Ports Using Assembly Language'}
              language={'ASM C'}
              description={'Accessing I/O ports to keep listening to user input or the data ready address and checking for termination character.'}
            />
            <Card 
              picture={ Seq }
              title={'Timming Interrupts'}
              language={'ASM C'}
              description={'Count time using Intel 8254 Programmable Interval Timer (PIT) with its interrupt handler'}
            />
            <Card 
              picture={ Seq }
              title={'Atomic Nature of Matter'}
              language={'Python'}
              description={'Finding the particle(blob) using Depth First Search Algorithm'}
            />
            <Card 
              picture={ Seq }
              title={'RSA Cryptosystem'}
              language={'Python'}
              description={'Implemented RSA Encryption using Python'}
            />
            <Card 
              picture={ Seq }
              title={''}
              language={''}
              description={''}
            />
            <Card 
              picture={ Seq }
              title={'Terminal Website'}
              language={'HTML CSS React'}
              description={'Implemented Terminal landing page and built portfolio website'}
            />
        </div>
    </div>
  )
}

export default Project