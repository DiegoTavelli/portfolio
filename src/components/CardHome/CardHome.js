import React from 'react'
import Card from 'react-bootstrap/Card';
import Tilt from 'react-parallax-tilt';


const CardHome = ({ styleBackVid, allData }) => {

  return (
    <div className='cardHomeContainer'>
      <Tilt
        tiltMaxAngleX={4}
        tiltMaxAngleY={4}
      >
        <Tilt
          tiltMaxAngleX={6}
          tiltMaxAngleY={6}
        >
          <Card.Img className='cardHome' src={allData.CardHomeImage} alt='' />
        </Tilt>
        <Tilt
          glareEnable={true}
          tiltMaxAngleX={6}
          tiltMaxAngleY={2}
        >
          <div className='DiegoContainer'>
            <img src={allData.Diego} className='Diego' alt='' />
          </div>
        </Tilt>
        <Tilt
          glareEnable={true}
          tiltMaxAngleX={6}
          tiltMaxAngleY={2}
        >
          <div className='TavelliContainer'>
            <img src={allData.Tavelli} className='Tavelli' alt='' />
          </div>
        </Tilt>
        <Tilt
          tiltMaxAngleX={6}
          tiltMaxAngleY={2}
        >
          <div className='TreeColorContainer'>
            <img src={allData.TreeColor} className={styleBackVid('treeColor')} alt='' />
          </div>
        </Tilt>
      </Tilt>
    </div>
  )
}

export default CardHome