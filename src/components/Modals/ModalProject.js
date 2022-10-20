import React, { useState } from "react";
import projectModal from '../../assets/figma/projectModal3.png'
import videoPokemon from '../../assets/videos/VideoPokemon.mp4'
import videoFlyMate from '../../assets/videos/VideoFlyMate.mp4'
import pokemonLogo from '../../assets/videos/pokemon.png'
import flymateLogo from '../../assets/videos/flymate.png'

import './modalProject.scss'

const ModalProject = () => {

  const handleClickPokemon = () => {
    window.open('https://the-pokemon-app.vercel.app');
  }
  const handleClickFlyMate = () => {
    window.open('https://www.youtube.com/watch?v=7dpE5Cr_vEc');
  }

  return (
    <div className='modalProjectContainer'>
      <img src={projectModal} alt='' className='projectModal' />
      <div onClick={handleClickPokemon} >
        <img src={pokemonLogo} alt='' className='pokemonLogo' />
        <video
          className='videoPokemon'
          src={videoPokemon}
          autoPlay
          loop
          muted
        />
      </div>
      <div onClick={handleClickFlyMate} >
        <img src={flymateLogo} alt='' className="flyMateLogo" />
        <video
          className='videoFlyMate'
          src={videoFlyMate}
          autoPlay
          loop
          muted
        />
      </div>
    </div>
  )
}

export default ModalProject