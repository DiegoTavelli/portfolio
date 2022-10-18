import React from 'react'
import MovingText from 'react-moving-text'
import './movingTextTech.scss'

const MovingTextTech = () => {

  return (
    <div className='movingTextTech' >
      <MovingText
        type='typewriter'
        dataText={[
          'JavaScript',
          'HTML       ',
          'C S S       ',
          'React       ',
          'Redux       ',
          'Sequelize',
          'MongoDB   '
        ]} />
    </div>

  )
}

export default MovingTextTech