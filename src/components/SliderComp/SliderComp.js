import './sliderComp.scss'

import techIcon1 from '../../assets/figma/frames/tech1.png'
import techIcon2 from '../../assets/figma/frames/tech2.png'
import techIcon3 from '../../assets/figma/frames/tech3.png'
import techIcon4 from '../../assets/figma/frames/tech4.png'
import techIcon5 from '../../assets/figma/frames/tech5.png'
import techIcon6 from '../../assets/figma/frames/tech6.png'
import techIcon7 from '../../assets/figma/frames/tech7.png'


const SliderComp = () => {

  const times = [techIcon1, techIcon2, techIcon3, techIcon4, techIcon5, techIcon6, techIcon7]
  const rendFunc = () => {
    times.map((el) => {
      return (
        <div>
          <img src={el} className='sliderImg' alt='' />
        </div>
      )
    })
  }
  return <rendFunc />
}

export default SliderComp;