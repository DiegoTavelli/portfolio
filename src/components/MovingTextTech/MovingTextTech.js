import React from 'react'
import MovingText from 'react-moving-text'
import './movingTextTech.scss'

const MovingTextTech = () => {

  return (
    <div className='movingTextTech' >
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