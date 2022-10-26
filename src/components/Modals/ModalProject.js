import React from 'react';
import './modalProject.scss'
import projectModal from '../../assets/figma/projectModal6.png'
import VideoPokemon from '../../assets/videos/VideoPokemon.mp4'
import VideoFlyMate from '../../assets/videos/VideoFlyMate.mp4'
import pokemonLogo from '../../assets/videos/pokemon.png'
import flymateLogo from '../../assets/videos/flymate.png'
import logoLoading from '../../assets/figma/loading.gif'
import buttonPokemonWeb from '../../assets/figma/buttonPokemonWeb.png'
import buttonPokemonVideo from '../../assets/figma/buttonPokemonVideo.png'
import buttonFlyMateWeb from '../../assets/figma/buttonFlyMateWeb.png'
import buttonFlyMateVideo from '../../assets/figma/buttonFlyMateVideo.png'
import detailsPokemon from '../../assets/figma/gifDetailPokemon.gif'
import detailsFlyMate from '../../assets/figma/gifDetailFlyMate.gif'

const ModalProject = ({
  showCardPokemon,
  showCardFlyMate,
  setShowCardPokemon,
  setShowCardFlyMate,
  leaveStream,
  setLeaveStream }) => {

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

  (function clearLeave() {
    setTimeout(() => {
      setLeaveStream(false)
    }, 1000)
  })()

  return (
    <div className='modalProjectContainer'>
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
        <img src={buttonPokemonWeb} onClick={handleWebPokemon} className='buttonPokemonWeb' alt='' />
        <img src={buttonPokemonVideo} onClick={handleVideoPokemon} className='buttonPokemonVideo' alt='' />
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
        <img src={buttonFlyMateWeb} onClick={handleWebFlyMate} className='buttonFlyMateWeb' alt='' />
        <img src={buttonFlyMateVideo} onClick={handleVideoFlyMate} className='buttonFlyMateVideo' alt='' />
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
            <img src={detailsPokemon} className='detailsPokemon' alt='' />
          </div>
          : showCardFlyMate ?
            <div>
              <img src={detailsFlyMate} className='detailsFlyMate' alt='' />
            </div>
            : null
      }
    </div>
  )
}

export default ModalProject