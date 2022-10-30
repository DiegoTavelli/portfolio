import React, { useState } from "react";
import './modalContact.scss'
import '../Home/home.scss'
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
    <div className='modalContactContainer' style={{ visibility: contact ? 'visible' : 'hidden' }}>
      {
        showLinkedIn ?
          <img src={allData.ContactLinkedIn} className='contactLinkedIn' alt='' />
          : null
      }
      <img
        onMouseEnter={() => setShowLinkedIn(true)}
        onMouseLeave={() => setShowLinkedIn(false)}
        onClick={linkLinkedIn}
        src={allData.buttonLinkedIn}
        alt=''
        className='buttonLinkedIn'
      />
      {
        showGitHub ?
          <img src={allData.ContactGitHub} className='contactGitHub' alt='' />
          : null
      }
      <img
        onMouseEnter={() => setShowGitHub(true)}
        onMouseLeave={() => setShowGitHub(false)}
        onClick={linkGitHub}
        src={allData.buttonGitHub}
        alt=''
        className='buttonGitHub'
      />
      {
        showWhatsApp ?
          <img src={allData.ContactWhatsApp} className='contactWhatsApp' alt='' />
          : null
      }
      <img
        onMouseEnter={() => setShowWhatsApp(true)}
        onMouseLeave={() => setShowWhatsApp(false)}
        onClick={linkWhatsApp}
        src={allData.buttonWhatsApp}
        alt=''
        className='buttonWhatsApp'
      />
      {
        showMail ?
          <img src={allData.ContactMail} className='contactMail' alt='' />
          : null
      }
      <img
        onMouseEnter={() => setShowMail(true)}
        onMouseLeave={() => setShowMail(false)}
        onClick={linkMail}
        src={allData.buttonMail}
        alt=''
        className='buttonMail'
      />
      <img
        src={allData.ContactModal}
        className={contact ? 'modalContact modalContactFx' : 'modalContact modalContactNoFx'}
        alt=''
      />
    </div>
  </>
}

export default ModalContact

