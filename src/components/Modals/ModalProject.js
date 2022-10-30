import React, { useState } from 'react';
import './modalProject.scss'
import '../Home/home.scss'


const ModalProject = ({
  showCardPokemon, showCardFlyMate, setShowCardPokemon, setShowCardFlyMate,
  leaveStream, setLeaveStream, project, setProject, allData, selectType, showLaptop
}) => {

  const [showWeb, setShowWeb] = useState(false)
  const [showApk, setShowApk] = useState(false)
  const [showVideo, setShowVideo] = useState(false)

  const handleWebPokemon = () => {
    window.open('https://the-pokemon-app.vercel.app');
  }
  const handleVideoPokemon = () => {
    window.open('https://www.youtube.com/watch?v=wrnuohwL07A&t=3s');
  }
  const handleWebFlyMate = () => {
    window.open('https://drive.google.com/file/d/1Tnx7Q2vi81OCeYc8GLlNirqqdurNk-ki/view?usp=sharing');
  }
  const handleVideoFlyMate = () => {
    window.open('https://www.youtube.com/watch?v=7dpE5Cr_vEc');
  }

  // Enter  
  const mouseEnterPokemon = () => {
    setShowCardPokemon(true)
  }

  const mouseEnterFlyMate = () => {
    setShowCardFlyMate(true)
  }

  // Leave
  const mouseLeavePokemon = () => {
    setShowCardPokemon(false)
    setLeaveStream(true)
  }

  const mouseLeaveFlyMate = () => {
    setShowCardFlyMate(false)
    setLeaveStream(true)
  }

  (function () {
    setTimeout(() => {
      setLeaveStream(false)
    }, 1000)
  })()

  return (
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
      <div style={{ visibility: project ? 'visible' : 'hidden' }}>
        <div className='modalProjectContainer' >
          <div className='projectModalBackContainer'>
            <img
              src={allData.projectModalBack}
              className={project ? 'projectModalBack fxProject' : 'projectModalBack'}
              alt=''
            />
          </div>
          <img
            src={allData.projectModal}
            className={project ? 'projectModal fxProject' : 'projectModal'}
            alt=''
          />
          <div className='handleClickPokemon' ></div>
          <div className={project ? 'divImages' : ''}>
            <img src={allData.flymateLogo} alt='' className='flyMateLogo' />
            <img src={allData.pokemonLogo} alt='' className='pokemonLogo' />
          </div>
          <div className='divMiddleHover'>
            <div
              className='divTop'
              onMouseEnter={mouseEnterPokemon}
              onMouseLeave={mouseLeavePokemon}
            ></div>
            <div
              className='divBottom'
              onMouseEnter={mouseEnterFlyMate}
              onMouseLeave={mouseLeaveFlyMate}
            ></div>
          </div>
          <div
            className='divHoverPokemon'
            onClick={mouseEnterPokemon}
            onMouseEnter={mouseEnterPokemon}
            onMouseLeave={mouseLeavePokemon}
          >
            {
              showWeb ?
                <img src={allData.WebLink} className='webLinkPokemon' alt='' />
                : null
            }
            <img
              src={allData.buttonPokemonWeb}
              onMouseEnter={() => setShowWeb(true)}
              onMouseLeave={() => setShowWeb(false)}
              onClick={handleWebPokemon}
              className='buttonPokemonWeb'
              alt=''
            />
            {
              showVideo && showCardPokemon ?
                <img src={allData.VideoLink} className='videoLinkPokemon' alt='' />
                : null
            }
            <img
              src={allData.buttonPokemonVideo}
              onMouseEnter={() => setShowVideo(true)}
              onMouseLeave={() => setShowVideo(false)}
              onClick={handleVideoPokemon}
              className='buttonPokemonVideo'
              alt=''
            />
          </div>
          {showCardPokemon ?
            <div>
              <div className='backBlack'>
                <img src={allData.logoLoading} className='logoLoadingProject' alt='' />
                <video
                  className='videoPokemon'
                  src={allData.VideoPokemon}
                  autoPlay
                  loop
                  muted
                  type='video/mp4'
                >
                </video>
              </div>
            </div> : null
          }
          <div
            className='divHoverFlyMate'
            onClick={mouseEnterFlyMate}
            onMouseEnter={mouseEnterFlyMate}
            onMouseLeave={mouseLeaveFlyMate}
          >
            {
              showApk ?
                <img src={allData.ApkLink} className='apkLink' alt='' />
                : null
            }
            <img
              src={allData.buttonFlyMateWeb}
              onMouseEnter={() => setShowApk(true)}
              onMouseLeave={() => setShowApk(false)}
              onClick={handleWebFlyMate}
              className='buttonFlyMateWeb'
              alt=''
            />
            {
              showVideo && showCardFlyMate ?
                <img src={allData.VideoLink} className='videoLinkFlyMate' alt='' />
                : null
            }
            <img
              src={allData.buttonFlyMateVideo}
              onMouseEnter={() => setShowVideo(true)}
              onMouseLeave={() => setShowVideo(false)}
              onClick={handleVideoFlyMate}
              className='buttonFlyMateVideo'
              alt=''
            />
          </div>
          {showCardFlyMate ?
            <div className='handleClickFlyMate' >
              <div className='backBlack'>
                <img src={allData.logoLoading} className='logoLoadingProject' alt='' />
                <video
                  className='videoFlyMate'
                  src={allData.VideoFlyMate}
                  autoPlay
                  loop
                  muted
                  type='video/mp4'
                >
                </video>
              </div>
            </div> : null
          }
          {
            showCardPokemon ?
              <div>
                <img onm src={allData.BackCorcho} className='backCorcho' alt='' />
                <img src={allData.detailsPokemon} className='detailsPokemon' alt='' />
              </div>
              : showCardFlyMate ?
                <div>
                  <img src={allData.BackCorcho} className='backCorcho' alt='' />
                  <img src={allData.detailsFlyMate} className='detailsFlyMate' alt='' />
                </div>
                : null
          }
        </div>
      </div>
    </>
  )
}

export default ModalProject