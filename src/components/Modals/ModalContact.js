import React, { useEffect, useState } from "react";
import ContactModal from '../../assets/figma/contactModal2.png'
import logoLinkedIn from '../../assets/figma/logoLinkedIn2.png'
import logoGitHub from '../../assets/figma/logoGitHub2.png'
import './modalContact.scss'


const ModalContact = ({ contact }) => {

  const linkLinkedIn = () => {
    window.open('https://www.linkedin.com/in/diegotavelli');
  }
  const linkGitHub = () => {
    window.open('https://github.com/diegotavelli');
  }

  return contact ?
    <div className='modalContactContainer'>
      <img onClick={linkLinkedIn} src={logoLinkedIn} alt='' className='logoLinkedIn' />
      <img onClick={linkGitHub} src={logoGitHub} alt='' className='logoGitHub' />
      <img src={ContactModal} alt='' className={contact ? 'modalContact modalContactFx' : 'modalContact modalContactNoFx'} />
      {/* <input className='inputContact' placeholder='hola' /> */}
    </div>
    : null
}

export default ModalContact

