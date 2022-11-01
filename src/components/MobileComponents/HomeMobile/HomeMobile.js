import React from 'react'
import './HomeMobile.scss'


const HomeMobile = ({ allData }) => {
  return (
    <div className='HomeMobileContainer'>
      <div className='mName'>
        <img src={allData.Diego} className='mDiego' alt='' />
        <img src={allData.Tavelli} className='mTavelli' alt='' />
      </div>
      <div className='mFullStackDev'>
        <img src={allData.Full} className='mFull' alt='' />
        <img src={allData.Stack} className='mStack' alt='' />
        <img src={allData.Dev} className='mDev' alt='' />
      </div>
    </div>
  )
}

export default HomeMobile