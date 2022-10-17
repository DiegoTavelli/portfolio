import React from 'react'
import MovingText, { MovingComponent } from 'react-moving-text'
import './movingText.scss'

const MovingTextComp = () => {

  const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]


  return (
    <div>
      {arr.map((el, index) => {
        let vari = 1000
        return (
          <div className='movingTextHard'>
            <MovingComponent
              type='fadeInFromTop'
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
              ]}
              duration={vari + ((index + 2) * 1000) + 'ms'}
              delay='0s'
              direction='reverse'
              timing={
                index === 0 || index === 1
                  ? 'linear' : index === 2
                    ? 'ease-in' : index === 3
                      ? 'ease-in-out' : null}
              iteration='1'
              fillMode='forwards'>
              Welcome!
            </MovingComponent>
          </div>

        )
      })}
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

