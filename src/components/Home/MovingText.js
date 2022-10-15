import React from 'react'
import MovingText from 'react-moving-text'
import './movingText.scss'
const MovingTextComp = () => {

  return (
    <div className='movingTextContainer' >
      <MovingText
        type='typewriter'
        dataText={[
          'JavaScript',
          'ReactJs',
          'React Native',
          'Node',
          'Express',
          'MongoDB',
          'Sequelize',
          'PostgreSQL',
          'Figma'
        ]} />
    </div>
  )
}

export default MovingTextComp