import React from 'react'
import '../Home/home.scss'



const FullStackComp = ({ showHome, allData, styleFullStack, contact, project, about }) => {

  return (
    <div className='fullStackDiv'>
      <img src={allData.Full} className={styleFullStack('Full')} alt='' />
      <img src={allData.Full} className={styleFullStack('Full full2')} alt='' />
      <img src={allData.Stack} className={styleFullStack('Stack')} alt='' />
      <img src={allData.Stack} className={styleFullStack('Stack stack2')} alt='' />
      {showHome &&
        <div className='devContainer'>
          <img src={allData.Dev} className={contact ? 'Dev DevMoved' : 'Dev DevMovedBack'} alt='' />
        </div>
      }
      {!project && showHome ?
        <img src={allData.Arrow} className='arrow1' alt='' />
        : null
      }
      {!contact && showHome ?
        <img src={allData.Arrow} className='arrow2' alt='' />
        : null
      }
      {!about && showHome ?
        <img src={allData.Arrow} className='arrow3' alt='' />
        : null
      }
    </div>
  )
}

export default FullStackComp