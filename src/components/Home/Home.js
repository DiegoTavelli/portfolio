import React, { useEffect, useState } from 'react';
import './home.scss'
import MovingTextComp from '../MovingText/MovingText';
import ModalProject from '../Modals/ModalProject'
import ModalAbout from '../Modals/ModalAbout'
import ModalContact from '../Modals/ModalContact'
import MovingTextTech from '../MovingTextTech/MovingTextTech'
import TechGif from '../MovingTextTech/TechGif';
import ScrollComponent from '../ScrollComponent/ScrollComponent'

import CardHome from '../../assets/figma/cardHome3d5.png'
import ArrowPro from '../../assets/figma/cardProy3.png'
import CardPro from '../../assets/figma/cardp2p3.png'
import CardPro2 from '../../assets/figma/cardp2p5.png'
import Platform from '../../assets/figma/platform2.png'
import GifRainbow from '../../assets/figma/gifRainbow.gif'
import AboutWorlds from '../../assets/figma/aboutWorlds3.png'
import Diego from '../../assets/figma/Diego3.png'
import Tavelli from '../../assets/figma/Tavelli3.png'
import ContactWorld from '../../assets/figma/contactWorld2.png'
import backVid from '../../assets/videos/MiVideoFinal.mp4'
import Contact from '../../assets/figma/Contact2.png'
import Projects from '../../assets/figma/Projects2.png'
import About from '../../assets/figma/about2.png'
import Me from '../../assets/figma/me2.png'
import Full from '../../assets/figma/full.png'
import Stack from '../../assets/figma/stack.png'
import Dev from '../../assets/figma/dev.png'
import Arrow from '../../assets/figma/arrow.png'
import Monkey from '../../assets/figma/monkey.png'
import bikeMonkey from '../../assets/figma/bikeMonkey2.png'
import triangleLight from '../../assets/figma/crystal2.gif'
import Mandala from '../../assets/figma/palmGif.gif'
import monkeyGrass from '../../assets/figma/monkeyGrass2.png'
import Laptop from '../../assets/figma/laptop2.png'
// import TreeColor from '../../assets/figma/frames/tree2.png'
import GifMe from '../../assets/figma/gifMe.gif'
import dialogBassMonkey from '../../assets/figma/dialogBassMonkey3.png'
import GifBike from '../../assets/figma/gifBike.gif'
import LoveIcon from '../../assets/figma/loveIcon2.png'
import TechIcon from '../../assets/figma/gifTech.gif'
import FireGif from '../../assets/figma/fireGif.gif'




