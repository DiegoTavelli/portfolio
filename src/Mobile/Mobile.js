import React, { useEffect, useState } from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import HomeMobile from 'components/MobileComponents/HomeMobile/HomeMobile'

const Mobile = () => {


  return (
    <div className='App' >
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomeMobile />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Mobile