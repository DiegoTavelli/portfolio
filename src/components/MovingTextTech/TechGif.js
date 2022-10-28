import React from 'react'
import './techGif.scss'



const TechGif = ({ onLeaveLaptop, allData }) => {


  return (
    <div className='DialogTechContainer'>
      <img
        src={allData.DialogTech}
        className='DialogTech'
        alt=''
      />
      <img src={allData.CloseTech} onClick={onLeaveLaptop} className='closeDialogTech' alt='' />
      <video
        src={allData.TechSkillsVideo}
        className='DialogTechVideo'
        autoPlay
        loop
        muted
      />
    </div>
  )
}

export default TechGif