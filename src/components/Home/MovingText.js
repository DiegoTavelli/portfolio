import React from 'react'
import MovingText from 'react-moving-text'
import './movingText.scss'

const MovingTextComp = () => {

  return (
    <div>
      {/* <div className='soft'>
        <p>Soft Skills</p>
      </div> */}
      {/* <div className='movingTextHard' >
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
      </div> */}
      {/* <div className='hard' >
        <p>Hard Skills</p>
      </div> */}
      <div className='movingTextSoft' >
        <MovingText
          type='typewriter'
          dataText={[
            ' Innovation',
            'Communication',
            'Creativity',
            'Adaptability',
            'Collaboration',
            'Persuasion',
            'Active listening',
            'Work ethic',
            'Teamwork'
          ]} />
      </div>
    </div>
  )
}

export default MovingTextComp