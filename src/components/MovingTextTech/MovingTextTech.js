import React from 'react'
import MovingText from 'react-moving-text'
import './movingTextTech.scss'

const MovingTextTech = ({ showLaptop }) => {

  return (
    <div className={showLaptop ? 'movingTextTech movingTextTechFx' : 'movingTextNoDisplay'} >
      <MovingText
        className='MovingText'
        type='typewriter'
        dataText={[
          'JavaScript',
          'HTML       ',
          'CSS         ',
          'React       ',
          'Redux       ',
          'Sequelize',
          'MongoDB   '
        ]} />
    </div>
  )
}

export default MovingTextTech