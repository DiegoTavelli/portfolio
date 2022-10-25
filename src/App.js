import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Home from './components/Home/Home'
// import NavBar from './components/NavBar/NavBar'
import './App.scss';
import { StrictMode } from 'react';
import { isMobile } from 'react-device-detect';
import { isTablet } from 'react-device-detect';

const App = () => {
  if (isMobile) {
    return <div>MOVIL</div>
  }
  if (isTablet) {
    return <div>TABLET</div>
  }
  return (
    <div className='App' >
      <BrowserRouter>
        {/* <NavBar /> */}
        <StrictMode>
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </StrictMode>
      </BrowserRouter>
    </div>
  );
}

export default App;
