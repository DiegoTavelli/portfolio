import React from 'react'
import '../Home/home.scss'
import MovingTextTech from '../MovingTextTech/MovingTextTech'
import TechGif from '../MovingTextTech/TechGif';


const LaptopComp = ({ showLaptop, onLeaveLaptop, project, onEnterLaptop, allData }) => {

  return (
    <>
      <div>

        <div className='laptopDialogContainer' >
          <MovingTextTech showLaptop={showLaptop} />
          <TechGif showLaptop={showLaptop} onLeaveLaptop={onLeaveLaptop} allData={allData} />
          <img src={allData.TechIcon} className='TechIcon' style={{ visibility: showLaptop ? 'visible' : 'hidden' }} alt='' />
        </div>
        {showLaptop && !project && (
          <div style={{ visibility: showLaptop && !project ? 'visible' : 'hidden' }}>
            <div className='TechCardBackContainer' >
              <img src={allData.TechCardBack} className={!project ? 'TechCardBack FxBack' : 'notDisplay'} alt='' />
            </div>
            <div className={'TechCardsContainer1'}>
              <img src={allData.TechCard1} className={!project ? 'TechCard1 Fx1' : 'notDisplay'} alt='' />
            </div>
            <div className={'TechCardsContainer2'}>
              <img src={allData.TechCard2} className={!project ? 'TechCard2 Fx2' : 'notDisplay'} alt='' />
            </div>
          </div>
        )
        }
      </div>
      <div
        className='dialogTechButton'
        onClick={() => onEnterLaptop()}
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