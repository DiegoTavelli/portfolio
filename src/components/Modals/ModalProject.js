import React from "react";
import projectModal from '../../assets/figma/projectModal6.png'
import videoPokemon from '../../assets/videos/VideoPokemon.mp4'
import videoFlyMate from '../../assets/videos/VideoFlyMate.mp4'
import pokemonLogo from '../../assets/videos/pokemon.png'
import flymateLogo from '../../assets/videos/flymate.png'
import logoLoading from '../../assets/figma/loading.gif'
import './modalProject.scss'

const ModalProject = ({ showCardPokemon, showCardFlyMate, setShowCardPokemon, setShowCardFlyMate }) => {


  const handleClickPokemon = () => {
    window.open('https://the-pokemon-app.vercel.app');
  }
  const handleClickFlyMate = () => {
    window.open('https://www.youtube.com/watch?v=7dpE5Cr_vEc');
  }

  const mouseEnterPokemon = () => {
    setShowCardPokemon(true)
  }
  const mouseLeavePokemon = () => {
    setShowCardPokemon(false)
  }
  const mouseEnterFlyMate = () => {
    setShowCardFlyMate(true)
  }
  const mouseLeaveFlyMate = () => {
    setShowCardFlyMate(false)
  }

  return (
    <div className='modalProjectContainer'>
      <img src={projectModal} alt='' className='projectModal' />
      <div className='handleClickPokemon' ></div>
      <div className='divImages'>
        <img src={flymateLogo} alt='' className="flyMateLogo" />
        <img src={pokemonLogo} alt='' className='pokemonLogo' />
      </div>
      <div
        className='divHoverPokemon'
        onMouseEnter={mouseEnterPokemon}
        onMouseLeave={mouseLeavePokemon}
      ></div>
      {showCardPokemon ?
        <div onClick={handleClickPokemon}>
          <div className='backBlack'>
            <img src={logoLoading} className='logoLoadingProject' alt='' />
          </div>
          <video
            className='videoPokemon'
            src={videoPokemon}
            autoPlay
            loop
            muted
          />
        </div> : null
      }
      <div
        className='divHoverFlyMate'
        onMouseEnter={mouseEnterFlyMate}
        onMouseLeave={mouseLeaveFlyMate}
      ></div>
      {showCardFlyMate ?
        <div onClick={handleClickFlyMate} className='handleClickFlyMate' >
          <div className='backBlack'>
            <img src={logoLoading} className='logoLoadingProject' alt='' />
          </div>
          <video
            className='videoFlyMate'
            src={videoFlyMate}
            autoPlay
            loop
            muted
          />
        </div> : null
      }
    </div>
  )
}

export default ModalProject