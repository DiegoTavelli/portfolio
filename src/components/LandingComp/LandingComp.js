import React, { useState } from 'react'
import './landingComp.scss'

import BackLanding from '../../assets/figma/backLanding.png'
import BackLanding2 from '../../assets/figma/backLanding2.png'


const LandingComp = ({ showHome, setShowHome, ScrollController }) => {

  const [activeStyle, setActiveStyle] = useState(false)
  const goHome = () => {
    setActiveStyle(true)
    setTimeout(() => {
      setShowHome(true);
      ScrollController();
    }, 2000)
  }

  return (
    <div className='landingContainer' >
      <div onClick={() => goHome()} className='hoverLanding'>
      </div>
      <div style={{ visibility: showHome ? 'hidden' : 'visible' }} className='contBackLanding'>
        <img src={BackLanding} className={activeStyle ? 'BackLanding gifFx' : 'BackLanding'} alt='' />
        <img src={BackLanding2} className={activeStyle ? 'BackLanding2 puzzleFx' : 'BackLanding2'} alt='' />
      </div>
    </div>
  )
}


export default LandingComp