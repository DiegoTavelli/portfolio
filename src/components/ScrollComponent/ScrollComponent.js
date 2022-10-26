import React from 'react';
import ReactScrollWheelHandler from 'react-scroll-wheel-handler';
import './scrollComponent.scss'



const ScrollComponent = ({ colorState, setColorState }) => {

  const colorHash = (
    ['#4150dc21', '#df871a7e ', '#33B26D', ' #d72c4099', '#1891b6a3']
  )
  // const [colorState, setColorState] = useState({ currentIndex: 0 })


  const nextIndex = () => {
    const { currentIndex } = colorState;
    if (currentIndex === colorHash.length - 1) {
      return setColorState({ currentIndex: 0 });
    }

    return setColorState({
      currentIndex: currentIndex + 1
    });
  };

  const prevIndex = () => {
    const { currentIndex } = colorState;
    if (currentIndex === 0) {
      return setColorState({
        currentIndex: colorHash.length - 1
      });
    }

    return setColorState({
      currentIndex: currentIndex - 1
    });
  };

  const { currentIndex } = colorState;
  return (
    <ReactScrollWheelHandler
      upHandler={prevIndex}
      downHandler={nextIndex}
      style={{
        display: 'flex',
        position: 'fixed',
        left: '0px',
        zIndex: 0,
        opacity: .25,
        width: '100vw',
        height: '110vh',
        backgroundColor: colorHash[currentIndex],
        transition: 'background-color .3s ease-out',
      }}
    />

  );

}

export default ScrollComponent