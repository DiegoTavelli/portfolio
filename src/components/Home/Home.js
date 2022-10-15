import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './home.scss'
import MovingTextComp from '../Home/MovingText';
import ModalProject from '../Modals/ModalProject'

import CardHome from '../../assets/figma/cardHome3d3.png'
import ArrowPro from '../../assets/figma/cardProy4.png'
import CardPro from '../../assets/figma/cardp2p1.png'
import CardPro2 from '../../assets/figma/cardp2p2.png'
import Platform from '../../assets/figma/platform.png'
import AboutWorlds from '../../assets/figma/aboutWorlds2.png'
import Diego from '../../assets/figma/Diego3.png'
import Tavelli from '../../assets/figma/Tavelli3.png'
import ContactWorld from '../../assets/figma/contactWorld.png'
import backVid from '../../assets/videos/MiVideoFinal.mp4'
import Contact from '../../assets/figma/Contact2.png'
import Projects from '../../assets/figma/Projects2.png'
import About from '../../assets/figma/about2.png'
import Me from '../../assets/figma/me2.png'
import Full from '../../assets/figma/full.png'
import Stack from '../../assets/figma/stack.png'
import Dev from '../../assets/figma/dev.png'
import Monkey from '../../assets/figma/monkey.png'
import bikeMonkey from '../../assets/figma/bikeMonkey.png'
import triangleLight from '../../assets/figma/crystal.webp'
import Mandala from '../../assets/figma/mandalaGif.gif'
import monkeyGrass from '../../assets/figma/monkeyGrass2.png'
import Laptop from '../../assets/figma/laptop2.png'
import TreeColor from '../../assets/figma/frames/tree2.png'
import Grass from '../../assets/figma/grass.png'



const Home = () => {

  const [project, setProject] = useState(false)


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
          <div className='fullStackDiv'>
            <img src={Full} className='Full' alt='' />
            <img src={Stack} className='Stack' alt='' />
            <img src={Dev} className='Dev' alt='' />
          </div>
          <div className='firstContainer'>
            <MovingTextComp />
            <img src={CardHome} className='cardHome' alt='' />
            <div className='monkeysDiv' >
              <img src={bikeMonkey} className='bikeMonkey2' alt='' />
              <img src={bikeMonkey} className='bikeMonkey' alt='' />
              <img src={Monkey} className='starDust' alt='' />
            </div>

            <div className='containerMonkeyBike' >
              <img src={ArrowPro} className='ArrowPro' alt='' />
              <img src={Mandala} className='mandala rotatingMandala' alt='' />
              <img src={Grass} className='grass' alt='' />
            </div>
            <img src={Platform} className='platform' alt='' />
            <img src={Diego} className='Diego' alt='' />
            <img src={Tavelli} className='Tavelli' alt='' />
            <img src={TreeColor} className='treeColor' alt='' />
            <img src={Laptop} className='laptop' alt='' />
          </div>
          <div className='midContainer' >
            <NavLink
              to='/contact'
            >
              {/* <HoverBass /> */}
              <div className='divCircle' >
                <img src={triangleLight} className='triangle' alt='' />
                <img src={Contact} className='Contact' alt='' />
                <img src={ContactWorld} className='contactWorld rotatingContact' alt='' />
              </div>
            </NavLink>
            <>
              <div className='CardProContainer' >
                <div onClick={() => setProject(project ? false : true)}  >
                  <img src={CardPro} className='CardPro' alt='' />
                  <img src={CardPro2} className='CardPro2' alt='' />
                  <img src={Projects} className={project ? 'Projects ProjectsOpen' : 'Projects'} alt='' />
                </div>
                {/* <img src={CardPro} className='CardPro' alt='' /> */}
              </div>
              {
                project
                  ? <ModalProject />
                  : null
              }
            </>
            <NavLink
              to='/about'
            >
              <div className='aboutContainer' >
                <img src={AboutWorlds} className='aboutWorlds rotating' alt='' />
                <img src={monkeyGrass} className='monkeyGrass' alt='' />
                <img src={About} className='about' alt='' />
                <img src={Me} className='me' alt='' />
              </div>
            </NavLink>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Home;