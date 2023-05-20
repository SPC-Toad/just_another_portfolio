import React from 'react'
import Navbar from '../Navbar/Navbar';
import Intro from '../Intro/Intro';
import Project from '../Project/Project';
import Military from '../Military/Military';
import './Home.css';

function Home() {
  return (
    <div className='main'>
        <Navbar />
        <Intro />
        <Project />
        <Military />
    </div>
  )
}

export default Home