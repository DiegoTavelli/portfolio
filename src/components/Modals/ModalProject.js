import React, { useState } from 'react';
import './modalProject.scss'
import projectModalBack from '../../assets/figma/projectModal7.png'
import projectModal from '../../assets/figma/projectModal8.png'
import VideoPokemon from '../../assets/videos/VideoPokemon2.mp4'
import VideoFlyMate from '../../assets/videos/VideoFlyMate3.mp4'
import pokemonLogo from '../../assets/videos/pokemon.png'
import flymateLogo from '../../assets/videos/flymate.png'
import logoLoading from '../../assets/figma/loading.gif'
import buttonPokemonWeb from '../../assets/figma/buttonPokemonWeb.png'
import buttonPokemonVideo from '../../assets/figma/buttonPokemonVideo.png'
import buttonFlyMateWeb from '../../assets/figma/buttonFlyMateWeb.png'
import buttonFlyMateVideo from '../../assets/figma/buttonFlyMateVideo.png'
import detailsPokemon from '../../assets/figma/gifDetailPokemon.gif'
import detailsFlyMate from '../../assets/figma/gifDetailFlyMate.gif'
import BackCorcho from '../../assets/figma/backCorcho.png'
import WebLink from '../../assets/figma/webLink.png'
import ApkLink from '../../assets/figma/apkLink.png'
import VideoLink from '../../assets/figma/videoLink.png'


const ModalProject = ({
  showCardPokemon,
  showCardFlyMate,
  setShowCardPokemon,
  setShowCardFlyMate,
  setLeaveStream }) => {

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
    <div className='modalProjectContainer'>
      <div className='projectModalBackContainer'>
        <img src={projectModalBack} alt='' className='projectModalBack' />
      </div>
      <img src={projectModal} alt='' className='projectModal' />
      <div className='handleClickPokemon' ></div>
      <div className='divImages'>
        <img src={flymateLogo} alt='' className='flyMateLogo' />
        <img src={pokemonLogo} alt='' className='pokemonLogo' />
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
            <img src={WebLink} className='webLinkPokemon' alt='' />
            : null
        }
        <img
          src={buttonPokemonWeb}
          onMouseEnter={() => setShowWeb(true)}
          onMouseLeave={() => setShowWeb(false)}
          onClick={handleWebPokemon}
          className='buttonPokemonWeb'
          alt=''
        />
        {
          showVideo && showCardPokemon ?
            <img src={VideoLink} className='videoLinkPokemon' alt='' />
            : null
        }
        <img
          src={buttonPokemonVideo}
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
            <img src={logoLoading} className='logoLoadingProject' alt='' />
            <video
              className='videoPokemon'
              src={VideoPokemon}
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
            <img src={ApkLink} className='apkLink' alt='' />
            : null
        }
        <img
          src={buttonFlyMateWeb}
          onMouseEnter={() => setShowApk(true)}
          onMouseLeave={() => setShowApk(false)}
          onClick={handleWebFlyMate}
          className='buttonFlyMateWeb'
          alt=''
        />
        {
          showVideo && showCardFlyMate ?
            <img src={VideoLink} className='videoLinkFlyMate' alt='' />
            : null
        }
        <img
          src={buttonFlyMateVideo}
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
            <img src={logoLoading} className='logoLoadingProject' alt='' />
            <video
              className='videoFlyMate'
              src={VideoFlyMate}
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
            <img onm src={BackCorcho} className='backCorcho' alt='' />
            <img src={detailsPokemon} className='detailsPokemon' alt='' />
          </div>
          : showCardFlyMate ?
            <div>
              <img src={BackCorcho} className='backCorcho' alt='' />
              <img src={detailsFlyMate} className='detailsFlyMate' alt='' />
            </div>
            : null
      }
    </div>
  )
}

export default ModalProject