const Home = () => {

  const [project, setProject] = useState(false)
  const [about, setAbout] = useState(false)
  const [contact, setContact] = useState(false)
  const [showGifMe, setShowGifMe] = useState(false)
  const [showBassMonkey, setShowBassMonkey] = useState(false)
  const [showBikeMonkey, setShowBikeMonkey] = useState(false)
  const [showLaptop, setShowLaptop] = useState(false)

  const onEnterBass = () => {
    setShowBassMonkey(true)
    setShowGifMe(true)
  }
  const onLeaveBass = () => {
    setShowBassMonkey(false)
    setShowGifMe(false)
  }

  const onEnterLaptop = () => {
    setShowLaptop(true)
  }
  const onLeaveLaptop = () => {
    setShowLaptop(false)
  }
  const onEnterBike = () => {
    setShowBikeMonkey(true)
  }
  const onLeaveBike = () => {
    setShowBikeMonkey(false)
  }

  return (
    <div className='homeContainer' >
      <video
        src={backVid}
        autoPlay
        loop
        muted
        className='backVid'
      >
      </video>
      <div className='navContainer' >
        <div className='ScrollCompContainer'>
          <ScrollComponent />
        </div>
        <nav>
          <div className='fullStackDiv'>
            <img src={Full} className='Full' alt='' />
            <img src={Stack} className='Stack' alt='' />
            <img src={Dev} className='Dev' alt='' />
            {!project ?
              <img src={Arrow} className='arrow1' alt='' />
              : null
            }
            {!contact ?
              <img src={Arrow} className='arrow2' alt='' />
              : null
            }
            {!about ?
              <img src={Arrow} className='arrow3' alt='' />
              : null
            }
          </div>
          <div className='firstContainer'>
            <MovingTextComp />
            {/* <video src={videoHome}
              autoPlay
              loop
              muted
              className='cardHome'
            /> */}
            <img src={CardHome} className='cardHome' alt='' />
            <div className='monkeysDiv' >
              <img src={bikeMonkey} className='bikeMonkey2' alt='' />
              <img src={Monkey} className='starDust' alt='' />
              {showBassMonkey &&
                <div>
                  <div className='dialogBassMonkeyDiv'>
                    <img src={dialogBassMonkey} className='dialogBassMonkey' alt='' />
                  </div>
                  <div className='divGifMe' ></div>
                  <img src={GifMe} className='GifMe' alt='' />
                </div>
              }
              <div
                className='monkeyBassButton'
                onMouseEnter={() => onEnterBass()}
                onMouseLeave={() => onLeaveBass()}
              >
              </div>
            </div>

            <div className='containerMonkeyBike' >
              <img src={bikeMonkey} className='bikeMonkey' alt='' />
              {showBikeMonkey &&
                <div>
                  <img src={GifBike} className='GifBike' alt='' />
                  <img src={LoveIcon} className='LoveIcon' alt='' />
                </div>
              }
              <div
                className='monkeyBikeButton'
                onMouseEnter={() => onEnterBike()}
                onMouseLeave={() => onLeaveBike()}
              >
              </div>
              <img src={ArrowPro} className='ArrowPro' alt='' />
              <img src={Mandala} className='mandala rotatingMandala' alt='' />
              {showBassMonkey || showBikeMonkey || showLaptop ?
                <img src={FireGif} className='FireGif' alt='' />
                : null
              }
              {showGifMe && GifMe && (
                <div>
                  <div className='divGifMe' ></div>
                  <img src={GifMe} className='GifMe' alt='' />
                </div>
              )}
            </div>
            <img src={Platform} className='platform' alt='' />
            <img src={GifRainbow} className='GifRainbow' alt='' />
            <img src={Diego} className='Diego' alt='' />
            <img src={Tavelli} className='Tavelli' alt='' />
            {/* <img src={TreeColor} className='treeColor' alt='' /> */}
            {showLaptop && (
              <div>
                <MovingTextTech />
                <TechGif />
                <img src={TechIcon} className='TechIcon' alt='' />
              </div>
            )
            }
            <div
              className='dialogTechButton'
              onMouseEnter={() => onEnterLaptop()}
              onMouseLeave={() => onLeaveLaptop()}
            >
            </div>
            <img src={Laptop} className='laptop' alt='' />
          </div>
          <div className='midContainer' >
            <>
              {/* <HoverBass /> */}
              <div onClick={() => setContact(!contact)} className='divCircle' >
                <img src={triangleLight} className={contact ? 'triangle triangleFx' : 'triangle'} alt='' />
                <img src={Contact} className='Contact' alt='' />
                <img src={ContactWorld} className={contact ? 'contactWorld rotatingContact contactWorldFx' : 'contactWorld rotatingContact'} alt='' />
              </div>
              <ModalContact contact={contact} />
            </>
            <>
              <div className='CardProContainer' >
                <div onClick={() => setProject(!project)}  >
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
            <>
              <div
                onClick={() => setAbout(!about)}
                className='aboutContainer' >
                <div>
                  <img src={AboutWorlds} className='aboutWorlds rotating' alt='' />
                  <img src={monkeyGrass} className='monkeyGrass' alt='' />
                  <img src={About} className='about' alt='' />
                  <img src={Me} className='me' alt='' />
                </div>
              </div>
              {
                <ModalAbout about={about} />
              }
            </>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Home;