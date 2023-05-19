import React from 'react'
import Navbar from '../Navbar/Navbar';
import Intro from '../Intro/Intro';
import Project from '../Project/Project';
import './Home.css';

function Home() {
  return (
    <div className='main'>
        <Navbar />
        <Intro />
        <Project />
    </div>
  )
}

export default Home