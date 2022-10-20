import React, { useState } from "react";
import aboutModal from '../../assets/figma/aboutModal3.png'
import './modalAbout.scss'

import './modalProject.scss'

const ModalAbout = ({ about }) => {



  return about ?
    <div className='modalAboutContainer'>
      <img src={aboutModal} alt='' className={about ? 'aboutModalIn' : 'aboutModalOut'} />
    </div>
    : null

}

export default ModalAbout