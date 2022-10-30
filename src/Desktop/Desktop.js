import React, { useEffect, useState } from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'

import { assetsToStore } from '../components/assetsToStore/assetsToStore'
import Home from '../components/Home/Home'


const Desktop = () => {

  // allData stored on LocalStore
  const [allData, setAllData] = useState([])
  const [fetched, setFetched] = useState(false)

  const setToLocalStorage = () => {
    if (allData.length < 2) {
      localStorage.setItem('HOME_ASSETS', JSON.stringify(assetsToStore));
    }
  }

  useEffect(() => {
    setToLocalStorage()
    const items = JSON.parse(localStorage.getItem('HOME_ASSETS'));
    setAllData(items)
    if (allData) setFetched(true)
  }, [])

  return (
    <div className='App' >
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home fetched={fetched} allData={allData} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  )

}

export default Desktop