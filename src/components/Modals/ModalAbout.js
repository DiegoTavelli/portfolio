import React, { useState } from "react";
import aboutModal from '../../assets/figma/aboutModal4.png'
import './modalAbout.scss'
import CvButton from '../../assets/figma/cvButton.png'
import Arrow from '../../assets/figma/arrow.png'



const ModalAbout = ({ about }) => {

  const linKCv = () => {
    window.open('https://drive.google.com/file/d/1OCPm5BnMWHRuXxAqNIyGDx7sLTlXRd4W/view?usp=sharing');
  }

  return about ?
    <div className='modalAboutContainer'>
      <img src={aboutModal} alt='' className={about ? 'aboutModalIn' : 'aboutModalOut'} />
      <div className='buttonCvHover'>
        <img src={Arrow} className='ArrowAbout' alt='' />
        <img onClick={linKCv} src={CvButton} className='CvButton' alt='' />
      </div>
    </div>
    : null

}

export default ModalAbout