import React, { useState } from "react";
import aboutModal from '../../assets/figma/aboutModal4.png'
import './modalAbout.scss'
import CvButton from '../../assets/figma/cvButton.png'
import Arrow from '../../assets/figma/arrow.png'
import AboutCv from '../../assets/figma/AboutCv.png'
import Tilt from 'react-parallax-tilt';

const ModalAbout = ({ about }) => {

  const [showPdf, setShowPdf] = useState(false)

  const linKCv = () => {
    // setShowPdf(true)
    window.open('https://drive.google.com/file/d/1OCPm5BnMWHRuXxAqNIyGDx7sLTlXRd4W/view?usp=sharing');
  }


  return about ?
    <div className='modalAboutContainer'>
      <img src={aboutModal} alt='' className={about ? 'aboutModalIn' : 'aboutModalOut'} />
      {
        showPdf ?
          <img src={AboutCv} className='aboutCv' alt='' />
          : null
      }
      <div className='buttonCvHover'>
        <img
          onClick={linKCv}
          onMouseEnter={() => setShowPdf(true)}
          onMouseLeave={() => setShowPdf(false)}
          src={CvButton}
          className='CvButton'
          alt=''
        />
        <div className='arrowContainer'>
          <img src={Arrow} className='ArrowAbout' alt='' />
        </div>
      </div>
    </div>
    : null

}

export default ModalAbout