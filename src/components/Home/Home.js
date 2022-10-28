import React, { useState, useEffect, Suspense } from 'react';
import './home.scss'
import MovingTextComp from '../MovingText/MovingText';
import ModalProject from '../Modals/ModalProject'
import ModalAbout from '../Modals/ModalAbout'
import ModalContact from '../Modals/ModalContact'
import CardHome from '../CardHome/CardHome'
import ScrollComponent from '../ScrollComponent/ScrollComponent'
import LaptopComp from '../LaptopComp/LaptopComp'
import FullStackComp from '../FullStackComp/FullStackComp'
//modal project
import Tilt from 'react-parallax-tilt';

//imgs, gifs & vids
import LogoSubtitle from '../../assets/figma/logo_sub3.png'
import ArrowPro from '../../assets/figma/cardProy3.png'
import CardPro from '../../assets/figma/cardp2p3.png'
import CardPro2 from '../../assets/figma/cardp2p5.png'
import Platform from '../../assets/figma/platform2.png'
import GifRainbow from '../../assets/figma/gifRainbow.gif'
import AboutWorlds from '../../assets/figma/aboutWorlds3.png'
import ContactWorld from '../../assets/figma/contactWorld2.png'
import backVid from '../../assets/videos/MiVideoFinal.mp4'
import Contact from '../../assets/figma/Contact2.png'
import Projects from '../../assets/figma/Projects2.png'
import TechSrc from '../../assets/figma/TechSkillsText.png'
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
import GifMe from '../../assets/figma/gifMe.gif'
import dialogBassMonkey from '../../assets/figma/dialogBassMonkey3.png'
import GifBike from '../../assets/figma/gifBike.gif'
import LoveIcon from '../../assets/figma/loveIcon2.png'
import FireGif from '../../assets/figma/fireGif.gif'
import ContactBase from '../../assets/figma/contactWorldBase2.png'
import ScrollGif from '../../assets/figma/scrollGif.gif'
import ScrollDialog from '../../assets/figma/scrollGifTheme2.gif'

const assetsToStore = {
  LogoSubtitle, ArrowPro, CardPro, CardPro2, Platform, GifRainbow,
  AboutWorlds, ContactWorld, backVid, Contact, Projects, TechSrc,
  About, Me, Full, Stack, Dev, Arrow, Monkey, bikeMonkey, triangleLight,
  Mandala, monkeyGrass, GifMe, dialogBassMonkey, GifBike, LoveIcon,
  FireGif, ContactBase, ScrollGif, ScrollDialog
}

