import React, { useState, useEffect } from 'react';
import './home.scss'
import MovingTextComp from '../MovingText/MovingText';
import ModalProject from '../Modals/ModalProject'
import ModalAbout from '../Modals/ModalAbout'
import ModalContact from '../Modals/ModalContact'
import CardHome from '../CardHome/CardHome'
import ScrollComponent from '../ScrollComponent/ScrollComponent'
import LaptopComp from '../LaptopComp/LaptopComp'

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

  const [allData, setAllData] = useState([])
  const [fetched, setFetched] = useState(false)

  const setToLocalStorage = () => {
    if (allData.length < 2) {
      localStorage.setItem('HOME_ASSETS', JSON.stringify(assetsToStore));
      setFetched(true)
      console.log('ho')
    }
  }

  useEffect(() => {
    setToLocalStorage()

    const items = JSON.parse(localStorage.getItem('HOME_ASSETS'));
    setAllData(items)
    console.log('dd', allData.LogoSubtitle)

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


  return (
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
          <div className='fullStackDiv'>
            <img src={allData.Full} className={styleFullStack('Full')} alt='' />
            <img src={allData.Full} className={styleFullStack('Full full2')} alt='' />
            <img src={allData.Stack} className={styleFullStack('Stack')} alt='' />
            <img src={allData.Stack} className={styleFullStack('Stack stack2')} alt='' />
            <div className='devContainer'>
              <img src={allData.Dev} className={contact ? 'Dev DevMoved' : 'Dev DevMovedBack'} alt='' />
            </div>
            {!project ?
              <img src={allData.Arrow} className='arrow1' alt='' />
              : null
            }
            {!contact ?
              <img src={allData.Arrow} className='arrow2' alt='' />
              : null
            }
            {!about ?
              <img src={allData.Arrow} className='arrow3' alt='' />
              : null
            }
          </div>
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
            <>
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
                <ModalContact contact={contact} />
              }
            </>
            <CardHome styleBackVid={styleBackVid} />
            {/* CARD HOME */}
            {/* <div className='cardHomeContainer'>
              <Tilt
                tiltMaxAngleX={4}
                tiltMaxAngleY={4}
              >
                <Tilt
                  tiltMaxAngleX={6}
                  tiltMaxAngleY={6}
                >
                  <Card.Img className='cardHome' src={CardHome} alt='' />
                </Tilt>
                <Tilt
                  glareEnable={true}
                  tiltMaxAngleX={6}
                  tiltMaxAngleY={2}
                >
                  <div className='DiegoContainer'>
                    <img src={Diego} className='Diego' alt='' />
                  </div>
                </Tilt>
                <Tilt
                  glareEnable={true}
                  tiltMaxAngleX={6}
                  tiltMaxAngleY={2}
                >
                  <div className='TavelliContainer'>
                    <img src={Tavelli} className='Tavelli' alt='' />
                  </div>
                </Tilt>
                <Tilt
                  tiltMaxAngleX={6}
                  tiltMaxAngleY={2}
                >
                  <div className='TreeColorContainer'>
                    <img src={TreeColor} className={styleBackVid('treeColor')} alt='' />
                  </div>
                </Tilt>
              </Tilt>
            </div> */}
            {/* PROJECT */}
            <>
              <div className='CardProContainer' >
                <div onClick={() => setProject(!project)} >
                  <div
                    className={
                      showCardPokemon || showCardFlyMate
                        ? 'CardProBig' : leaveStream
                          ? 'CardProBigLeave' : ''}
                  >
                    <div>
                      {showCardPokemon || showCardFlyMate
                        ? <div className='backBlackCardPro'></div>
                        : null
                      }
                      <img src={allData.CardPro} className='CardPro' alt='' />
                    </div>
                  </div>
                  {!showCardPokemon && !showCardFlyMate ?
                    <div>
                      <div className='contCardPro2Light'>
                      </div>
                      <div
                        className={
                          showCardPokemon || showCardFlyMate
                            ? 'CardProBig2' : leaveStream
                              ? 'CardProBig2Leave' : ''}
                      >
                        <img
                          src={allData.CardPro2}
                          className={
                            !showCardPokemon || !showCardFlyMate
                              ? 'CardPro2' : 'CardPro2 CardProBig2'}
                          alt=''
                        />
                      </div>
                    </div>
                    : null
                  }
                  {
                    !showCardPokemon && !showCardFlyMate ?
                      <img
                        src={selectType(allData.Projects, allData.TechSrc)}
                        className={project ? 'Projects ProjectsOpen' : showLaptop ? 'TechSrc' : 'Projects'}
                        alt=''
                      /> : null
                  }
                </div>
              </div>
              {
                project &&
                < ModalProject
                  setLeaveStream={setLeaveStream}
                  showCardPokemon={showCardPokemon}
                  setShowCardPokemon={setShowCardPokemon}
                  showCardFlyMate={showCardFlyMate}
                  setShowCardFlyMate={setShowCardFlyMate}
                />
              }
            </>
            {/* ABOUT */}
            <>
              <div
                onClick={() => setAbout(!about)}
                className='aboutContainer' >
                <div>
                  <img
                    src={allData.AboutWorlds}
                    className={!about ? 'aboutWorlds rotating' : 'aboutWorlds rotating'}
                    alt=''
                  />
                  <img src={allData.monkeyGrass} className='monkeyGrass' alt='' />
                  <img src={allData.About} className='about' alt='' />
                  <img src={allData.Me} className='me' alt='' />
                </div>
              </div>
              {about &&
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