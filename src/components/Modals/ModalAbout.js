import React, { useState } from "react";
import aboutModal from '../../assets/figma/aboutModal4.png'
import './modalAbout.scss'
import CvButton from '../../assets/figma/cvButton.png'
import Arrow from '../../assets/figma/arrow.png'



const ModalAbout = ({ about }) => {

  const [showPdf, setShowPdf] = useState(true)

  const linKCv = () => {
    // setShowPdf(true)
    window.open('https://drive.google.com/file/d/1OCPm5BnMWHRuXxAqNIyGDx7sLTlXRd4W/view?usp=sharing');
  }

  // console.log(showPdf)
  return about ?
    <div className='modalAboutContainer'>
      <img src={aboutModal} alt='' className={about ? 'aboutModalIn' : 'aboutModalOut'} />
      <div className='buttonCvHover'>
        <img onClick={linKCv} onMouseEnter={() => setShowPdf(!showPdf)} src={CvButton} className='CvButton' alt='' />
        <div className='arrowContainer'>
          <img src={Arrow} className='ArrowAbout' alt='' />
        </div>
      </div>
    </div>
    : null

}

export default ModalAbout