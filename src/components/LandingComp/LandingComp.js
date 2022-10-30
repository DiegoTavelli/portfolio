import React, { useState } from 'react'
import './landingComp.scss'

import BackLanding from '../../assets/figma/backLanding.png'


const LandingComp = ({ setShowHome, ScrollController }) => {

  const [activeStyle, setActiveStyle] = useState(false)
  const goHome = () => {
    setActiveStyle(true)
    setTimeout(() => {
      setShowHome(true);
      ScrollController();
    }, 2000)
  }

  return (
    <div className='landingContainer'>
      <div onClick={() => goHome()} className='hoverLanding'>
      </div>
      <div className='contBackLanding'>
        <img src={BackLanding} className={activeStyle ? 'BackLanding gifFx' : 'BackLanding'} alt='' />
      </div>
    </div>
  )
}


export default LandingComp