import React, { useState } from "react";
import ReactScrollWheelHandler from "react-scroll-wheel-handler";
import './scrollComponent.scss'

const ScrollComponent = () => {
  const [colorState, setColorState] = useState(
    {
      currentIndex: 0,
      colors: ["#4151DC", "#BC3A80", "#ead837c2", "#33B26D", "#1891b6"],
    }
  )


  const nextIndex = () => {
    const { colors, currentIndex } = colorState;
    if (currentIndex === colors.length - 1) {
      return setColorState({ currentIndex: 0, colors: ["#4151DC", "#BC3A80", "#ead837c2", "#33B26D", "#1891b6"] });
    }

    return setColorState({
      currentIndex: currentIndex + 1,
      colors: ["#4151DC", "#BC3A80", "#ead837c2", "#33B26D", "#1891b6"]
    });
  };

  const prevIndex = () => {
    const { colors, currentIndex } = colorState;
    if (currentIndex === 0) {
      return setColorState({
        currentIndex: colors.length - 1,
        colors: ["#4151DC", "#BC3A80", "#ead837c2", "#33B26D", "#1891b6"]
      });
    }

    return setColorState({
      currentIndex: currentIndex - 1,
      colors: ["#4151DC", "#BC3A80", "#ead837c2", "#33B26D", "#1891b6"]
    });
  };

  const { colors, currentIndex } = colorState;
  return (
    <ReactScrollWheelHandler
      className='ScrollContainer'
      upHandler={prevIndex}
      downHandler={nextIndex}
      style={{
        zIndex: 0,
        opacity: .2,
        // width: '100vw',
        // height: '100vh',
        marginBottom: '-400px',
        backgroundColor: colors[currentIndex],
        transition: "background-color .4s ease-out",
      }}
    />

  );

}

export default ScrollComponent