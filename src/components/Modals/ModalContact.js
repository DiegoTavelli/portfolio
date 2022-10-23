import React, { useEffect, useState } from "react";
import ContactModal from '../../assets/figma/contactModal3.png'
import buttonLinkedIn from '../../assets/figma/buttonLinkedIn.png'
import buttonGitHub from '../../assets/figma/buttonGitHub.png'
import buttonWhatsApp from '../../assets/figma/buttonWhatsApp.png'
import buttonMail from '../../assets/figma/buttonMail.png'
import './modalContact.scss'


const ModalContact = ({ contact }) => {

  const linkLinkedIn = () => {
    window.open('https://www.linkedin.com/in/diegotavelli');
  }
  const linkGitHub = () => {
    window.open('https://github.com/diegotavelli');
  }
  const linkMail = () => {
    window.open('mailto:diegotavelli@gmail.com?body=Contact Diego Tavelli')
  }
  const linkWhatsApp = () => {
    window.open('https://wa.me/5491127745511')
  }

  return contact &&
    <div className='modalContactContainer'>
      <img onClick={linkLinkedIn} src={buttonLinkedIn} alt='' className='buttonLinkedIn' />
      <img onClick={linkGitHub} src={buttonGitHub} alt='' className='buttonGitHub' />
      <img onClick={linkWhatsApp} src={buttonWhatsApp} alt='' className='buttonWhatsApp' />
      <img onClick={linkMail} src={buttonMail} alt='' className='buttonMail' />
      <img
        src={ContactModal}
        className={contact ? 'modalContact modalContactFx' : 'modalContact modalContactNoFx'}
        alt=''
      />
    </div>
}

export default ModalContact

