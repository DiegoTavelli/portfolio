import React from 'react'
import '../Home/home.scss'
import MovingTextTech from '../MovingTextTech/MovingTextTech'
import TechGif from '../MovingTextTech/TechGif';


const LaptopComp = ({ showLaptop, onLeaveLaptop, project, onEnterLaptop, allData }) => {

  return (
    <>
      <div className='laptopDialogContainer' style={{ visibility: showLaptop ? 'visible' : 'hidden' }}>
        <MovingTextTech />
        <TechGif onLeaveLaptop={onLeaveLaptop} allData={allData} />
        <img src={allData.TechIcon} className='TechIcon' alt='' />
      </div>
      {
        showLaptop && !project && (
          <div style={{ visibility: showLaptop && !project ? 'visible' : 'hidden' }}>
            <div className='TechCardBackContainer' >
              <img src={allData.TechCardBack} className={!project ? 'TechCardBack FxBack' : 'TechCardBack'} alt='' />
            </div>
            <div className={'TechCardsContainer1'}>
              <img src={allData.TechCard1} className={!project ? 'TechCard1 Fx1' : 'TechCard1'} alt='' />
            </div>
            <div className={'TechCardsContainer2'}>
              <img src={allData.TechCard2} className={!project ? 'TechCard2 Fx2' : 'TechCard2'} alt='' />
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
      <img src={allData.Laptop} className='laptop' alt='' />
      {
        !showLaptop &&
        <img src={allData.Arrow} className='laptopArrow' alt='' />
      }
    </>
  )
}

export default LaptopComp