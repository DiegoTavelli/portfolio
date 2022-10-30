import React, { useState, useEffect } from 'react';
import './home.scss'

import LandingComp from '../LandingComp/LandingComp'
import MovingTextComp from '../MovingText/MovingText';
import ModalProject from '../Modals/ModalProject'
import ModalAbout from '../Modals/ModalAbout'
import ModalContact from '../Modals/ModalContact'
import CardHome from '../CardHome/CardHome'
import ScrollComponent from '../ScrollComponent/ScrollComponent'
import LaptopComp from '../LaptopComp/LaptopComp'
import FullStackComp from '../FullStackComp/FullStackComp'


const Home = ({ allData, fetched }) => {

  const [showHome, setShowHome] = useState(false)
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
  function ScrollController() {
    setTimeout(() => {
      setShowScroll(false)
    }, 20000)
  }

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
        src={allData.backVid}
        autoPlay
        loop
        muted
        className={styleBackVid('backVid')}
      >
      </video>
      <div className='navContainer' >
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
        {
          !showHome ? <LandingComp setShowHome={setShowHome} ScrollController={ScrollController} /> :
            <nav className='navContNav'>
              {
                showScroll ?
                  <div className='ScrollCompContainer'>
                    <img src={allData.ScrollGif} className='ScrollGif' alt='' />
                    <img src={allData.ScrollGif} className='ScrollGif2' alt='' />
                    <div className='scrollDialogContainer'>
                      <img src={allData.ScrollDialog} className='ScrollDialog' alt='' />
                      <img src={allData.ScrollDialog} className='ScrollDialog2' alt='' />
                    </div>
                  </div> : null
              }
              <div className='navBarButton'>

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
                  allData={allData}
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
                <CardHome styleBackVid={styleBackVid} allData={allData} />
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
        }
      </div>
    </div>
  )
}

export default Home;