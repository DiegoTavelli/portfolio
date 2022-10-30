import React from 'react'
import './techGif.scss'



const TechGif = ({ showLaptop, onLeaveLaptop, allData }) => {


  return (
    <div style={{ visibility: showLaptop ? 'visible' : 'hidden' }}>
      <div className='DialogTechContainer'>
        <img
          src={allData.DialogTech}
          className={showLaptop ? 'DialogTech DialogTechFx' : 'DialogTech'}
          alt=''
        />
        <img
          src={allData.CloseTech}
          onClick={onLeaveLaptop}
          className={showLaptop ? 'closeDialogTech closeDialogTechFx' : 'closeDialogTech'}
          alt=''
        />
        <video
          src={allData.TechSkillsVideo}
          className={showLaptop ? 'DialogTechVideo DialogTechVideoFx' : 'DialogTechVideo'}
          autoPlay
          loop
          muted
        />
      </div>
    </div>
  )
}

export default TechGif