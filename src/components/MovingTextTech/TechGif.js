import React, { useEffect } from 'react'
import DialogTech from '../../assets/figma/dialogTech2.png'
import TechSkillsVideo from '../../assets/videos/techSkillsVideo3.mp4'
import CloseTech from '../../assets/figma/closeTech.png'
import './techGif.scss'


const TechGif = ({ onLeaveLaptop }) => {


  return (
    <div className='DialogTechContainer'>
      <img
        src={DialogTech}
        className='DialogTech'
        alt=''
      />
      <img src={CloseTech} onClick={onLeaveLaptop} className='closeDialogTech' alt='' />
      <video
        src={TechSkillsVideo}
        className='DialogTechVideo'
        autoPlay
        loop
        muted
      />
    </div>
  )
}

export default TechGif