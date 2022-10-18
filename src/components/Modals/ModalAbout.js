import React, { useState } from "react";
import aboutModal from '../../assets/figma/aboutModal.png'
import './modalAbout.scss'

import './modalProject.scss'

const ModalAbout = ({ about }) => {



  return about ?
    <div className='modalAboutContainer'>
      <img src={aboutModal} alt='' className={about ? 'aboutModalIn' : 'aboutModalOut'} />
    </div>
    : <div>loading</div>

}

export default ModalAbout