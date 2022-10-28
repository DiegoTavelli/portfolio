import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Home from './components/Home/Home'
import './App.scss';
// import { BrowserView, MobileView, TabletView } from 'react-device-detect';
// import { Suspense } from "react";
// import { lazyWithPreload } from "react-lazy-with-preload";
import { assetsToStore } from './components/assetsToStore/assetsToStore'
// const Home = lazyWithPreload(() => import('./components/Home/Home'))

const App = () => {

  return (
    <div className='App' >
      {/* <Suspense fallback={<div>hola</div>}> */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home assetsToStore={assetsToStore} />} />
        </Routes>
      </BrowserRouter>
      {/* </Suspense> */}
    </div>
  );
}

export default App;
