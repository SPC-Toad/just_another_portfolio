import React from 'react'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './component/Home/Home.js';
import Project from './component/Project_Page/ProjectPage.js';
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/project' element={ <Project /> } />
        </Routes>
      </Router>
    </>
  )
}

export default App