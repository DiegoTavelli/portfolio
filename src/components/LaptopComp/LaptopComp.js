import React, { useState } from 'react'
import '../Home/home.scss'
import MovingTextTech from '../MovingTextTech/MovingTextTech'
import TechGif from '../MovingTextTech/TechGif';
import TechCardBack from '../../assets/figma/techCardBack.png'
import TechCard1 from '../../assets/figma/techCard1.png'
import TechCard2 from '../../assets/figma/techCard2.png'
import TechIcon from '../../assets/figma/gifTech.gif'
import Laptop from '../../assets/figma/laptop2.png'
import Arrow from '../../assets/figma/arrow.png'

const LaptopComp = ({ showLaptop, onLeaveLaptop, project, onEnterLaptop }) => {


  return (
    <>
      {showLaptop && (
        <div className='laptopDialogContainer'>
          <MovingTextTech />
          <TechGif onLeaveLaptop={onLeaveLaptop} />
          <img src={TechIcon} className='TechIcon' alt='' />
        </div>
      )
      }
      {
        showLaptop && !project && (
          <div>
            <div className='TechCardBackContainer'>
              <img src={TechCardBack} className={!project ? 'TechCardBack FxBack' : 'TechCardBack'} alt='' />
            </div>
            <div className={'TechCardsContainer1'}>
              <img src={TechCard1} className={!project ? 'TechCard1 Fx1' : 'TechCard1'} alt='' />
            </div>
            <div className={'TechCardsContainer2'}>

              <img src={TechCard2} className={!project ? 'TechCard2 Fx2' : 'TechCard2'} alt='' />

            </div>
          </div>
        )
      }
      <div
        className='dialogTechButton'
        onClick={() => onEnterLaptop()}
      // onMouseLeave={() => onLeaveLaptop()}
      >
      </div>
      <div className='lightLaptop'></div>
      <img src={Laptop} className='laptop' alt='' />
      {
        !showLaptop &&
        <img src={Arrow} className='laptopArrow' alt='' />
      }
    </>
  )
}

export default LaptopComp