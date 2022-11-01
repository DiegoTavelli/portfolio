import React, { useEffect, useState } from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import HomeMobile from 'components/MobileComponents/HomeMobile/HomeMobile'
import { assetsMobile } from 'components/assetsToStore/assetsToStore'


const Mobile = () => {


  // allData stored on LocalStore
  const [allData, setAllData] = useState([])
  const [fetched, setFetched] = useState(false)

  const setToLocalStorage = () => {
    if (allData.length < 2) {
      localStorage.setItem('MOBILE_ASSETS', JSON.stringify(assetsMobile));
    }
  }

  useEffect(() => {
    setToLocalStorage()
    const items = JSON.parse(localStorage.getItem('MOBILE_ASSETS'));
    setAllData(items)
    if (allData) setFetched(true)
  }, [])

  return (
    <div className='App' >
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomeMobile allData={allData} fetched={fetched} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Mobile