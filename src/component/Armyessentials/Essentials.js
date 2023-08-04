import React from 'react'
import './Essentials.css'
import Weather from './Weather/Weather'
import PaceCount from './PaceCount/Pace'

function Essentials() {
  return (
    <div id='essentials-container'>
        <div className='section-title' >
            <div className='title-text-1'>&#9657;Essentials</div>
            <div className='line'><hr /></div>
        </div>
        <div id='cards-container'>
            <Weather />
            <PaceCount />
        </div>
        <div className='section-title' >
            <div className='title-text-1'>&#9657;Self-Service</div>
            <div className='line'><hr /></div>
        </div>
        <div id='self-service-container'>
            <div id='benefit-container'><a id='link-item' href='https://mypay.dfas.mil/#/'>MyPay</a></div>
            <div id='benefit-container'><a id='link-item' href='https://home.cards.citidirect.com/CommercialCard/login'>GTCC</a></div>
        </div>
        <div className='section-title' >
            <div className='title-text-1'>&#9657;Benefits</div>
            <div className='line'><hr /></div>
        </div>
        <div id='benefit-container'>
            <div id='link-container'>
                <a id='link-item' href='https://www.armyignited.army.mil/student/account/login'>Tuition Assistance</a>
            </div>
            <div id='link-container'>
                <a id='link-item' href='https://www.va.gov/education/how-to-apply/'>Chapter 1606 MGIB</a>
            </div>
        </div>
    </div>
  )
}

export default Essentials