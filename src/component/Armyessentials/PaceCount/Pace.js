import React from 'react'
import { useState } from 'react'
import './Pace.css'

function Pace() {
    const [pace, setPace] = useState(0);

    const handlePaceUp = () => {
        let temp = pace;
        setPace(temp+=100);
    };

    const handlePaceDown = () => {
        let temp = pace;
        if (pace > 0) {
            setPace(temp-=100);
        }
    };

    const handleReset = () => {
        setPace(0);
    };

  return (
    <div id='pace-counter-container'>
        <div id='pace-counter-title'>Pace Counter</div>
        <div id='pace-button' onClick={handlePaceUp}>Up</div>
        <div>{pace}ft</div>
        <div id='pace-button' onClick={handlePaceDown}>Down</div>
        <div id='pace-body-container'>
            <p id='pace-description'>
                Know your pace for 100ft. 
                Each time you reach 100ft, 
                increase the pace count to keep track.
                Good luck and stay hydrated.
            </p>
            <div id='reset-pace-button' onClick={handleReset}>Reset</div>
        </div>
    </div>
    
  )
}

export default Pace