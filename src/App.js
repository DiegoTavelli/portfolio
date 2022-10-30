import React from 'react'
import './App.scss';
import Desktop from './Desktop/Desktop';
import { CustomView } from 'react-device-detect';




const App = () => {

  return (
    // <CustomView condition={window.innerWidth > 1232} >
    <Desktop />
    // </CustomView>
  );
}

export default App;
