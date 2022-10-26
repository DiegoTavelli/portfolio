import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Home from './components/Home/Home'
// import NavBar from './components/NavBar/NavBar'
import './App.scss';
import { StrictMode } from 'react';
import { BrowserView, MobileView, TabletView } from 'react-device-detect';


const App = () => {

  return (
    <div className='App' >
      <BrowserView>
        <BrowserRouter>
          {/* <NavBar /> */}
          <StrictMode>
            <Routes>
              <Route path='/' element={<Home />} />
            </Routes>
          </StrictMode>
        </BrowserRouter>
      </BrowserView>
      <MobileView>
        <div>movil</div>
      </MobileView>
      <TabletView>
        <div>TabletView</div>
      </TabletView>
    </div>
  );
}

export default App;
