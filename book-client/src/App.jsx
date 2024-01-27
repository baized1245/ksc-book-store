import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import MyFooter from './components/MyFooter'
// import from './App.css'

const App = () => {
  
  return (
    <div>
      <Navbar/>
      <div className='min-h-screen'>
      <Outlet/>
      </div>
      <MyFooter/>
    </div>
  )
}

export default App