const Home = () => {

  // const ModalContact = React.lazy(() => import('../Modals/ModalContact'))

  // const [loadCompleted, setLoadCompleted] = useState(false)
  const [project, setProject] = useState(false)
  const [about, setAbout] = useState(false)
  const [contact, setContact] = useState(false)
  const [showGifMe, setShowGifMe] = useState(false)
  const [showBassMonkey, setShowBassMonkey] = useState(false)
  const [showBikeMonkey, setShowBikeMonkey] = useState(false)
  const [showLaptop, setShowLaptop] = useState(false)
  const [showScroll, setShowScroll] = useState(true)

  //states to modal project
  const [showCardPokemon, setShowCardPokemon] = useState(false)
  const [showCardFlyMate, setShowCardFlyMate] = useState(false)
  const [leaveStream, setLeaveStream] = useState(false)

  // state to ScrollComp to change video CSS
  const [colorState, setColorState] = useState({ currentIndex: 0 })

  // allData stored on LocalStore
  const [allData, setAllData] = useState([])
  const [fetched, setFetched] = useState(false)

  const setToLocalStorage = () => {
    if (allData.length < 2) {
      localStorage.setItem('HOME_ASSETS', JSON.stringify(assetsToStore));
      setFetched(true)
      // console.log('ho')
    }
  }

  useEffect(() => {
    setToLocalStorage()
    const items = JSON.parse(localStorage.getItem('HOME_ASSETS'));
    setAllData(items)
    if (document.readyState === 'complete') {
    }
  }, [])


  const onEnterBass = () => {
    setShowBassMonkey(true)
    setShowGifMe(true)
  }
  const onLeaveBass = () => {
    setShowBassMonkey(false)
    setShowGifMe(false)
  }

  const onEnterLaptop = () => {
    setShowLaptop(!showLaptop)
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

  const selectType = (srcProject, srcTech) => {
    if (showLaptop && !project) return srcTech
    else return srcProject
  }

  //Alert shows only first time
  (function ScrollController() {
    setTimeout(() => {
      setShowScroll(false)
    }, 20000)
  })()

  const styleFullStack = (styleInput) => {
    return !showCardPokemon && !showCardFlyMate
      ? styleInput : styleInput + ' notDisplay'
  }

  const styleBackVid = (styleInput) => {
    const { currentIndex } = colorState
    let from = styleInput === 'backVid' ?
      ' vid' :
      styleInput === 'mandala' ?
        ' mand' :
        styleInput === 'treeColor' ?
          ' tree' :
          styleInput === 'GifRainbow' ?
            ' rainB' : null
    return currentIndex === 0 ?
      styleInput + `${from}0` :
      currentIndex === 1 ?
        styleInput + `${from}1` :
        currentIndex === 2 ?
          styleInput + `${from}2` :
          currentIndex === 3 ?
            styleInput + `${from}3` :
            currentIndex === 4 ?
              styleInput + `${from}4` : null
  }

  return fetched && (
    <div className='homeContainer' >
      <video
        src={backVid}
        autoPlay
        loop
        muted
        className={styleBackVid('backVid')}
      >
      </video>
      <div className='navContainer' >
        {showScroll ?
          <div className='ScrollCompContainer'>
            <img src={allData.ScrollGif} className='ScrollGif' alt='' />
            <img src={allData.ScrollGif} className='ScrollGif2' alt='' />
            <div className='scrollDialogContainer'>
              <img src={allData.ScrollDialog} className='ScrollDialog' alt='' />
              <img src={allData.ScrollDialog} className='ScrollDialog2' alt='' />
            </div>
          </div> : null
        }
        <nav>
          <div className='navBarButton'>
            <img
              className={
                showCardPokemon || showCardFlyMate
                  ? 'DiegoTavelli DiegoTavelliProjectOpen'
                  : 'DiegoTavelli'
              }
              src={allData.LogoSubtitle}
              alt='DiegoTavelli'
            />
            <img
              className={
                showCardPokemon || showCardFlyMate
                  ? 'DiegoTavelli DiegoTavelliShadow DiegoTavelliProjectOpen'
                  : 'DiegoTavelli DiegoTavelliShadow'
              }
              src={allData.LogoSubtitle}
              alt=''
            />
          </div>
          <ScrollComponent colorState={colorState} setColorState={setColorState} />
          <FullStackComp
            allData={allData}
            styleFullStack={styleFullStack}
            contact={contact}
            project={project}
            about={about}
          />
          <div className='firstContainer'>
            <MovingTextComp />
            <div className='monkeysDiv' >
              <img src={allData.Monkey} className='Monkey' alt='' />
              {showBassMonkey &&
                <div>
                  <div className='dialogBassMonkeyDiv'>
                    <img src={allData.dialogBassMonkey} className='dialogBassMonkey' alt='' />
                  </div>
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
              <div className='bikeTiltCont'>

                <img src={allData.bikeMonkey} className='bikeMonkey2' alt='' />

              </div>
              <img src={allData.bikeMonkey} className='bikeMonkey' alt='' />
              {showBikeMonkey &&
                <div>
                  <img src={allData.GifBike} className='GifBike' alt='' />
                  <img src={allData.LoveIcon} className='LoveIcon' alt='' />
                </div>
              }
              <div
                className='monkeyBikeButton'
                onMouseEnter={() => onEnterBike()}
                onMouseLeave={() => onLeaveBike()}
              >
              </div>
              <img src={allData.ArrowPro} className='ArrowPro' alt='' />
              <img src={allData.Mandala} className={styleBackVid('mandala')} alt='' />
              {showBassMonkey || showBikeMonkey || showLaptop ?
                <img src={allData.FireGif} className='FireGif' alt='' />
                : null
              }
              {showGifMe && (
                <div>
                  <div className='divGifMe' ></div>
                  <img src={allData.GifMe} className='GifMe' alt='' />
                </div>
              )}
            </div>
            <img src={allData.Platform} className='platform' alt='' />
            <img src={allData.GifRainbow} className={styleBackVid('GifRainbow')} alt='' />
            <LaptopComp
              showLaptop={showLaptop}
              onLeaveLaptop={onLeaveLaptop}
              project={project}
              onEnterLaptop={onEnterLaptop}
            />
          </div>
          <div className='midContainer' >
            {/* CONTACT */}
            <ModalContact
              contact={contact}
              setContact={setContact}
              allData={allData}
            />
            <CardHome styleBackVid={styleBackVid} />
            {/* PROJECT */}
            <ModalProject
              showCardPokemon={showCardPokemon}
              showCardFlyMate={showCardFlyMate}
              setShowCardPokemon={setShowCardPokemon}
              setShowCardFlyMate={setShowCardFlyMate}
              leaveStream={leaveStream}
              setLeaveStream={setLeaveStream}
              project={project}
              setProject={setProject}
              allData={allData}
              selectType={selectType}
              showLaptop={showLaptop}
            />
            {/* ABOUT */}
            <ModalAbout
              about={about}
              setAbout={setAbout}
              allData={allData}
            />
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Home;