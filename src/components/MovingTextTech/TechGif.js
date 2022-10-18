import React, { useEffect } from 'react'
import DialogTech from '../../assets/videos/techSkillsGif.gif'
import './techGif.scss'

const TechGif = ({ logo }) => {


  return (
    <div className='DialogTechContainer'>
      <img
        src={logo}
        className='DialogTech'
        alt='' />
    </div>
  )
}

export default TechGif