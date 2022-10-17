import React, { useState } from "react";
import aboutModal from '../../assets/figma/aboutModal.png'
import './modalAbout.scss'

import './modalProject.scss'

const ModalAbout = ({ about }) => {

  if (!about) {
    return null
  }

  return (
    <div className='modalAboutContainer'>
      <img src={aboutModal} alt='' className={about ? 'aboutModalIn' : 'aboutModalOut'} />
    </div>
  )
}

export default ModalAbout