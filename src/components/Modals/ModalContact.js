import React, { useEffect, useState } from "react";
import ContactModal from '../../assets/figma/contactModal.png'
import './modalContact.scss'


const ModalContact = ({ contact }) => {

  return contact ?
    <div className='modalContactContainer'>
      <img src={ContactModal} alt='' className={contact ? 'modalContact modalContactFx' : 'modalContact modalContactNoFx'} />
      {/* <input className='inputContact' placeholder='hola' /> */}
    </div>
    : null
}

export default ModalContact

