import React from 'react'
import './App.scss';
import Desktop from './Desktop/Desktop';
import Mobile from 'Mobile/Mobile';
import { CustomView } from 'react-device-detect';



const App = () => {

  return (
    <>
      <CustomView condition={window.innerWidth > 1024} >
        <Desktop />
      </CustomView>
      <CustomView condition={window.innerWidth < 1024} >
        <Mobile />
      </CustomView>
    </>
  );
}

export default App;
