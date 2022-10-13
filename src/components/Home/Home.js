import React from 'react';
import { NavLink } from 'react-router-dom';
import './home.scss'

import CardHome from '../../assets/figma/cardHome3d3.png'
import ArrowPro from '../../assets/figma/cardProy2.png'
import CardPro from '../../assets/figma/cardp2.png'
import Platform from '../../assets/figma/platform.png'
import AboutWorlds from '../../assets/figma/aboutWorlds.png'
import Diego from '../../assets/figma/Diego2.png'
import Tavelli from '../../assets/figma/Tavelli2.png'
import ContactWorld from '../../assets/figma/contactWorld.png'
import backVid from '../../assets/videos/MiVideoFinal.mp4'
import Contact from '../../assets/figma/Contact.png'
import Projects from '../../assets/figma/Projects.png'
import About from '../../assets/figma/about.png'
import Me from '../../assets/figma/me.png'
import FullStackDev from '../../assets/figma/FullStackDev.png'
import Monkey from '../../assets/figma/monkey.png'
import bikeMonkey from '../../assets/figma/bikeMonkey.png'
import triangleLight from '../../assets/figma/crystal.webp'
import Mandala from '../../assets/figma/mandalaGif.gif'
import monkeyGrass from '../../assets/figma/monkeyGrass2.png'
import Laptop from '../../assets/figma/laptop2.png'
import TreeColor from '../../assets/figma/frames/tree2.png'


const Home = () => {

  return (
    <div className='homeContainer' >
      <video
        src={backVid}
        autoPlay
        loop
        muted
        className='backVid clip-animation' >
      </video>
      <div className='navContainer' >
        <nav>
          <img src={CardHome} className='cardHome' alt='' />
          <img src={ArrowPro} className='ArrowPro' alt='' />
          <img src={Platform} className='platform' alt='' />
          <img src={Diego} className='Diego' alt='' />
          <img src={Tavelli} className='Tavelli' alt='' />
          <img src={TreeColor} className='treeColor' alt='' />
          <img src={FullStackDev} className='FullStackDev' alt='' />
          <img src={Monkey} className='starDust rotating' alt='' />
          <img src={bikeMonkey} className='bikeMonkey' alt='' />
          <img src={bikeMonkey} className='bikeMonkey2' alt='' />
          <img src={Mandala} className='mandala rotatingMandala' alt='' />
          {/* <img src={Tree} className='tree' alt='' /> */}
          {/* <img src={Grass} className='grass' alt='' /> */}
          <img src={monkeyGrass} className='monkeyGrass' alt='' />
          <img src={Laptop} className='laptop' alt='' />


          <NavLink
            to='/contact'
          >
            <div className='divCircle' >
              <img src={triangleLight} className='triangle' alt='' />
              <img src={Contact} className='Contact' alt='' />
              <img src={ContactWorld} className='contactWorld rotatingContact' alt='' />
            </div>
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
            <div className='aboutContainer' >
              <img src={AboutWorlds} className='aboutWorlds' alt='' />
              <img src={About} className='about' alt='' />
              <img src={Me} className='me' alt='' />
            </div>
          </NavLink>
        </nav>
      </div>
    </div>
  )
}

export default Home;