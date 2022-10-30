import React, { useState } from "react";
import './modalAbout.scss'
import '../Home/home.scss'


const ModalAbout = ({ about, allData, setAbout }) => {

  const [showPdf, setShowPdf] = useState(false)

  const linKCv = () => {
    // setShowPdf(true)
    window.open('https://drive.google.com/file/d/1OCPm5BnMWHRuXxAqNIyGDx7sLTlXRd4W/view?usp=sharing');
  }

  return <>
    <div
      onClick={() => setAbout(!about)}
      className='aboutContainer' >
      <div>
        <img
          src={allData.AboutWorlds}
          className={!about ? 'aboutWorlds rotating' : 'aboutWorlds rotating'}
          alt=''
        />
        <img src={allData.monkeyGrass} className='monkeyGrass' alt='' />
        <img src={allData.About} className='about' alt='' />
        <img src={allData.Me} className='me' alt='' />
      </div>
    </div>
    <div className='modalAboutContainer' style={{ visibility: about ? 'visible' : 'hidden' }} >
      <img src={allData.aboutModal} alt='' className={about ? 'aboutModalIn' : 'aboutModalOut'} />
      {
        showPdf ?
          <img src={allData.AboutCv} className='aboutCv' alt='' />
          : null
      }
      <div className='buttonCvHover'>
        <img
          onClick={linKCv}
          onMouseEnter={() => setShowPdf(true)}
          onMouseLeave={() => setShowPdf(false)}
          src={allData.CvButton}
          className='CvButton'
          alt=''
        />
        <div className={about ? 'arrowContainer' : ''} >
          <img src={allData.Arrow} className='ArrowAbout' alt='' />
        </div>
      </div>
    </div>
  </>


}

export default ModalAbout