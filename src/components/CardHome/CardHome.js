import React from 'react'
import Card from 'react-bootstrap/Card';
import CardHomeImage from '../../assets/figma/cardHome3d5.png'
import Tilt from 'react-parallax-tilt';
import Diego from '../../assets/figma/Diego3.png'
import Tavelli from '../../assets/figma/Tavelli3.png'
import TreeColor from '../../assets/figma/tree2.png'



const CardHome = ({ styleBackVid }) => {

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
          <Card.Img className='cardHome' src={CardHomeImage} alt='' />
        </Tilt>
        <Tilt
          glareEnable={true}
          tiltMaxAngleX={6}
          tiltMaxAngleY={2}
        >
          <div className='DiegoContainer'>
            <img src={Diego} className='Diego' alt='' />
          </div>
        </Tilt>
        <Tilt
          glareEnable={true}
          tiltMaxAngleX={6}
          tiltMaxAngleY={2}
        >
          <div className='TavelliContainer'>
            <img src={Tavelli} className='Tavelli' alt='' />
          </div>
        </Tilt>
        <Tilt
          tiltMaxAngleX={6}
          tiltMaxAngleY={2}
        >
          <div className='TreeColorContainer'>
            <img src={TreeColor} className={styleBackVid('treeColor')} alt='' />
          </div>
        </Tilt>
      </Tilt>
    </div>
  )
}

export default CardHome