import React, { useEffect } from 'react'
import DialogTech from '../../assets/figma/dialogTech2.png'
import TechSkillsVideo from '../../assets/videos/techSkillsVideo2.mp4'
import './techGif.scss'


const TechGif = () => {


  return (
    <div className='DialogTechContainer'>
      <img
        src={DialogTech}
        className='DialogTech'
        alt=''
      />
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