import React, { useState } from 'react';
import './home.scss'
import MovingTextComp from '../MovingText/MovingText';
import ModalProject from '../Modals/ModalProject'
import ModalAbout from '../Modals/ModalAbout'
import ModalContact from '../Modals/ModalContact'
import MovingTextTech from '../MovingTextTech/MovingTextTech'
import TechGif from '../MovingTextTech/TechGif';
import ScrollComponent from '../ScrollComponent/ScrollComponent'


import LogoSubtitle from '../../assets/figma/logo_sub3.png'
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
import TreeColor from '../../assets/figma/tree2.png'
import GifMe from '../../assets/figma/gifMe.gif'
import dialogBassMonkey from '../../assets/figma/dialogBassMonkey3.png'
import GifBike from '../../assets/figma/gifBike.gif'
import LoveIcon from '../../assets/figma/loveIcon2.png'
import TechIcon from '../../assets/figma/gifTech.gif'
import FireGif from '../../assets/figma/fireGif.gif'
import ContactBase from '../../assets/figma/contactWorldBase2.png'
import ScrollGif from '../../assets/figma/scrollGif.gif'
import ScrollDialog from '../../assets/figma/scrollGifTheme.gif'

const Home = () => {

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

  const refreshPage = () => {
    window.location.reload();
  }

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


  (function ScrollController() {
    setTimeout(() => {
      setShowScroll(false)
    }, 20000)
  })()

  const styleFullStack = (styleInput) => {
    return !showCardPokemon && !showCardFlyMate
      ? styleInput : styleInput + ' notDisplay'
  }

  if (!LogoSubtitle || !CardHome || !ArrowPro || !CardPro || !CardPro2 || !Platform || !GifRainbow ||
    !AboutWorlds || !Diego || !Tavelli || !ContactWorld || !backVid || !Contact || !Projects || !About
    || !Me || !Full || !Stack || !Dev || !Arrow || !ScrollDialog || !Monkey || !bikeMonkey || !triangleLight
    || !Mandala || !monkeyGrass || !Laptop || !TreeColor || !GifMe || !dialogBassMonkey || !GifBike || !LoveIcon
    || !TechIcon || !FireGif || !ContactBase || !ScrollGif)
    return (
      <div>hola</div>
    )
  else
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
          {showScroll ?
            <div className='ScrollCompContainer'>
              <img src={ScrollGif} className='ScrollGif' alt='' />
              <img src={ScrollGif} className='ScrollGif2' alt='' />
              <div className='scrollDialogContainer'>
                <img src={ScrollDialog} className='ScrollDialog' alt='' />
                <img src={ScrollDialog} className='ScrollDialog2' alt='' />
              </div>
            </div> : null
          }
          <nav>
            <div onClick={() => refreshPage()} className='navBarButton'>
              <img className={
                showCardPokemon || showCardFlyMate
                  ? 'DiegoTavelli DiegoTavelliProjectOpen'
                  : 'DiegoTavelli'
              }
                src={LogoSubtitle}
                alt='DiegoTavelli'
              />
              <img className={
                showCardPokemon || showCardFlyMate
                  ? 'DiegoTavelli DiegoTavelliShadow DiegoTavelliProjectOpen'
                  : 'DiegoTavelli DiegoTavelliShadow'
              }
                src={LogoSubtitle}
                alt=''
              />
            </div>
            <ScrollComponent />
            <div className='fullStackDiv'>
              <img src={Full} className={styleFullStack('Full')} alt='' />
              <img src={Full} className={styleFullStack('Full full2')} alt='' />
              <img src={Stack} className={styleFullStack('Stack')} alt='' />
              <img src={Stack} className={styleFullStack('Stack stack2')} alt='' />
              <div className='devContainer'>
                <img src={Dev} className={contact ? 'Dev DevMoved' : 'Dev DevMovedBack'} alt='' />
              </div>
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
              <img src={CardHome} className='cardHome' alt='' />
              <div className='monkeysDiv' >
                <img src={bikeMonkey} className='bikeMonkey2' alt='' />
                <img src={Monkey} className='Monkey' alt='' />
                {showBassMonkey &&
                  <div>
                    <div className='dialogBassMonkeyDiv'>
                      <img src={dialogBassMonkey} className='dialogBassMonkey' alt='' />
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
                <img src={Mandala} className='mandala' alt='' />
                {showBassMonkey || showBikeMonkey || showLaptop ?
                  <img src={FireGif} className='FireGif' alt='' />
                  : null
                }
                {showGifMe && (
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
              <img src={TreeColor} className='treeColor' alt='' />
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
              {/* CONTACT */}
              <>
                <div onClick={() => setContact(!contact)} className='divCircle' >
                  <img
                    src={triangleLight}
                    className={contact ? 'triangle triangleFx' : 'triangle'}
                    alt=''
                  />
                  <img
                    src={Contact}
                    className={!contact ? 'Contact' : 'Contact ContactPressed'}
                    alt=''
                  />
                  <img
                    src={ContactWorld}
                    className={
                      contact ? 'contactWorld rotatingContact contactWorldFx'
                        : 'contactWorld rotatingContact'}
                    alt=''
                  />
                  <img
                    src={ContactBase}
                    className={contact ? 'ContactBase' : 'ContactBaseNoShow'}
                    alt=''
                  />
                </div>
                {contact &&
                  <ModalContact contact={contact} />
                }
              </>
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
                        <img src={CardPro} className='CardPro' alt='' />
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
                            src={CardPro2}
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
                      !showCardPokemon || !showCardFlyMate ?
                        <img
                          src={Projects}
                          className={project ? 'Projects ProjectsOpen' : 'Projects'}
                          alt=''
                        /> : null
                    }
                  </div>
                </div>
                {
                  project &&
                  <ModalProject
                    leaveStream={leaveStream}
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
                      src={AboutWorlds}
                      className={!about ? 'aboutWorlds rotating' : 'aboutWorlds rotating'}
                      alt=''
                    />
                    <img src={monkeyGrass} className='monkeyGrass' alt='' />
                    <img src={About} className='about' alt='' />
                    <img src={Me} className='me' alt='' />
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