import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './home.scss'

import CardHome from '../../assets/figma/cardHome3d.png'
import ArrowPro from '../../assets/figma/cardProy2.png'
import CardPro from '../../assets/figma/cardp.png'
import Platform from '../../assets/figma/platform.png'
import AboutWorlds from '../../assets/figma/aboutWorlds.png'
import Diego from '../../assets/figma/Diego.png'
import Tavelli from '../../assets/figma/Tavelli.png'
import ContactWorld from '../../assets/figma/contactWorld.png'
import backVid from '../../assets/videos/MiVideoFinal.mp4'
import Contact from '../../assets/figma/Contact.png'
import Projects from '../../assets/figma/Projects.png'
import About from '../../assets/figma/about.png'
import Me from '../../assets/figma/me.png'
import FullStackDev from '../../assets/figma/FullStackDev.png'



const Home = () => {

  return (
    <div className='homeContainer' >
      <video
        src={backVid}
        autoPlay
        loop
        muted
        className='backVid' >
      </video>
      <nav>

        <img src={CardHome} className='cardHome' alt='' />
        <img src={ArrowPro} className='ArrowPro' alt='' />
        <img src={Platform} className='platform' alt='' />
        <img src={Diego} className='Diego' alt='' />
        <img src={Tavelli} className='Tavelli' alt='' />
        <img src={FullStackDev} className='FullStackDev' alt='' />
        <NavLink
          to='/contact'
        >
          <img src={Contact} className='Contact' alt='' />
          <img src={ContactWorld} className='contactWorld' alt='' />
        </NavLink>
        <NavLink
          to='/projects'
        >
          <div>
            <img src={CardPro} className='CardPro' alt='' />
            <img src={Projects} className='Projects' alt='' />
          </div>

        </NavLink>
        <NavLink
          to='/about'
        >
          <img src={AboutWorlds} className='aboutWorlds' alt='' />
          <img src={About} className='about' alt='' />
          <img src={Me} className='me' alt='' />
        </NavLink>

      </nav>
    </div>
  )
}

export default Home;