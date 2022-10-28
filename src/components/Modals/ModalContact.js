import React, { useEffect, useState } from "react";
import './modalContact.scss'
import '../Home/home.scss'

import ContactModal from '../../assets/figma/contactModal3.png'
import buttonLinkedIn from '../../assets/figma/buttonLinkedIn.png'
import buttonGitHub from '../../assets/figma/buttonGitHub.png'
import buttonWhatsApp from '../../assets/figma/buttonWhatsApp.png'
import buttonMail from '../../assets/figma/buttonMail.png'
import ContactGitHub from '../../assets/figma/contactGitHub.png'
import ContactLinkedIn from '../../assets/figma/contactLinkedIn.png'
import ContactMail from '../../assets/figma/contactMail.png'
import ContactWhatsApp from '../../assets/figma/contactWhatsApp.png'
import Tilt from 'react-parallax-tilt';

const ModalContact = ({ contact, setContact, allData }) => {

  const [showLinkedIn, setShowLinkedIn] = useState(false)
  const [showGitHub, setShowGitHub] = useState(false)
  const [showWhatsApp, setShowWhatsApp] = useState(false)
  const [showMail, setShowMail] = useState(false)

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

  return <>
    <div onClick={() => setContact(!contact)} className='divCircle' >
      <div className='triangleContainer'>
        <Tilt
          scale={1.13}
          perspective={30}
        // tiltReverse
        >
          <img
            src={allData.triangleLight}
            className={contact ? 'triangle triangleFx' : 'triangle'}
            alt=''
          />
        </Tilt>
      </div>
      <img
        src={allData.Contact}
        className={!contact ? 'Contact' : 'Contact ContactPressed'}
        alt=''
      />
      <img
        src={allData.ContactWorld}
        className={
          contact ? 'contactWorld rotatingContact contactWorldFx'
            : 'contactWorld rotatingContact'}
        alt=''
      />
      <img
        src={allData.ContactBase}
        className={contact ? 'ContactBase' : 'ContactBaseNoShow'}
        alt=''
      />
    </div>
    {contact &&

      <div className='modalContactContainer'>
        {
          showLinkedIn ?
            <img src={ContactLinkedIn} className='contactLinkedIn' alt='' />
            : null
        }
        <img
          onMouseEnter={() => setShowLinkedIn(true)}
          onMouseLeave={() => setShowLinkedIn(false)}
          onClick={linkLinkedIn}
          src={buttonLinkedIn}
          alt=''
          className='buttonLinkedIn'
        />
        {
          showGitHub ?
            <img src={ContactGitHub} className='contactGitHub' alt='' />
            : null
        }
        <img
          onMouseEnter={() => setShowGitHub(true)}
          onMouseLeave={() => setShowGitHub(false)}
          onClick={linkGitHub}
          src={buttonGitHub}
          alt=''
          className='buttonGitHub'
        />
        {
          showWhatsApp ?
            <img src={ContactWhatsApp} className='contactWhatsApp' alt='' />
            : null
        }
        <img
          onMouseEnter={() => setShowWhatsApp(true)}
          onMouseLeave={() => setShowWhatsApp(false)}
          onClick={linkWhatsApp}
          src={buttonWhatsApp}
          alt=''
          className='buttonWhatsApp'
        />
        {
          showMail ?
            <img src={ContactMail} className='contactMail' alt='' />
            : null
        }
        <img
          onMouseEnter={() => setShowMail(true)}
          onMouseLeave={() => setShowMail(false)}
          onClick={linkMail}
          src={buttonMail}
          alt=''
          className='buttonMail'
        />
        <img
          src={ContactModal}
          className={contact ? 'modalContact modalContactFx' : 'modalContact modalContactNoFx'}
          alt=''
        />
      </div>
    }
  </>
}

export default ModalContact

